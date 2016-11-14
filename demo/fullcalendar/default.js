/* eslint no-console: 0, complexity: 0 */
'use strict';
(function(window, calendar) {
    var cal, resizeThrottled,
        idx = 5;

    cal = calendar.FullCalendar({
        defaultView: 'week',
        template: {
            milestone: function(model) {
                return '<span style="color:red;"><i class="fa fa-flag"></i> ' + model.title + '</span>';
            },
            milestoneTitle: function() {
                return '마일스톤낄럽';
            },
            task: function(model) {
                return '&nbsp;&nbsp;#' + model.title;
            },
            taskTitle: function() {
                return '<label><input type="checkbox" /> 업무</label>';
            },
            allday: function(model) {
                return model.title + ' <i class="fa fa-refresh"></i>';
            },
            time: function(model) {
                return model.title + ' <i class="fa fa-refresh"></i><br />' + model.starts;
            }
        },
        week: {
            panelHeights: [80, 80, 120]
        }
    }, document.getElementById('calendar'));

    cal.setCalendarColor('1', {
        color: '#e8e8e8',
        bgColor: '#585858',
        render: false
    });
    cal.setCalendarColor('2', {
        color: '#282828',
        bgColor: '#dc9656',
        render: false
    });
    cal.setCalendarColor('3', {
        color: '#a16946',
        bgColor: '#ab4642',
        render: false
    });

    cal.createEvents([{
        id: '1',
        calendarID: '1',
        title: '스크럼',
        category: 'time',
        dueDateClass: '',
        starts: '2016-11-07T09:40:00+09:00',
        ends: '2016-11-07T10:40:00+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'allday',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '2123',
        calendarID: '1',
        title: '[3홍길동]연차',
        category: 'time',
        dueDateClass: '',
        starts: '2016-11-07T00:00:00+09:00',
        ends: '2016-11-07T23:59:59+09:00'
    }, {
        id: '1232',
        calendarID: '2',
        title: '[4홍길동]연차',
        category: 'time',
        dueDateClass: '',
        starts: '2016-08-19T00:00:00+09:00',
        ends: '2016-08-19T23:59:59+09:00'
    }, {
        id: '3',
        calendarID: '3',
        title: '테스트 마일스톤1',
        category: 'milestone',
        dueDateClass: '',
        starts: '',
        ends: '2016-08-17T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    },{
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }, {
        id: '4',
        calendarID: '3',
        title: '테스트 업무',
        category: 'task',
        dueDateClass: 'morning',
        starts: '',
        ends: '2016-11-12T23:59:59+09:00'
    }], true);

    cal.render();

    // 일정 클릭 이벤트 핸들러
    cal.on({
        'clickEvent': function(e) {
            console.log('click', e);
        },
        'beforeCreateEvent': function(e) {
            var title = prompt('Name of event to create:');

            if (!title) {
                return;
            }

            cal.createEvents([{
                id: String(idx),
                calendarID: '',
                title: title,
                isAllDay: e.isAllDay,
                starts: e.starts,
                ends: e.ends,
                category: e.isAllDay ? 'allday' : 'time',
                dueDateClass: '',
                raw: {
                    projectCode: '123'
                }
            }]);

            idx += 1;

            console.log('select', e);
        },
        'beforeUpdateEvent': function(e) {
            cal.updateEvent(e.model.id, {
                starts: e.starts,
                ends: e.ends
            });

            console.log('update', e);
        },
        'beforeDeleteEvent': function(e) {
            console.log('delete', e);
        },
        'resizePanel': function(e) {
            console.log('resizePanel', e);
        }
    });

    resizeThrottled = tui.util.throttle(function() {
        cal.refresh();
    }, 50);

    window.addEventListener('resize', resizeThrottled);

    /**********
     * Control
     **********/
    function onClick(e) {
        var action = calendar.domutil.getData(e.target, 'action');

        switch (action) {
            case 'move-prev':
                cal.prev();
                break;
            case 'move-next':
                cal.next();
                break;
            case 'move-today':
                cal.today();
                break;
            case 'toggle-day':
                cal.toggleView('day');
                break;
            case 'toggle-week':
                cal.toggleView('week');
                break;
            case 'toggle-month':
                cal.toggleView('month');
                break;
            default:
                return;
        }
    }


    // 일정 클릭 이벤트 핸들러
    cal.on('clickEvent', function (e) {
        console.log('click')
    });

    cal.on('beforeCreateEvent', function (e) {
       console.log('beforeCreateEvent', e)
    });

    cal.on('beforeUpdateEvent', function (e) {
        console.log('beforeUpdateEvent', e)
    });

    cal.on('beforeDeleteEvent', function (e) {
        console.log('beforeDeleteEvent', e);
    });

    calendar.domevent.on(document.querySelector('.control'), 'click', onClick);

    window.cal = cal;
})(window, ne.dooray.calendar);
