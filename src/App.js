import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Tokens
import GlobalStyle from "./components/00_tokens/global-style";

import HomePage from "./components/04_pages/home-page/";
import FormPage from "./components/04_pages/form-page/";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route path='/form-page/'>
						<FormPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
