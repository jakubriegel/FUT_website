window.onload = function(){
    startTimer();
    createTimetable();

    finalizeLayout();   
}

function finalizeLayout(){
    var contactGroup = document.getElementById("group-contact");
    var contact = document.getElementById("contact");
    contactGroup.style.height = contact.clientHeight + 'px';
}