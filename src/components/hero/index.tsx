const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 gap-12">
      <div className="max-w-xl space-y-6">
        <h2 className="text-5xl font-extrabold leading-tight text-white">
          Software developer
        </h2>
        <p className="text-lg text-foreground">Software developer</p>
        {/* <a
          href="#contact"
          className="text-secondary font-medium border-b border-secondary"
        >
          My Story →
        </a> */}
      </div>
      <div
        className="w-[300px] h-[400px] bg-cover bg-center rounded-xl shadow-xl"
        style={{ backgroundImage: `url('/your-image.png')` }}
      />
    </section>
  );
};

export default Hero;
