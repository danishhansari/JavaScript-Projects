const tabHead = document.querySelectorAll("main .tab-btn"); // All Tab Changing buttons
const tabBody = document.querySelectorAll("main .tab-body"); // All Tab Body
let activeTab = 0; // active elem for finding position of tab button and tab body
let allData;
const searchList = document.querySelector(".wrapper .search-list");

// Stay for the first tab element
tabHead[activeTab].classList.add("tab-active");
tabBody[activeTab].classList.add("tab-body-active");

// Params for elements and the class we remove
function hideClass(elem, elemClass) {
  elem.forEach((element) => {
    element.classList.remove(elemClass);
  });
}
// Params for elements and the class we add
function addClass(elem, elemClass) {
  elem.classList.add(elemClass);
}

tabHead.forEach((elem) => {
  elem.addEventListener("click", () => {
    activeTab = elem.dataset.id;
    hideClass(tabHead, "tab-active");
    addClass(tabHead[activeTab - 1], "tab-active");
    hideClass(tabBody, "tab-body-active");
    addClass(tabBody[activeTab - 1], "tab-body-active");
  });
});

//  Api key 816944463364949
const formInput = document.querySelector(".wrapper form");
formInput.addEventListener("submit", searchHeroInput);
function searchHeroInput(e) {
  e.preventDefault();
  const formInput = document.querySelector(".wrapper form");
  let searchInput = formInput.search.value;
  fetchSuperHero(searchInput);
  console.log(searchInput);
}
async function fetchSuperHero(hero) {
  const url = `https://www.superheroapi.com/api.php/816944463364949/search/${hero}`;
  try {
    const response = await fetch(url);
    allData = await response.json();
    if (allData.response === "success") {
      // console.log(allData)
      displaySuperHero(allData.results);
    }
  } catch (error) {
    console.log(error);
  }
}

function displaySuperHero(data) {
  searchList.innerHTML = "";
  data.forEach((elem) => {
    const divItem = document.createElement("div");
    divItem.classList.add(
      "search-list-item",
      "h-auto",
      "text-white",
      "flex",
      "gap-2",
      "items-center",
      "bg-black",
      "w-full",
      "p-1",
      "hover:bg-[rgba(0,0,255,1)]",
      "cursor-pointer"
    );
    divItem.innerHTML = `
    <img src="${elem.image.url ? elem.image.url : ""}" class="w-[30px]" alt="${
      elem.name
    }" data-id="${elem.id}">
    <p class="text-white font-semibold" data-id="${elem.id}">${elem.name}</p>
    `;
    searchList.appendChild(divItem);
  });
}

formInput.search.addEventListener("keyup", () => {
  if (formInput.search.value.length > 1) {
    fetchSuperHero(formInput.search.value);
  } else {
    searchList.innerHTML = "";
  }
});

searchList.addEventListener("click", (e) => {
  let searchId = e.target.dataset.id;
  let searchData = allData.results.filter(elem => {
    return searchId === elem.id;
  });
  fetchDetail(searchData);
  searchList.innerHTML = "";
});

