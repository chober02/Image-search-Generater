let searchform = document.querySelector("#search-form")
let searchbox = document.querySelector("#search-box")
let searchbtn = document.querySelector("#search-btn")
let showresult = document.querySelector("#showresult")
let showmorebtn = document.querySelector("#showmore-btn")
let randombtn = document.querySelector("#showrandom-btn")

let accessKey = "WxwGSdQNS0KvpVX3R8PC0TjQ_H3mmEyCSBKYy0kikkc";
let page = 1;
let Keyword;

async function getresult() {
    Keyword = searchbox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accessKey}&per_page=12`

    let response = await fetch(url)
    let data = await response.json();

    // it will set not mix search results 
    if (page === 1) {
        showresult.innerHTML = "";
    }

    let results = data.results;
    //map will go through all the result element one by one
    results.map((result) => {
        let image = document.createElement("img")
        image.src = result.urls.small

        let imglink = document.createElement("a");
        // imglink.href = result.links.html
        imglink.href = result.urls.small


        imglink.target = "_blank"
        imglink.appendChild(image)


        showresult.appendChild(imglink);
    })
    showmorebtn.style.display = "block";

}

searchform.addEventListener('submit', (evt) => {
    evt.preventDefault();
    page = 1;
    getresult();
})

showmorebtn.addEventListener('click', (e) => {
    page++;
    getresult();
})


const photographyGenres = [
    "Portrait",
    "Landscape",
    "Macro",
    "Street",
    "Architecture",
    "Wildlife",
    "Fashion",
    "Event",
    "Sports",
    "Astrophotography",
    "Fine Art",
    "Documentary",
    "Still Life",
    "Black and White",
    "Abstract",
    "Travel",
    "Food",
    "Underwater",
    "Experimental",
    "Pet",
    "Concert",
    "Boudoir",
    "Newborn",
    "Product",
    "Corporate",
    "Industrial",
    "Drone",
    "Time-lapse",
    "Panorama",
    "360-Degree",
    "HDR",
    "Candid",
    "Urban",
    "Night",
    "Long Exposure",
    "High-Speed",
    "Composite",
    "Double Exposure",
    "Monochrome",
    "Architectural",
    "Nature",
    "Environmental",
    "Toy",
    "Glamour",
    "Conceptual",
    "Surreal",
    "Vintage",
    "Adventure",
    "Aerial",
    "Cityscape",
    "Drone",
    "Fashion Editorial",
    "Film Photography",
    "Historical",
    "Industrial",
    "Infrared",
    "360-Degree",
    "Minimalist",
    "Mobile Photography",
    "Multimedia",
    "Nude",
    "Overhead",
    "Paparazzi",
    "Paranormal",
    "Performance",
    "Pinhole",
    "Real Estate",
    "Scientific",
    "Seascape",
    "Social Media",
    "Spiritual",
    "Stock",
    "Surreal",
    "Time-lapse",
    "Toy",
    "Travelogue",
    "Virtual Reality",
    "Wedding",
    "Weather",
    "Zoom Burst",
    "Zoo",
    "Abstract Expressionism",
    "Cinematic",
    "Darkroom",
    "Dramatic",
    "Edgy",
    "Ethnographic",
    "Experimental",
    "Fantasy",
    "Futuristic",
    "High Fashion",
    "High Key",
    "Low Key",
    "Melancholic",
    "Nostalgic",
    "Psychedelic",
    "Realism",
    "Romantic",
    "Satirical",
    "Symbolic",
    "Vintage",
];
function removeDuplicates(photographyGenres) {
    return photographyGenres.filter((item,
        index) => photographyGenres.indexOf(item) === index);
}

let filteredarray = removeDuplicates(photographyGenres);
console.log(filteredarray)



function getrandomimg(){
    showresult.innerHTML = "";
    let randomKeyword = photographyGenres[Math.floor(Math.random()*photographyGenres.length)]
    searchbox.value = randomKeyword;
    
    getresult();
}

randombtn.addEventListener('click', (evt)=>{
    getrandomimg();
})
