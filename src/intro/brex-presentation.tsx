
const Agenda = () => {
  const stats = [
    {
      number: "What we heard",
      description:
        "Concerns about the time it takes to onboard, the complexity of the process, and the overall experience.",
    },
    {
      number: "What we did",
      description:
        "Process and improvements",
    },
    {
      number: "Enhancements",
      description:
        "Now, next, & later",
    },
    {
      number: "Q & A",
      description:
        "Discussion and feedback",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="top-10 col-span-2 flex h-fit w-fit items-center gap-3 py-8 lg:sticky">
      
            <h1 className="text-foreground/30 text-2xl uppercase">Agenda</h1>
          </div>
          <ul className="col-span-4 w-full">
            {stats.map((stat, index) => (
              <li key={index} className="grid grid-cols-5 border-b py-8">
                <h3 className="col-span-2 text-4xl font-medium">
                  {stat.number}
                </h3>
                <p className="col-span-3">{stat.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Agenda };
