  const submits = document.querySelectorAll('.submit')
  const wModal = document.querySelector('.fon')
  const closeBtn = document.querySelector('.modal-window__close-btn')
  submits.forEach((btn) => 
    btn.addEventListener('click', () => {
      wModal.style.display = "flex"
    }))

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    wModal.style.display = "none"
  })
}
