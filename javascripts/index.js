/** Globals **/

/** NODE Getters */


const mainDiv = document.getElementById("main");

const form = document.getElementById('formData')

const homeLink = document.getElementById("home-link");

const recipesLink = document.getElementById("recipes");

const videosLink = document.getElementById("videos");

const tipsAndTricksLink = document.getElementById("tips-tricks")

const renderRecipesPage = (e) => {
	e.preventDefault();

	resetMainDiv();
}

/** Renderers **/ 

const renderRecipes = () =>{
//  Iterate over meals and display them as cards
}
	


/** Events Handlers  **/
const loadHome = () => {
	resetMainDiv();

const h1 = document.createElement('h1')
const p = document.createElement('p')

h1.className = 'overlay1';
p.className = 'overlay2';

h1.innerText = "AMAZING RECIPES FROM AROUND THE WORLD"
p.innerText = 'Have an original recipe you want to share? Submit the form below.'

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
const h2 = document.createElement('h2')
const h3 = document.createElement('h3')
const h4 = document.createElement('h4')
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')

h1.innerText = "Tips & Tricks"


h2.innerText = "Let red meat sit before cutting into it."
para1.innerText = "Even a well-done steak should never taste dry. To prevent a steak from losing its juicy interior, place it directly on top of aluminum foil after taking it off the stove or grill. Carefully wrap the steak in the foil and let it sit for approximately five minutes. This allows the juices to settle before you cut into the meat. The meat will continue to cook while it is in the foil so if you prefer medium steak, you should take it off when it is medium rare."

h2.innerText = "Shut the stove off before eggs are done."

para2.innerText = "The trick to great eggs is to not overcook them! Whether you scramble, fry, or poach, always turn off the stove a few minutes before the eggs look done—even when they seem a bit runny. The remainder of the heat will cook them to fluffy perfection."
mainDiv.appendChild(h1)
mainDiv.appendChild(h2)
mainDiv.appendChild(para1)
mainDiv.appendChild(para2)
mainDiv.appendChild(h3)
mainDiv.appendChild(para3)
mainDiv.appendChild(h4)
mainDiv.appendChild(para4)
}
/** Event Listeners **/
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



// // Helpers
// const createCard = () => {

// const divCard = document.createElement('div');
// const divCardImage = document.createElement('div');
// const divCardText = document.createElement('div');
// const span = document.createElement('span');
// const h2 = document.createElement('h2');
// const pDescrition = document.createElement('p');
// // card content
// const divCardStats = document.createElement('div');
// const divStat = document.createElement('div');
// const divCardValue = document.createElement('div')
// const divCardType = document.createElement('div')
// const divStatBorder = document.createElement('div')


// divCard.className = "card";
// divCardImage.className = "card-image";
// divCardText.className = "card-text";
// span.className = "prep-time";
// span.innerText = "prep-time";
// h2.innerText = "FOOD NAME";
// pDescrition.innerText = "FOOD DESCRIPTION";
// // card content
// divCardStats.className= "card-stats";
// divStat.className = "stat";
// divCardValue.className = "value";
// divCardType.className = " type";
// divStatBorder.className = "stat-border";

// divCard.appendChild(divCardImage);
// divCard.appendChild(divCardText);
// divCard.appendChild(span);
// divCard.appendChild(h2);
// divCard.appendChild(pDescrition);
// //  card content
// divCardStats.appendChild(divStat);
// divCardStats.appendChild(divCardValue);
// divCardStats.appendChild(divCardType);

// divStatBorder.appendChild(divCardValue);
// divStatBorder.appendChild(divCardType);

// divStat.appendChild(divCardValue);
// divStat.appendChild(divCardType);


//  <div class="card">
//    <div class="card-image"></div>
//    <div class="card-text"> 
//    <span class="prep-time">prep-time</span>
//    <h2>FOOD NAME</h2>
//    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellendus nostrum facilis quaerat ex corrupti amet nisi molestiae iste illo quos, quas a eveniet rem, doloribus impedit laborum perferendis fugit.</p>
//    </div>
//    <div class="card-stats">
//         <div class="stat">
// 			<div class="value">440</div>
// 			<div class="type">read</div>
// 		</div>
//         <div class="stat-border">
// 			<div class="value">5123</div>
// 			<div class="type">views</div>
// 		</div>
//         <div class="stat">
// 			<div class="value">32</div>
// 			<div class="type">comments</div>
// 		</div>
//       </div>  
//     </div>
//  return divCard
// }
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