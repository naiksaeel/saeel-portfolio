import HomePage from "@/pages/home/home";

// css
import "aos/dist/aos.css";

const MainLayout = () => {
  return (
    <main className="bg-primary font-sans min-h-screen">
      <div className="mx-auto">
        <HomePage />
      </div>
    </main>
  );
};

export default MainLayout;
