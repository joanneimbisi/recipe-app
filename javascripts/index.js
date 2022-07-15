/** Globals **/
let desserts = [];

/** NODE Getters */


const mainDiv = document.getElementById("main");

const homeLink = document.getElementById("home-link");


/** Templates (reusable code ) **/ 

// const dessertListTemplate = () => {
// 	return `
// 	<h2> Normal Desserts</h2>
//       <table class="container">
//         <thead>
//           <tr>
//               <th>Name</th>
//               <th>Dessert Name</th>
//               <th>Time</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>Alvin</td>
//             <td>Macaroons</td>
//             <td>1 hr 50 min</td>
//           </tr>
//           <tr>
//             <td>Julie</td>
//             <td>Tres Leches</td>
//             <td>45 min</td>
//           </tr>
//           <tr>
//             <td>Jonathan</td>
//             <td>Classic Cheesecake</td>
//             <td>7 hr 45 min</td>
//           </tr>
//         </tbody>
//       </table>
// 	  `
	  
	  
// }

/** Renderers **/ 

// const renderDessertListPage = () => {
//     mainDiv.innerHTML = dessertListTemplate();
	
// }

/** Events  **/
const loadHome = () => {
	resetMainDiv();

const h1 = document.createElement('h1')
const p = document.createElement('p')

h1.className = 'center-align';
p.className = 'center-align';

h1.innerText = "Amazing recipes from around the world!"
p.innerText = 'Have an original dessert recipe you want to share? Submit the form below.'

mainDiv.appendChild(h1)
mainDiv.appendChild(p)
	// <h1 class='center-align'> Amazing recipes from around the world!</h1>
	// <p class='center-align'> Have an original dessert recipe you wan to share? Submit the form below.</p>
}

const attatchHomePageLinkEvent = () => { 
   homeLink.addEventListener('click', loadHome) 
    }
// 	e.preventDefault();
//     renderHomePage();
// })
// }
//    const normalListEvent = () => { 
//     normalListLink.addEventListener('click', (e) =>{
		

// 	 e.preventDefault();
// 	 renderDessertListPage();
// })
// }

/* First of all you want to explain to yourself the full feature
* Break down feature with (3 question rule):
* At what time can I do this event?(DOM Content Loaded)
* What's going to trigger this event? (click)
* Effect (display)
**/

/** MISC**/

const resetMainDiv = () => mainDiv.innerHTML = " ";


/** WHEN THE DOM LOADS */

document.addEventListener('DOMContentLoaded', () => {
    // renderHomePage(); 
	// homePageLinkEvent();
	// normalListEvent();
    loadHome();
	attatchHomePageLinkEvent();
})

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '81b4cd0348mshdbf85c6563d25afp1a6a72jsn20d468ab62b3',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// fetch('https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response
//         ))
// 	.catch(err => console.error(err));
