import React from 'react';

const exp = [
  {
    role: 'Frontend Developer',
    company: 'Lyrid prima',
    date: 'Jan 2020 - Jan 2020',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi error ipsum magnam fugiat tenetur similique eum eius dolorum quasi nostrum? Consequuntur cumque temporibus repellat quae quia cupiditate iste incidunt, nobis, omnis asperiores repellendus, sunt id laudantium nisi nostrum odio aut? Quos laborum, suscipit qui illo repellendus facere delectus similique quam ad minus alias atque necessitatibus illum'
  },
  {
    role: 'Frontend Developer',
    company: 'Lyrid prima',
    date: 'Jan 2020 - Jan 2020',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi error ipsum magnam fugiat tenetur similique eum eius dolorum quasi nostrum? Consequuntur cumque temporibus repellat quae quia cupiditate iste incidunt, nobis, omnis asperiores repellendus, sunt id laudantium nisi nostrum odio aut? Quos laborum, suscipit qui illo repellendus facere delectus similique quam ad minus alias atque necessitatibus illum'
  }
];

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>

      <div className="dark:text-green-300">
        {exp.map((d, i) => (
          <div key={i}>
            <h3>{d.role}</h3>
            <h5>
              {d.company} {d.date}
            </h5>

            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
