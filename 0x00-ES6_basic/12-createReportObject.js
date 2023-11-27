import getNumberOfDepartments from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: () => getNumberOfDepartments.length,
  };
}
