import { outline } from "./pages/firstload";
import { header } from "./components/header";
import { homepage } from "./pages/homepage.js";
//import { pageHandler } from "./helper-functions";

outline();

export const pageHandler = (page = homepage) => {
	const parent = document.querySelector(".content");

	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}

	parent.appendChild(header());
	parent.appendChild(page());
};
