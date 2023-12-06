interface Student {
   firstName: string;
    lastName: string;
    age: number;
    location: string;

    }
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 19,
    location: 'New York'
};
const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');
th1.innerHTML = 'firstName';
th2.innerHTML = 'location';
th3.innerHTML = 'age';
th4.innerHTML = 'lastName';
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
thead.appendChild(tr);
table.appendChild(thead);
studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;
    td3.innerHTML = student.age.toString();
    td4.innerHTML = student.lastName;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);

