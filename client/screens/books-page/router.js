import { mount } from 'react-mounter';
import { BooksPageTracker } from "./tracker";

FlowRouter.route('/books', {
	action: () => {
		mount(BooksPageTracker, {});
	}
});
