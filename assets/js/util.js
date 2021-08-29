const quotesSection = document.querySelector('section#quotes-section');
let currentActivateSection = 'randomQuote';

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function cardQuoteTemplate(title, character, quote) {
	return `
	<div class="card flex flex-col rounded bg-purple-300 bg-opacity-50 mb-6">
		<div class="card-header flex justify-center items-center text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-t text-sm text-center p-2 md:text-lg">
			${title}
		</div>
		<div class="card-body text-justify m-auto p-4">
			<figure>
				<blockquote>
					<p class="text-sm text-center md:text-lg">"${quote}"</p>
				</blockquote>
				<figcaption class="italic text-sm text-center mt-3 md:text-lg">
					<i class="bi bi-dash"></i> ${character} <i class="bi bi-dash"></i>
				</figcaption>
			</figure>
		</div>
	</div>
	`;
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function alertErrorTemplate(message) {
	return `
		<div class="bg-red-500 rounded-lg text-center text-white py-2 px-4 mb-6 mx-2">
			${message}
		</div>
	`;
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function resetCardSection() {
	quotesSection.innerHTML = '';
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function setcurrentActivateSectionBackground() {
	switch (currentActivateSection) {
		case 'randomQuote':
			randomQuoteBtn.classList.add('bg-purple-300');
			randomQuoteBtn.classList.add('bg-opacity-50');
			randomQuoteBtn.classList.remove('hover:bg-purple-300');
			randomQuoteBtn.classList.remove('hover:bg-opacity-20');
	
			randomQuotesBtn.classList.remove('bg-purple-300');
			randomQuotesBtn.classList.remove('bg-opacity-50');
			randomQuotesBtn.classList.add('hover:bg-purple-300');
			randomQuotesBtn.classList.add('hover:bg-opacity-20');
			
			quotesByAnimeTitle.classList.remove('bg-purple-300');
			quotesByAnimeTitle.classList.remove('bg-opacity-50');
			quotesByAnimeTitle.classList.add('hover:bg-purple-300');
			quotesByAnimeTitle.classList.add('hover:bg-opacity-20');
			
			quotesByCharacterName.classList.remove('bg-purple-300');
			quotesByCharacterName.classList.remove('bg-opacity-50');
			quotesByCharacterName.classList.add('hover:bg-purple-300');
			quotesByCharacterName.classList.add('hover:bg-opacity-20');
			break;
			
		case 'randomQuotes':
			randomQuoteBtn.classList.remove('bg-purple-300');
			randomQuoteBtn.classList.remove('bg-opacity-50');
			randomQuoteBtn.classList.add('hover:bg-purple-300');
			randomQuoteBtn.classList.add('hover:bg-opacity-20');
	
			randomQuotesBtn.classList.add('bg-purple-300');
			randomQuotesBtn.classList.add('bg-opacity-50');
			randomQuotesBtn.classList.remove('hover:bg-purple-300');
			randomQuotesBtn.classList.remove('hover:bg-opacity-20');
	
			quotesByAnimeTitle.classList.remove('bg-purple-300');
			quotesByAnimeTitle.classList.remove('bg-opacity-50');
			quotesByAnimeTitle.classList.add('hover:bg-purple-300');
			quotesByAnimeTitle.classList.add('hover:bg-opacity-20');
	
			quotesByCharacterName.classList.remove('bg-purple-300');
			quotesByCharacterName.classList.remove('bg-opacity-50');
			quotesByCharacterName.classList.add('hover:bg-purple-300');
			quotesByCharacterName.classList.add('hover:bg-opacity-20');
			break;
	
		case 'randomQuotesByAnimeTitle':
			randomQuoteBtn.classList.remove('bg-purple-300');
			randomQuoteBtn.classList.remove('bg-opacity-50');
			randomQuoteBtn.classList.add('hover:bg-purple-300');
			randomQuoteBtn.classList.add('hover:bg-opacity-20');
	
			randomQuotesBtn.classList.remove('bg-purple-300');
			randomQuotesBtn.classList.remove('bg-opacity-50');
			randomQuotesBtn.classList.add('hover:bg-purple-300');
			randomQuotesBtn.classList.add('hover:bg-opacity-20');
	
			quotesByAnimeTitle.classList.add('bg-purple-300');
			quotesByAnimeTitle.classList.add('bg-opacity-50');
			quotesByAnimeTitle.classList.remove('hover:bg-purple-300');
			quotesByAnimeTitle.classList.remove('hover:bg-opacity-20');
	
			quotesByCharacterName.classList.remove('bg-purple-300');
			quotesByCharacterName.classList.remove('bg-opacity-50');
			quotesByCharacterName.classList.add('hover:bg-purple-300');
			quotesByCharacterName.classList.add('hover:bg-opacity-20');
			break;
	
		case 'randomQuotesByCharacterName':
			randomQuoteBtn.classList.remove('bg-purple-300');
			randomQuoteBtn.classList.remove('bg-opacity-50');
			randomQuoteBtn.classList.add('hover:bg-purple-300');
			randomQuoteBtn.classList.add('hover:bg-opacity-20');
	
			randomQuotesBtn.classList.remove('bg-purple-300');
			randomQuotesBtn.classList.remove('bg-opacity-50');
			randomQuotesBtn.classList.add('hover:bg-purple-300');
			randomQuotesBtn.classList.add('hover:bg-opacity-20');
	
			quotesByAnimeTitle.classList.remove('bg-purple-300');
			quotesByAnimeTitle.classList.remove('bg-opacity-50');
			quotesByAnimeTitle.classList.add('hover:bg-purple-300');
			quotesByAnimeTitle.classList.add('hover:bg-opacity-20');
	
			quotesByCharacterName.classList.add('bg-purple-300');
			quotesByCharacterName.classList.add('bg-opacity-50');
			quotesByCharacterName.classList.remove('hover:bg-purple-300');
			quotesByCharacterName.classList.remove('hover:bg-opacity-20');
			break;
	}
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function disableButton(button) {
	button.classList.add('disabled');
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function undisableButton(button) {
	button.classList.remove('disabled');
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function toggleDisableButton(button) {
  return button.classList.contains('disabled')
          ? button.classList.remove('disabled') : button.classList.add('disabled');
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function toggleDisableAllTopNavigationButtons() {
	toggleDisableButton(randomQuotesBtn);
	toggleDisableButton(randomQuoteBtn);
	toggleDisableButton(quotesByAnimeTitle);
	toggleDisableButton(quotesByCharacterName);
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function hideElement(element) {
	element.classList.add('hidden');
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function unhideElement(element) {
	element.classList.remove('hidden');
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function hideAllBottomNavigationButtons() {
	hideElement(newQuoteBtn);
	hideElement(newQuotesBtn);
	hideElement(prevAndNextBtn);
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function unhideAllBottomNavigationButtons() {
	unhideElement(newQuoteBtn);
	unhideElement(newQuotesBtn);
	unhideElement(prevAndNextBtn);
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function toggleHideElement(element) {
	return element.classList.contains('hidden')
					? element.classList.remove('hidden') : element.classList.add('hidden');
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function toggleHideAllBottomNavigationButtons() {
	toggleHideElement(newQuoteBtn);
	toggleHideElement(newQuotesBtn);
	toggleHideElement(prevAndNextBtn);
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function addClassToElement(element, classlist) {
	element.classList.add(classlist);
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function removeClassInElement(element, classlist) {
	element.classList.remove(classlist);
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 26 August 2021
 */
function showInCardSection(element) {
	quotesSection.innerHTML += element;
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 28 August 2021
 */
function removeBlankAtFirstCharandLastChar(input) {

	while (true) {
		// If in the first character of string is blank or space, it will be removed
		if (input.startsWith(' ')) input = input.substr(1);
		else break;
	}

	while (true) {
		// If in the last character of string is blank or space, it will be removed
		if (input.endsWith(' ')) input = input.substr(0, input.length - 2);
		else break;
	}

	return input;
}

/**
 * @author Adi Aryasuta
 * @since Thursday, 28 August 2021
 */
function isBlank(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) !== ' ')
			return false;
	}
	
	return true;
}