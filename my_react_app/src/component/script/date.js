const currentYear = document.getElementById("currentyear");
const year = new Date();
currentYear.innerHTML=year.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML=`Last Modified ${document.lastModified}`;