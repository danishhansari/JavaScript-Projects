import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

const tweetBtn = document.querySelector(".postBtn");
const tweetContainer = document.querySelector(".tweet-container");
tweetBtn.addEventListener("click", () => {
  const inputVal = document.querySelector(".post input").value;
  renderElem(inputVal);
});
function renderElem(input) {
  const elem = document.createElement("div");
  elem.classList.add("tweet", "p-2", "border-b-2", "border-gray-900");
  elem.innerHTML = `
    <p>${input}</p>
    <div class="features flex gap-4 text-xl my-2">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="trash-outline"></ion-icon>
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
    </div>
    `;
  tweetContainer.append(elem);
  const firebaseConfig = {
    apiKey: "AIzaSyBt5-mq-ixfZL_s-6q3P8ZsLCKzB9KsrEA",
    authDomain: "twitter-2c12a.firebaseapp.com",
    projectId: "twitter-2c12a",
    storageBucket: "twitter-2c12a.appspot.com",
    messagingSenderId: "471334837504",
    appId: "1:471334837504:web:781bad92250bbe0c6fa7e5",
    databaseURL: "https://twitter-2c12a-default-rtdb.firebaseio.com/",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const tweetRef = ref(database, "tweets")

  const newTweet = {
    tweet: input
  }
  push(tweetRef, newTweet)
  .then(() => {
    console.log("Tweet Successfully")
  })
  .catch((err) => {
    console.log(err)
  })  
}

window.addEventListener("load", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBt5-mq-ixfZL_s-6q3P8ZsLCKzB9KsrEA",
        authDomain: "twitter-2c12a.firebaseapp.com",
        projectId: "twitter-2c12a",
        storageBucket: "twitter-2c12a.appspot.com",
        messagingSenderId: "471334837504",
        appId: "1:471334837504:web:781bad92250bbe0c6fa7e5",
        databaseURL: "https://twitter-2c12a-default-rtdb.firebaseio.com/",
      };
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const tweetRef = ref(database, 'tweets') 

      onValue(tweetRef, (snapshot) => {
        const tweets = snapshot.val();
        tweetContainer.innerHTML = ""
        renderTweets(tweets)
      }, (error) => {
        console.log("Can't get Data")
      })
})
function renderTweets(tweets) {
  if(tweets !== null) {
    const entries = Object.entries(tweets)
    entries.forEach(elem => {
      // renderElem(elem[1].tweet)
      const item = document.createElement("div");
      item.classList.add("tweet", "p-2", "border-b-2", "border-gray-900");
      item.innerHTML = `
        <p>${elem[1].tweet}</p>
        <div class="features flex gap-4 text-xl my-2">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="trash-outline"></ion-icon>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
        `;
      tweetContainer.append(item);
      // tweetContainer.append(elem[1].tweet)
    })  
  }
}




