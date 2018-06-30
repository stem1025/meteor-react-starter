import { mount } from 'react-mounter';
import { BookDetailsPageTracker } from "./tracker";

FlowRouter.route('/books/:_id', {
	action: (params) => {
		mount(BookDetailsPageTracker, {
			params: params
		});
	}
});
