

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java("Java", { firstName: "John", lastName: "Doe" });
export const react = new Subjects.React("React", { firstName: "John", lastName: "Doe" });
export const cTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10
};

console.log('--- C++ ---');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\n--- Java ---');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\n--- React ---');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

