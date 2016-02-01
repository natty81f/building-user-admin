Template.users.onCreated( () => {
  Template.instance().subscribe( 'users' );
});

Template.users.helpers({
  users: function() {
    var users = Meteor.users.find();

    if ( users ) {
      return users;
    }
  },
  hasInvitations: function() {
    var invitations = Invitations.find().count();
    return invitations < 1 ? false : true;
  },
  invitations: function() {
    var invitations = Invitations.find();

    if ( invitations ) {
      return invitations;
    }
  }
});