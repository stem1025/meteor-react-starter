import { mount } from 'react-mounter';
import { RegisterPageTracker } from "./tracker";

FlowRouter.route('/register', {
	action: () => {
		mount(RegisterPageTracker, {});
	}
});
