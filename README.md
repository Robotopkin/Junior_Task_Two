Документация для решения задачи Junior №2
====

Условия задачи:
----
1. _Необходимо сгруппировать сотрудников по отделу из представленного JSON._
2. _В каждый отдел необходимо добавить поле __count__, содержащее количество сотрудников в отделе._
3. _В каждый отдел необходимо добавить поле __avg_hours__, содержащее среднюю выработку сотрудников по отделу._
    a. _Если у сотрудника отсутствует поле __hours__, то такого сотрудника необходимо исключить из подсчета средней выработки_
    b. _Округление до целого по правилам математики_
4. _Поле __dept__ необходимо убрать (значение полей __dept__ должны стать ключами выходного json)._
5. _Вывести сотрудников сгруппированных по отделу._

__Пример входного JSON:__
```
[
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 1",
    "phone": "89999999999"
  },
  {
    "dept": "Отдел АСУ",
    "name": "Сотрудник 2",
    "phone": "88888888888"
  },
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 3",
    "hours": 165,
    "phone": "87777777777"
  },
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 4",
    "hours": 132,
    "phone": "86666666666"
  },
  {
    "dept": "Отдел АСУ",
    "name": "Сотрудник 5",
    "hours": 101,
    "phone": "85555555555"
  },
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 6",
    "hours": 98,
    "phone": "84444444444"
  }
]
```
__Ожидаемый результат:__
```
{
  "Отдел АСУ": {
    "count": 2,
    "avg_hours": 101,
    "people": [
      {
        "name": "Сотрудник 2",
        "phone": "88888888888"
      },
      {
        "name": "Сотрудник 5",
        "hours": 101,
        "phone": "85555555555"
      }
    ]
  },
  "Отдел информационных систем": {
    "count": 4,
    "avg_hours": 132,
    "people": [
      {
        "name": "Сотрудник 1",
        "phone": "89999999999"
      },
      {
        "name": "Сотрудник 3",
        "hours": 165,
        "phone": "87777777777"
      },
      {
        "name": "Сотрудник 4",
        "hours": 132,
        "phone": "86666666666"
      },
      {
        "name": "Сотрудник 6",
        "hours": 98,
        "phone": "84444444444"
      }
    ]
  }
}
```

Для решения задачи использовались:
----
Редактор: _Visual Studio Code_<br>
Язык программирования: _JavaScript_<br>
Фреймворк: _Node.js_<br>
Библиотека: _fs_

Запуск
----
1. Для запуска программы нужно установит фреймворк __Node.js__. 
2. Через консоль/терминал перейти в место расположения фаила.
    a. Если вводимые данные другиие внести их в фаил __"Junior_Task_2.json"__.
4. В консоли/терминале нужно написать __"npm i"__ и дождаться загрузки.
5. В консоли/терминале нужно написать __"node Junior_Task_2.js"__.

__В результате:__ <br>
В консоль выводится результат вычеслений в виде JSON.
