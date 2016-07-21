Meteor.methods({
	addBook(text) {
		check(text, String);

		if(!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		Books.insert({
			text: text,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},
	toggleBook(book) {
		check(book, Object);
		if(Meteor.userId() !== book.user) {
			throw new Meteor.Error('not-authorized');
		}
		Books.update(book._id, {
			$set: {complete: !book.complete}
		})
	},
	deleteBook(book) {
		check(book, Object);
		if(Meteor.userId() !== book.user) {
			throw new Meteor.Error('not-authorized');
		}
		Books.remove(book._id);
	}

});
