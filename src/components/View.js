import React, { useEffect, useState } from 'react';
import { UilUser } from '@iconscout/react-unicons'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function View() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://backend-assignment2.herokuapp.com/api/emp/employees`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const getData = () => {
        axios.get(`https://backend-assignment2.herokuapp.com/api/emp/employees`)
            .then((getData) => {
                setAPIData(getData.data);
            }).catch(error => {
                console.log(error)
            });
    }
    const onDelete = (id) => {
        axios.delete(`https://backend-assignment2.herokuapp.com/api/emp/employees/${id}`)
            .then(() => {
                getData();
            })
            .catch(error => {
                console.log(error)
            });
    }

    const setData = (data) => {
       
            console.log(data);
        let { _id, first_name, last_name, email, gender, salary } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('First Name', first_name);
        localStorage.setItem('Last Name', last_name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Salary', salary);
    }

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-light my-7">Employees</h2>
                    <a href="/add"
                        className=" text-sm bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded">
                        Add New Employee
                    </a>
                    <a href="/"
                        className=" ml-12 text-sm bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded">
                        Logout
                    </a>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Name
                                    </th>

                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Gender
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Salary
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {APIData.map((data) => {
                                return (
                                    <tbody>

                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <UilUser className="w-full h-full rounded-full"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {data.first_name} {data.last_name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data.email}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {data.gender}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    ${data.salary}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight mx-3">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                    <Link to='/update'>
                                                        <button onClick={() => setData(data)} className="relative">Update</button>
                                                    </Link>

                                                </span>
                                                <span
                                                    className="relative inline px-3 py-1 font-semibold text-red-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                    <button onClick={() => onDelete(data._id)} className="relative">Delete</button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}
