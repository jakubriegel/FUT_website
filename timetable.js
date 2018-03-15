/* inserting new event:
    1. put comma after last event
    2. print curly braces {}
    3. input new event data inside braces in pattern:
        "name":"EVENT_NAME", "timeStart":[DAY, HOURS, MINUTES], "timeEnd":[HOURS, MINUTES], "extended":true/false
    4. add new line
*/
var timetable = [
    {"name":"Kwaterowanie", "timeStart":[12, 12, 0], "timeEnd":[], "extended":true },
    {"name":"Mistrzostwa FUT w Matrixa", "timeStart":[12, 18, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Grill z SSPP", "timeStart":[12, 21, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Śniadanie", "timeStart":[13, 8, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Czas wolny", "timeStart":[13, 9, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Zwiedzanie Politechniki", "timeStart":[13, 10, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Zwiedzanie Fortów Poznańskich", "timeStart":[13, 10, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Obiad", "timeStart":[13, 15, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Czas wolny", "timeStart":[13, 16, 0], "timeEnd":[12, 0], "extended":true },
    {"name":"Otwarcie sesji roboczej", "timeStart":[13, 17, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Rada Starszych", "timeStart":[13, 18, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Wprowadzenie do FUT", "timeStart":[13, 18, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Kolacja", "timeStart":[13, 20, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Integracja", "timeStart":[13, 21, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Śniadanie", "timeStart":[14, 8, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Panele", "timeStart":[14, 10, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Obiad", "timeStart":[14, 16, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Sesja Robocza", "timeStart":[14, 17, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Kolacja", "timeStart":[14, 20, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Niespodzianka", "timeStart":[14, 22, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Śniadanie", "timeStart":[15, 8, 0], "timeEnd":[12, 0], "extended":false },
    {"name":"Wykwaterowanie", "timeStart":[15, 9, 0], "timeEnd":[12, 0], "extended":false }

];