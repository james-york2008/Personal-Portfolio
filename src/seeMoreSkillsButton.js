document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleMoreSkills")
    const skills = document.getElementById("dynamicSkills")
    const firstExpandedSkill = document.getElementById("firstExpandedSkill")

    btn.addEventListener("click", () => {
        const isExpanded = btn.getAttribute("aria-expanded") === "true"
        btn.setAttribute("aria-hidden", (isExpanded).toString())
        
        const isHidden = skills.classList.toggle("d-none")
        if (!isHidden) {
            firstExpandedSkill.focus()
        }

        btn.textContent = isHidden 
            ? "See more" 
            : "See less"
        
        btn.classList.toggle("btn-success")
        btn.classList.toggle("btn-danger")
    })
})


    