document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleMoreSkills')
    const skills = document.getElementById('dynamicSkills')
    
    btn.addEventListener('click', () => {
        skills.classList.toggle('d-none')
        btn.textContent = skills.classList.contains('d-none')
            ?'See more'
            :'See less'
        btn.classList.toggle('btn-success')
        btn.classList.toggle('btn-danger')
    })
})


    