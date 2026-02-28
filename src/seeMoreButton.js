document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleMoreSkills')
    const skills = dynamicSkills
    
    btn.addEventListener('click', () => {
        skills.classList.toggle('d-none')
        btn.textContent = skills.classList.contains('d-none')
            ?'See more'
            :'See less'
    })
})


    