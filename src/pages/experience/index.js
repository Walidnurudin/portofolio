import React from 'react';

const exp = [
  {
    role: 'Frontend Developer',
    company: 'PT. Lyrid Prima Indonesia',
    date: 'Jan 2022 - Sekarang',
    desc: 'Melakukan integrasi REST API, slicing UI Design ke web page dan memastikan berfungsi dengan baik.'
  },
  {
    role: 'Security Guard',
    company: 'PT. AGUNG RAHARDJA MANUNGGAL YUDHA',
    date: 'Nov 2018 - Sep 2019',
    desc: 'Melakukan pemeriksaan pada tamu / pemilik yang akan masuk ke area kerja, Menahan KTP/ SIM setiap tamu yang akan memasuki area kerja, Menjaga dan memelihara asset dan inventaris gedung. Bertanggung jawab untuk menjaga keamanan area kerja sesuai SOP yang telah ditentukan agar terciptanya area kerja yang aman dan kondusif.'
  }
];

const Experience = () => {
  return (
    <div>
      <div className="dark:text-green-300">
        {exp.map((d, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl">{d.role}</h3>
            <p className="text-sm text-gray-600 dark:text-white">
              {d.company} ({d.date})
            </p>

            <p className="mt-2 p-2">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
