// calendar.js
document.addEventListener('deviceready', function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [],
    editable: true,
    droppable: true
  });

  document.getElementById('addEventButton').addEventListener('click', function() {
    var title = prompt("Ingrese el título del evento");
    var start = prompt("Ingrese la fecha de inicio (YYYY-MM-DD)");
    var end = prompt("Ingrese la fecha de fin (YYYY-MM-DD)");

    if (title && start && end) {
      $('#calendar').fullCalendar('renderEvent', {
        title: title,
        start: moment(start),
        end: moment(end),
        allDay: true
      }, true);
    } else {
      alert("Por favor, ingrese todos los campos.");
    }
  });
});
