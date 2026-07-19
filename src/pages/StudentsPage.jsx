import { Link } from "react-router-dom";
import data from "../data/student";

const StudentsPage = () => (
  <div className="mx-auto max-w-6xl">
    <h2 className="mb-8 text-center text-4xl font-bold text-blue-700">
      Student List
    </h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.students.map((student) => (
        <div
          key={student.id}
          className="rounded-xl border bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
            {student.name[0]}
          </div>

          <h3 className="mb-2 text-2xl font-bold text-slate-900">
            {student.name}
          </h3>

          <p className="mb-1 text-slate-700">
            <span className="font-semibold text-blue-600">Group:</span>{" "}
            {student.group}
          </p>

          <p className="mb-6 text-slate-700">
            <span className="font-semibold text-blue-600">Title:</span>{" "}
            {student.title}
          </p>

          <Link
            to={`/students/${student.id}`}
            className="inline-block rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default StudentsPage;