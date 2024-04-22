export default function createEmployeeList(report) {
  const employeesList = [];

  for (const department of Object.values(report.allEmployees)) {
    employeesList.push(...department);
  }

  return employeesList;
}
