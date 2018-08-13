import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthorsList from './Components/AuthorsList';

// TODO - Replace authorId render with AuthorProfile component
const Authors = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={AuthorsList}/>
			<Route path={`${match.path}/:authorId`} render={() => (<div>Author Profile</div>)}/>
		</Switch>
	);
};

export default Authors;
