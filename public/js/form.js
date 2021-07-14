document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const sl_no = document.getElementById("sl_no").value;
  const id_title = document.getElementById("id_title").value;
  const id_first_name = document.getElementById("id_first_name").value;
  const id_last_name = document.getElementById("id_last_name").value;
  const id_sex = document.getElementById("id_sex").value;
  const id_age = document.getElementById("id_age").value;
  const id_email = document.getElementById("id_email").value;
  const id_phone = document.getElementById("id_phone").value;
  const id_address = document.getElementById("id_address").value;
  const id_type_dm = document.getElementById("id_type_dm").value;
  const id_duration = document.getElementById("id_duration").value;
  const id_date_of_diabetes = document.getElementById(
    "id_date_of_diabetes"
  ).value;
  const id_treatment = document.getElementById("id_treatment").value;
  const id_insulin = document.getElementById("id_insulin").value;
  const id_dosage = document.getElementById("id_dosage").value;
  const id_Od = document.getElementById("id_Od").value;
  const Name_os = document.getElementById("Name_os").value;
  const Dosage_os = document.getElementById("Dosage_os").value;
  const blood_sugar_level = document.getElementById("blood_sugar_level").value;
  const FBS = document.getElementById("FBS").value;
  const PPBS = document.getElementById("PPBS").value;
  const Glycosylated_hb = document.getElementById("Glycosylated_hb").value;
  const Diabetic_complications = document.getElementById(
    "Diabetic_complications"
  ).value;
  const Associated_Systemic_Problems = document.getElementById(
    "Associated_Systemic_Problems"
  ).value;

  // plaque
  let plaque_index_ = document.getElementsByClassName("plaque-index");
  let plaque_index = [];

  // console.log(plaque_index_);
  for (let i = 0; i < plaque_index_.length; i++) {
    plaque_index[i] = plaque_index_[i].value;
  }
  // console.log(plaque_index);

  // gingival
  let gingival_index_ = document.getElementsByClassName("gingival-index");
  let gingival_index = [];

  // console.log(gingival_index_);
  for (let i = 0; i < gingival_index_.length; i++) {
    gingival_index[i] = gingival_index_[i].value;
  }
  // console.log(gingival_index);

  // probing_pocket_
  let probing_pocket_ = document.getElementsByClassName("probing-pocket");
  let probing_pocket = [];

  // console.log(probing_pocket_);
  for (let i = 0; i < probing_pocket_.length; i++) {
    probing_pocket[i] = probing_pocket_[i].value;
  }
  // console.log(probing_pocket);

  // clinical_attachment_levels
  let clinical_attachment_levels_ = document.getElementsByClassName(
    "clinical-attachment-levels"
  );
  let clinical_attachment_levels = [];

  // console.log(clinical_attachment_levels_);
  for (let i = 0; i < clinical_attachment_levels_.length; i++) {
    clinical_attachment_levels[i] = clinical_attachment_levels_[i].value;
  }
  // console.log(clinical_attachment_levels);

  // probing_pocket_depth
  let probing_pocket_depth_ = document.getElementsByClassName(
    "probing-pocket-depth"
  );
  let probing_pocket_depth = [];

  // console.log(probing_pocket_depth_);
  for (let i = 0; i < probing_pocket_depth_.length; i++) {
    probing_pocket_depth[i] = probing_pocket_depth_[i].value;
  }
  // console.log(probing_pocket_depth);

  // clinical_attached_levels
  let clinical_attached_levels_ = document.getElementsByClassName(
    "clinical-attached-levels"
  );
  let clinical_attached_levels = [];

  // console.log(clinical_attached_levels_);
  for (let i = 0; i < clinical_attached_levels_.length; i++) {
    clinical_attached_levels[i] = clinical_attached_levels_[i].value;
  }
  // console.log(clinical_attached_levels);

  //dmft index
  let dmft_index_ = document.getElementsByClassName("dmft-index");
  let dmft_index = [];

  // console.log(dmft_index_);
  for (let i = 0; i < dmft_index_.length; i++) {
    dmft_index[i] = dmft_index_[i].value;
  }
  // console.log(dmft_index);

  //pufa index
  let pufa_index_ = document.getElementsByClassName("pufa-index");
  let pufa_index = [];

  // console.log(pufa_index_);
  for (let i = 0; i < pufa_index_.length; i++) {
    pufa_index[i] = pufa_index_[i].value;
  }
  // console.log(pufa_index);

  //mucosal table
  let mucosal_ = document.getElementsByClassName("mucosal-table");
  let mucosal = [];

  // console.log(mucosal_);
  for (let i = 0; i < mucosal_.length; i++) {
    mucosal[i] = mucosal_[i].value;
  }
  // console.log(mucosal);
  // questions
  let our_labels = document.getElementsByClassName("form-ans");
  let question = [];
  let k=0;
  for (let i = 0; i < our_labels.length; i++) {
    for (let j = 1; j < our_labels[i].childNodes.length; j += 2) {
      if (our_labels[i].childNodes[j].checked) {
        question[k++]=our_labels[i].innerText;
        // console.log(our_labels[i].innerText);
      }
    }
  }
  // for(let i=0; i< question.length; i++)
  // {
  //   if(question[i]!=null)
  //   console.log(question[i]);
  // }

  const details = JSON.stringify({
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
    id_insulin,
    id_dosage,
    id_Od,
    Name_os,
    Dosage_os,
    blood_sugar_level,
    FBS,
    PPBS,
    Glycosylated_hb,
    Diabetic_complications,
    Associated_Systemic_Problems,

    plaque_index,
    gingival_index,
    probing_pocket,
    clinical_attached_levels,
    probing_pocket_depth,
    clinical_attachment_levels,
    dmft_index,
    pufa_index,
    mucosal,
    question,
  });
  fetch(`https://127.0.0.1:3000/details/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: details,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.msg == "Sl_no already exists"){
        alert("Sl_no already exists");
      }else{
        alert("Your data has been submitted!");
      }
    })
    .catch((err) => console.log("Error"));
});

document.getElementById("sign--out").addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem("username");
  window.location.href = "/";
})

