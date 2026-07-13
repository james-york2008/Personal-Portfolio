document.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("copyrightText")
  const year = new Date().getFullYear()

  span.innerHTML = `&copy; ${year} James York. All rights reserved`
})