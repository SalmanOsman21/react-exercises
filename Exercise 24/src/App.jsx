
import { useForm } from "react-hook-form";

function App() {
 const {
    register,
    handleSubmit, watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      studentName: "",
      email: "",
      grade: "",
      subjects: [],
    },
  });

  const selectedSubjects = watch("subjects");

  const onSubmit = (data) => {
    console.log("Student Registration:", data);

    alert(
      `Registration Successful!\n\n${JSON.stringify(data, null, 2)}`
    );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl rounded-xl bg-white p-8 shadow-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-black mb-8">
          Student Registration
        </h1>

        <div>
          <label
            htmlFor="studentName"
            className="mb-2 block text-base font-medium"
          >
            Student Name
          </label>

          <input
            id="studentName"
            type="text"
            {...register("studentName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
            })}
            className="w-full rounded-md border border-gray-400 px-3 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />

          {errors.studentName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.studentName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-base font-medium"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full rounded-md border border-gray-400 px-3 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="grade"
            className="mb-2 block text-base font-medium"
          >
            Grade Level
          </label>

          <select
            id="grade"
            {...register("grade", {
              required: "Please select a grade",
            })}
            className="w-full rounded-md border border-gray-400 bg-white px-3 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="">Select Grade</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>

          {errors.grade && (
            <p className="mt-2 text-sm text-red-500">
              {errors.grade.message}
            </p>
          )}
        </div>

        <div>
          <p className="mb-3 text-base font-medium">
            Subjects Interest
          </p>

          <div className="space-y-3">
            {["Mathematics", "Science", "English"].map((subject) => (
              <label
                key={subject}
                className="flex items-center gap-3 text-base"
              >
                <input
                  type="checkbox"
                  value={subject}
                  {...register("subjects", {
                    validate: (value) =>
                      value.length > 0 ||
                      "Select at least one subject",
                  })}
                  className="h-4 w-4 accent-pink-600"
                />

                <span>{subject}</span>
              </label>
            ))}
          </div>

          {selectedSubjects.length === 0 && errors.subjects && (
            <p className="mt-2 text-sm text-red-500">
              {errors.subjects.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-pink-600 py-3.5 font-semibold text-white transition hover:bg-pink-700 focus:ring-2 focus:ring-pink-400"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
