import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./components/context/context";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<MyProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MyProvider>
	</React.StrictMode>
);
