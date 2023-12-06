"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
var newRowID = CRUD.insertRow(row);
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
var obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
