import { Link } from "react-router-dom";
import data from "../data/student";

const HomePage = () => {
  const { students, teachers } = data;
  const teacher = teachers[0];
  const group = students[0]?.group ?? "-";

  return (
    <div className="space-y-10">
      <div className="rounded-2xl bg-blue-600 p-12 text-center text-white shadow-xl">
        <h1 className="mb-4 text-5xl font-bold">Students Management System</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg">Welcome to the official page of group <span className="font-bold">{group}</span>. Here you can browse students, view their profiles, and learn more about the group.</p>
        <Link to="/students" className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">View Students</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 text-center shadow"><h2 className="mb-2 text-3xl font-bold text-blue-600">{students.length}</h2><p className="text-gray-600">Students</p></div>
        <div className="rounded-xl border bg-white p-6 text-center shadow"><h2 className="mb-2 text-3xl font-bold text-blue-600">{teachers.length}</h2><p className="text-gray-600">Teacher</p></div>
        <div className="rounded-xl border bg-white p-6 text-center shadow"><h2 className="mb-2 text-3xl font-bold text-blue-600">{group}</h2><p className="text-gray-600">Group</p></div>
      </div>
      <div className="rounded-2xl border bg-white p-8 shadow">
        <h2 className="mb-6 text-3xl font-bold">Teacher</h2>
        <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-5"><div><h3 className="text-xl font-semibold">{teacher?.name ?? "-"}</h3><p className="text-gray-500">{teacher?.title ?? "-"}</p></div><span className="rounded-full bg-blue-600 px-4 py-2 text-white">{teacher?.group ?? "-"}</span></div>
      </div>
    </div>
  );
};

export default HomePage;
