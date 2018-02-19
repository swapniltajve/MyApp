Ext.define('MyApp.myStudy.controller.StudyContainerController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'MyApp.myStudy.view.StudyModel',
        'MyApp.myStudy.view.StudyForm'
    ],

    alias: 'controller.main',
    model: 'studyModel',
    onFormSubmitClick: function (sender, record) {
        debugger
        Ext.Msg.alert('Status', 'Changes saved successfully.');
    },
});