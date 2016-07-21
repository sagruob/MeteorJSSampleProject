import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import BooksWrapper from './books/BooksWrapper.jsx';
import BookDetail from './books/BookDetail.jsx';
import About from './about/About.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<BooksWrapper />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/books/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<BookDetail id={params.id} />)
		})
	}
});