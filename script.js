// When the DOM is fully loaded, attach the event handler to the form
document.addEventListener('DOMContentLoaded', function() {
    // Attach an event listener to the form on submit
    document.getElementById('fitnessForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Retrieve the values from the form inputs
        const exercise = document.getElementById('exercise').value;
        const reps = document.getElementById('reps').value;
        const sets = document.getElementById('sets').value;
        const time = document.getElementById('time').value;
        const date = document.getElementById('date').value;

        // Create a record object
        const record = { exercise, reps, sets, time, date };

        // Add the record to local storage and update the display
        addRecord(record);
        displayRecords();

        // Clear the form fields after submission
        clearForm();
    });

    // Initially display any stored records
    displayRecords();
});

// Function to add a record to local storage
function addRecord(record) {
    let records = getRecords();
    records.push(record);
    localStorage.setItem('fitnessRecords', JSON.stringify(records));
}

// Function to retrieve records from local storage
function getRecords() {
    return JSON.parse(localStorage.getItem('fitnessRecords')) || [];
}

// Function to display the records on the page
function displayRecords() {
    const records = getRecords();
    const tableBody = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear the existing entries

    records.forEach(record => {
        let row = tableBody.insertRow();
        Object.values(record).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = text;
        });
    });
}

// Function to clear the form inputs after submission
function clearForm() {
    document.getElementById('exercise').value = '';
    document.getElementById('reps').value = '';
    document.getElementById('sets').value = '';
    document.getElementById('time').value = '';
    document.getElementById('date').value = '';
}
