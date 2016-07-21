import React, {Component} from 'react';

export default class BooksForm extends Component {

	addBook(event) {
		event.preventDefault();

		var text = this.refs.book.value.trim();

		Meteor.call('addBook', text, ()=> {
			this.refs.book.value = "";
		});
	}

	render() {
		return (
			<form className="new-book" onSubmit={this.addBook.bind(this)}>
					<input type="text" ref="book" placeholder="Book title" />
					
			</form>
		)
	}
}