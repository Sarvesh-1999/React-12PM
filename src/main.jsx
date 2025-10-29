//! REACT way
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css"

import Context2 from "./allTopics/07_context2/Context2";
createRoot(document.getElementById("root")).render(
    <Context2>
        <App />
    </Context2>
);

//! JS way
// const div = document.getElementById("root")
// const h1Tag = document.createElement("h1")
// h1Tag.innerText = "Hello JS"
// div.append(h1Tag)
