import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Tokens
import GlobalStyle from "./components/00_tokens/global-style";

import HomePage from "./components/04_pages/home-page/";
import Example from "./experiments/example/";
import Experiment from "./experiments/example/experiment/";

const firebaseConfig = {
	apiKey: "AIzaSyCi6bT-GeOdGFYcXesvTH9p2etXY9esGLk",
	authDomain: "doorway-effect-1.firebaseapp.com",
	projectId: "doorway-effect-1",
	storageBucket: "doorway-effect-1.appspot.com",
	messagingSenderId: "817998086455",
	appId: "1:817998086455:web:1074ad3e097e61120d1ab2",
	measurementId: "G-X5LZ925KER",
	databaseURL:
		"https://doorway-effect-1-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
