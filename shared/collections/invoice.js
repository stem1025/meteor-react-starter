import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Invoice = new Mongo.Collection('invoice');

Invoice.schema = new SimpleSchema({
	CustomerID: {
		type: String
	},
	Sales: {
		type: Array
	},
	'Sales.$': {
		type: Object
	},
	Timestamp: {
		type: Date
	},
	Paid: {
		type: Boolean
	}
});

export const invoice_db = Invoice;
