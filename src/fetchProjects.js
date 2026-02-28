let repoData = []

document.addEventListener('DOMContentLoaded', () => {
    const checkStatus = (response) => {
        if (response.ok) {
            return response
        }
        throw new Error('Request was either a 404 or a 500')
    }    

    fetch(`https://api.github.com/users/james-york2008/repos`)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => {
        let repoList = document.getElementById('repoList')

        data.forEach(repo => {
            let articleContent = `
            <article>
                <div class=" mb-5 p-0 p-lg-5 bg-light">
                    <h5 class="text-center projects-title"><a href="${repo.html_url}"><b class="text-dark">${repo.name}</b></a></h5>
                    <p class="text-secondary text-center">Made primarily with ${repo.language}</p>
                </div>
            </article>
            `

            let article = document.createElement('article') 
            article.innerHTML = articleContent
            repoList.appendChild(article)  
        })
    }).catch(error => {
        console.log(error)
    })
})






  /*  <article>
                    <div class="row mb-5 p-0 p-lg-5 bg-light">
                        <div class="col-12 col-md-6 order-2 order-md-1">
                            <h5 class="text-center projects-title"><a href="https://gilded-choux-8b1b6a.netlify.app/"><b class="text-dark">Airbnb News Clone</b></a></h5>
                            <p class="text-secondary">This is a mobile responsive clone of the <a class="text-dark" href="https://news.airbnb.com/">Airbnb Newsroom</a> made with Bootstrap v4.6.0. This webpage features article listings, horizontally scrollable sections, and a multi section footer.</p>
                        </div>

                        <div class="col-12 col-md-6 order-1 order-md-2">
                            <a href="https://gilded-choux-8b1b6a.netlify.app/"><img loading="lazy" class="w-100 pb-3 pb-md-0 projects-thumbnail" src="images/airbnb-news-clone.png" alt="Thumbnail image of my airbnb news clone"></a>
                        </div>
                    </div>
                </article>*/