import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';


import BooksForm from './BooksForm.jsx';
import BookSingle from './BookSingle.jsx';



Books = new Mongo.Collection("books");

export default class BooksWrapper extends TrackerReact(React.Component) {

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

	books() {
		return Books.find().fetch();
	}


	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<BooksForm />
				<ReactCssTransitionGroup
					component="ul"
					className="resolutions"
					transitionName="resolutionLoad"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}
					>
				{this.books().map( (book)=>{
					return <BookSingle key={book._id} book={book} />
				})}
				</ReactCssTransitionGroup>
			</div>
		)
	}
}