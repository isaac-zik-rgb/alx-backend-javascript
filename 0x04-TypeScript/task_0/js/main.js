var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 19,
    location: 'New York'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
var th4 = document.createElement('th');
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
studentsList.forEach(function (student) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
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
