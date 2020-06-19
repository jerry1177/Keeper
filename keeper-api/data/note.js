const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    useId: { type: String, required: true },
    title: { type: String, require: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('note', noteSchema);