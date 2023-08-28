import { showFullCardsDetail } from "./detail.js";

// Fetch Api
const fullCards = document.querySelector(".full-cards");
const category = document.querySelectorAll(".category button");
const todayCard = document.querySelector(".card-container .cards")
const apiKey = "pub_27288dd5116ccb22ad98c13be342b6686acaf";
function fetchData(category) {
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${category}&language=en`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showData(data.results);
    })
    .catch((err) => console.error(err));
}

fetchData("health");

function showData(data) {
  fullCards.innerHTML = "";
  data.forEach((data) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <div class="overlay"></div>
        <h2>${data.title}</h2>
        <div class="flex">
            <div class="time">${data.pubDate}</div>
        </div>
        `;
        div.addEventListener("click", () => {
          let elemTitle = localStorage.setItem('newstitle', data.title);
          showFullCardsDetail(elemTitle)
          window.location.href = "../detail.html"
        })
    fullCards.appendChild(div);
  });
}
category.forEach((data) => {
  data.addEventListener("click", () => {
    classAdd(data);
  });
});
function classAdd(elem) {
  removeClass();
  elem.classList.add("active");
  fetchData(elem.textContent);
}
function removeClass() {
  category.forEach((data) => data.classList.remove("active"));
}

function topCardRender() {
  data.forEach((data) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <div class="card">
        <div class="overlay"></div>
        <h2>${data.title}</h2>
        <p>"I'm going to say this very bluntly again," he added. "Buy them only if you're prepared to lose all your money."</p>
        </div>
        `;
  });
}

function todayNews() {
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showTodayNews(data.results);
    });
}
todayNews();
function showTodayNews(data) {
  console.log(data);

  data.forEach(data => {
      const div = document.createElement("div");
      div.classList.add(".cards,.card");
      div.innerHTML = `
      <div class="card">
      <div class="overlay"></div>
      <h4>${data.source_id}</h4>
      <h2>${data.title}</h2>
      <p>${data.pubDate}</p>
      </div>
      </a>
      `;
      todayCard.append(div)
      div.addEventListener("click", () => {
        localStorage.setItem('newstitle', data.title)
        window.location.href = '../detail.html'
      })
    });

}


