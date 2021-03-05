import Card from './components/Card.js'
import cardData from './dictionary/cardData.js';
import Navbar from './components/Navbar.js';


const App = document.getElementById("App");

// console.log(App);

// Inject component ke main component App

// App.innerHTML += Card(1, 'ini judul 1', 'ini body 1');
// mapping or map hanya berlaku array

// let cardData = [
//     {
//         id : 1,
//         title : "ini adalah title ke 1",
//         body : "ini adalah body ke 1",
//     },
//     {
//         id : 2,
//         title : "ini adalah title ke 2",
//         body : "ini adalah body ke 2",
//     },
//     {
//         id : 3,
//         title : "ini adalah title ke 3",
//         body : "ini adalah body ke 3",
        
//     },
//     {
//         id : 4,
//         title : "ini adalah title ke 4",
//         body : "ini adalah body ke 4",
//     },
//     {
//         id : 5,
//         title : "ini adalah title ke 5",
//         body : "ini adalah body ke 5",
//     },
//     {
//         id : 6,
//         title : "ini adalah title ke 6",
//         body : "ini adalah body ke 6",
        
//     },
//     {
//         id : 7,
//         title : "ini adalah title ke 7",
//         body : "ini adalah body ke 7",
        
//     },
//     {
//         id : 8,
//         title : "ini adalah title ke 8",
//         body : "ini adalah body ke 8",
        
//     }
    
// ]
App.innerHTML += `

        ${Navbar()}

        ${
            cardData.map((e)=>{
                return Card(e.id, e.title, e.body, e.img);
            }).join("")
        }

`;