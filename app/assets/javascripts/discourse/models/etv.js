Discourse.Etv = Discourse.Model.extend({
    loadUsers: function () {
        Discourse.ajax('/post_actions/users', {
            data: {

            }
        }).then(function (result) {
            var users = Em.A();
            console.log(users);
        });
    }
});