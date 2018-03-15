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

    //DEBUG TIME
    // timeNow.month = 4;
    // timeNow.day = 13;
    // console.log(timeNow);



    // function happeningNow() requires events to be sorted
    timetable.sort(function(a,b){
        // test days
        if(a.timeStart[0] > b.timeStart[0]) return 1;
        else if(a.timeStart[0] < b.timeStart[0]) return -1;
        else{ // case days are equal test hours
            if(a.timeStart[1] > b.timeStart[1]) return 1;
            else if(a.timeStart[1] < b.timeStart[1]) return -1;
            else{ // case hours are equal test minutes
                if(a.timeStart[2] > b.timeStart[2]) return 1;
                else if(a.timeStart[2] < b.timeStart[2]) return -1;
                else return 0; // case minutes are equal
            }
        }
        
    });

    for(var i = 0; i < timetable.length; i++){
        listItem = document.createElement('li');
        listItem.textContent = timetable[i].name;
        
        if(timetable[i].extended) listItem.className = "event_extended";
        if(happeningNow(i, timeNow)) listItem.className = "event_now";

        switch (timetable[i].timeStart[0]){
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
    group.style.height = '1100px';//content.clientHeight + 'px';
}

function happeningNow(i, timeNow){
    if(timeNow.month == 3) if(timetable[i].timeStart[0] == timeNow.day){
        if(i != timetable.length-1){ // case event is not last
            if(timetable[i].timeStart[1] == timeNow.hour){
                if(timetable[i].timeStart[2] <= timeNow.minutes){
                    if(timeNow.day != timetable[i+1].timeStart[0]) return true;
                    else if(timeNow.hour != timetable[i+1].timeStart[1]) return true;
                    else if(timeNow.minutes < timetable[i+1].timeStart[2]) return true;
                }
            }
            else if(timetable[i].timeStart[1] < timeNow.hour){
                if(timeNow.day != timetable[i+1].timeStart[0]) return true;
                else if(timeNow.hour < timetable[i+1].timeStart[1]) return true;
                else if(timeNow.hour == timetable[i+1].timeStart[1])
                    if(timeNow.minutes < timetable[i+1].timeStart[2]) return true;
            }
        }
        else if(timeNow.hour >= timetable[i].timeStart[1]) // case event is last
            if(timeNow.minutes >= timetable[i].timeStart[2]) return true;
    }
}

function convertTime(event){
    var time = "";
    if(event.timeStart[1] < 10) time += '0';
    time += event.timeStart[1] + ':';
    if(event.timeStart[2] < 10) time += '0';
    time += event.timeStart[2];

    if(event.timeEnd.length > 0){
        time += "-";
        if(event.timeEnd[0] < 10) time += '0';
        time += event.timeEnd[0] + ':';
        if(event.timeEnd[1] < 10) time += '0';
        time += event.timeEnd[1];
    }
    
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