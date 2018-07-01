import { Meteor } from 'meteor/meteor';
import { carts_db } from "/shared/collections/carts";

Meteor.publish('carts_db', () => {
	return carts_db.find({
		CustomerID: Meteor.userId()
	});
});

carts_db.allow({
	insert(userId, doc) {
		return (doc['CustomerID'] === Meteor.userId());
	},
	update(userId, doc, fieldNames, modifier) {
		return (doc['CustomerID'] === Meteor.userId());
	},
	remove(userId, doc) {
		return (doc['CustomerID'] === Meteor.userId());
	}
});
