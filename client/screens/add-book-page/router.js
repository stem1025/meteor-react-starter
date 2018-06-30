import { mount } from 'react-mounter';
import { AddBookPageTracker } from "./tracker";

FlowRouter.route('/books/add', {
	action: () => {
		mount(AddBookPageTracker, {});
	}
});
