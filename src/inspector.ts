import html from 'src/inspector.html'
import css from 'src/inspector.css'
import documentCss from 'src/document.css'

if (!customElements.get('x-inspector')) {
  const docEvent = document.addEventListener
  const docEventRm = document.removeEventListener

  class Inspector extends HTMLElement {
    private docStyle: HTMLElement | null
    private header: HTMLElement | null
    private close: HTMLButtonElement | null

    // Drag
    private offsetX: number = 0
    private offsetY: number = 0
    private isDragging: boolean = false

    // Picker
    private pickerActive: boolean = false
    private pickerBtn: HTMLButtonElement | null
    private pickerTargetElement: HTMLElement | null = null
    private pickerTagReadout: HTMLElement | null
    private pickerHoverClass = 'inspector-hover'
    private pickerDebounce: ReturnType<typeof setTimeout>

    // Values
    private fontFamily: HTMLElement | null
    private fontSize: HTMLElement | null
    private fontWeight: HTMLElement | null
    private lineHeight: HTMLElement | null
    private letterSpacing: HTMLElement | null
    private fontFeatureSettings: HTMLElement | null

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    injectDocStyles() {
      this.docStyle = document.createElement('style')
      this.docStyle.textContent = documentCss
      document.head.appendChild(this.docStyle)
    }

    injectUI() {
      this.shadowRoot.innerHTML = `<style>${css}</style>${html}`
    }

    getElementRefs() {
      const q = (selector: string): HTMLElement | HTMLButtonElement =>
        this.shadowRoot!.querySelector(selector)

      this.header = q('#header')
      this.pickerBtn = q('#pickerBtn') as HTMLButtonElement
      this.pickerTagReadout = q('#tag')
      this.fontFamily = q('#fontFamily')
      this.fontSize = q('#fontSize')
      this.fontWeight = q('#fontWeight')
      this.lineHeight = q('#lineHeight')
      this.letterSpacing = q('#letterSpacing')
      this.fontFeatureSettings = q('#fontFeatureSettings')
      this.close = q('#close') as HTMLButtonElement
    }

    initBaseInteractions() {
      this.header.addEventListener('mousedown', this.startDrag)
      this.pickerBtn.addEventListener('click', () => {
        this.pickerActive ? this.disablePicker() : this.enablePicker()
      })
      this.close.addEventListener('click', () => this.remove())
    }

    connectedCallback() {
      this.injectDocStyles()
      this.injectUI()
      this.getElementRefs()
      this.initBaseInteractions()
      this.enablePicker()
    }

    disconnectedCallback() {
      this.disablePicker()
      this.docStyle.remove()
    }

    /*
    Handlers
    Use arrow functions so 'this' always references the Inspector class
    */
    noDefault = (e: Event) => {
      e.preventDefault()
    }

    startDrag = (e: MouseEvent) => {
      this.isDragging = true
      this.offsetX = e.clientX - this.offsetLeft
      this.offsetY = e.clientY - this.offsetTop

      document.body.classList.add('inspector-noselect')
      docEvent('mousemove', this.drag)
      docEvent('mouseup', this.endDrag)
      docEvent('selectstart', this.noDefault)
    }

    drag = (e: MouseEvent) => {
      e.preventDefault()
      if (this.isDragging) {
        this.style.left = e.clientX - this.offsetX + 'px'
        this.style.top = e.clientY - this.offsetY + 'px'
      }
    }

    endDrag = () => {
      this.isDragging = false
      document.body.classList.remove('inspector-noselect')
      docEventRm('mousemove', this.drag)
      docEventRm('mouseup', this.endDrag)
      docEventRm('selectstart', this.noDefault)
    }

    enablePicker = () => {
      this.pickerActive = true
      this.pickerBtn.classList.add('on')
      docEvent('mouseover', this.mouseOverTarget)
      docEvent('mouseout', this.mouseOutTarget)
      docEvent('keydown', this.pickerActiveKeyPress)
      docEvent('click', this.pickerActiveClick, true)
    }

    disablePicker = () => {
      this.pickerActive = false
      this.pickerBtn.classList.remove('on')
      this.pickerTargetElement.classList.remove(this.pickerHoverClass)
      docEventRm('mouseover', this.mouseOverTarget)
      docEventRm('mouseout', this.mouseOutTarget)
      docEventRm('keydown', this.pickerActiveKeyPress)
      docEventRm('click', this.pickerActiveClick, true)
    }

    mouseOverTarget = (e: MouseEvent) => {
      const t = e.target as HTMLElement

      if (!this.isSelf(t) && !t.classList.contains(this.pickerHoverClass)) {
        this.pickerDebounce = setTimeout(() => {
          t.classList.add(this.pickerHoverClass)
          this.update(t)
          clearTimeout(this.pickerDebounce)
        }, 75)
      }
    }

    mouseOutTarget = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      clearTimeout(this.pickerDebounce)

      if (t.classList.contains(this.pickerHoverClass)) {
        t.classList.remove(this.pickerHoverClass)
      }
    }

    pickerActiveKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        this.disablePicker()
      }
    }

    pickerActiveClick = (e: MouseEvent) => {
      if (!this.isSelf(e.target as HTMLElement)) {
        e.preventDefault()
        e.stopPropagation()
        this.disablePicker()
      }
    }

    isSelf = (t: HTMLElement) => {
      return t === this || this.shadowRoot.contains(t)
    }

    update = (t: HTMLElement) => {
      this.pickerTargetElement = t
      this.pickerTagReadout.innerText = `<${t.tagName.toLowerCase()}>`

      const {
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        fontFeatureSettings
      } = getComputedStyle(this.pickerTargetElement)

      this.fontFamily.innerText = fontFamily
      this.fontSize.innerText = fontSize
      this.fontWeight.innerText = fontWeight !== 'normal' ? fontWeight : ''
      this.lineHeight.innerText = lineHeight !== 'normal' ? lineHeight : ''
      this.letterSpacing.innerText =
        letterSpacing !== 'normal' ? letterSpacing : ''

      this.fontFeatureSettings.innerHTML = ''

      fontFeatureSettings.split(', ').forEach(feature => {
        const featureNode = document.createElement('div')
        featureNode.innerText =
          feature === 'normal' || feature.endsWith('0')
            ? ''
            : feature.replace(/"/g, '')
        this.fontFeatureSettings.appendChild(featureNode)
      })
    }
  }

  customElements.define('x-inspector', Inspector)
}

const instance = document.createElement('x-inspector')
document.body.appendChild(instance)
