$(document).ready(function() {
	// Store today's date
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	// Authentication Information
	var apiKey = 'AIzaSyCzA_Et7uk7dj5X1mz0Kc5RntKzvVA5NjU';
	var gCalID = 'https://calendar.google.com/calendar/embed?src=mlou2019%40gmail.com&ctz=America/Chicago'

	// Initialize calendar
	var calendar = $('#calendar').fullCalendar({
		// Create header - lets you switch calendar views
			// Values separated by comma will be adjacent, separated by a space will have a small gap in between
			// Note that these values are predefined templates, not personal names
		header: {
			left: 'prev,next today', // text containing the current month/week/day
			center: 'title',
			right: 'month, agendaWeek, agendaDay'
		},

		defaultView:'agendaWeek',

		// Lets users highlight a timeslot by clicking and dragging
		selectable: true,
		// Creates a colored box while user is dragging
		selectHelper: true,
		//Whether clicking elsewhere will cause current selection to be cleared
		unselectAuto: false,

		// Runs when user selects a timeslot
		select: function(start, end, allDay) {

			calendar.fullCalendar('renderEvent',
				{
					title: "",
					start: start,
					end: end,
					allDay: false
				},
				true // makes event stay permanently fixed - won't disappear if you go to another calendar page
			);

			// To mandate that each event has a title
			/*
			var title = prompt('Event Title:');

			if(title) {
				calendar.fullCalendar('renderEvent',
				{
					title: title,
					start: start,
					end: end,
					allDay: false
				},
				true // makes event stay permanently fixed - won't disappear if you go to another calendar page
				);
			}
			*/

			calendar.fullCalendar('unselect');

		},

		// Can change duration of event, move it around
		editable: true,
/*
		// Preset calendar with GCal public calendar
		googleCalendarApiKey: apiKey,
		events: {
			googleCalendarId: 'mlou2019@gmail.com'
		}

		*/
		// Pre-define events on calendar
		events: [
			{
				title: 'ah4ll',
				start: new Date(y, m, d, 10, 30),
				end: new Date(y, m, d, 15, 30),
				allDay:false
			},

			{
				title: '',
				start: '2017-04-11T11:00:00',
				end: '2017-04-11T14:00:00-05:00',
				allDay:false
			},
		],


	});
});
