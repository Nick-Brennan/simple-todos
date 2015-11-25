Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }   
  });

  Template.body.events({
    "submit .new-task": function(e){
      e.preventDefault();
      var text = e.target.text.value;
      Tasks.insert({
        text: text,
        createdAt: new Date()
      });
      e.target.text.value = "";
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
