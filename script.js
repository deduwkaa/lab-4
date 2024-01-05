const resultField = document.getElementById("result")

//Створити об’єкт «Співробітник»
let Employee = {
    surname: "",
    name: "",
    gender: "",
    age: 0,
};

// Створити об’єкт «Зарплата»
let Salary = {
    position: "",
    salaryPerMonth: 0,
    calculateSalary: function () {
        return this.salaryPerMonth * 12;
    },
    changeSalary: function (newSalary) {
        this.salaryPerMonth = newSalary;
    },
    printSalary: function () {
        resultField.innerHTML = `Посада: ${this.position}, заробітня плата за місяць: ${this.salaryPerMonth}`;
        console.log(this);
    },
};

// Викликати методи для об'єкта «Зарплата»
Salary.position = "Менеджер"; // Встановлення посади
Salary.salaryPerMonth = 150; // Встановлення ставки

// Вивести інформацію про зарплату
Salary.printSalary();

// Змінити ставку
Salary.changeSalary(300);

// Вивести оновлену інформацію про зарплату
Salary.printSalary();

// Порахувати та вивести нову зарплату
console.log(`Річна зарплата: ${Salary.calculateSalary()}`);


//Додати в прототип об’єкту «Співробітник» метод «Показати дані»
Employee.showData = function () {
    resultField.innerHTML = `<p>${`Прізвище: ${this.surname}, Ім'я: ${this.name}, стать: ${this.gender}, вік: ${this.age}`}</p>`;
};

//Створити об’єкт «Керівник»
let Manager = Object.create(Employee);
Manager.department = "";
Manager.showData = function () {
    console.log(`surname: ${this.surname}, Ім'я: ${this.name}, gender: ${this.gender}, age: ${this.age}, department: ${this.department}`);
    resultField.innerHTML = `<p>${`surname: ${this.surname}, Ім'я: ${this.name}, стать: ${this.gender}, вік: ${this.age}, відділ: ${this.department}`}</p>`;
};

//Завдання на роботу з класами
class EmployeeClass {
    constructor(surname, name, gender, age) {
        this.surname = surname;
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    get fullName() {
        return `${this.surname} ${this.name}`;
    }

    set setAge(value) {
        if (value > 0) {
            this.age = value;
        } else {
            console.error("age повинен бути більше 0");
        }
    }

    showData() {
        console.log(`Прізвище: ${this.surname}, Ім'я: ${this.name}, Стать: ${this.gender}, Вік: ${this.age}`);
    }
}

class ManagerClass extends EmployeeClass {
    constructor(surname, name, gender, age, department) {
        super(surname, name, gender, age);
        this.department = department;
    }

    showData() {
        console.log(`Прізвище: ${this.surname}, Ім'я: ${this.name}, Стать: ${this.gender}, Вік: ${this.age}, Відділ: ${this.department}`);
    }
}

// Функції для виклику при натисканні кнопок
function createEmployeeObject() {
    let employeeObject = {...Employee};
    employeeObject.surname = "Іванов";
    employeeObject.name = "Іван";
    employeeObject.gender = "Чоловіча";
    employeeObject.age = 25;
    employeeObject.showData();
}

function createSalaryObject() {
    let salaryObject = {...Salary};
    salaryObject.position = "Менеджер";
    salaryObject.salaryPerMonth = 150;
    salaryObject.printSalary();
}

function copyPropertiesAndMethods() {
    const employeeObject = { ...Employee };
    employeeObject.surname = "Іванов";
    employeeObject.name = "Іван";
    employeeObject.gender = "Чоловіча";
    employeeObject.age = 25;

    const salaryObject = {...Salary};
    salaryObject.position = "Менеджер";
    salaryObject.salaryPerMonth = 150;


    let employeeCopy = {...employeeObject};
    let salaryCopy = {...salaryObject};
    resultField.innerHTML = `
            <p>
              ${`Прізвище(копія): ${employeeCopy.surname}, Ім'я(копія): ${employeeCopy.name}, стать(копія): ${employeeCopy.gender}, вік(копія): ${employeeCopy.age}<br/> поле позиція(копія): ${salaryCopy.position}, заробітня плата(копія): ${salaryCopy.salaryPerMonth}`}
              </p>`;

    console.log(employeeCopy, salaryCopy);
}

function addShowDataMethod() {
    let exampleEmployee = Object.create(Employee);
    exampleEmployee.surname = "Петров";
    exampleEmployee.name = "Петро";
    exampleEmployee.gender = "Чоловіча";
    exampleEmployee.age = 30;
    exampleEmployee.showData();
}

function createManagerObject() {
    let managerObject = Object.create(Manager);
    managerObject.surname = "Лодь";
    managerObject.name = "Анастасія";
    managerObject.gender = "Жіноча";
    managerObject.age = 35;
    managerObject.department = "відділ розробки";
    managerObject.showData();
}

function showEmployeeAndManagerClass() {
    let employeeClass = new EmployeeClass("Петров", "Петро", "Чоловіча", 30);
    employeeClass.setAge = 31;
    console.log(`Повне ім'я: ${employeeClass.fullName}`);
    employeeClass.showData();

    let managerClass = new ManagerClass("Лодь", "Анастасія", "Жіноча", 35, "department розробки");
    console.log(`Повне ім'я: ${managerClass.fullName}`);
    managerClass.showData();

    resultField.innerHTML = `
    <p>
      Повне ім'я(employeeClass): ${employeeClass.fullName}
      <br/>
      employeeClass: Прізвище: ${employeeClass.surname}, Ім'я: ${employeeClass.name}, Стать: ${employeeClass.gender}, Вік: ${employeeClass.age}
      <br/>
      Повне ім'я(managerClass): ${managerClass.fullName}
      <br/>
      managerClass: Прізвище: ${managerClass.surname}, Ім'я: ${managerClass.name}, Стать: ${managerClass.gender}, Вік: ${managerClass.age}, Відділ: ${managerClass.department}    
    </p>
  `
}
