Template.graphy.logged_in = function() {
    return Meteor.user();
};

Template.graphy.graph_selected = function() {
    return Session.get("current_graph");
};

Template.graphs_page.has_graphs = function() {
    return GraphsModel.find({}).count();
};

Template.graphs_page.graphs = function() {
    return GraphsModel.find({});
};

Template.graphs_page.events({
    'click #new_graph' : function() {
        Graphy.Graphs.create("new Graph (Double Click to rename)", Meteor.userId());
    },
    'dblclick .graph_title' : function() {
        var new_name = prompt("Please enter a new name:", this.name);
        if (new_name) {
            Graphy.Graphs.rename(this._id, new_name);
        }
    },
    'click .delete_graph' : function() {
        if (confirm("Are you sure you want to delete " + this.name)) {
            Graphy.Graphs.delete(this._id);
        }
    },
    'click .open_graph' : function() {
        Graphy.Graphs.change_current(this);
    }
});