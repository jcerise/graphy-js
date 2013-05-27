Template.graphy.logged_in = function() {
    return Meteor.user();
};

Template.graphy.graph_selected = function() {
    return Session.get("current_graph");
}