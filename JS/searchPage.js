"use strict";

fetch('http://localhost:8081/api/categories')
  .then(response => response.json())
  .then(data => {
    data.forEach(data => {
      // fills 2nd dropdown
      console.log(data);
      var element = document.createElement("option");
      element.textContent = data.name;
      categoryDropdown.appendChild(element);
    });
  });


  let searchButton = document.getElementById("searchBtn");
  const firstDropdown = document.getElementById("searchBy");
  const categoryDropdown = document.getElementById("searchCategory");

  //displays the 2nd dropdown menu if "search by category" is selected
  function showSecondDropdown(el){
    if (el.options[el.selectedIndex].value == 1){
      categoryDropdown.style.display = 'block';
    }else{
      categoryDropdown.style.display = 'none';
    }
  }
