gradebook.js
async function fetchGradeData() {
  try {
      const response = await fetch('/grades');  // talks to server.js
      const data = await response.json();
      populateGradebook(data);
  } catch (error) {
      console.error('Error fetching grades:', error);
  }
}

function populateGradebook(data) {
  const tableBody = document.getElementById('gradebook-body');
  tableBody.innerHTML = '';

  data.forEach(student => {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = student.name;
      row.appendChild(nameCell);

      const subjectCell = document.createElement('td');
      subjectCell.textContent = student.subject;
      row.appendChild(subjectCell);

      const gradeCell = document.createElement('td');
      gradeCell.textContent = student.grade;
      row.appendChild(gradeCell);

      tableBody.appendChild(row);
  });
}

// Call fetchGradeData when the page loads
window.onload = fetchGradeData;

