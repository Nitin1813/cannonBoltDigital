import React from 'react';

const Completions = () => {
  const completions = [
    { title: 'Project A', description: 'Overview of project A and its successful outcome.' },
    { title: 'Project B', description: 'Overview of project B and its successful outcome.' },
    { title: 'Project C', description: 'Overview of project C and its successful outcome.' },
  ];

  return (
    <section className="completions py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Completions</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {completions.map((completion, index) => (
            <div
              key={index}
              className="completion-card bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#A7BB3E] mb-2">{completion.title}</h3>
              <p className="text-gray-600">{completion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Completions;
