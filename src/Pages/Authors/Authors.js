import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthorForm from './Components/AuthorForm';
import AuthorProfile from './Components/AuthorProfile';
import AuthorsList from './Components/AuthorsList';

const Authors = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={AuthorsList}/>
			<Route path={`${match.path}/add-author`} component={AuthorForm} />
			<Route path={`${match.path}/:authorId`} component={AuthorProfile} />
		</Switch>
	);
};

export default Authors;
