Ext.define('MyApp.myStudy.view.StudyModel', {
    extend: 'Ext.data.Model',

    requires: [
        'MyApp.myStudy.view.StudyStore'
    ],

    store: {
        type: 'studyStore'
    },

    alias: 'model.studyModel',
    fields: [
        'firstName', 'lastName', 'company', 'email'
    ]
});
