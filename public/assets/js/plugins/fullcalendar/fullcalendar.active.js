(function ($) {
    "use strict";

    /*Fullcalendar Example*/
    if( $('.fullcalendar-example').length ) {
        $('.fullcalendar-example').fullCalendar({
            height: 800,
            header: {
                left: 'prev, next',
                center: 'title',
                right: 'month, agendaWeek, agendaDay',
            },
            buttonIcons: {
                prev: 'none ti-angle-left',
                next: 'none ti-angle-right',
                prevYear: 'none ti-angle-double-left',
                nextYear: 'none ti-angle-double-right',
            },
            editable: true,
            isRTL: true,
            eventLimit: true, // allow "more" link when too many events
            viewRender: function(view, element) {
                if (!('ontouchstart' in document.documentElement) && jQuery().jScrollPane) {
                    $('.fc-scroller').jScrollPane({
                        autoReinitialise: true,
                        autoReinitialiseDelay: 100,
                    })
                }
            },
            events: [
                {
                    title: 'All Day Event',
                    start: '2019-04-20',
                    className: 'fc-event-success',
                },
                {
                    title: 'Long Event',
                    start: '2019-04-22',
                    end: '2016-05-10',
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2019-04-24T16:00:00',
                    className: 'fc-event-default',
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2019-04-26T16:00:00',
                    className: 'fc-event-success',
                },
                {
                    title: 'Conference',
                    start: '2019-04-26',
                    end: '2019-04-17',
                    className: 'fc-event-danger',
                },
                {
                    title: 'Meeting',
                    start: '2019-04-29T10:30:00',
                    end: '2019-04-30T12:30:00',
                    className: 'fc-event-default',
                },
                {
                    title: 'Lunch',
                    start: '2019-05-3T12:00:00',
                    className: 'fc-event-default',
                },
                {
                    title: 'Meeting',
                    start: '2019-05-05:30:00',
                    className: 'fc-event-info',
                },
                {
                    title: 'Happy Hour',
                    start: '2019-05-10T17:30:00',
                },
                {
                    title: 'Dinner',
                    start: '2019-05-15T20:00:00',
                },
                {
                    title: 'Birthday Party',
                    start: '2019-05-20T07:00:00',
                    className: 'fc-event-danger',
                },
                {
                    title: 'Click for Google',
                    url: 'javascript: alert("Clicked: External URL");',
                    start: '2019-05-28',
                    className: 'fc-event-warning',
                },
            ],
            eventClick: function(calEvent, jsEvent, view) {
                if (!$(this).hasClass('event-clicked')) {
                    $('.fc-event').removeClass('event-clicked')
                    $(this).addClass('event-clicked')
                }
            },
        });
    }
    
})(jQuery);