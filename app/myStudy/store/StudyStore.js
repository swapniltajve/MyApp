Ext.define('MyApp.myStudy.view.StudyStore', {
    extend: 'Ext.data.Store',

    alias: 'store.studyStore',

    data: {
        firstName: 'Jean Luc',
        lastName: '',
        email: "jeanluc.picard@enterprise.com",
        company: "abc"
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
