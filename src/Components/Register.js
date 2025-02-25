import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './second.css';

const Register = () => {
    const [formData, setFormData] = useState({
        id: '',
        timing: '',
        level: '',
        noofdays: '',
        response: null
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedId = localStorage.getItem('userId');
        if (storedId) {
            setFormData(prevFormData => ({ ...prevFormData, id: storedId }));
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let noofdays = '';
        if (name === 'level') {
            switch (value) {
                case 'beginner':
                    noofdays = 3;
                    break;
                case 'intermediate':
                    noofdays = 2;
                    break;
                case 'advanced':
                    noofdays = 1;
                    break;
                default:
                    break;
            }
        }
        setFormData({ ...formData, [name]: value, noofdays });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { id, timing, level, noofdays } = formData;

        fetch('http://localhost:8080/connectifyusers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, timing, level, noofdays })
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Assuming server returns JSON with group info
            } else {
                throw new Error('Failed to save data');
            }
        })
        .then(data => {
            navigate('/congratulations', { state: { groupnum: data.groupno } }); // Navigate to Congratulations page with group number
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="right">
            <form onSubmit={handleSubmit}>
                <div className='container2'>
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        disabled // Disable the input field
                    />
                    <label htmlFor="timing">Timing:</label>
                    <select
                        name="timing"
                        id="timing"
                        value={formData.timing}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Select Timing</option>
                        <option value="6AM-8AM">6AM-8AM</option>
                        <option value="5:30PM-7:30PM">5:30PM-7:30PM</option>
                        <option value="8PM-10PM">8PM-10PM</option>
                    </select>
                    <label htmlFor="level">Level:</label>
                    <select
                        name="level"
                        id="level"
                        value={formData.level}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Select Your Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <label htmlFor="noofdays">Number of days:</label>
                    <input
                        type="text"
                        name="noofdays"
                        id="noofdays"
                        value={formData.noofdays}
                        readOnly
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
