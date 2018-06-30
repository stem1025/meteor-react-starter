import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { AddBookPage } from "./add-book-page";
import { books_db } from "/shared/collections/books";

export const AddBookPageTracker = withTracker(() => {
	Meteor.subscribe('books_db');
	return {
		Meteor: {
			collection: {
				books: books_db.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(AddBookPage);