function fetchDetail(data) {
    document.querySelector('main .hero-name').innerText = data[0].name
    console.log(data)
  document.querySelector("main .img").innerHTML = `
    <img src="${data[0].image.url}" class="w-[90%] h-full rounded">
    `;
  let powerstat = document.querySelector("main .powerstat");
  let divItem = document.createElement("div");
  divItem.innerHTML = 
  `
    <div class="intelligence flex justify-between w-[90%] px-2 py-1 bg-gray-700 rounded mb-3">
    <p class="uppercase text-white font-semibold">
        <i class="fa fa-shield-halved mr-2"></i>
        intelligence
    </p>
    <p class="text-yellow-500 font-bold">${data[0].powerstats.intelligence}</p>
</div>

<div class="strength flex justify-between w-[90%] px-2 py-1 bg-gray-700 rounded mb-3">
    <p class="uppercase text-white font-semibold">
        <i class="fa fa-shield-halved mr-2"></i>
        strength
    </p>
    <p class="text-yellow-500 font-bold">${data[0].powerstats.strength}</p>
</div>

<div class="speed flex justify-between w-[90%] px-2 py-1 bg-gray-700 rounded mb-3">
    <p class="uppercase text-white font-semibold">
        <i class="fa fa-shield-halved mr-2"></i>
        speed
    </p>
    <p class="text-yellow-500 font-bold">${data[0].powerstats.speed}</p>
</div>

<div class="durability flex justify-between w-[90%] px-2 py-1 bg-gray-700 rounded mb-3">
    <p class="uppercase text-white font-semibold">
        <i class="fa fa-shield-halved mr-2"></i>
        durability
    </p>
    <p class="text-yellow-500 font-bold">${data[0].powerstats.durability}</p>
</div>

<div class="power flex justify-between w-[90%] px-2 py-1 bg-gray-700 rounded mb-3">
    <p class="uppercase text-white font-semibold">
        <i class="fa fa-shield-halved mr-2"></i>
        power
    </p>
    <p class="text-yellow-500 font-bold">${data[0].powerstats.power}</p>
</div>

<div class="combat flex justify-between w-[90%] px-2 py-1 bg-gray-700 rounded mb-3">
    <p class="uppercase text-white font-semibold">
        <i class="fa fa-shield-halved mr-2"></i>
        combat
    </p>
    <p class="text-yellow-500 font-bold">${data[0].powerstats.combat}</p>
</div>

`;
powerstat.appendChild(divItem)

    let biography = document.querySelector('main .biography')
    let bioDiv = document.createElement('div');
    bioDiv.innerHTML = `
    <p class="text-gray-600 font-bold mb-4">Full Name: <span class="full-name text-white font-medium"> ${data[0].biography['full-name']}</span></p>
    <p class="text-gray-600 font-bold mb-4">Alert Egos: <span class="full-name text-white font-medium"> ${data[0].biography['alter-egos']}</span></p>
    <p class="text-gray-600 font-bold mb-4">Aliases: <span class="full-name text-white font-medium"> ${data[0].biography.aliases}</span></p>
    <p class="text-gray-600 font-bold mb-4">Place-Of-Birth: <span class="full-name text-white font-medium"> ${data[0].biography["place-of-birth"]} </span></p>
    <p class="text-gray-600 font-bold mb-4">First-Appearance: <span class="full-name text-white font-medium">${data[0].biography["first-appearance"]} </span></p>
    <p class="text-gray-600 font-bold mb-2">Publisher: <span class="full-name text-white font-medium">${data[0].biography.publisher} </span></p>
    `
    biography.appendChild(bioDiv)

    const appearance = document.querySelector('main .appearance')
    let  appDiv = document.createElement('div');
    appDiv.innerHTML = `
    <div class="gender flex items-center justify-between mb-3">
    <p class="font-bold text-white uppercase"><i class="fa fa-star text-yellow-500 mr-4 tracking-wider"></i>gender</p>
    <p class="bg-red-500 text-white rounded-2xl px-3 font-semibold"> ${data[0].appearance.gender}</p>
</div>

<div class="race flex items-center justify-between mb-3">
    <p class="font-bold text-white uppercase tracking-wider"><i class="fa fa-star text-yellow-500 mr-4"></i>race</p>
    <p class="bg-red-500 text-white rounded-2xl px-3 font-semibold"> ${data[0].appearance.race}</p>
</div>

<div class="height flex items-center justify-between mb-3">
    <p class="font-bold text-white uppercase tracking-wider"><i class="fa fa-star text-yellow-500 mr-4"></i>height</p>
    <p class="bg-red-500 text-white rounded-2xl px-3 font-semibold">${data[0].appearance.height[0]}</p>
</div>

<div class="weight flex items-center justify-between mb-3">
    <p class="font-bold text-white uppercase tracking-wider"><i class="fa fa-star text-yellow-500 mr-4"></i>weight</p>
    <p class="bg-red-500 text-white rounded-2xl px-3 font-semibold">${data[0].appearance.weight[0]}</p>
</div>

<div class="eye-color flex items-center justify-between mb-3">
    <p class="font-bold text-white uppercase"><i class="fa fa-star text-yellow-500 mr-4"></i>eye-color</p>
    <p class="bg-red-500 text-white rounded-2xl px-3 font-semibold">${data[0].appearance['eye-color']}</p>
</div>

<div class="hair-color flex items-center justify-between mb-3">
    <p class="font-bold text-white uppercase tracking-wider"><i class="fa fa-star text-yellow-500 mr-4"></i>hair-color</p>
    <p class="bg-red-500 text-white rounded-2xl px-3 font-semibold">${data[0].appearance['hair-color']}</p>
</div>
    `
    appearance.appendChild(appDiv)

    const connections =document.querySelector('main .connections');
    let connnectDiv = document.createElement('div');
    connnectDiv.innerHTML = `
                    <p class="uppercase font-bold text-2xl text-slate-500">group--affiliation</p>
                    <p class="group text-white">${data[0].connections['group-affiliation']}</p>
                    <p class="uppercase font-bold text-2xl text-slate-500">relatives</p>
                    <p class="relatives text-white">${data[0].connections['relatives']}</p>
    `
    connections.appendChild(connnectDiv)
}
