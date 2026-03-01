document.addEventListener('DOMContentLoaded', () => {
    let repoList = document.getElementById('repoList')

    repoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('seeMoreDetails')) {
            const detailsDiv = event.target.previousElementSibling
            
            detailsDiv.classList.toggle('d-none')
            event.target.textContent = detailsDiv.classList.contains('d-none')
                ?'See details'
                :'Hide details'
        }
    })
})