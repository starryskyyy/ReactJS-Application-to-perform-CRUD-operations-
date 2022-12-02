import React, { useEffect, useState } from 'react';
import { UilUser } from '@iconscout/react-unicons'
import axios from 'axios'

export default function View() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://backend-assignment2.herokuapp.com/api/emp/employees`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <body class="antialiased font-sans bg-gray-200">
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-light my-7">Employees</h2>
                        <a href="/add"
                            class=" text-sm bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded">
                            Add New Employee
                        </a>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">

                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            Name
                                        </th>

                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            Gender
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            Salary
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-purple-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {APIData.map((data) => {
                                    return (
                                        <tbody>

                                            <tr>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            <UilUser class="w-full h-full rounded-full"
                                                            />
                                                        </div>
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {data.first_name} {data.last_name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{data.email}</p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        {data.gender}
                                                    </p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        ${data.salary}
                                                    </p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight mx-3">
                                                        <span aria-hidden
                                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                        <a href="/update" class="relative">Update</a>
                                                    </span>
                                                    <span
                                                        class="relative inline px-3 py-1 font-semibold text-red-900 leading-tight">
                                                        <span aria-hidden
                                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                        <button class="relative">Delete</button>
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
        </body>

    )
}
