"use strict";

fetch('http://localhost:8081/api/categories')
  .then(response => response.json())
  .then(data => {
    data.forEach(data => {
      // fills 2nd dropdown
      var element = document.createElement("option");
      element.textContent = data.name;
      categoryDropdown.appendChild(element);
    });
  });

  let searchButton = document.getElementById("searchBtn");
  const firstDropdown = document.getElementById("searchBy");
  const categoryDropdown = document.getElementById("searchCategory");

  // displays the 2nd dropdown menu if "search by category" is selected
  function showSecondDropdown(el){
    if (el.options[el.selectedIndex].value == 1){
      categoryDropdown.style.display = 'block';
    }else{
      categoryDropdown.style.display = 'none';
    }
  }

  const info = document.getElementById("display");
  fetch('http://localhost:8081/api/products')
    .then(response => response.json())
    .then(data => {
    data.forEach(data => {
      if (firstDropdown.value == 2){
        info.innerHTML +=
      `<div class="col-8">
      <div class="row gap-3">
          <div class="card" style="width: 15rem;"> 
              <div class="card-body">
                <h5 class="card-title">${data.productName}</h5>
                <p class="card-text">${data.unitPrice}</p>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: ${unitsInStock}%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="card-text">${unitsInStock} in stock</p>
                <p class="card-text"><small class="text-body-secondary"><a href="details.html">See Details</a></small></p>
              </div>
          </div>
      </div>`
      }

      })
    });
  
