import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAfmoy2GNS4Z17qv_LLOXf3_0NFxYmq6Oc",
    authDomain: "coffee-crud-b77ca.firebaseapp.com",
    projectId: "coffee-crud-b77ca",
    storageBucket: "coffee-crud-b77ca.appspot.com",
    messagingSenderId: "758453453803",
    appId: "1:758453453803:web:7f72ad200b1ccd35cfcfae"
};
const app = initializeApp(firebaseConfig);
export default app;