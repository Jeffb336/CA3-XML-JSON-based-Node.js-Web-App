/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// retrieve the JSON data from an external file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // create an HTML table element
    const table = document.createElement('table');
  
    // iterate over the rows in the data
    data.forEach(row => {
      // create a table row element
      const tr = document.createElement('tr');
      // iterate over the values in the row
      Object.values(row).forEach(value => {
        // create a table cell element and set its text content
        const td = document.createElement('td');
        td.textContent = value;
        // append the cell to the row
        tr.appendChild(td);
      });
      // append the row to the table
      table.appendChild(tr);
    });
    // append the table to the DOM
    document.body.appendChild(table);
  });


