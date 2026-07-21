import { Link, Outlet } from "react-router-dom";

const App = () => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-3xl font-bold text-white">Product Store</h1>

        <nav className="flex gap-4">
          <Link
            to="/"
            className="rounded-lg bg-white/20 px-5 py-2 font-medium text-white transition hover:bg-white hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="rounded-lg bg-white/20 px-5 py-2 font-medium text-white transition hover:bg-white hover:text-indigo-600"
          >
            Products
          </Link>
        </nav>
      </div>
    </header>

    <main className="mx-auto max-w-7xl p-8">
      <Outlet />
    </main>
  </div>
);

export default App;