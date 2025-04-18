const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl">FoodBridge</h1>
        <div>
          <a href="/" className="text-white mx-4">Dashboard</a>
          <a href="/register" className="text-white mx-4">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
