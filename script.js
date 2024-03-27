document.getElementById('fitnessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;
    const sets = document.getElementById('sets').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;

    const record = { exercise, reps, sets, time, date };
    addRecord(record);
    displayRecords();
});

function addRecord(record) {
    let records = JSON.parse(localStorage.getItem('fitnessRecords')) || [];
    records.push(record);
    localStorage.setItem('fitnessRecords', JSON.stringify(records));
}

function displayRecords() {
    const records = getRecords();
    const tableBody = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    records.forEach(record => {
        let row = tableBody.insertRow();
        Object.values(record).forEach(text => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(text || '-')); // Display a placeholder if the field is empty
        });
    });
}

displayRecords();
