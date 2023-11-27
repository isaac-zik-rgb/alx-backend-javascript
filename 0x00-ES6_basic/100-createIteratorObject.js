export default function createIteratorObject(report) {
  // This function will return an iterator to go through every employee in every department.
  const employees = [];

  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      employees.push(...report.allEmployees[key]);
    }
  }

  return employees;
}
