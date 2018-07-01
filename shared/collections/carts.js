import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Carts = new Mongo.Collection('carts');

Carts.schema = new SimpleSchema({
	CustomerID: String,
	Bid: String,
	Quantity: Number
});

export const carts_db = Carts;
