import css from 'src/inspector.css'

interface ElementArgs {
  tag: string
  id?: string
  className?: string
  text?: string
  html?: string
}

function node({ tag, id, className, text, html }: ElementArgs) {
  const element = document.createElement(tag)

  if (id) element.id = id
  if (className) element.classList.add(className)
  if (text) element.innerText = text
  if (html) element.innerHTML = html

  return element
}

function sectionFactory(title: string) {
  const section = node({ tag: 'div', className: 'i_pSection' })
  const key = node({ tag: 'div', className: 'i_pDatumK', text: title })
  const value = node({
    tag: 'div',
    className: 'i_pDatumV',
    text: ' '
  })
  section.append(key, value)

  return { section, key, value }
}

function Inspector() {
  const state = {
    targetElement: undefined,
    pickerActive: false
  }
  const pickerHoverClass = 'i_pickerHover'

  /*
  Root
  */
  const styles = node({ tag: 'style', id: 'i_style', html: css })
  const modal = node({ tag: 'div', id: 'i_modal' })

  /*
  Header
  */
  const header = node({ tag: 'header', id: 'i_header' })
  header.innerText = `Type Inspector`
  const headerClose = node({ tag: 'div', id: 'i_close', className: 'i_button' })
  headerClose.innerText = '×'
  headerClose.onclick = destroy

  const pickerToggleButton = node({
    tag: 'button',
    id: 'i_pickerToggleButton',
    className: 'i_button',
    text: 'T'
  })

  pickerToggleButton.onclick = function () {
    if (state.pickerActive) {
      disablePicker()
    } else {
      enablePicker()
    }
  }

  header.prepend(pickerToggleButton)
  header.append(headerClose)

  /*
  Panels
  */
  const panelContainer = node({ tag: 'div', id: 'i_panel' })

  const fontFamily = sectionFactory('Font Family')
  const fontSize = sectionFactory('Font Size')
  const lineHeight = sectionFactory('Line Height')
  const letterSpacing = sectionFactory('Letter Spacing')

  const fontStylePanels = [fontFamily, fontSize, lineHeight, letterSpacing]

  for (const style in fontStylePanels) {
    panelContainer.appendChild(fontStylePanels[style].section)
  }

  /*
  Drag
  */
  let offsetX: number = 0
  let offsetY: number = 0
  let isDragging: boolean = false

  function noDefault(e: any) {
    e.preventDefault()
  }

  function startDrag(event: MouseEvent) {
    isDragging = true
    offsetX = event.clientX - modal.offsetLeft
    offsetY = event.clientY - modal.offsetTop

    document.addEventListener('mousemove', drag)
    header.addEventListener('mouseup', endDrag)
    document.addEventListener('selectstart', noDefault)
  }

  function drag(event: MouseEvent) {
    event.preventDefault()
    if (isDragging) {
      modal.style.left = event.clientX - offsetX + 'px'
      modal.style.top = event.clientY - offsetY + 'px'
    }
  }

  function endDrag() {
    localStorage.setItem(
      'i_position',
      JSON.stringify({
        x: String(modal.offsetLeft),
        y: String(modal.offsetTop)
      })
    )
    isDragging = false
    document.removeEventListener('mousemove', drag)
    document.removeEventListener('selectstart', noDefault)
  }

  /*
  Handlers
  */

  function enablePicker() {
    state.pickerActive = true
    pickerToggleButton.classList.add('isActive')
    document.addEventListener('mouseover', mouseOverTarget)
    document.addEventListener('mouseout', mouseOutTarget)
    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('click', handleActiveClick, true)
  }

  function disablePicker() {
    state.pickerActive = false
    state.targetElement.classList.remove(pickerHoverClass)
    pickerToggleButton.classList.remove('isActive')
    document.removeEventListener('mouseover', mouseOverTarget)
    document.removeEventListener('mouseout', mouseOutTarget)
    document.removeEventListener('keydown', handleKeyPress)
    document.removeEventListener('click', handleActiveClick, true)
  }

  function mouseOverTarget(event: MouseEvent) {
    const t = event.target as HTMLElement

    if (!isSelf(t) && !t.classList.contains(pickerHoverClass)) {
      t.classList.add(pickerHoverClass)
      update(t)
    }
  }

  function mouseOutTarget(event: MouseEvent) {
    const t = event.target as HTMLElement
    if (t.classList.contains(pickerHoverClass)) {
      t.classList.remove(pickerHoverClass)
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'Enter') {
      disablePicker()
    }
  }

  function handleActiveClick(event: MouseEvent) {
    if (!isSelf(event.target as HTMLElement)) {
      event.preventDefault()
      event.stopPropagation()
      disablePicker()
    }
  }

  function isSelf(target: HTMLElement) {
    return modal.contains(target)
  }

  function update(target: HTMLElement) {
    state.targetElement = target
    const computedStyle = getComputedStyle(state.targetElement)

    fontFamily.value.innerText = computedStyle.fontFamily
    fontSize.value.innerText = computedStyle.fontSize
    lineHeight.value.innerText = computedStyle.lineHeight
    letterSpacing.value.innerText = computedStyle.letterSpacing
  }

  /*
  Construct UI
  */
  modal.append(header, panelContainer)

  this.mount = function () {
    const savedPosition = JSON.parse(localStorage.getItem('i_position'))
    modal.style.left = savedPosition?.x || '32'
    modal.style.top = savedPosition?.y || '32'

    document.head.append(styles)
    document.body.append(modal)
    header.addEventListener('mousedown', startDrag)

    enablePicker()
  }

  function destroy() {
    modal.remove()
    styles.remove()
    header.removeEventListener('mousedown', startDrag)
  }
}

const inspector = new Inspector()
inspector.mount()
