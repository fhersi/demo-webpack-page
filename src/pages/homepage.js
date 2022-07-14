import { elementCreate, appendChildBundle } from "../helper-functions";

export const homepage = () => {
	// Create div that will contain all the elements of the HP and be exported to main index.js.
	const div = elementCreate("div", "homepage");
	const title = elementCreate("h1", "title", "test::func");
	const img = elementCreate("img", "homepage-img");
	img.src =
		"https://www.shutterstock.com/image-vector/sketch-landscape-road-mountains-hand-drawn-1057229495";

	const paragraph = elementCreate(
		"p",
		"homepage-description",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit lectus, aliquet in risus a, lobortis aliquet eros. In hac habitasse platea dictumst. Nunc gravida dolor at fringilla mollis."
	);

	return appendChildBundle(div, [title, img, paragraph]);
};
