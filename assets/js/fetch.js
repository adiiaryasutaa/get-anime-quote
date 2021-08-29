/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
async function getData(url) {

	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	});

	return response.json();

}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function showRandomQuote() {

	// Show loading
	toggleHideElement(loading);

	// Hide input form
	hideElement(inputForm);

	// Hide all bottom navigation buttons
	hideAllBottomNavigationButtons();

	// Disable all top navigation buttons
  toggleDisableAllTopNavigationButtons();

	// Fetch random quote
	getData('https://animechan.vercel.app/api/random')
		.then(quote => {

			// Parse JSON to Object
			let obj = JSON.parse(JSON.stringify(quote));

			// Show quote in card quote section using card quote template
			showInCardSection(cardQuoteTemplate(obj.anime, obj.character, obj.quote));

			// Unhide get new random button
			unhideElement(newQuoteBtn);

		})
		.catch(reason => {

			// Show error message in card quote section using card error template
			showInCardSection(alertErrorTemplate(reason + ' | Please try again soon, Sorry <i class="bi bi-emoji-frown"></i>'));

		})
		.finally(() => {

			// Undisable all top navigation buttons
			toggleDisableAllTopNavigationButtons();

			// Hide loading
			toggleHideElement(loading);

		});
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function showRandomQuotes() {

	// Show loading
	toggleHideElement(loading);

	// Hide input form
	hideElement(inputForm);

	// Hide all bottom navigation buttons
	hideAllBottomNavigationButtons();

	// Disable all top navigation buttons
  toggleDisableAllTopNavigationButtons();

	// Fetch 10 random quotes
	getData('https://animechan.vercel.app/api/quotes')
		.then(quote => {

			// Parse JSON to Object
			let obj = JSON.parse(JSON.stringify(quote));

			// Show quotes in card quote section using card quote template
			for (let i = 0; i < obj.length; i++) {
				showInCardSection(cardQuoteTemplate(obj[i].anime, obj[i].character, obj[i].quote));
			}

			// Unhide get new randoms button
			unhideElement(newQuotesBtn);

		})
		.catch(reason => {

			// Show error message in card quote section using card error template
			showInCardSection(alertErrorTemplate(reason + ' | Please try again soon, Sorry <i class="bi bi-emoji-frown"></i>'));

		})
		.finally(() => {

			// Undisable all top navigation buttons
			toggleDisableAllTopNavigationButtons();

			// Hide loading
			toggleHideElement(loading);

		});
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function showQuotesByAnimeTitle(title, page) {
	
	// Show loading
	toggleHideElement(loading);

	// Disable all top navigation buttons
	toggleDisableAllTopNavigationButtons();

	// Fetch 10 random quotes by anime title and page
	getData('https://animechan.vercel.app/api/quotes/anime?title=' + title.toLowerCase() + '&page=' + page)
		.then(quote => {

			// Parse JSON to Object
			let obj = JSON.parse(JSON.stringify(quote));

			// If obj doesn't return error show quotes, else show error
			if (!obj.hasOwnProperty('error')) {

				// Show quotes in card quote section using card quote template
				for (let i = 0; i < obj.length; i++) {
					showInCardSection(cardQuoteTemplate(obj[i].anime, obj[i].character, obj[i].quote));
				}

				// Unhide prev button and next button
				unhideElement(prevAndNextBtn);

				// Undisable next button if it disabled. Else, not a problem
				undisableButton(nextBtn);

			} else {

				// Show error message on card section
				showInCardSection(alertErrorTemplate(obj.error));
		
				// If page is more than 1, it's mean quote that user get by anime title is finish. No more quotes can get.
				// Show previous button for back to previous page
				if (page > 1) {
					unhideElement(prevAndNextBtn);
					disableButton(nextBtn);
				}

			}

		})
		.catch(reason => {

			// Show error message in card quote section using card error template
			showInCardSection(alertErrorTemplate(reason + ' | Please try again soon, Sorry <i class="bi bi-emoji-frown"></i>'));

		})
		.finally(() => {

			// Undisable all top navigation buttons
			toggleDisableAllTopNavigationButtons();

			// Hide loading
			toggleHideElement(loading);

		});
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function showQuotesByCharacterName(name, page) {

	// Show loading
	toggleHideElement(loading);

	// Disable all top navigation buttons
	toggleDisableAllTopNavigationButtons();

	// Fetch 10 random quotes by anime title and page
	getData('https://animechan.vercel.app/api/quotes/character?name=' + name.toLowerCase() + '&page=' + page)
		.then(quote => {

			// Parse JSON to Object
			let obj = JSON.parse(JSON.stringify(quote));
	
			// If obj doesn't return error show quotes, else show error
			if (!obj.hasOwnProperty('error')) {

				// Show quotes in card quote section using card quote template
				for (let i = 0; i < obj.length; i++) {
					showInCardSection(cardQuoteTemplate(obj[i].anime, obj[i].character, obj[i].quote));
				}

				// Unhide prev button and next button
				unhideElement(prevAndNextBtn);

				// Undisable next button if it disabled. Else, not a problem
				undisableButton(nextBtn);

			} else {

				// Show error message on card section
				showInCardSection(alertErrorTemplate(obj.error));
		
				// If page is more than 1, it's mean quote that user get by anime title is finish. No more quotes can get.
				// Show previous button for back to previous page
				if (page > 1) {
					unhideElement(prevAndNextBtn);
					disableButton(nextBtn);
				}
				
			}

		})
		.catch(reason => {

			// Show error message in card quote section using card error template
			showInCardSection(alertErrorTemplate(reason + ' | Please try again soon, Sorry <i class="bi bi-emoji-frown"></i>'));

		})
		.finally(() => {

			// Undisable all top navigation buttons
			toggleDisableAllTopNavigationButtons();

			// Hide loading
			toggleHideElement(loading);

		});
}
