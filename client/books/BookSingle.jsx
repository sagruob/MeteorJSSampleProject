import React, {Component} from 'react';

export default class BookSinlge extends Component {
	toggleChecked() {
		Meteor.call('toggleBook', this.props.book, this.props.book.complete);
	}
	deleteBook() {
		Meteor.call('deleteBook', this.props.book);
	}

	render() {
		const bookClass = this.props.book.complete ? "checked" : "";

		return (
			<li className={bookClass}>
				<input type="checkbox" 
					readOnly={true}
					checked={this.props.book.complete}
					onClick={this.toggleChecked.bind(this)} />
				{this.props.book.text}				
				<button className="btn-cancel"
				onClick={this.deleteBook.bind(this)}>
				&times;
				</button>
			</li>
		)
	}
}