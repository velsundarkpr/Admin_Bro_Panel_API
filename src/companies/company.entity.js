const mongoose = require('mongoose');

const InsightsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: Date,
        required: true,
    },
});

const Insights = mongoose.model('Insights', InsightsSchema);
module.exports = {InsightsSchema, Insights}
