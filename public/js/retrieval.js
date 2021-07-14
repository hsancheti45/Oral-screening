document.getElementById("retrieval").addEventListener("click", (e) => {
  e.preventDefault();
  const id = prompt("Enter SL No:");
  console.log(id);
  fetch(`http://127.0.0.1:3000/retrieve/${id}`)
    .then((res) => res.json())
    .then((data) => {
      
      if (data.msg === "failed") console.log("sl no failed!");
      console.log(data.msg);
      document.getElementById("sl_no").value = data.msg.slno;
      document.getElementById("id_title").value= data.msg.title;
      document.getElementById("id_first_name").value= data.msg.first_name;
      document.getElementById("id_last_name").value= data.msg.last_name;
      document.getElementById("id_sex").value= data.msg.sex;
      document.getElementById("id_age").value= data.msg.age;
      document.getElementById("agelabel").value= data.msg.age;
      document.getElementById("id_email").value= data.msg.email;
      document.getElementById("id_phone").value= data.msg.phone;
      document.getElementById("id_address").value= data.msg.address;
      document.getElementById("id_type_dm").value= data.msg.type_dm;
      document.getElementById("id_duration").value= data.msg.duration;
      document.getElementById("id_date_of_diabetes").value= data.msg.date_of_diabetes;
      document.getElementById("id_treatment").value= data.msg.treatment;
      document.getElementById("id_insulin").value= data.msg.insulin;
      document.getElementById("id_dosage").value= data.msg.dosage;
      document.getElementById("id_Od").value= data.msg.Od;
      document.getElementById("Name_os").value= data.msg.Name_os;
      document.getElementById("Dosage_os").value= data.msg.Dosage_os;
      document.getElementById("blood_sugar_level").value= data.msg.blood_sugar_level;
      document.getElementById("FBS").value= data.msg.FBS;
      document.getElementById("PPBS").value= data.msg.PPBS;
      document.getElementById("Glycosylated_hb").value= data.msg.lycosylated_hb;
      document.getElementById("Diabetic_complications").value= data.msg.Diabetic_complications;
      document.getElementById("Associated_Systemic_Problems").value= data.msg.Associated_Systemic_Problems;
      for (let i = 0; i < data.msg.plaque_index.length; i++) 
        document.getElementsByClassName("plaque-index")[i].value= data.msg.plaque_index[i];
      for (let i = 0; i < data.msg.gingival_index.length; i++) 
        document.getElementsByClassName("gingival-index")[i].value= data.msg.gingival_index[i];
      for (let i = 0; i < data.msg.probing_pocket.length; i++) 
        document.getElementsByClassName("probing-pocket")[i].value= data.msg.probing_pocket[i];
      for (let i = 0; i < data.msg.clinical_attachment_levels.length; i++) 
        document.getElementsByClassName("clinical-attachment-levels")[i].value= data.msg.clinical_attachment_levels[i];
      for (let i = 0; i < data.msg.probing_pocket_depth.length; i++) 
        document.getElementsByClassName("probing-pocket-depth")[i].value= data.msg.probing_pocket_depth[i];
      for (let i = 0; i < data.msg.clinical_attached_levels.length; i++) 
        document.getElementsByClassName("clinical-attached-levels")[i].value= data.msg.clinical_attached_levels[i];
      for (let i = 0; i < data.msg.dmft_index.length; i++) 
        document.getElementsByClassName("dmft-index")[i].value= data.msg.dmft_index[i];
      for (let i = 0; i < data.msg.pufa_index.length; i++) 
        document.getElementsByClassName("pufa-index")[i].value= data.msg.pufa_index[i];
      for (let i = 0; i < data.msg.mucosal.length; i++) 
        document.getElementsByClassName("mucosal-table")[i].value= data.msg.mucosal[i];
      for (let i = 0; i < data.msg.question.length; i++) 
        document.getElementsByClassName("answers")[i].innerHTML= " " + data.msg.question[i];
    })
    .catch((err) => console.log("Error in fetching data"));
});

document.getElementById("sign--out").addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem("username");
  window.location.href = "/";
})

