import React from 'react'

function Users() {
    return (
        <div>
            <h2 className="text-3xl">Users: </h2>

            <div className="overflow-x-auto">
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
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src=""
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">name</div>
                                        <div className="text-sm opacity-50">address</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                phone
                            </td>
                            <td>email</td>
                            <th>
                                <button className="btn btn-xs">V</button>
                                <button className="btn btn-xs">E</button>
                                <button className="btn btn-xs">X</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Users