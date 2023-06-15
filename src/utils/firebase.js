import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0DxoJ_tGBtE5zz-nxXx4twyE04XOrs_M",
  authDomain: "dolce-vitta-a735f.firebaseapp.com",
  projectId: "dolce-vitta-a735f",
  storageBucket: "dolce-vitta-a735f.appspot.com",
  messagingSenderId: "286053665450",
  appId: "1:286053665450:web:b5b9057b2cc1206c9eded3"
};


export const initFirebase = initializeApp(firebaseConfig);