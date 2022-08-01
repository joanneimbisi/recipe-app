/** NODE Getters */

const mainDiv = () => document.getElementById("main");

const form = document.getElementById('formData')

const homeLink = document.getElementById("home-link");

const recipesLink = document.getElementById("recipes");

const formData = document.getElementById('formData');

const fieldSet = document.getElementById('fieldset')

/** Events Handlers  **/

	 function fetchRecipes () {  
		resetMain();

			fetch('http://localhost:3000/recipes')
			.then(response => response.json())  
			.then(recipes => {recipes.forEach(recipe => createCard(recipe))})
			.catch(err => console.error(err));

		// fetchRecipes();	

	//  Get data to render animals the DOM
	function intitialize(){
		// fetchRecipes();
	} intitialize();
	} 
      

		const renderRecipesPage = (e) => {
			e.preventDefault();
			resetMain();
		
		const h1 = document.createElement('h1')
		h1.innerText = 'Find a Recipe'
		
		mainDiv().appendChild(h1); 
		fetchRecipes();
		renderRecipesPage();
		}; 
	// recipesLink.forEach(recipe => {
	// 	const col = renderRecipe(recipe)

	// 	row.appendChild(col);
	// })
	// mainDiv().appendChild(row)

	// const renderRecipe = recipe => {
	// 	const col = document.createElement('div');
	// 	col.className = 'col s12 l6'

	// 	col.appendChild(createCard(recipe))

	// 	return col;
	// }
		
	function createCard (recipe) {
		    
			// resetMain();
		// const row = document.createElement('row');
		// const col = document.createElement('col')	
		const divCard = document.createElement('div');
		const divCardImage = document.createElement('div');
		const img = document.createElement('img');
		const divCardText = document.createElement('div');
		const span = document.createElement('span');
		const h2 = document.createElement('h2');
		const pDescrition = document.createElement('p');
		
		// card content
		// const divCardStats = document.createElement('div');
		// const divStat = document.createElement('div');
		// const divCardValue = document.createElement('div')
		// const divCardType = document.createElement('div')
		// const divStatBorder = document.createElement('div')
		
		// row.className = "row";
		// col.className = "col"
		divCard.className = "card";
		divCardImage.className = "card-image";
		img.src = `${recipe.image}`;
		divCardText.className = "card-text";
		span.className = "prep-time";
		span.innerText = `${recipe.prep_time_minutes} minutes`;
		h2.innerText = `${recipe.name}`;
		pDescrition.innerText = `${recipe.description}`;
      
		// row.appendChild(col);
		// divCard.appendChild(col);
		divCard.appendChild(img);
		divCard.appendChild(divCardText);
		divCard.appendChild(span);
		divCard.appendChild(h2);
		divCard.appendChild(pDescrition);
		divCardText.appendChild(h2)
		divCardText.appendChild(span)
		divCardText.appendChild(pDescrition)
		
		
		console.log(divCard)
		mainDiv().appendChild(divCard)
		// mainDiv().appendChild(recipesLink)
		// return divCard;
	

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
	 
	 formData.addEventListener('submit', (e) => {
		 e.preventDefault();

		 console.log('Form has been submitted');
	 })

	 fieldSet.addEventListener('mouseover', overing);
	 function overing(ev){
		 ev.currentTarget.style.borderColor = 'orange'
		 console.log('mouseover')
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