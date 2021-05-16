const express = require("express");
const app = express();
const path = require("path");
const connect = require("./db/connect");
const Details = require("./db/userSchema");

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
    res.sendFile(path.join(__dirname + "/form.html"));
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
    } = req.body;

    const details = new Details({
        // sl_no,
        // id_title,
        // first_name: id_first_name,
        // last_name: id_last_name,
        // sex: id_sex,
        // age: id_age,
        // email: id_email,
        // phone: id_phone,
        // address: id_address,
        // type_dm: id_type_dm,
        // duration: id_duration,
        // date_of_diabetes: id_date_of_diabetes,
        // treatment: id_treatment,
        // blood_sugar_level: blood_sugar_level,
        // FBS: FBS,
        // PPBS: PPBS,
        // Glycosylated_hb: Glycosylated_hb,
        plaque_index,
        gingival_index,
        probing_pocket,
        clinical_attached_levels,
        probing_pocket_depth,
        clinical_attachment_levels,
        mucosal,
        pufa_index,
        dmft_index
    });
    details
        .save()
        .then((result) => console.log("Data saved"))
        .catch((err) => console.log(err));
    res.json({ msg: "Thank you" });
});