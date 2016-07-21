Books = new Mongo.Collection("books");	

Meteor.publish("allBooks", function() {
	return Books.find();
});

Meteor.publish("userBooks", function() {
	return Books.find({user:this.userId});
});
