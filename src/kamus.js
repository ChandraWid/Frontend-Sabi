import React from 'react';

const Kamus = () => {
  // Data Testing
  const kamusItems = [
    { id: 1, judul: 'Kata1', konten: 'Definisi kata 1' },
    { id: 2, judul: 'Kata2', konten: 'Definisi kata 2' },
    { id: 3, judul: 'Kata3', konten: 'Definisi kata 3' },
    { id: 4, judul: 'Kata4', konten: 'Definisi kata 4' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-6">Kamus</h1>
      <p className="text-gray-600 mb-4">Detail list beberapa kamus artikel:</p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-[#138880] text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">No</th>
              <th className="px-6 py-3 text-sm font-semibold">ID</th>
              <th className="px-6 py-3 text-sm font-semibold">Judul</th>
              <th className="px-6 py-3 text-sm font-semibold">Konten</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {kamusItems.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="px-6 py-3 text-sm">{index + 1}</td>
                <td className="px-6 py-3 text-sm">{item.id}</td>
                <td className="px-6 py-3 text-sm">{item.judul}</td>
                <td className="px-6 py-3 text-sm">{item.konten}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kamus;
