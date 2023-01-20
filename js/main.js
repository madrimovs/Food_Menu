function findelement(element, parent = document) {
	return parent.querySelector(element);
}

const elCards = findelement("#cards");
const elAllBtn = findelement("#allBtn");
const elBreakfastBtn = findelement("#breakfastBtn");
const elLunchBtn = findelement("#lunchBtn");
const elShakestBtn = findelement("#shakesBtn");
const elDinnerBtn = findelement("#dinnerBtn");
const elTemplate = findelement("#template");

const breakfastCard = findelement("#breakfast");

function renderMenu(array, parent = elCards) {
	const fragment = document.createDocumentFragment();

	array.forEach((menuArr) => {
		const card = elTemplate.content.cloneNode(true);

		const img = card.querySelector(".card-img-top");
		const title = card.querySelector(".card-title");
		const desc = card.querySelector(".card-text");

		img.src = menuArr.img;
		title.textContent = menuArr.title.toUpperCase();
		desc.textContent = menuArr.desc;

		fragment.appendChild(card);
	});

	parent.appendChild(fragment);
}
renderMenu(menu);

function typeMenu(element) {
	element.addEventListener("click", () => {
		const type = element.value;

		let newArr = [];

		elCards.innerHTML = "";

		if (type === "all") {
			renderMenu(menu);
		} else {
			menu.forEach((post) => {
				if (post.category == type) {
					newArr.push(post);
				}
			});
		}

		renderMenu(newArr);
	});
}

typeMenu(elAllBtn);
typeMenu(elBreakfastBtn);
typeMenu(elLunchBtn);
typeMenu(elShakestBtn);
typeMenu(elDinnerBtn);
