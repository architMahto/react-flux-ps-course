import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddAuthor from './Components/AddAuthor';
import AuthorsList from './Components/AuthorsList';

const Authors = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={AuthorsList}/>
			<Route path={`${match.path}/add-author`} component={AddAuthor} />
			<Route path={`${match.path}/manage-author/:authorId`} component={AddAuthor} />
		</Switch>
	);
};

export default Authors;
