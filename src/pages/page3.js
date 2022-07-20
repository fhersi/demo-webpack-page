import { elementCreate, appendChildBundle } from "../helper-functions";

export const page3 = () => {
	// Create div that will contain all the elements of the HP and be exported to main index.js.
	const div = elementCreate("div", "page3");

	const title = elementCreate("h1", "title");
	title.innerText = "test::funcPG3";
	div.appendChild(title);

	const img = elementCreate("img", "homepage-img");
	img.src =
		"https://www.shutterstock.com/image-vector/sketch-landscape-road-mountains-hand-drawn-1057229495";
	div.appendChild(img);

	const paragraph = elementCreate("p", "homepage-description");
	paragraph.innerText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit lectus, aliquet in risus a, lobortis aliquet eros. In hac habitasse platea dictumst. Nunc gravida dolor at fringilla mollis.";

	div.appendChild(paragraph);
	return div;
};
