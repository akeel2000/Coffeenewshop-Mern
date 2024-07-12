import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Contact() {
    const [fullname, setFullname] = useState('');
    const [mail, setMail] = useState('');
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();
        setIsSubmitting(true);

        const newContactForm = {
            fullname,
            mail,
            number,
            text,
        };

        axios
            .post('http://localhost:8090/contactus/add', newContactForm)
            .then(() => {
                alert('Submitted');
                setFullname('');
                setMail('');
                setNumber('');
                setText('');
                navigate('/');
            })
            .catch((err) => {
                alert('Failed to submit form. Please try again later.');
                console.error(err);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <>
           
           <section id="/contact" className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2 md:w-2/3">
                <form onSubmit={sendData}>
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-2">
                            <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={fullname} onChange={(e) => setFullname(e.target.value)} disabled={isSubmitting} required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={mail} onChange={(e) => setMail(e.target.value)} disabled={isSubmitting} required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                            <div className="mt-2">
                                <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={number} onChange={(e) => setNumber(e.target.value)} disabled={isSubmitting} required />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                            <div className="mt-2">
                                <textarea id="message" name="message" rows="4" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={text} onChange={(e) => setText(e.target.value)} disabled={isSubmitting} required></textarea>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className={`w-36 inline-flex items-center justify-center rounded-md bg-gray-400 border border-transparent text-sm font-medium text-white shadow-sm px-4 py-2 sm:text-base 
                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                                ${isSubmitting ? 'bg-gray-400' : 'bg-brown-600 hover:bg-brown-700 focus:ring-2 focus:ring-brown-500 focus:ring-offset-2'}
                                `}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="md:w-1/3">
                {/* Additional content for the 1/3 section */}
            </div>
        </div>
        <p className="text-lg leading-relaxed mb-8 text-center">
            Have any questions or feedback? Feel free to reach out to us via email at{' '}
            <a href="mailto:contact@coffeeshop.com" className="text-blue-500 underline">contact@coffeeshop.com</a>.
        </p>
    </div>
</section>

        </>
    );
}
