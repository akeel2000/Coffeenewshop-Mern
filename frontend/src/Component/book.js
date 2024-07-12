import React, { useState, useEffect } from 'react';

function Book() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        mail: '',
        personsCount: '',
        date: '',
        time: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [availability, setAvailability] = useState(null);

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const response = await fetch('http://localhost:8090/booktable/add', {
                    method: 'POST',
                    body: JSON.stringify({ dateTime: `${formData.date}T${formData.time}` }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setAvailability(data.available);
            } catch (error) {
                console.error('Error fetching availability:', error);
                setAvailability(false);
            }
        };

        if (formData.date && formData.time) {
            fetchAvailability();
        }
    }, [formData.date, formData.time]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const validationErrors = {};
        if (!formData.name) validationErrors.name = 'Name is required';
        if (!formData.number) validationErrors.number = 'Phone Number is required';
        if (!formData.mail) validationErrors.mail = 'Email is required';
        if (!formData.personsCount) validationErrors.personsCount = 'Number of persons is required';
        if (!formData.date) validationErrors.date = 'Date is required';
        if (!formData.time) validationErrors.time = 'Time is required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8090/booktable/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    number: '',
                    mail: '',
                    personsCount: '',
                    date: '',
                    time: ''
                });
                setErrors({});
                alert('Booking added successfully');
            } else {
                const errorData = await response.json();
                setErrors({ submit: errorData.error });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ submit: 'Error submitting form' });
        }

        setLoading(false);
    };

    return (
        <section id="order" className="bg-cover bg-center bg-coffee h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
                <h2 className="text-3xl mb-4">Book Your Table</h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    required
                />
                {errors.name && <div className="text-red-500">{errors.name}</div>}
                <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    required
                />
                {errors.number && <div className="text-red-500">{errors.number}</div>}
                <input
                    type="email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    required
                />
                {errors.mail && <div className="text-red-500">{errors.mail}</div>}
                <input
                    type="number"
                    name="personsCount"
                    value={formData.personsCount}
                    onChange={handleChange}
                    placeholder="Number of Persons"
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    required
                />
                {errors.personsCount && <div className="text-red-500">{errors.personsCount}</div>}
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    required
                />
                {errors.date && <div className="text-red-500">{errors.date}</div>}
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    required
                />
                {errors.time && <div className="text-red-500">{errors.time}</div>}
                {availability !== null && (
                    <p className="availability mb-3">
                        Availability: {availability ? 'Available' : 'Not Available'}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-2 bg-gray-400 text-white rounded hover:bg-brown-700"
                >
                    {loading ? "Booking..." : "Book Now"}
                </button>
                {errors.submit && <div className="text-red-500 mt-3">{errors.submit}</div>}
            </form>
        </section>
    );
}

export default Book;


