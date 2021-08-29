const loading  				 = document.querySelector('img#loading-img');
const inputForm  			 = document.querySelector('div#input-form');
const input 					 = document.querySelector('input#input');
const getButton 			 = document.querySelector('button#get-btn');

// Top Navigation buttons
const randomQuoteBtn				= document.querySelector('button#random-quote-btn');
const randomQuotesBtn				= document.querySelector('button#random-quotes-btn');
const quotesByAnimeTitle		= document.querySelector('button#quotes-by-anime-title');
const quotesByCharacterName	= document.querySelector('button#quotes-by-character-name');

// Bottom Navigation buttons
const newQuoteBtn				 		= document.querySelector('button#get-new-random-btn');
const newQuotesBtn					= document.querySelector('button#get-new-randoms-btn');
const prevAndNextBtn				= document.querySelector('div#prev-next');
const prevBtn 							= document.querySelector('button#prev-btn');
const nextBtn								= document.querySelector('button#next-btn');

const topNavbar 						= document.querySelector('nav#top-navbar');
const toggleTopNavbarButton = document.querySelector('button#toggle-hide-navbar');
const upIcon								= document.querySelector('i#up-icon');
const downIcon							= document.querySelector('i#down-icon');

let currentPage = 1;

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
randomQuoteBtn.addEventListener('click', () => {
	
	// Set activate section to randomQuote
	currentActivateSection = 'randomQuote';
	
	// Set bacground to activate section to randomQuote
	setcurrentActivateSectionBackground();

	// reset card section and input form value
	resetCardSection();

	// Show random quote
	showRandomQuote();

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
newQuoteBtn.addEventListener('click', () => {

	// reset card section and input form value
	resetCardSection();

	// Show new random quote
	showRandomQuote();

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
randomQuotesBtn.addEventListener('click', () => {

	// Set activate section to randomQuotes 
	currentActivateSection = 'randomQuotes';
	
	// Set background activate section to randomQuotes 
	setcurrentActivateSectionBackground();

	// reset card section and input form value
	resetCardSection();
	
	// Show random quotes
	showRandomQuotes();

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
newQuotesBtn.addEventListener('click', () => {
	
	// reset card section and input form value
	resetCardSection();
	
	// Show new random quotes
	showRandomQuotes();

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
quotesByAnimeTitle.addEventListener('click', () => {

	// Set activate section to randomQuotesByAnimeTitle 
	currentActivateSection = 'randomQuotesByAnimeTitle';
	
	// Set background activate section to randomQuotesByAnimeTitle 
	setcurrentActivateSectionBackground();

	// reset card section and input form value
	resetCardSection();

	// Reset input value
	input.value = '';

	// Unhide input form
	unhideElement(inputForm);

	// Set input placeholder to Anime title
	input.setAttribute('placeholder', 'Anime title');

	// Hide all bottom navigation buttons
	hideAllBottomNavigationButtons();

	// Reset current page to first page
	currentPage = 1;

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
quotesByCharacterName.addEventListener('click', () => {

	// Set activate section to randomQuoteByCharacterName 
	currentActivateSection = 'randomQuotesByCharacterName';

	// Set background activate section to randomQuoteByCharacterName 
	setcurrentActivateSectionBackground();

	// reset card section and input form value
	resetCardSection();

	// Unhide input form
	unhideElement(inputForm);

	// Reset input value
	input.value = '';

	// Set input placeholder to Character name
	input.setAttribute('placeholder', 'Character name');

	// Hide all bottom navigation buttons
	hideAllBottomNavigationButtons();

	// Reset current page to first page
	currentPage = 1;

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
getButton.addEventListener('click', () => {

	// Reset current page to first page
	currentPage = 1;

	if (quotesSection.innerHTML != null) {
		resetCardSection();
		hideAllBottomNavigationButtons();
	}

	let blank = isBlank(input.value);

	if (input.value != '' && !blank) {
		currentActivateSection == 'randomQuotesByAnimeTitle'
					? showQuotesByAnimeTitle(removeBlankAtFirstCharandLastChar(input.value), currentPage)
					: showQuotesByCharacterName(removeBlankAtFirstCharandLastChar(input.value), currentPage);
		
		disableButton(prevBtn);

	} else {
		showInCardSection(alertErrorTemplate(currentActivateSection == 'randomQuotesByAnimeTitle'
																							? 'Darling, tell me the title'
																							: 'Bro, tell me his/her name'
		));
	}

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
prevBtn.addEventListener('click', () => {

	// Decrement current page
	currentPage -= 1;

	// reset card section
	resetCardSection();

	// Hide prev button and next button
	hideElement(prevAndNextBtn);

	// If current page is randomQuotesByAnimeTitle, show random quotes by anime title on previous page. 
	// Else show random quotes by character name on previous page
	currentActivateSection == 'randomQuotesByAnimeTitle'
				? showQuotesByAnimeTitle(input.value, currentPage) : showQuotesByCharacterName(input.value, currentPage);

	currentPage == 1 ? disableButton(prevBtn) : undisableButton(prevBtn);

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
nextBtn.addEventListener('click', () => {

	// Increment current page
	currentPage += 1;

	// reset card section
	resetCardSection();

	// Hide prev button and next button
	hideElement(prevAndNextBtn);

	// If current page is randomQuotesByAnimeTitle, show random quotes by anime title on previous page. 
	// Else show random quotes by character name on previous page
	currentActivateSection == 'randomQuotesByAnimeTitle'
					? showQuotesByAnimeTitle(input.value, currentPage) : showQuotesByCharacterName(input.value, currentPage);
	
	undisableButton(prevBtn);

});

/**
 * @author Adi Aryasuta
 * @since Thursday, 27 August 2021
 */
toggleTopNavbarButton.addEventListener('click', () => {
	if (topNavbar.classList.contains('hidden')) {
		unhideElement(topNavbar);
		unhideElement(upIcon);
		hideElement(downIcon)
	} else {
		hideElement(topNavbar);
		hideElement(upIcon);
		unhideElement(downIcon)
	}
});

// Start website with show a random quote 
showRandomQuote();
setcurrentActivateSectionBackground();

