import { homepage } from "./pages/homepage";

export const elementCreate = (elementType, className, text = "") => {
	const element = document.createElement(elementType);
	element.classList.add(className);
	element.innerText = text;
	return element;
};

export const appendChildBundle = (target, element) => {
	for (let item of element) {
		target.appendChild(item);
	}

	return target;
};

export const pageHandler = (page = homepage) => {
	const parent = document.querySelector(".content");

	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}

	parent.appendChild(page());
};
