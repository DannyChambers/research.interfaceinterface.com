import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Tokens
import GlobalStyle from "./components/00_tokens/global-style";

import HomePage from "./components/04_pages/home-page/";
import Example from "./experiments/example/";
import Experiment from "./experiments/example/experiment/";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/example/'>
						<Example />
					</Route>
					<Route exact path='/example/experiment/'>
						<Experiment />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
