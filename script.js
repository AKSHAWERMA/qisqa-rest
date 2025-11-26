(function(){
    const navigationToggle = document.querySelector(".navigation-toggle")
    const navigationMobileOverlay = document.querySelector(
      ".navigation-mobile-overlay"
    )
    const navigationMobileClose = document.querySelector(
      ".navigation-mobile-close"
    )
    const navigationMobileLinks = document.querySelectorAll(
      ".navigation-mobile-link"
    )
  
    function openMobileMenu() {
      navigationMobileOverlay.classList.add("navigation-mobile-active")
      navigationToggle.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"
    }
  
    function closeMobileMenu() {
      navigationMobileOverlay.classList.remove("navigation-mobile-active")
      navigationToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  
    navigationToggle.addEventListener("click", openMobileMenu)
    navigationMobileClose.addEventListener("click", closeMobileMenu)
  
    navigationMobileLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu)
    })
  
    navigationMobileOverlay.addEventListener("click", (e) => {
      if (e.target === navigationMobileOverlay) {
        closeMobileMenu()
      }
    })
  })();
  
  (function(){
    const timeButtons = document.querySelectorAll(".hero-time-btn")
    const customInput = document.querySelector(".hero-time-input")
  
    timeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        timeButtons.forEach((b) => b.classList.remove("hero-time-active"))
        btn.classList.add("hero-time-active")
        customInput.value = ""
      })
    })
  
    customInput.addEventListener("input", () => {
      if (customInput.value) {
        timeButtons.forEach((b) => b.classList.remove("hero-time-active"))
      }
    })
  
    const locationItems = document.querySelectorAll(".location-list-item")
    locationItems.forEach((item) => {
      item.addEventListener("click", () => {
        locationItems.forEach((i) => i.classList.remove("location-item-active"))
        item.classList.add("location-item-active")
      })
    })
  
    const paymentOptions = document.querySelectorAll(
      ".confirmation-payment-option"
    )
    paymentOptions.forEach((option) => {
      option.addEventListener("click", () => {
        paymentOptions.forEach((o) =>
          o.classList.remove("confirmation-option-active")
        )
        option.classList.add("confirmation-option-active")
      })
    })
  
    const promoChips = document.querySelectorAll(".pricing-promo-chip")
    const promoField = document.querySelector(".pricing-promo-field")
  
    promoChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        promoField.value = chip.textContent
      })
    })
  })();
  