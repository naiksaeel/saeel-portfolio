import HomePage from "@/pages/home/home";

const MainLayout = () => {
  return (
    <main className="bg-primary font-sans min-h-screen">
      <div
        className=" mx-auto"
        style={{
          maxWidth: "1800px",
        }}
      >
        <HomePage />
      </div>
    </main>
  );
};

export default MainLayout;
