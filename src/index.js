import { outline } from "./pages/firstload";
import { header } from "./components/header";
import { homepage } from "./pages/homepage.js";
import { pageHandler } from "./helper-functions";

outline();

const target = document.querySelector(".content");

pageHandler();
target.appendChild(header());
