import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ViewEmployee() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setGender(localStorage.getItem('Gender'));
        setSalary(localStorage.getItem('Salary'));

    }, []);

    return (
        <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light ">Employee Information</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div class="h-2 bg-purple-400 rounded-t-md"></div>
                    <div class="px-8 py-6 ">
                        <span class="block font-semibold"> Name </span>
                        <span class="text-xl font-light "><span></span>{first_name} {last_name}</span>
                        <span class="block mt-3 font-semibold"> Email</span>
                        <span class="text-xl font-light "><span></span>{email}</span>
                        <span class="block mt-3 font-semibold"> Gender</span>
                        <span class="text-xl font-light "><span></span>{gender}</span>
                        <span class="block mt-3 font-semibold"> Salary</span>
                        <span class="text-xl font-light "><span></span>{salary}</span>
                        <div class="flex justify-between items-baseline">
                            <Link to='/view'>
                                <button class="mt-5 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Back</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
