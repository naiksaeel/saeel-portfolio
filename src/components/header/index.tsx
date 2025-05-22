const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6 text-white">
      <h1 className="text-2xl font-bold">Saeel Naik</h1>
      <nav className="space-x-6 text-sm uppercase tracking-wider">
        <a href="#" className="text-gray-400 hover:text-white">
          Services
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Works
        </a>
      </nav>
    </header>
  );
};

export default Header;
