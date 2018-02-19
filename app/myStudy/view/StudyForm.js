Ext.define('MyApp.myStudy.view.StudyForm', {
    extend: 'Ext.form.Panel',
    xtype: 'study-form',

    requires: [
        'MyApp.myStudy.view.StudyModel'
    ],

    frame: true,
    title: 'Study Form',
    bodyPadding: 10,
    autoScroll: true,
    //width: 355,

    fieldDefaults: {
        labelAlign: 'right',
        //labelWidth: 115,
        msgTarget: 'side'
    },

    items: [
        {
            xtype: 'fieldset',
            title: 'Study Information',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'firstName',

            },
                {
                    fieldLabel: 'Last Name',
                    emptyText: 'Last Name',
                    name: 'lastName'
                },
                {
                    fieldLabel: 'Company',
                    name: 'company'
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype: 'email'
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    handler: 'onFormSubmitClick'

                }
            ]
        }
    ],
    loadRecord: function(model) {
        debugger
/*        var i, len, associations = model.associations.items, name, field;

        this.callParent(arguments);

        // loadRecord() won't include associated data, so let's do that.
        for (i=0, len=associations.length; i<len; i++) {
            name = associations[i].name;
            field = this.down('[name='+name+']');
            if (field && field.isFormField && field.bindStore) {
                field.bindStore(model[name]());
            }
        }*/
    },
});
