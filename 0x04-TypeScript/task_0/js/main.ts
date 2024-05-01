interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Hamza",
  lastName: "Hdili",
  age: 23,
  location: "Morocco",
}

const StudentB: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 23,
  location: "Las Vegas",
}

const studentList = [studentA, StudentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');


studentList.forEach((student) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
