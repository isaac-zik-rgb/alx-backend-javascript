"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java("Java", { firstName: "John", lastName: "Doe" });
exports.react = new Subjects.React("React", { firstName: "John", lastName: "Doe" });
exports.cTeacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10
};
console.log('--- C++ ---');
exports.cpp.teacher = exports.cTeacher;
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('\n--- Java ---');
exports.java.teacher = exports.cTeacher;
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log('\n--- React ---');
exports.react.teacher = exports.cTeacher;
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
