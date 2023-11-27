import getNumberOfDepartments from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => getNumberOfDepartments.length,
  };
  return employees;
}
