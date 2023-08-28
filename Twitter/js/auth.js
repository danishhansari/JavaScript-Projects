  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyBt5-mq-ixfZL_s-6q3P8ZsLCKzB9KsrEA",
      authDomain: "twitter-2c12a.firebaseapp.com",
      projectId: "twitter-2c12a",
      storageBucket: "twitter-2c12a.appspot.com",
      messagingSenderId: "471334837504",
      appId: "1:471334837504:web:781bad92250bbe0c6fa7e5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleBtn = document.querySelector('.signInGoogle')
  googleBtn.addEventListener('click', (e) => {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider(app)
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
              window.location.href = 'home.html'
          }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
          });
  })


  const twitterBtn = document.querySelector('.signInTwitter');
  twitterBtn.addEventListener('click', (e) => {
      const auth = getAuth(app);
      const provider = new TwitterAuthProvider(app)
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
              // You can use these server side with your app's credentials to access the Twitter API.
              const credential = TwitterAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const secret = credential.secret;
              const user = result.user;
          }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = TwitterAuthProvider.credentialFromError(error);
          });
  })