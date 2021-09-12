const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

var firebaseConfig = {
    apiKey: "AIzaSyCyxCfuhPvCsBuRNh9iRzLp5LxhFU6UfIg",
    authDomain: "food-6510f.firebaseapp.com",
    projectId: "food-6510f",
    storageBucket: "food-6510f.appspot.com",
    messagingSenderId: "42073407139",
    appId: "1:42073407139:web:018ae7c6b7136105614916",
    measurementId: "G-M2NZ044L73"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class="wp-block-quote">
                <p>${quote.quote}. </p><cite>${quote.character}</cite>
            </blockquote>`;
  }
  return html;
};