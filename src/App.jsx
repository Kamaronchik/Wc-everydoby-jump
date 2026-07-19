import { Link, Outlet } from "react-router-dom";

const App = () => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-blue-600 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-white">Students Management</h1>
        <nav className="flex gap-4">
          <Link to="/" className="rounded-lg bg-white/20 px-5 py-2 font-medium text-white transition hover:bg-white hover:text-blue-600">Home</Link>
          <Link to="/students" className="rounded-lg bg-white/20 px-5 py-2 font-medium text-white transition hover:bg-white hover:text-blue-600">Students</Link>
        </nav>
      </div>
    </header>
    <main className="max-w-5xl mx-auto p-6">
      <div className="rounded-xl bg-white p-6 shadow-md"><Outlet /></div>
    </main>
  </div>
);

export default App;
