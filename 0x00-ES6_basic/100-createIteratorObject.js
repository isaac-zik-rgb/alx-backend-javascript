export default function createIteratorObject(report) {
    //This function will return an iterator to go through every employee in every department.
    const employee = []
    for (const key in report.allEmployees) {
        employee.push(...report.allEmployees[key])
    }
    return employee

}