import React, { useState, useEffect } from 'react';

function Order() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        person: '',
        dateTime: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [availability, setAvailability] = useState(null);

    useEffect(() => {
        // Simulate fetching availability from an API
        const fetchAvailability = async () => {
            try {
                // Replace with actual API endpoint to fetch availability
                const response = await fetch('https://api.example.com/availability', {
                    method: 'POST',
                    body: JSON.stringify({ dateTime: formData.dateTime }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setAvailability(data.available);
            } catch (error) {
                console.error('Error fetching availability:', error);
                setAvailability(false); // Handle error case
            }
        };

        // Fetch availability when dateTime changes
        if (formData.dateTime) {
            fetchAvailability();
        }
    }, [formData.dateTime]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setLoading(true);

        // Example: You can perform validation here
        const validationErrors = {};
        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }
        // Add more validation rules as needed

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
        } else {
            // Submit your form data
            console.log('Form submitted:', formData);
            // Reset form data and loading state after submission
            setFormData({
                name: '',
                email: '',
                number: '',
                person: '',
                dateTime: ''
            });
            setLoading(false);
            setErrors({});
        }
    };

    return (
        <section id="order" className="bg-cover bg-center bg-coffee h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bookings" style={{ maxWidth: '400px', width: '100%', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', background: '#fff', textAlign: 'center' }}>
                <h2 className="text-3xl mb-4">Book Your Table</h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                    required
                />
                {errors.name && <div className="error">{errors.name}</div>}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                    required
                />
                {errors.email && <div className="error">{errors.email}</div>}
                <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                    required
                />
                {errors.number && <div className="error">{errors.number}</div>}
                <input
                    type="text"
                    name="person"
                    value={formData.person}
                    onChange={handleChange}
                    placeholder="Number of Persons (optional)"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
                <input
                    type="datetime-local"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '3px' }}
                    required
                />
                {errors.dateTime && <div className="error">{errors.dateTime}</div>}
                {availability !== null && (
                    <p className="availability">
                        Availability: {availability ? 'Available' : 'Not Available'}
                    </p>
                )}
                <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    {loading ? "Booking..." : "Book Now"}
                </button>
            </form>
        </section>
    );
}

export default Order;
