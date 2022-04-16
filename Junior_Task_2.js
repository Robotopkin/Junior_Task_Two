const fs = require('fs');   //Библиотека
const data = JSON.parse(fs.readFileSync('./Junior_Task_2.json', 'utf8')); //Распаковка локального JSON

const department = [];
const a = Object.keys(data).length //Кол-во сотрудников

for(let i=0; i<a; i++){ //Добавление всех отделов в массив
    department[i] = data[i].dept;
}
    
const newDepartment = Array.from(new Set(department)).sort(); //Сортировка и удаление не уникальных значений отделов

class Department    //Класс отделов
{
    constructor(count, avg_hours, people)
    {
        this.count = count;
        this.avg_hours = avg_hours;
        this.people = people;
    }
}
class Person    //Класс сотрудников
{
    constructor(name, hours, phone)
    {
        this.name = name;
        this.hours = hours;
        this.phone = phone;
    }
}
const all = {}; //Объект который будет итоговым выводом
for(let i=0; i<newDepartment.length; i++){
    let people = [];
    let person = [];
    let count=0;
    let sum_hours=0;
    let people_with_hours=0;
    let name=null;
    let hours=null;
    let phone=null
    for(let j=0; j<a; j++){
        if(newDepartment[i]==data[j].dept){
            count++;    //Считает кол-во сотрудников в определенном отделе
            name = data[j].name;    //Имя сотрудника
            phone=data[j].phone;    //Номер телефона сотрудника
            if(data[j].hours!=null){    //Если рабочии часы указаны добовляет их для среднего времени, и присваевает часы сотрудника
                sum_hours+=data[j].hours;
                people_with_hours++;
                hours = data[j].hours;
            }
            people[j] = new Person (name, hours, phone) //Заполняет информацию о сотруудниках
            if(data[j].hours==null){    //Если часы не указаны удаляет значение "hours"
                delete people[j].hours;
            }
        }
    }
    let newPeople = people.filter(el => el != null); //Удаляет значения масива null, появившиеся при заполнении отдела сотрудниками
    let avg_hours=Math.round(sum_hours/people_with_hours);  //Считает среднии рабочии часы
    person[i] = new Department (count, avg_hours, newPeople);    //Заполняет информацию об отделах
    const c =newDepartment[i]; //Название отдела
    all[c] = person[i]; //Заносит информацию в отдел
}
console.log(JSON.stringify(all, null, '\t'));   //Преобразует объект all в .json формат и выводит в консоль