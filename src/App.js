import React from 'react';
import {
	Route, Redirect, Switch,
	BrowserRouter as Router,
} from 'react-router-dom';
// import SignIn from './components/signIn/SignIn';
import HomeView from './views/HomeView';


function App() {
	return (
		<Router>
			<Switch>
				{/* <Route exact path="/" component={currentUser ? View.Home : View.LandingPage} /> */}
				<Route exact path="/" component={HomeView} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
