import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Books = new Mongo.Collection('books');

Books.schema = new SimpleSchema({
	Title: String,
	Cover: {
		type: String,
		optional: true
	},
	Price: Number,
	Author: String,
	Details: String,
	Quantity: Number
});

export const books_db = Books;
