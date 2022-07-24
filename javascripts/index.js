/** Globals **/

/** NODE Getters */


const mainDiv = () => document.getElementById("main");

const form = document.getElementById('formData')

const homeLink = document.getElementById("home-link");

const recipesLink = document.getElementById("recipes");

/** Events Handlers  **/

const renderRecipesPage = (e) => {
	e.preventDefault();
	resetMain();

const h1 = document.createElement('h1')
h1.innerText = 'Find a Recipe'

mainDiv().appendChild(h1); 


	 function fetchRecipes () {  
		resetMain();
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': config.API_Key,
				'X-RapidAPI-Host': config.API_Host
			}}
		
			fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=8&tags=under_30_minutes', options)
			.then(response => response.json())  
			.then(data => data.results.forEach(recipe => createCard(recipe)))
			.catch(err => console.error(err));
			console.log("Hello World")
		}; 
		fetchRecipes();
		
	
		
	} 
		
	function createCard (recipe) {
			console.log("Hello World")
			resetMain();
		
		
		const divCard = document.createElement('div');
		const divCardImage = document.createElement('div');
		const img = document.createElement('img');
		const divCardText = document.createElement('div');
		const span = document.createElement('span');
		const h2 = document.createElement('h2');
		const pDescrition = document.createElement('p');
		
		// card content
		const divCardStats = document.createElement('div');
		const divStat = document.createElement('div');
		const divCardValue = document.createElement('div')
		const divCardType = document.createElement('div')
		const divStatBorder = document.createElement('div')
		
		
		divCard.className = "card";
		divCardImage.className = "card-image";
		img.src = `${recipe.thumbnail_url}`;
		divCardText.className = "card-text";
		span.className = "prep-time";
		span.innerText = `${recipe.prep_time_minutes} minutes`;
		h2.innerText = `${recipe.name}`;
		pDescrition.innerText = `${recipe.description}`;
		// card content
		// divCardStats.className= "card-stats";
		// divStat.className = "stat";
		// divCardValue.className = "value";
		// divCardType.className = " type";
		// divStatBorder.className = "stat-border";
	
		divCard.appendChild(img);
		divCard.appendChild(divCardText);
		divCard.appendChild(span);
		divCard.appendChild(h2);
		divCard.appendChild(pDescrition);
		divCardText.appendChild(h2)
		divCardText.appendChild(span)
		divCardText.appendChild(pDescrition)
		//  card content
		// divCardStats.appendChild(divStat);
		// divCardStats.appendChild(divCardValue);
		// divCardStats.appendChild(divCardType);
		
		// divStatBorder.appendChild(divCardValue);
		// divStatBorder.appendChild(divCardType);
		
		// divStat.appendChild(divCardValue);
		// divStat.appendChild(divCardType);

		// divCard.appendChild(divCardStats)
		// divCard.appendChild(divStatBorder)
		
		
		console.log(divCard)
		mainDiv().appendChild(divCard)
		mainDiv().appendChild(recipes)
		return divCard;
	

		}    

		const resetMain = () => { 
			mainDiv().innerHTML = " ";
		}
	

	/** Event Listeners **/
	const attatchHomePageLinkEvent = () => { 
		homeLink.addEventListener('click', loadHome) 
		 }
	 
	 const attachRecipieLinkEvent = () => {
		 recipesLink.addEventListener('click', renderRecipesPage)
		 }
	 
	 


	const loadHome = () => {
		resetMain();
	
	const h1 = document.createElement('h1')
	const p = document.createElement('p')
	
	h1.className = 'overlay1';
	p.className = 'overlay2';
	
	h1.innerText = "AMAZING RECIPES FROM AROUND THE WORLD"
	p.innerText = 'Have an original recipe you want to share? Submit the form below.'
	
	
	mainDiv().appendChild(h1)
	mainDiv().appendChild(p)
	mainDiv().appendChild(form)
	
	}
/** WHEN THE DOM LOADS */

document.addEventListener('DOMContentLoaded', () => {
   
    loadHome();
	attatchHomePageLinkEvent();
	attachRecipieLinkEvent();
})
