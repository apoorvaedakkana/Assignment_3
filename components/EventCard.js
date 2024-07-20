import React from 'react';
import codingImage from '../assets/coding.jpg';
import robImage from '../assets/rob.jpeg';
import fgImage from '../assets/fg.jpg';
import ideaaaImage from '../assets/ideaaa.png';

const events = [
    {
        id: 1,
        title: 'CODE CRAFT',
        description: 'Software hackathon with intense coding, creativity, and collaboration.',
        image: codingImage,
    },
    {
        id: 2,
        title: 'ROBOCON',
        description: 'RC controlled bots kickoff thrilling matches with agility and strategy.',
        image: robImage,
    },
    {
        id: 3,
        title: 'UI DESIGNING',
        description: 'Showcase your UI/UX skills, innovation, and attention to detail in this thrilling UI design competition.',
        image: fgImage,
    },
    {
        id: 4,
        title: 'IDEATION',
        description: 'Pitch your innovative ideas and seize the opportunity to secure funding!',
        image: ideaaaImage,
    },
];

const styles = {
    eventCard: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'space-around',
        marginTop: '3cm'
    },
    card: {
        width: '300px',
        margin: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'rgba(333, 333, 333, 0.4)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
        transition: 'box-shadow 0.3s ease',
    },
    cardHover: {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)',
    },
    cardImgTop: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    cardBody: {
        padding: '15px',
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    cardText: {
        fontSize: '1rem',
        color: '#000',
    },
};

const EventCard = () => {
    return (
        <div style={styles.eventCard}>
            {events.map(event => (
                <div key={event.id} style={styles.card}>
                    <img src={event.image} style={styles.cardImgTop} alt={event.title} />
                    <div style={styles.cardBody}>
                        <h5 style={styles.cardTitle}>{event.title}</h5>
                        <p style={styles.cardText}>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCard;
