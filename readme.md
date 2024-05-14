#Typelet

Inspect computed font styles on any webpage, <a href="javascript: (()%3D%3E%7Bvar%20c%3D%60%3Cdiv%20class%3D%22dialog%22%3E%0A%20%20%3Cheader%20id%3D%22header%22%3E%0A%20%20%20%20Typelet%0A%20%20%20%20%3Cbutton%20id%3D%22close%22%20class%3D%22btn%22%3E%0A%20%20%20%20%20%20%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20stroke%3D%22currentColor%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M4%204L12%2012%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%204L4%2012%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%3C%2Fheader%3E%0A%20%20%3Csection%20class%3D%22picker%22%3E%0A%20%20%20%20%3Cbutton%20id%3D%22pickerBtn%22%20class%3D%22btn%22%3E%0A%20%20%20%20%20%20%3Csvg%0A%20%20%20%20%20%20%20%20width%3D%2216%22%0A%20%20%20%20%20%20%20%20height%3D%2216%22%0A%20%20%20%20%20%20%20%20viewBox%3D%220%200%2016%2016%22%0A%20%20%20%20%20%20%20%20fill%3D%22none%22%0A%20%20%20%20%20%20%20%20stroke%3D%22currentColor%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%225%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%228%22%20y1%3D%221.5%22%20x2%3D%228%22%20y2%3D%225.5%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%228%22%20y1%3D%2210.5%22%20x2%3D%228%22%20y2%3D%2214.5%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2214.5%22%20y1%3D%228%22%20x2%3D%2210.5%22%20y2%3D%228%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cline%20x1%3D%225.5%22%20y1%3D%228%22%20x2%3D%221.5%22%20y2%3D%228%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%20%3Cdiv%20id%3D%22tag%22%20class%3D%22value%22%3E%3C%2Fdiv%3E%0A%20%20%3C%2Fsection%3E%0A%20%20%3Csection%20class%3D%22palette%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22datum%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22key%22%3EFont%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22value%22%20id%3D%22fontFamily%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22datum%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22key%22%3EFont%20Size%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22value%22%20id%3D%22fontSize%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22datum%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22key%22%3ELine%20Height%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22value%22%20id%3D%22lineHeight%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22datum%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22key%22%3EFont%20Weight%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22value%22%20id%3D%22fontWeight%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22datum%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22key%22%3ELetter%20Spacing%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22value%22%20id%3D%22letterSpacing%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22datum%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22key%22%3EFeature%20Settings%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22values%22%20id%3D%22fontFeatureSettings%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fsection%3E%0A%3C%2Fdiv%3E%0A%60%3Bvar%20d%3D%22%40keyframes%20fadeInUp%7B0%25%7Bopacity%3A0%3Btransform%3AtranslateY(8px)%7Dto%7Bopacity%3A1%3Btransform%3AtranslateY(0)%7D%7D\*%2C%3A%3Aafter%2C%3A%3Abefore%7Bbox-sizing%3Aborder-box%7D%3Ahost%7B--fg%3A%23222%3B--fg2%3A%23737272%3B--bg%3A%23fafafa%3B--bg2%3A%23eaeaea%3B--hr%3A%23e5e5e5%3B--on%3A%23fe5e19%3B--br%3A4px%3Bposition%3Afixed%3Bz-index%3A9999%3Bdisplay%3Aflex%3Bflex-direction%3Acolumn%3Btop%3A32px%3Bleft%3A32px%3Bwidth%3A272px%3Bfont-size%3A12px%3Bline-height%3A16px%3Bfont-family%3Aui-system%2Csans-serif%3Bcolor%3Avar(--fg)%3Bbackground-color%3Avar(--bg)%3Bborder%3A1pt%20solid%20var(--hr)%3Bborder-radius%3A8px%3Bbox-shadow%3A0%204px%2016px%20rgba(0%2C0%2C0%2C.15)%3B-webkit-font-smoothing%3Aantialiased%3Bopacity%3A0%3Banimation%3AfadeInUp%20200ms%20ease-out%20forwards%7D%40media%20(prefers-color-scheme%3Adark)%7B%3Ahost%7B--fg%3A%23eeeeee%3B--fg2%3A%23b4b4b4%3B--bg%3A%231c1c1c%3B--bg2%3A%232e2e2e%3B--hr%3A%232e2e2e%7D%7D.btn%2Cheader%7Bdisplay%3Aflex%3Bjustify-content%3Aspace-between%3Balign-items%3Acenter%3Bpadding%3A8px%208px%208px%2016px%3Bfont-weight%3A600%3Bcolor%3Avar(--fg)%3Bbackground-color%3Atransparent%3Bcursor%3Amove%7D.btn%7Bappearance%3Anone%3Bjustify-content%3Acenter%3Bheight%3A24px%3Bwidth%3A24px%3Bpadding%3A2px%3Bcolor%3Avar(--fg2)%3Bborder%3A0%3Bborder-radius%3Avar(--br)%3Bcursor%3Apointer%3Bfont-family%3Aui-monospace%2Cmonospace%7D.btn%3Ahover%7Bcolor%3Avar(--fg)%3Bbackground-color%3Avar(--bg2)%7D.btn.on%7Bcolor%3Avar(--on)%7D.palette%2C.picker%7Bborder-top%3A1px%20solid%20var(--hr)%7D.picker%7Bdisplay%3Aflex%3Balign-items%3Acenter%3Bpadding%3A8px%200%208px%2012px%3Bgap%3A8px%7D.palette%7Bpadding%3A10px%200%7D.datum%7Bdisplay%3Aflex%3Bflex-wrap%3Anowrap%3Bjustify-content%3Aspace-between%3Bgap%3A16px%3Bpadding%3A2px%2012px%202px%2014px%3Bmin-height%3A28px%7D.key%7Bpadding-left%3A2px%3Bcolor%3Avar(--fg2)%3Bwhite-space%3Anowrap%3Bline-height%3A24px%7D.values%7Bdisplay%3Aflex%3Bflex-wrap%3Awrap%3Bjustify-content%3Aflex-end%3Bgap%3A4px%7D.value%2C.values%3Ediv%7Bmax-width%3A100%25%3Bpadding%3A2px%206px%3Bcolor%3Avar(--fg)%3Bbackground-color%3Avar(--bg2)%3Bfont-family%3Aui-monospace%2Cmonospace%3Bfont-weight%3A600%3Bline-height%3A20px%3Bwhite-space%3Anowrap%3Bscrollbar-width%3Anone%3B-ms-overflow-style%3Anone%3Boverflow%3Aauto%3Btext-align%3Aright%3Bborder-radius%3Avar(--br)%3Balign-self%3Acenter%7D.value%3A%3A-webkit-scrollbar%7Bdisplay%3Anone%7D%22%3Bvar%20p%3D%22.inspector-noselect%7Buser-select%3Anone%3B-webkit-user-select%3Anone%3B-moz-user-select%3Anone%3B-ms-user-select%3Anone%7D.inspector-hover%7Bbackground-color%3Ahsla(0%2C0%25%2C50%25%2C25%25)%3Bborder-radius%3A4px%7D%22%3Bif(!customElements.get(%22x-typelet%22))%7Blet%20i%3Ddocument.addEventListener%2Cs%3Ddocument.removeEventListener%3Bclass%20h%20extends%20HTMLElement%7Bconstructor()%7Bsuper()%3Bthis.offsetX%3D0%3Bthis.offsetY%3D0%3Bthis.isDragging%3D!1%3Bthis.pickerActive%3D!1%3Bthis.pickerTargetElement%3Dnull%3Bthis.pickerHoverClass%3D%22inspector-hover%22%3Bthis.noDefault%3De%3D%3E%7Be.preventDefault()%7D%3Bthis.startDrag%3De%3D%3E%7Bthis.isDragging%3D!0%2Cthis.offsetX%3De.clientX-this.offsetLeft%2Cthis.offsetY%3De.clientY-this.offsetTop%2Cdocument.body.classList.add(%22inspector-noselect%22)%2Ci(%22mousemove%22%2Cthis.drag)%2Ci(%22mouseup%22%2Cthis.endDrag)%2Ci(%22selectstart%22%2Cthis.noDefault)%7D%3Bthis.drag%3De%3D%3E%7Be.preventDefault()%2Cthis.isDragging%26%26(this.style.left%3De.clientX-this.offsetX%2B%22px%22%2Cthis.style.top%3De.clientY-this.offsetY%2B%22px%22)%7D%3Bthis.endDrag%3D()%3D%3E%7Bthis.isDragging%3D!1%2Cdocument.body.classList.remove(%22inspector-noselect%22)%2Cs(%22mousemove%22%2Cthis.drag)%2Cs(%22mouseup%22%2Cthis.endDrag)%2Cs(%22selectstart%22%2Cthis.noDefault)%7D%3Bthis.enablePicker%3D()%3D%3E%7Bthis.pickerActive%3D!0%2Cthis.pickerBtn.classList.add(%22on%22)%2Ci(%22mouseover%22%2Cthis.mouseOverTarget)%2Ci(%22mouseout%22%2Cthis.mouseOutTarget)%2Ci(%22keydown%22%2Cthis.pickerActiveKeyPress)%2Ci(%22click%22%2Cthis.pickerActiveClick%2C!0)%7D%3Bthis.disablePicker%3D()%3D%3E%7Bthis.pickerActive%3D!1%2Cthis.pickerBtn.classList.remove(%22on%22)%2Cthis.pickerTargetElement.classList.remove(this.pickerHoverClass)%2Cs(%22mouseover%22%2Cthis.mouseOverTarget)%2Cs(%22mouseout%22%2Cthis.mouseOutTarget)%2Cs(%22keydown%22%2Cthis.pickerActiveKeyPress)%2Cs(%22click%22%2Cthis.pickerActiveClick%2C!0)%7D%3Bthis.mouseOverTarget%3De%3D%3E%7Blet%20t%3De.target%3B!this.isSelf(t)%26%26!t.classList.contains(this.pickerHoverClass)%26%26(this.pickerDebounce%3DsetTimeout(()%3D%3E%7Bt.classList.add(this.pickerHoverClass)%2Cthis.update(t)%2CclearTimeout(this.pickerDebounce)%7D%2C75))%7D%3Bthis.mouseOutTarget%3De%3D%3E%7Blet%20t%3De.target%3BclearTimeout(this.pickerDebounce)%2Ct.classList.contains(this.pickerHoverClass)%26%26t.classList.remove(this.pickerHoverClass)%7D%3Bthis.pickerActiveKeyPress%3De%3D%3E%7B(e.key%3D%3D%3D%22Escape%22%7C%7Ce.key%3D%3D%3D%22Enter%22)%26%26this.disablePicker()%7D%3Bthis.pickerActiveClick%3De%3D%3E%7Bthis.isSelf(e.target)%7C%7C(e.preventDefault()%2Ce.stopPropagation()%2Cthis.disablePicker())%7D%3Bthis.isSelf%3De%3D%3Ee%3D%3D%3Dthis%7C%7Cthis.shadowRoot.contains(e)%3Bthis.update%3De%3D%3E%7Bthis.pickerTargetElement%3De%2Cthis.pickerTagReadout.innerText%3D%60%3C%24%7Be.tagName.toLowerCase()%7D%3E%60%3Blet%7BfontFamily%3At%2CfontSize%3Au%2CfontWeight%3Ao%2ClineHeight%3Aa%2CletterSpacing%3Ar%2CfontFeatureSettings%3Av%7D%3DgetComputedStyle(this.pickerTargetElement)%3Bthis.fontFamily.innerText%3Dt%2Cthis.fontSize.innerText%3Du%2Cthis.fontWeight.innerText%3Do!%3D%3D%22normal%22%3Fo%3A%22%22%2Cthis.lineHeight.innerText%3Da!%3D%3D%22normal%22%3Fa%3A%22%22%2Cthis.letterSpacing.innerText%3Dr!%3D%3D%22normal%22%3Fr%3A%22%22%2Cthis.fontFeatureSettings.innerHTML%3D%22%22%2Cv.split(%22%2C%20%22).forEach(n%3D%3E%7Blet%20l%3Ddocument.createElement(%22div%22)%3Bl.innerText%3Dn%3D%3D%3D%22normal%22%7C%7Cn.endsWith(%220%22)%3F%22%22%3An.replace(%2F%22%2Fg%2C%22%22)%2Cthis.fontFeatureSettings.appendChild(l)%7D)%7D%3Bthis.attachShadow(%7Bmode%3A%22open%22%7D)%7DinjectDocStyles()%7Bthis.docStyle%3Ddocument.createElement(%22style%22)%2Cthis.docStyle.textContent%3Dp%2Cdocument.head.appendChild(this.docStyle)%7DinjectUI()%7Bthis.shadowRoot.innerHTML%3D%60%3Cstyle%3E%24%7Bd%7D%3C%2Fstyle%3E%24%7Bc%7D%60%7DgetElementRefs()%7Blet%20e%3Dt%3D%3Ethis.shadowRoot.querySelector(t)%3Bthis.header%3De(%22%23header%22)%2Cthis.pickerBtn%3De(%22%23pickerBtn%22)%2Cthis.pickerTagReadout%3De(%22%23tag%22)%2Cthis.fontFamily%3De(%22%23fontFamily%22)%2Cthis.fontSize%3De(%22%23fontSize%22)%2Cthis.fontWeight%3De(%22%23fontWeight%22)%2Cthis.lineHeight%3De(%22%23lineHeight%22)%2Cthis.letterSpacing%3De(%22%23letterSpacing%22)%2Cthis.fontFeatureSettings%3De(%22%23fontFeatureSettings%22)%2Cthis.close%3De(%22%23close%22)%7DinitBaseInteractions()%7Bthis.header.addEventListener(%22mousedown%22%2Cthis.startDrag)%2Cthis.pickerBtn.addEventListener(%22click%22%2C()%3D%3E%7Bthis.pickerActive%3Fthis.disablePicker()%3Athis.enablePicker()%7D)%2Cthis.close.addEventListener(%22click%22%2C()%3D%3Ethis.remove())%7DconnectedCallback()%7Bthis.injectDocStyles()%2Cthis.injectUI()%2Cthis.getElementRefs()%2Cthis.initBaseInteractions()%2Cthis.enablePicker()%7DdisconnectedCallback()%7Bthis.disablePicker()%2Cthis.docStyle.remove()%7D%7DcustomElements.define(%22x-typelet%22%2Ch)%7Dvar%20k%3Ddocument.createElement(%22x-typelet%22)%3Bdocument.body.appendChild(k)%3B%7D)()%3B%0A">try it right now!</a>

Implemented as a web component, and wrapped up for saving as a bookmarklet.