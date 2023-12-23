let searchform = document.querySelector("#search-form")
let searchbox = document.querySelector("#search-box")
let searchbtn = document.querySelector("#search-btn")
let showresult = document.querySelector("#showresult")
let showmorebtn = document.querySelector("#showmore-btn")

let accessKey = "WxwGSdQNS0KvpVX3R8PC0TjQ_H3mmEyCSBKYy0kikkc";
let page = 1;
let Keyword ;

async function getresult(){
    Keyword = searchbox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accessKey}&per_page=12`

    let response = await fetch(url)
    let data = await response.json();

    // it will set not mix search results 
    if(page===1){
        showresult.innerHTML = "";
    }
    
    let results = data.results;
    //map will go through all the result element one by one
    results.map((result)=>{
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

searchform.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    page = 1;
    getresult();
})

showmorebtn.addEventListener('click',(e)=>{
    page++;
    getresult();
})