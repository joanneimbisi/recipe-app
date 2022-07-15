/** Globals **/
let desserts = [
	{name: "Cheesecake",
	description: "a bunch of description text",
}
];

/** NODE Getters */


const mainDiv = document.getElementById("main");

const form = document.getElementById('formData')

const homeLink = document.getElementById("home-link");

const recipesLink = document.getElementById("recipes");

const videosLink = document.getElementById("videos");

const tipsAndTricksLink = document.getElementById("tips-tricks")

const renderRecipesPage = (e) => {
	e.preventDefault();
/* iterate over meals and display them as cards*/
 
}

/** Renderers **/ 

const renderRecipes = () =>{
	//  iterate over meals and display them as cards
}
	
// }

/** Events Handlers  **/
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
mainDiv.appendChild(form)

}
const loadRecipes = (e) =>{
	e.preventDefault();
	resetMainDiv();

	 const h1 = document.createElement('h1')
	 h1.innerText = 'Find a Recipe'

	 renderRecipes()
     mainDiv.appendChild(h1)
}

const loadVideos = (e) => {
	e.preventDefault();
	resetMainDiv();

	const h1 = document.createElement('h1')
    h1.innerText = 'Videos'
	mainDiv.appendChild(h1)
}

const loadTipsAndTricks = e => {
e.preventDefault();
resetMainDiv();

const h1 = document.createElement('h1')
h1.innerText = "Tips & Tricks"
// h1.className = "center-align";
// h1.style.marginTop = "10px";
// h1.style.paddingTop = "10px"
mainDiv.appendChild(h1)
}
/** Events **/
const attatchHomePageLinkEvent = () => { 
   homeLink.addEventListener('click', loadHome) 
    }

const attachRecipieLinkEvent = () => {
	recipesLink.addEventListener('click', loadRecipes)
    }
const attachVideosLinkEvent = () => {
	videosLink.addEventListener('click', loadVideos)
}

const attachTipsAndTricksLinkEvent = () => {
	tipsAndTricksLink.addEventListener('click', loadTipsAndTricks)
}

// Helpers
// const createCard = () => {
//     const divCard = document.createElement('div');
// 	const divImage = document.createElement('div')
// 	const divCardContent = document.createElement('div')
// 	const divCardAction = document.createElement('div')
// 	const img = document.createElement('img');
// 	const span = document.createElement('span')
//     const pDescription = document.createElement('p')
// 	const link1 = document.createElement('a')

// 	divCard.className = "card";
// 	divImage.className = "card-image"
// 	divCardContent.className = "card-content"
// 	divCardAction.className = "card-action"
// 	span.className = "card-title"
	

// 	img.setAttribute("src", "https://www.tasteandtellblog.com/wp-content/uploads/2008/05/Tres-Leches-Cake-tasteandtellblog.com-1.jpg")
// 	link1.setAttribute("href", "#")
    
	
// 	span.innerText = "Tres Leches"
// 	pDescription.innerText = "Tres leches literally means, “three milks”  and Tres Leches Cake is an ultra light sponge cake soaked in a sweet milk mixture. "
// 	link1.innerText = "Order"
	
// 	divImage.appendChild(img)
// 	divImage.appendChild(span)
// 	divCardContent.appendChild(pDescription)
// 	divCardAction.appendChild(link1)

// 	divCard.appendChild(divImage)
// 	divCard.appendChild(divCardContent)
// 	divCard.appendChild(divCardAction)
// 	<div class="row">
//       <div class="col s12 m7">
//        <div class="card">
//          <div class="card-image">
//            <img src="images/sample-1.jpg">
//            <span class="card-title">Card Title</span>
//          </div>
//          <div class="card-content">
//            <p>I am a very simple card. I am good at containing small bits of information.
//           I am convenient because I require little markup to use effectively.</p>
//          </div>
//          <div class="card-action">
//            <a href="#">This is a link</a>
//          </div>
//        </div>
//      </div>
//   </div>
//      return divCard
// }
// const resetMain =

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
   
    loadHome();
	attatchHomePageLinkEvent();
	attachRecipieLinkEvent();
	attachVideosLinkEvent();
	attachTipsAndTricksLinkEvent();
})