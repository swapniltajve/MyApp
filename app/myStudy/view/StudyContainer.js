Ext.define('MyApp.myStudy.view.StudyContainer', {
    extend: 'Ext.Container',
    xtype: 'study-container',
    //width: 660,
    requires: [
        'MyApp.myStudy.view.StudyForm',
        'MyApp.myStudy.controller.StudyContainerController'
    ],

    layout: {
        type: 'table',
        columns: 2,
        tdAttrs: {style: 'padding: 10px;'},
        border: true
    },
    autoScroll: true,
    height: 600,
    items: [
        {
            xtype: 'study-form',
            border: true
        },
        {
            xtype: 'study-form',
            border: true
        },
        {
            xtype: 'study-form',
            border: true
        }
    ]
});