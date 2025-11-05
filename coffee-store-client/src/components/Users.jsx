import React, { useContext, useState } from 'react'
import { CiEdit } from 'react-icons/ci';
import { LuView } from 'react-icons/lu';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

function Users() {

    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

    const { user } = useContext(AuthContext);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-1.onrender.com/users/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User has been deleted.",
                                icon: "success",
                            });
                            const updated = users.filter((user) => user._id !== _id);
                            setUsers(updated);
                        }
                    });
            }
        });
    }

    return (
        <div className='min-h-96'>
            <h2 className="text-3xl text-center my-5">Users: {initialUsers.length}</h2>
            <div className="flex justify-center mb-6 mx-auto">
                <Link
                    to="/"
                    className="text-gray-700 font-bold font-heading text-xl hover:text-black transition flex items-center gap-1"
                >
                    <span className="text-lg">←</span> Back to home
                </Link>
            </div>
            {user && (
                <div className="overflow-x-auto w-full px-4 md:px-10 lg:px-10 xl:px-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    No
                                </th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photo}
                                                        alt={user.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>{user.email}</td>
                                    <th className='flex justify-center items-center'>
                                        <button className="btn btn-xs mr-1">
                                            <LuView className="text-lg text-blue-500" />
                                        </button>
                                        <button className="btn btn-xs mr-1">
                                            <CiEdit className="text-lg text-green-600" />
                                        </button>
                                        <button className="btn btn-xs">
                                            <MdDeleteForever onClick={() => handleDelete(user._id)} className="text-lg text-red-500" />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    )
}

export default Users