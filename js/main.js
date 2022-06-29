let container = document.querySelector('.row');
let url = `https://api.themoviedb.org/3/movie/popular?api_key=6eb2565464bf5c857dc472303c073583&language=en-US&page=1`;
let urlImages = `https://image.tmdb.org/t/p/w500/`;

let spinner = document.querySelector('.spinner')
loadAPI(url);

function loadAPI(url){
    fetch(url)
    .then(datos=>datos.json())
    .then(datosJson=>{
        let {results} = datosJson;
        showData(results)
    })
}

function showData(datosJson){
    spinner.style.display="none";
    datosJson.forEach(data => {
        container.innerHTML+=`
        <div class="col">
            <div class="card">
                <img src="${urlImages}${data.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text"> <b>Overview: </b> ${data.overview}</p>
                <p class="card-text"> <b>Date release: </b> ${data.release_date}</p>
                <p class="card-text"> <b>Vote Average: </b> <span class="badge bg-primary">${data.vote_average}</span></p>
            </div>
            </div>
        </div>
        `;
    });
}