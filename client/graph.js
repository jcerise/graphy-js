Graphy.Graphs = {
    create: function(name, owner) {
        //Create a new graph
        GraphsModel.insert({
            "name": name,
            "owner": owner
        });
    },
    rename: function(graph, newName) {
        //Update an existing graph with a new name
        GraphsModel.update({"_id" : graph},
            {$set :  {"name": new_name}}
         );
    },
    delete: function(graph) {
        //Delete a graph
        GraphsModel.remove({"_id": graph});
    },
    change_current: function(graph) {
        //Set a graph as the current, default graph
        Session.set("current_graph", graph);
    }
}