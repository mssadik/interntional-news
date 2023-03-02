const fetchNewsCategoryLinks = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayNewsCategoryLinks(data.data.news_category))
}


const displayNewsCategoryLinks = (data) =>{
    // console.log(data);
    const newsLinksContainer = document.getElementById('news-links-container');
    data.forEach(newsCategorySingleLinks => {
        // console.log(newsCategorySingleLinks)
        const {category_name, category_id } = newsCategorySingleLinks;
        newsLinksContainer.innerHTML += `<a onclick="fetchNewsDetails('${category_id}','${category_name}')" class="nav-link" href="#">${category_name}</a>`
    });
}

const fetchNewsDetails = (categoryId, categoryName) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url).then(res => res.json()).then(data => displayNewsDetailsCard(data.data, categoryName));
}


const displayNewsDetailsCard = (data, categoryName) =>{
    document.getElementById('news-count').innerHTML = `${data.length}`;
    document.getElementById('category-name').innerHTML = `${categoryName}`
    const newsDetailsCard = document.getElementById('news-details-card');
    newsDetailsCard.innerHTML = ''

    data.forEach(newsDetailsSinglsCard =>{
        console.log(newsDetailsSinglsCard)
        const {thumbnail_url, title, details, author, image_url, rating, total_view} = newsDetailsSinglsCard;
    newsDetailsCard.innerHTML += `
    <div class="card mb-3" style="" class="w-100">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${image_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${details.slice(0, 200)}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
    </div>
    `
    })
    
    
}

















// const fetchNewsCategoryLinks = () =>{
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//     .then(res => res.json())
//     .then(data => displayNewsCategoryLinks(data.data.news_category))
// }


// const displayNewsCategoryLinks = (data) =>{
//     // console.log(data);
//     const newsLinksContainer = document.getElementById('news-links-container');
//     data.forEach(newsCategorySingleLinks => {
//         // console.log(newsCategorySingleLinks)
//         const {category_name, category_id } = newsCategorySingleLinks;
//         newsLinksContainer.innerHTML += `<a onclick="fetchNewsDetails('${category_id}')" class="nav-link" href="#">${category_name}</a>`
//     });
// }

// const fetchNewsDetails = (categoryId) =>{
//     const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
//     fetch(url).then(res => res.json()).then(data => displayNewsDetailsCard(data ));
// }


// const displayNewsDetailsCard = (data) =>{
//     const newsDetailsCard = document.getElementById('news-details-card');
//     console.log(data)
    
// }