import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { RegisterPage } from "./register-page";

export const RegisterPageTracker = withTracker(() => {
	Meteor.subscribe('users_db');
	return {
		Meteor: {
			collection: {
				users: Meteor.users.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(RegisterPage);
