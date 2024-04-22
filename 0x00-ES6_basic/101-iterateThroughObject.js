export default function joinEmployeeNames(reportWithIterator) {
  let employeeString = '';

  reportWithIterator.forEach((employee, index) => {
    if (index < reportWithIterator.length - 1) {
      employeeString += `${employee} | `;
    } else {
      employeeString += employee;
    }
  });

  return employeeString;
}
