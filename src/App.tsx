import "@/App";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 md:p-12 space-y-12">
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            {/* <img
              src="https://via.placeholder.com/600x400"
              alt="Sample"
              className="w-full h-auto rounded-lg object-cover"
            /> */}
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Section 1</h2>
            <p className="text-gray-700">
              This is the text content for the first section.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Section 2</h2>
          <p>Dummy content for section 2</p>
        </section>

        {/* Section 3 */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Section 3</h2>
          <p>Dummy content for section 3</p>
        </section>
      </div>
    </>
  );
}

export default App;
