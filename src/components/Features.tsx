const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Next.js 14",
      description: "Built with the latest version of the React framework.",
    },
    {
      title: "TypeScript",
      description: "Enjoy static typing for better code quality and maintainability.",
    },
    {
      title: "Tailwind CSS",
      description: "Utilize the power of utility-first CSS for rapid UI development.",
    },
     {
      title: "App Router",
      description: "Leverages the new App Router for improved routing and layouts.",
    },
    {
      title: "ESLint Configured",
      description: "Maintain code consistency with pre-configured linting rules.",
    },
    {
      title: "Ready to Deploy",
      description: "Easily deploy your application to platforms like Vercel.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Features Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 