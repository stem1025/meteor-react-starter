import { mount } from 'react-mounter';
import { CartPageTracker } from "./tracker";

FlowRouter.route('/cart', {
	action: () => {
		mount(CartPageTracker, {});
	}
});
