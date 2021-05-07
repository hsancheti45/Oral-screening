const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema(
  {
    // sl_no: {
    //   type: Number,
    //   required: true,
    // },
    // title: {
    //   type: String,
    //   required: true,
    // },
    // first_name: {
    //   type: String,
    //   required: true,
    // },
    // last_name: {
    //   type: String,
    //   required: true,
    // },
    // sex: {
    //   type: String,
    //   required: true,
    // },
    // age: {
    //   type: Number,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // phone: {
    //   type: String,
    //   required: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    // },
    // type_dm: {
    //   type: String,
    //   required: true,
    // },
    // duration: {
    //   type: String,
    //   required: true,
    // },
    // date_of_diabetes: {
    //   type: Date,
    //   required: true,
    // },
    // treatment: {
    //   type: String,
    //   required: true,
    // },
    // blood_sugar_level: {
    //   type: String,
    //   required: true,
    // },
    // FBS: {
    //   type: Number,
    //   required: true,
    // },
    // PPBS: {
    //   type: Number,
    //   required: true,
    // },
    // Glycosylated_hb: {
    //   type: Number,
    //   required: true,
    // },
    plaque_index: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Details = mongoose.model("Detail", DetailsSchema);
module.exports = Details;
