function createArticle() {



	let titleInput = document.getElementById("createTitle");
	let contentInput = document.getElementById("createContent");
	let articles = document.getElementById("articles");

	if (titleInput === null || contentInput === null || articles === null) {
		throw new Error("Missing elements...")
	}


	let article = document.createElement("article");
	let p = document.createElement("p");
	let h3 = document.createElement("h3");

	h3.innerHTML = titleInput.value;
	p.innerHTML = contentInput.value;
	article.appendChild(h3);
	article.appendChild(p);
	articles.appendChild(article);


	titleInput.value = "";
	contentInput.value = "";





}