import React from 'react';
import './Schedule.css';

const Schedule = () => {
    const schedule = [
        {
            time: '09:00 AM',
            event: 'Opening Ceremony'
        },
        {
            time: '10:00 AM',
            event: 'Keynote Speech'
        },
        {
            time: '11:00 AM',
            event: 'Team Formation'
        },
        {
            time: '12:00 PM',
            event: 'Lunch Break'
        },
        {
            time: '01:00 PM',
            event: 'Hacking Begins'
        },
        {
            time: '03:00 PM',
            event: 'Workshop 1'
        },
        {
            time: '05:00 PM',
            event: 'Workshop 2'
        },
        {
            time: '07:00 PM',
            event: 'Dinner Break'
        },
        {
            time: '08:00 PM',
            event: 'Continue Hacking'
        },
        {
            time: '10:00 PM',
            event: 'Midnight Snack'
        },
        {
            time: '12:00 AM',
            event: 'Late Night Coding'
        }
        // Add more schedule items as needed
    ];

    return (
        <div className="schedule-container">
            <h2 className="schedule-title">Event Schedule</h2>
            <ul className="schedule-list">
                {schedule.map((item, index) => (
                    <li key={index} className="schedule-item">
                        <span className="schedule-time">{item.time}</span>
                        <span className="schedule-event">{item.event}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;