document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();

  // const sl_no = document.getElementById('sl_no').value;
  // const id_title = document.getElementById('id_title').value;
  // const id_first_name = document.getElementById('id_first_name').value;
  // const id_last_name = document.getElementById('id_last_name').value;
  // const id_sex = document.getElementById('id_sex').value;
  // const id_age = document.getElementById('id_age').value;
  // const id_email = document.getElementById('id_email').value;
  // const id_phone = document.getElementById('id_phone').value;
  // const id_address = document.getElementById('id_address').value;
  // const id_type_dm = document.getElementById('id_type_dm').value;
  // const id_duration = document.getElementById('id_duration').value;
  // const id_date_of_diabetes = document.getElementById('id_date_of_diabetes').value;
  // const id_treatment = document.getElementById('id_treatment').value;
  // const id_insulin = document.getElementById('id_insulin').value;
  // const id_dosage = document.getElementById('id_dosage').value;
  // const id_Od = document.getElementById('id_Od').value;
  // const Name_os = document.getElementById('Name_os').value;
  // const Dosage_os = document.getElementById('Dosage_os').value;
  // const blood_sugar_level = document.getElementById('blood_sugar_level').value;
  // const FBS = document.getElementById('FBS').value;
  // const PPBS = document.getElementById('PPBS').value;
  // const Glycosylated_hb = document.getElementById('Glycosylated_hb').value;
  let plaque_index_ = document.getElementsByClassName("plaque-index");
  let plaque_index = [];

  console.log(plaque_index_);
  for (let i = 0; i < plaque_index_.length; i++) {
    plaque_index[i] = plaque_index_[i].value;
  }
  console.log(plaque_index);

  const details = JSON.stringify({
    //   sl_no,
    //   id_title,
    //   id_first_name,
    //   id_last_name,
    //   id_sex,
    //   id_age,
    //   id_email,
    //   id_phone,
    //   id_address,
    //   id_type_dm,
    //   id_duration,
    //   id_date_of_diabetes,
    //   id_treatment,
    //   id_insulin,
    //   id_dosage,
    //   id_Od,
    //   Name_os,
    //   Dosage_os,
    //   blood_sugar_level,
    //   FBS,
    //   PPBS,
    //   Glycosylated_hb,
    plaque_index,
  });

  fetch("http://127.0.0.1:3000/details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: details,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Error"));
});
