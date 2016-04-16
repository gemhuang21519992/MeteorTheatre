FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "auditoriums"});
    }
});

FlowRouter.route('/:_id', {
    action: function(params) {
        var s = Screen.findOne({_id:params._id});
        BlazeLayout.render("layout", {main: "bigscreen", data: s});
    }
});