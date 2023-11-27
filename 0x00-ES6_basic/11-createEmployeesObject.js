export default function createEmployeesObject(departmentName, employees) {
  const employesobj = {
    [departmentName]: employees,
  };
  return employesobj;
}
