const mongoose = require("mongoose");

const suggestionsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    s_name: String,
    s_email: String,
    suggestion: String
});
module.exports = mongoose.model("Suggestions", suggestionsSchema);