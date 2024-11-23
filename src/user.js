import React from 'react';

const User = () => {
  // Data Testing
  const users = [
    { id: 1, nama: 'John Doe', email: 'john@example.com', poin: 150, role: 'Admin' },
    { id: 2, nama: 'Jane Smith', email: 'jane@example.com', poin: 120, role: 'User' },
    { id: 3, nama: 'Bob Johnson', email: 'bob@example.com', poin: 95, role: 'User' },
    { id: 4, nama: 'Alice Brown', email: 'alice@example.com', poin: 200, role: 'Admin' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-6">User</h1>
      <p className="text-gray-600 mb-4">Detail List Beberapa Pengguna:</p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-[#138880] text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">No</th>
              <th className="px-6 py-3 text-sm font-semibold">ID</th>
              <th className="px-6 py-3 text-sm font-semibold">Nama</th>
              <th className="px-6 py-3 text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-sm font-semibold">Poin</th>
              <th className="px-6 py-3 text-sm font-semibold">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="px-6 py-3 text-sm">{index + 1}</td>
                <td className="px-6 py-3 text-sm">{user.id}</td>
                <td className="px-6 py-3 text-sm">{user.nama}</td>
                <td className="px-6 py-3 text-sm">{user.email}</td>
                <td className="px-6 py-3 text-sm">{user.poin}</td>
                <td className="px-6 py-3 text-sm">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
