/* =========================================================================
   firebase-config.js  —  ВАШАТА Firebase конфигурация
   -------------------------------------------------------------------------
   1. Влез в https://console.firebase.google.com  ->  Add project
   2. Project settings -> General -> "Your apps" -> Web app (</>) -> Register
   3. Копирай обекта firebaseConfig от там и замени стойностите по-долу.
   4. Build -> Firestore Database -> Create database (production mode, регион
      europe-west) -> после качи правилата от firestore.rules
   5. Build -> Authentication -> Sign-in method -> включи "Anonymous"
   ========================================================================= */

window.FIREBASE_CONFIG = {
  apiKey:            "ЗАМЕНИ_МЕ",
  authDomain:        "ЗАМЕНИ_МЕ.firebaseapp.com",
  projectId:         "ЗАМЕНИ_МЕ",
  storageBucket:     "ЗАМЕНИ_МЕ.appspot.com",
  messagingSenderId: "ЗАМЕНИ_МЕ",
  appId:             "ЗАМЕНИ_МЕ"
};
