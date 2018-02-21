var thursday;
var friday;
var saturday;
var sunday;

function createTimetable(){
    thursday = document.getElementById('thursday-plan');
    friday = document.getElementById('friday-plan');
    saturday = document.getElementById('saturday-plan');
    sunday = document.getElementById('sunday-plan');
    
    var listItem;

    var date = new Date();
    var timeNow = {month:date.getMonth(), day:date.getDate(), hour:date.getHours(), minutes:date.getMinutes()};
    
    // function happeningNow() requires events to be sorted
    timetable.sort(function(a,b){
        // test days
        if(a.time[0] > b.time[0]) return 1;
        else if(a.time[0] < b.time[0]) return -1;
        else{ // case days are equal test hours
            if(a.time[1] > b.time[1]) return 1;
            else if(a.time[1] < b.time[1]) return -1;
            else{ // case hours are equal test minutes
                if(a.time[2] > b.time[2]) return 1;
                else if(a.time[2] < b.time[2]) return -1;
                else return 0; // case minutes are equal
            }
        }
        
    });

    for(var i = 0; i < timetable.length; i++){
        listItem = document.createElement('li');
        listItem.textContent = timetable[i].name;
        
        if(timetable[i].extended) listItem.className = "event_extended";
        if(happeningNow(i, timeNow)) listItem.className = "event_now";

        switch (timetable[i].time[0]){
            case 12:
                insertRight(thursday, listItem, timetable[i]);
                break;
            case 13:
                insertLeft(friday, listItem, timetable[i]);
                break;
            case 14:
                insertRight(saturday, listItem, timetable[i]);
                break;
            case 15:
                insertLeft(sunday, listItem, timetable[i]);
                break;
        }
    }

    var group = document.getElementById('group-timetable');
    var content = document.getElementById('timetable');
    group.style.height = content.clientHeight + 'px';
}

function happeningNow(i, timeNow){
    if(timeNow.month == 3) if(timetable[i].time[0] == timeNow.day){
        if(i != timetable.length-1){ // case event is not last
            if(timetable[i].time[1] == timeNow.hour){
                if(timetable[i].time[2] <= timeNow.minutes){
                    if(timeNow.day != timetable[i+1].time[0]) return true;
                    else if(timeNow.hour != timetable[i+1].time[1]) return true;
                    else if(timeNow.minutes < timetable[i+1].time[2]) return true;
                }
            }
            else if(timetable[i].time[1] < timeNow.hour){
                if(timeNow.day != timetable[i+1].time[0]) return true;
                else if(timeNow.hour < timetable[i+1].time[1]) return true;
                else if(timeNow.hour == timetable[i+1].time[1])
                    if(timeNow.minutes < timetable[i+1].time[2]) return true;
            }
        }
        else if(timeNow.hour >= timetable[i].time[1]) // case event is last
            if(timeNow.minutes >= timetable[i].time[2]) return true;
    }
}

function convertTime(event){
    var time = "";
    if(event.time[1] < 10) time += '0';
    time += event.time[1] + ':';
    if(event.time[2] < 10) time += '0';
    time += event.time[2];

    return time;
}

function insertLeft(list, item, event){
    item.textContent += " - " + convertTime(event);
    list.appendChild(item);
}

function insertRight(list, item, event){
    item.textContent = convertTime(event) + " - " + item.textContent;
    list.appendChild(item);
}