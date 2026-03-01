document.addEventListener('DOMContentLoaded', () => {
    const checkStatus = (response) => {
        if (response.ok) {
            return response
        }
        throw new Error('Request was either a 404 or a 500')
    }
    
    let projectCount = 0    //Only displaying 3 projects by default

    fetch(`https://api.github.com/users/james-york2008/repos`)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => {
        let repoList = document.getElementById('repoList')

        let articleContent = ''

        data.forEach(repo => {
            if (projectCount < 3) {
                articleContent = `
                <article class="col-12 col-lg-4">
                    <div class="text-center mb-5 p-0 p-lg-5 bg-light border">
                        <h5 class="projects-title pt-5 pt-lg-0"><b class="text-dark">${repo.name}</b></h5>
                        <p class="text-secondary"><small>Made primarily with ${repo.language}</small></p>
                        
                        <div class="project-details d-none mt-3 text-start">
                            <p class="pt-3 px-5 px-lg-0">${repo.description}</p>
                            <a class="projects-link px-5 px-lg-0" href="${repo.homepage}">Live site</a>
                            <br><a class="projects-link px-5 px-lg-0" href="${repo.html_url}">Github page</a>
                            <p class="fw-bold text-center">Tags: 
                            <br>&bull; ${repo.topics.join('<br>&bull; ')}</p>
                        </div>
                        <button class="btn btn-secondary btn-sm seeMoreDetails mb-5 mb-lg-0">See details</button>
                    </div>
                </article>
                `
            } else {    //You can toggle on the rest of the projects
                articleContent = `
                <article class="col-12 col-md-4 d-none dynamicProjects">
                    <div class="text-center mb-5 p-0 p-lg-5 bg-light border">
                        <h5 class="projects-title pt-5 pt-lg-0"><b>${repo.name}</b></h5>
                        <p class="text-secondary"><small>Made primarily with ${repo.language}</small></p>
                        
                        <div class="project-details d-none mt-3 text-start">
                            <p class="pt-3 px-5 px-lg-0">${repo.description}</p>
                            <a class="projects-link px-5 px-lg-0" href="${repo.homepage}">Live site</a>
                            <br><a class="projects-link px-5 px-lg-0" href="${repo.html_url}">Github page</a>
                            <p class="fw-bold text-center">Tags: <br>&bull; ${repo.topics.join('<br>&bull; ')}</p>
                        </div>
                        <button class="btn btn-secondary btn-sm seeMoreDetails mb-5 mb-lg-0">See details</button>
                    </div>
                </article>
                `
            }
 
            if (repo.description) { /*no description on my unfinished projects*/
                projectCount ++
                repoList.insertAdjacentHTML('beforeend', articleContent)
            } else { 
                return
            }

        }) 
    }).catch(error => {
        console.log(error)
    })
})