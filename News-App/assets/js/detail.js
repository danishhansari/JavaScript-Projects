const title = localStorage.getItem('newstitle')
console.log(title)
const img = document.querySelector(".detail-container .img")
const date = document.querySelector(".detail-container .title .date")
const liveLink = document.querySelector('.detail-container .live-link')
const heading = document.querySelector(".detail-container .title h4")
const publisher = document.querySelector(".detail-container .title .publisher")
const description = document.querySelector('.detail-container .description')
const apiKey = "pub_27288dd5116ccb22ad98c13be342b6686acaf";
fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}`)
.then(res => res.json())
.then(data => {
    callData(data.results)
})

function callData(data){
    // console.log(data)
    data.forEach(elem => {
        if(elem.title === title){
            console.log(elem)
            showData(elem)
        } 
    })
}

function showData(data){
    heading.innerText = data.title;
    if(data.image_url === null){
        img.style.background = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},.5)`
    } else {
        img.style.background = data.image_url;
    }
    date.innerText = data.pubDate;
    publisher.innerText = `Publisher by ${data.source_id}`;
    // description.innerText = data.description;
    description.innerText = data.content;
    liveLink.href = data.link
}
// console.log(img)


export function showFullCardsDetail (data){
   console.log(" I awork")    
}