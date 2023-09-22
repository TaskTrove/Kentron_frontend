import React from 'react';

const DataTable = () => {
    // Dummy data for the table
    const data = [
        {
            id: 1,
            name: 'File 1',
            size: '2.5 MB',
            guestAccess: 'Yes',
            status: 'Active',
            createdDate: '2023-09-20',
        },
        {
            id: 2,
            name: 'File 2',
            size: '1.2 MB',
            guestAccess: 'No',
            status: 'Inactive',
            createdDate: '2023-09-18',
        },
        // Add more data as needed
    ];

    return (
        <div>
            <table className="ml-auto min-w-full border-collapse mt-20">
                <thead>
                    <tr>
                        <th scope="col" className="w-6">
                            <span className="sr-only">Select</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-s font-medium text-gray-500 tracking-wider font-bold">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-s font-medium text-gray-500 tracking-wider font-bold">
                            Size
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-s font-medium text-gray-500 tracking-wider font-bold">
                            Guest Access
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-s font-medium text-gray-500 tracking-wider font-bold">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-s font-medium text-gray-500 tracking-wider font-bold">
                            Created date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="w-6">
                                <input type="checkbox" className="form-checkbox" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.size}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.guestAccess}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.status}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.createdDate}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <p className="text-sm text-gray-500 text-right mr-20">
                    Last Modified: Last Modified by
                </p>
            </div>
        </div>
    );
};

export default DataTable;
