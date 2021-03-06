import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { BookDetailsPage } from "./book-details-page";
import { books_db } from "/shared/collections/books";
import { Files } from "/shared/collections/files";
import { carts_db } from "/shared/collections/carts";

export const BookDetailsPageTracker = withTracker(() => {
	Meteor.subscribe('books_db');
	Meteor.subscribe('files_db');
	return {
		Meteor: {
			collection: {
				books: books_db.find().fetch(),
				files: Files.find().fetch(),
				carts: carts_db.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(BookDetailsPage);
