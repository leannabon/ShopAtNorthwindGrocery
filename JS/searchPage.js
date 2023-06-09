

fetch('http://localhost:8081/api/categories')
  .then(response => response.json())
  .then(data => {
    data.forEach(data => {
       console.log(data.name); //To check our data display

    });
  });