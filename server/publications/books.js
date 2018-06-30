import { Meteor } from 'meteor/meteor';
import { books_db } from "/shared/collections/books";

Meteor.publish('books_db', () => {
	return books_db.find();
});

books_db.allow({
	insert(userId, doc) {
		return Roles.userIsInRole(userId, ['administrator']);
	},
	update(userId, doc, fieldNames, modifier) {
		return Roles.userIsInRole(userId, ['administrator']);
	},
	remove(userId, doc) {
		return false;
	}
});
