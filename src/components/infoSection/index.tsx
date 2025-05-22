const InfoSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-8 md:px-16 py-12 border-t border-gray-700 text-white">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="text-foreground">Any type of query and discussion</p>
        {/* <a href="#" className="text-secondary underline">
          google.com
        </a> */}
      </div>

      <div className="space-y-6">
        <blockquote className="text-xl italic text-foreground">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          provident obcaecati ullam deleniti reprehenderit amet delectus
          aspernatur accusantium? Voluptas nisi quidem laboriosam perferendis
          vero atque facilis, qui in minima nam!'"
        </blockquote>
        <div className="flex gap-12">
          <div>
            <p className="text-4xl font-bold text-secondary">3+</p>
            <p className="text-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
