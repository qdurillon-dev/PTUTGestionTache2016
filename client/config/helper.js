UI.registerHelper('getGlobal', function(varName) {
    return Globals[varName];
});

UI.registerHelper('setTitle', function(title){
    if(!title){
        title = Globals.appName;
    }
    else{
        title += " - " + Globals.appName;
    }
    document.title = title;
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

/**
 * Permet de récupérer les données de la collection
 */
UI.registerHelper('getTache', function() {
    return taches.find().fetch();
});

UI.registerHelper('getCategorie', function() {
    return categories.find().fetch();
});

UI.registerHelper('getMailingList', function() {
    return mailingList.find().fetch();
});

UI.registerHelper('getCategorieOption', function() {
    return categories.find().map(function (c) {
        return {label: c.nom, value: c.nom};
    });
});

UI.registerHelper('getMailingListOption', function() {
    return mailingList.find().map(function (c) {
        return {label: c.nom, value: c.nom};
    });
});