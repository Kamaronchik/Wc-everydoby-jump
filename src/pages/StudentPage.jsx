import { useParams, Link } from "react-router-dom";
import data from "../data/student";

const StudentPage = () => {
  const { studentId } = useParams();

  const foundStudent = data.students.find(
    (student) => student.id === Number(studentId)
  );

  if (!foundStudent) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-xl bg-red-100 p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            Student Not Found
          </h2>

          <Link
            to="/students"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Back to Students
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {foundStudent.name[0]}
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            {foundStudent.name}
          </h2>

          <p className="text-lg text-blue-600">
            {foundStudent.title}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between rounded-lg bg-gray-100 p-4">
            <span className="font-semibold text-blue-600">ID</span>
            <span className="font-medium text-slate-900">
              {foundStudent.id}
            </span>
          </div>

          <div className="flex justify-between rounded-lg bg-gray-100 p-4">
            <span className="font-semibold text-blue-600">Group</span>
            <span className="font-medium text-slate-900">
              {foundStudent.group}
            </span>
          </div>

          <div className="flex justify-between rounded-lg bg-gray-100 p-4">
            <span className="font-semibold text-blue-600">Title</span>
            <span className="font-medium text-slate-900">
              {foundStudent.title}
            </span>
          </div>
        </div>

        <Link
          to="/students"
          className="mt-8 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Students
        </Link>
      </div>
    </div>
  );
};

export default StudentPage;