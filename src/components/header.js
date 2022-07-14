import { elementCreate, appendChildBundle } from "../helper-functions";

console.log(elementCreate);

export const header = () => {
	const div = elementCreate("div", "header");
	const btnHome = elementCreate("button", "btn-home", "home");
	const btnPage2 = elementCreate("button", "btn-page2", "Pg2");
	//btnPage2.addEventListner("click", )
	const btnPage3 = elementCreate("button", "btn-page3", "Pg3");
	const btnPage4 = elementCreate("button", "btn-page4", "Pg4");

	return appendChildBundle(div, [btnHome, btnPage2, btnPage3, btnPage4]);
};
