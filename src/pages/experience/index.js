import React from 'react';

const exp = [
  {
    role: 'Frontend Developer',
    company: 'PT. Lyrid Prima Indonesia',
    date: 'Jan 2022 - Sekarang',
    desc: ' Mengembangkan antarmuka pengguna (UI) yang menarik dan responsif menggunakan React JS. Bekerja sama dengan desainer UI/UX untuk mengimplementasikan desain ke dalam kode yang berfungsi. Mengembangkan aplikasi web menggunakan React JS. Bekerja dengan tim pengembang lainnya untuk membangun komponen dan fitur-fitur aplikasi yang kompleks. Mengembangkan dan memelihara situs web menggunakan React JS. Bekerja dengan tim pengembang lainnya untuk memastikan situs web berfungsi dengan baik dan memiliki performa yang baik. Mengembangkan dan memelihara kode frontend menggunakan React JS. Bekerja dengan tim pengembang lainnya untuk mengoptimalkan kinerja dan keamanan aplikasi. Bertanggung jawab untuk mengimplementasikan desain UI yang telah dirancang ke dalam kode menggunakan React JS. Menyesuaikan desain sesuai dengan kebutuhan dan memastikan tampilan yang konsisten di berbagai perangkat. Merancang dan mengembangkan arsitektur frontend menggunakan React JS. Memastikan kode yang dibangun memiliki struktur yang baik, mudah dipelihara, dan dapat diperluas di masa depan.'
  },
  {
    role: 'Fullstack Developer',
    company: 'Arkademy Tech Academy',
    date: 'Sep 2021 - jan 2022',
    desc: 'Pelatihan intensif mengajarkan semua aspek pengembangan aplikasi web dan mobile, mulai dari front-end hingga back-end. Mempelajari bahasa pemrograman dan stack JavaScript, React.Js, Next.Js, React Native, Node.js, Express.js, dan MySql. Belajar tentang desain antarmuka pengguna, pengembangan aplikasi berbasis database, pengujian dan debugging, serta pengelolaan proyek dan kolaborasi dengan tim.'
  },
  {
    role: 'Frontend Developer',
    company: 'Praxis Academy',
    date: 'Agu 2020 - Des 2020',
    desc: 'Belajar membuat aplikasi web selama 3 bulan menggunakan Vue JS, dan membuat proyek kecil.'
  },
  {
    role: 'Frontend Developer',
    company: 'Pondok Programmer',
    date: 'Jan 2020 - Apr 2020',
    desc: 'Belajar membuat aplikasi web selama 3 bulan menggunakan React JS, dan membuat proyek kecil.'
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
          <div key={i} className="mb-6">
            <h3 className="text-xl">{d.role}</h3>
            <p className="text-sm text-gray-600 dark:text-white">
              {d.company} ({d.date})
            </p>

            <p className="mt-2 p-2">{d.desc}</p>
            {exp.length - 1 !== i && <div className="border-b-4 pb-3"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
