import { Meteor } from 'meteor/meteor';
import { invoice_db } from "/shared/collections/invoice";

Meteor.publish('invoice_db', () => {
	return invoice_db.find();
});
