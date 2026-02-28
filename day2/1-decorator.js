class Teacher {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  display() {
    Object.entries(this).forEach(([key, value]) =>
      console.log(`${key}: ${value}`),
    );
  }
}

class TeacherDecorator {
  constructor(teacher, salary, nationality, street) {
    this.teacher = teacher;
    this.salary = salary;
    this.nationality = nationality;
    this.street = street;
  }

  get id() {
    return this.teacher.id;
  }
  get name() {
    return this.teacher.name;
  }

  display() {
    this.teacher.display();
    Object.entries(this)
      .slice(1)
      .forEach(([key, value]) => console.log(`${key}: ${value}`));
  }
}

const teacher = new Teacher(1, 'Ali');
teacher.display();

console.log('----------------------');

const newTeacher = new TeacherDecorator(teacher, 9000, 'Egyptian', '123str');
newTeacher.display();
