import { pageHandler } from "../index";
import { elementCreate, appendChildBundle } from "../helper-functions";
import { homepage } from "../pages/homepage";
import { page2 as pg2 } from "../pages/page2";
import { page3 as pg3 } from "../pages/page3";
import { page4 as pg4 } from "../pages/page4";

export const header = () => {
	const div = elementCreate("div", "header");
	const btnHome = elementCreate("button", "btn-home", "home");
	btnHome.onclick = () => pageHandler(homepage);
	const btnPage2 = elementCreate("button", "btn-page2", "Pg2");
	btnPage2.onclick = () => pageHandler(pg2);
	const btnPage3 = elementCreate("button", "btn-page3", "Pg3");
	btnPage3.onclick = () => pageHandler(pg3);
	const btnPage4 = elementCreate("button", "btn-page4", "Pg4");
	btnPage4.onclick = () => pageHandler(pg4);

	const buttons = [btnHome, btnPage2, btnPage3, btnPage4];

	return appendChildBundle(div, buttons);
};
