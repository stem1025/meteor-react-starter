import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { BooksPage } from "./books-page";
import { books_db } from "/shared/collections/books";
import { Files } from "/shared/collections/files";

export const BooksPageTracker = withTracker(() => {
	Meteor.subscribe('books_db');
	Meteor.subscribe('files_db');
	return {
		Meteor: {
			collection: {
				books: books_db.find().fetch(),
				files: Files.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(BooksPage);
