const parallaxElms = document.querySelectorAll(".parallax")
const page = document.documentElement

window.addEventListener("scroll", () => {
  let scrolled = page.scrollTop

  for (let i = 0; i < parallaxElms.length; i++) {
    let speed = parallaxElms[i].dataset.speed

    parallaxElms[i].style.transform = `translate(0, -${
      scrolled * (0.01 * speed)
    }px)`
  }
})
