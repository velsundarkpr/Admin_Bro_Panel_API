const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);
const {Insights} = require('./companies/company.entity')

const options ={
    branding:{
        companyName:'KPR Info Solutions',
        softwareBrothers: false,
        favicon:'/favicon.ico',
        logo: false,
    },
    resources: [Insights],
}
module.exports = options;