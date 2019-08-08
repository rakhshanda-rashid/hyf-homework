
const searchBar = document.getElementById("searchBar");
const ulContainer = document.querySelector("ul.container");
const favoriteEmojiList = document.querySelector('ul.favoriteEmojiUl');
const selectEmojiCategory = document.querySelector('select#selectEmojiCategories');
let listOfEmojis;
let favoriteEmojis = [];
function fetchEmojis(){
	fetch("https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json")
	.then(response => response.json())
	.then(json => {
		listOfEmojis = json;
		loadingLocalstorage();
		console.log(listOfEmojis);
		getOptionTagForEachCategory();
		renderHTML(favoriteEmojis, favoriteEmojiList);
		renderHTML(listOfEmojis);
	})
}
function renderHTML(listOfEmojis, ulList = ulContainer){	
	ulList.innerHTML = ""
	listOfEmojis.forEach((emoji) => {
		const liTag = document.createElement("li");
		const emojiSpan = document.createElement("span");
		emojiSpan.innerHTML = emoji.char
		emojiSpan.classList.add("emoji");
		liTag.appendChild(emojiSpan);

		const nameSpan = document.createElement("span");		
		nameSpan.innerHTML = emoji.name
		nameSpan.classList.add("emojiName");		
		liTag.appendChild(nameSpan);
		//save to clipboard
		liTag.addEventListener('click', () => {
			emojiClickEventHandler(emoji);
		})

		ulList.appendChild(liTag);
	})
}

function searchEmoji(searchValue, searchOption){
    const newListOfEmojis = listOfEmojis.filter((emoji) => {
		return emoji[searchOption].toLowerCase().includes(searchValue.toLowerCase());
	});
	console.log(newListOfEmojis);
	renderHTML(newListOfEmojis);
	return newListOfEmojis;
}
function getCategoryLists(){
	let listsOfCategory = [];
	listOfEmojis.forEach(emoji => {
		const category = emoji.category.split('(')[0];
		if(!listsOfCategory.includes(category)){
			listsOfCategory.push(category);
		}
	});
	return listsOfCategory;
}
function getEmojisByCategory(){
	let listOfEmojisPerCategory;
	if(selectEmojiCategory.value === 'all')
		listOfEmojisPerCategory = listOfEmojis;
	else
		listOfEmojisPerCategory = searchEmoji(selectEmojiCategory.value, 'category');
	return listOfEmojisPerCategory;
}
function getOptionTagForEachCategory(){
	const categoryLists = getCategoryLists();
	categoryLists.forEach(category => {
		const optionCategory = document.createElement('option');
		optionCategory.innerHTML = category;
		selectEmojiCategory.appendChild(optionCategory);
	});
}
selectEmojiCategory.addEventListener('change', () => {
	console.log(selectEmojiCategory.value);
	searchBar.value = selectEmojiCategory.value;
	console.log(getEmojisByCategory());		
});
function addToFavorite(emoji){
	favoriteEmojis.unshift(emoji);
	console.log(favoriteEmojis);
	favoriteEmojis = favoriteEmojis.filter((emoji, index) => {
		return favoriteEmojis.indexOf(emoji) == index;
	});

	localStorage.setItem("favoriteEmojis", JSON.stringify(favoriteEmojis));
	renderHTML(favoriteEmojis, favoriteEmojiList);
}
function emojiClickEventHandler(emoji){
	writeToClipboard(emoji.char);
	addToFavorite(emoji);
}
//loading favorite list
function loadingLocalstorage(){	
	favoriteEmojis = JSON.parse(
        localStorage.getItem("favoriteEmojis") || "[]"
      );
}
searchBar.addEventListener("keyup",() => searchEmoji(searchBar.value,'name'));
searchBar.addEventListener("focus",() => searchBar.value = '');
fetchEmojis();
