import { AUTHORS_DATA } from './AuthorData';
import _ from 'lodash';

class AuthorApi {
	_generateId = (author) => {
		return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
	};

	_clone = (item) => {
		// return cloned copy so that the item is passed by value instead of by reference
		return JSON.parse(JSON.stringify(item));
	};

	addAuthor(author) {
		if (author.id) {
			let existingAuthorIndex = _.indexOf(AUTHORS_DATA.authors, _.find(AUTHORS_DATA.authors, ));
			AUTHORS_DATA.authors.splice(existingAuthorIndex, 1, author);
		} else {
			author.id = this._generateId(author);
			AUTHORS_DATA.authors.push(author);
		}

		return this._clone(author);
	}

	deleteAuthor(id) {
		_.remove(AUTHORS_DATA.authors, { id });
	}

	getAuthorById(id) {
		return this._clone(_.find(AUTHORS_DATA.authors, { id }));
	}

	getAuthors() {
		return this._clone(AUTHORS_DATA.authors);
	}
}

export default AuthorApi;
