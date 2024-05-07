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
    private pickerBtn: HTMLButtonElement | null

    // Drag
    private offsetX: number = 0
    private offsetY: number = 0
    private isDragging: boolean = false

    // Picker
    private pickerActive: boolean = false
    private targetElement: HTMLElement | null = null
    private pickerHoverClass = 'inspector-hover'

    // Panel values
    private fontFamily: HTMLElement | null
    private fontSize: HTMLElement | null
    private fontWeight: HTMLElement | null
    private lineHeight: HTMLElement | null
    private letterSpacing: HTMLElement | null
    private textTransform: HTMLElement | null

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
      // We have to inject a couple of styles to the parent document
      this.docStyle = document.createElement('style')
      this.docStyle.textContent = documentCss
      document.head.appendChild(this.docStyle)

      // Create the UI
      this.shadowRoot.innerHTML = `<style>${css}</style>${html}`

      // Refs to interactive elements
      this.header = this.shadowRoot.querySelector('#header')
      this.pickerBtn = this.shadowRoot.querySelector('#pickerBtn')

      this.fontFamily = this.shadowRoot.querySelector('#fontFamily')
      this.fontSize = this.shadowRoot.querySelector('#fontSize')
      this.fontWeight = this.shadowRoot.querySelector('#fontWeight')
      this.lineHeight = this.shadowRoot.querySelector('#lineHeight')
      this.letterSpacing = this.shadowRoot.querySelector('#letterSpacing')
      this.textTransform = this.shadowRoot.querySelector('#textTransform')

      this.close = this.shadowRoot.querySelector('#close')

      // Interaction
      this.header.addEventListener('mousedown', this.startDrag)
      this.pickerBtn.addEventListener('click', () => {
        this.pickerActive ? this.disablePicker() : this.enablePicker()
      })

      this.close.addEventListener('click', () => this.remove())

      this.enablePicker()
    }

    disconnectedCallback() {
      this.disablePicker()
      this.docStyle.remove()
    }

    /*
    Handlers
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
      this.targetElement.classList.remove(this.pickerHoverClass)
      docEventRm('mouseover', this.mouseOverTarget)
      docEventRm('mouseout', this.mouseOutTarget)
      docEventRm('keydown', this.pickerActiveKeyPress)
      docEventRm('click', this.pickerActiveClick, true)
    }

    mouseOverTarget = (e: MouseEvent) => {
      const t = e.target as HTMLElement

      if (!this.isSelf(t) && !t.classList.contains(this.pickerHoverClass)) {
        t.classList.add(this.pickerHoverClass)
        this.update(t)
      }
    }

    mouseOutTarget = (e: MouseEvent) => {
      const t = e.target as HTMLElement
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
      this.targetElement = t
      const computedStyle = getComputedStyle(this.targetElement)

      this.fontFamily.innerText = computedStyle.fontFamily
      this.fontSize.innerText = computedStyle.fontSize
      this.fontWeight.innerText = computedStyle.fontWeight
      this.lineHeight.innerText = computedStyle.lineHeight
      this.letterSpacing.innerText = computedStyle.letterSpacing
      this.textTransform.innerText = computedStyle.textTransform
    }
  }

  customElements.define('x-inspector', Inspector)
}

const instance = document.createElement('x-inspector')
document.body.appendChild(instance)
