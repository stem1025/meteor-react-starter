import { mount } from 'react-mounter';
import { LoginPageTracker } from "./tracker";

FlowRouter.route('/login', {
	action: () => {
		mount(LoginPageTracker, {});
	}
});
