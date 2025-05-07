function insert_Row() {
    //Write your code here
  const table=document.querySelector("#sampleTable")
    const row = table.insertRow(0); // Insert a new row at the end of the table
    const cell1 = row.insertCell(0); // Insert a new cell in the row
    const cell2 = row.insertCell(1); // Insert a new cell in the row
    cell1.innerHTML = "New Cell1"; // Add some text to the new cell
    cell2.innerHTML = "New Cell2"; // Add some text to the new cell

  
}
