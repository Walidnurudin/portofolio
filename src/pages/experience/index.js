import React from 'react';

const exp = [
  {
    role: 'Fullstack Developer',
    company: 'PT. Healstation Indonesia',
    date: 'Jul 2023 - Sekarang',
    desc: `- Developing and implementing user unterfaces using framework ReactJs/NextJs, CSS, SASS.
    - Build and maintaining server-side applications using NodeJs.
    - Writing clean, reusable and efficient code.
    - Collaborating with designer, product managers, and other developers to understand project requirements and deliver high quality solitions.
    - Testing and debugging to identify and fix any issues or bugs.
    - Optimizing applications for maximum speed and scalability.
    - Staying up to date with latest industry trends and technologies to continuously improve skills and knowledge.
    - Troubleshooting and resolving technical issues that may arise during development or deployment.`
  },
  {
    role: 'Frontend Developer',
    company: 'PT. Lyrid Prima Indonesia',
    date: 'Jan 2022 - Jul 2023',
    desc: `- Developing and implementing user unterfaces using framework ReactJs/NextJs, CSS, SASS.
     - Writing clean, reusable and efficient code.
     - Collaborating with designer, product managers, and other developers to understand project requirements and deliver high quality solitions.
     - Testing and debugging to identify and fix any issues or bugs.
     - Optimizing applications for maximum speed and scalability.
     - Staying up to date with latest industry trends and technologies to continuously improve skills and knowledge.
     - Troubleshooting and resolving technical issues that may arise during development or deployment.`
  },
  {
    role: 'Fullstack Developer',
    company: 'Arkademy Tech Academy',
    date: 'Sep 2021 - jan 2022',
    desc: `- Developing and maintaining both the front-end and back-end of web applications.
    - Collaborating with cross-functional teams to design, develop, and deploy software solutions.
    - Writing clean, efficient, and reusable code.
    - Troubleshooting and debugging issues in web applications.
    - Implementing security and data protection measures.
    - Optimizing web applications for maximum speed and scalability.
    - Participating in code reviews and providing constructive feedback to improve code quality.
    - Keeping up-to-date with the latest industry trends and technologies.
    - Working closely with designers and other developers to ensure seamless integration of user interfaces and server-side logic.
    - Collaborating with project managers to define project scope, goals, and deliverables.`
  },
  {
    role: 'Frontend Developer',
    company: 'Praxis Academy',
    date: 'Agu 2020 - Des 2020',
    desc: `- Learning the fundamentals of JavaScript and VueJs. This includes understanding the syntax, structure, and best practices.
    - Learn how to create websites that adapt seamlessly across different devices and screen sizes.
    - Learn how to use Git for code management and collaboration with other developers.
    - Learn how to test and debug your code effectively to ensure high-quality and bug-free web applications.
    - Work on real-life projects to apply your newly acquired skills and build a portfolio of frontend projects that showcase your abilities.`
  },
  {
    role: 'Frontend Developer',
    company: 'Pondok Programmer',
    date: 'Jan 2020 - Apr 2020',
    desc: `- Learning the fundamentals of JavaScript and VueJs. This includes understanding the syntax, structure, and best practices.
    - Learn how to create websites that adapt seamlessly across different devices and screen sizes.
    - Learn how to use Git for code management and collaboration with other developers.
    - Learn how to test and debug your code effectively to ensure high-quality and bug-free web applications.
    - Work on real-life projects to apply your newly acquired skills and build a portfolio of frontend projects that showcase your abilities.`
  }
  // {
  //   role: 'Security Guard',
  //   company: 'PT. AGUNG RAHARDJA MANUNGGAL YUDHA',
  //   date: 'Nov 2018 - Sep 2019',
  //   desc: 'Melakukan pemeriksaan pada tamu / pemilik yang akan masuk ke area kerja, Menahan KTP/ SIM setiap tamu yang akan memasuki area kerja, Menjaga dan memelihara asset dan inventaris gedung. Bertanggung jawab untuk menjaga keamanan area kerja sesuai SOP yang telah ditentukan agar terciptanya area kerja yang aman dan kondusif.'
  // }
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

            <p className="mt-2 p-2 font-light text-sm whitespace-pre-line">
              {d.desc}
            </p>
            {exp.length - 1 !== i && <div className="border-b-4 pb-3"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
