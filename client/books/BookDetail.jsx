import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BooksDetail extends TrackerReact(Component) {
	constructor() {
		super();

		this.state = {
			subscription: {
				books: Meteor.subscribe("userBooks")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.books.stop();
	}

	book() {
		return Books.findOne(this.props.id);
	}

	render() {
		let book = this.book();
		if(!book) {
			return (
				<div>
					Loading...
				</div>
			)
		}
		return (
			<div>
				<h1>{book.text}</h1>
			</div>	
		)
	}
}