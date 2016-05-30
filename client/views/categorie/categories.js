Template.categoriesHome.helpers({
   'List': function(){
       return categories.find().fetch();
   }
});

Template.categoriesHome.events({
    'click .modif_categorie': function() {
        Router.go(Utils.pathFor('updateCategorie',{_id: this._id}));
    },
    'click .delete_categorie': function() {
        var id = this._id;
        swal({
                title: "Etes vous sûr?",
                text: "La catégorie sera définitivement supprimé!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Oui",
                cancelButtonText: "Annuler",
                closeOnConfirm: false
            },
            function(){
                categories.remove(id);
                swal("Suppression!", "La catégorie à été supprimé.", "success");
            });
    }
});

