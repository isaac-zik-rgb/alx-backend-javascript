import { RowID, RowElement } from './interface';

// type declaration for the following functions:

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): boolean;
declare function updateRow(rowId: RowID, row: RowElement): boolean;

export { insertRow, deleteRow, updateRow };