import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { LoginPage } from "./login-page";

export const LoginPageTracker = withTracker(() => {
	return {
		Meteor: {
			collection: {},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(LoginPage);
