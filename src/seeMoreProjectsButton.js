document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleMoreProjects')

    btn.addEventListener('click', () => {
        const projects = document.querySelectorAll('.dynamicProjects')

        projects.forEach(project => {
            project.classList.toggle('d-none')
            btn.textContent = projects[0].classList.contains('d-none')
                ?'See more projects'
                :'See less projects'    
        })
        
    })
})