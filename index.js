const express = require("express");
const app = express();
const path = require("path");
const connect = require("./db/connect");
const Details = require("./db/userSchema");
const Doctor = require("./db/doctorSchema");

connect();
app.listen(3000, () => console.log("Server started at 3000"));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/login.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));
});

app.get("/retrieve/:id", (req, res) => {
  Details.findOne({ slno: req.params.id }, function (err, data) {
    if (err) console.log("Error , failed");
    else {
      if (data === null) res.json({ msg: "failed" });
      else {
        res.json({ msg: data });
      }
    }
  });
});

app.get("/retrieval", (req, res) => {
  res.sendFile(path.join(__dirname + "/retrieval.html"));
});

app.post("/sign-up", (req, res) => {
  console.log(req.body);
  const doctor = new Doctor({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
  });
  doctor
    .save()
    .then((result) => console.log("Doctor sign up details saved"))
    .catch((err) => console.error("Error"));
  res.json({ msg: "Data saved" });
});

app.post("/sign-in", (req, res) => {
  console.log(req.body);
  Doctor.findOne(
    { username: req.body.username, password: req.body.password },
    function (err, result) {
      if (err) res.json({ msg: "Failed to get data" });
      else res.json(result);
    }
  );
});

app.post("/details", (req, res) => {
  console.log(req.body);
  const {
    sl_no,
    id_title,
    id_first_name,
    id_last_name,
    id_sex,
    id_age,
    id_email,
    id_phone,
    id_address,
    id_type_dm,
    id_duration,
    id_date_of_diabetes,
    id_treatment,
    blood_sugar_level,
    FBS,
    PPBS,
    Associated_Systemic_Problems,
    Diabetic_complications,

    Glycosylated_hb,
    plaque_index,
    gingival_index,
    probing_pocket,
    clinical_attached_levels,
    probing_pocket_depth,
    clinical_attachment_levels,

    pufa_index,
    dmft_index,
    mucosal,
    questions,
  } = req.body;

  const details = new Details({
    slno: sl_no,
    title: id_title,
    first_name: id_first_name,
    last_name: id_last_name,
    sex: id_sex,
    age: id_age,
    email: id_email,
    phone: id_phone,
    address: id_address,
    type_dm: id_type_dm,
    duration: id_duration,
    date_of_diabetes: id_date_of_diabetes,
    treatment: id_treatment,
    blood_sugar_level: blood_sugar_level,
    FBS: FBS,
    PPBS: PPBS,
    Diabetic_complications: Diabetic_complications,
    Associated_Systemic_Problems: Associated_Systemic_Problems,
    Glycosylated_hb: Glycosylated_hb,
    plaque_index,
    gingival_index,
    probing_pocket,
    clinical_attached_levels,
    probing_pocket_depth,
    clinical_attachment_levels,
    mucosal,
    pufa_index,
    dmft_index,
  });
  details
    .save()
    .then((result) => console.log("Data saved"))
    .catch((err) => console.log(err));
  res.json({ msg: "Thank you" });
});
