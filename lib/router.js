Router.configure({
    layoutTemplate: "mainLayout"
});

Router.onBeforeAction(function() {

    if (!Meteor.userId()) { // Si l'utilisateur n'est pas connecté, on lui affiche le formulaire de login
        this.render("login");
    } else {
        this.next(); // Sinon, la requête continue normalement
    }

}, {
    except: [
        "login", "home", "register"
    ]
});

Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('/login', {
    name: "login",
    template: "login"
});

Router.route('/register', {
    name: "register",
    template: "register"
});

Router.route('/category/new', {
    name: "newCategorie",
    template: "newCategorie"
});

Router.route('/mailinglist', {
    name: 'mailingList'
});