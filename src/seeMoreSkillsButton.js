document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleMoreSkills')
    const skills = document.getElementById('dynamicSkills')
    
    btn.addEventListener('click', () => {
        btn.ariaExpanded === true
        ? btn.ariaExpanded = false
        : btn.ariaExpanded = true

        const isHidden = skills.classList.toggle('d-none')
        btn.setAttribute('aria-hidden', (!isHidden).toString())
        btn.textContent = isHidden ?'See more' :'See less'
        
        btn.classList.toggle('btn-success')
        btn.classList.toggle('btn-danger')
    })
})


    