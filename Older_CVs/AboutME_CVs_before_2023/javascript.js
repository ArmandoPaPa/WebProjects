document.getElementById("jsPressStart").addEventListener("click", function () {
  document.getElementById("jsStart").style.display = "block";
  document.getElementById("jsProjects").style.display = "none";
  document.getElementById("jsSoft").style.display = "none";
  document.getElementById("jsEvents").style.display = "none";
});

document
  .getElementById("jsPressProjects")
  .addEventListener("click", function () {
    document.getElementById("jsStart").style.display = "none";
    document.getElementById("jsProjects").style.display = "flex";
    document.getElementById("jsSoft").style.display = "none";
    document.getElementById("jsEvents").style.display = "none";
    //  document.getElementById("jsMainBackground").style.backgroundImage="url(../img/Conf_Small.jpg)";
  });

document.getElementById("jsPressSoft").addEventListener("click", function () {
  document.getElementById("jsStart").style.display = "none";
  document.getElementById("jsProjects").style.display = "none";
  document.getElementById("jsSoft").style.display = "flex";
  document.getElementById("jsEvents").style.display = "none";
});

document.getElementById("jsPressEvents").addEventListener("click", function () {
  document.getElementById("jsStart").style.display = "none";
  document.getElementById("jsProjects").style.display = "none";
  document.getElementById("jsSoft").style.display = "none";
  document.getElementById("jsEvents").style.display = "flex";
});
