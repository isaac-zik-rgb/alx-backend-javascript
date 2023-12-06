namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java {
        constructor(public name: string, public teacher: Teacher) { }

        getRequirements(): string {
            return `Here is the list of requirements for Java`;
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return `No available teacher`;
        }
    }
}