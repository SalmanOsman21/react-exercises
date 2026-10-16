
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    experience: '',
    skills: [],
    agreeToTerms: false,
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Product Manager',
  ];

  const skillOptions = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Java',
    'UI Design',
    'API Development',
  ];

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName') {
      if (!value.trim()) {
        error = 'Full name is required';
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = 'Enter a valid name (2-30 letters)';
      }
    }

    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Enter a valid email address';
      }
    }

    if (name === 'role' && !value) {
      error = 'Please select a role';
    }

    if (name === 'experience') {
      if (value === '') {
        error = 'Experience is required';
      } else if (
        isNaN(value) ||
        Number(value) < 0 ||
        Number(value) > 50
      ) {
        error = 'Enter experience between 0 and 50 years';
      }
    }

    if (name === 'skills' && value.length === 0) {
      error = 'Please select at least one skill';
    }

    if (name === 'agreeToTerms' && !value) {
      error = 'You must agree to the terms';
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, newValue),
    }));
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];

    setFormData((prev) => ({
      ...prev,
      skills: newSkills,
    }));

    setErrors((prev) => ({
      ...prev,
      skills: validateField('skills', newSkills),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        formErrors[key] = error;
      }
    });

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert('Application submitted successfully!');
      console.log('Form submitted:', formData);
    }
  };

  const inputClass = (name) =>
    `mt-1 block w-full rounded-lg border ${
      errors[name] ? 'border-red-500' : 'border-zinc-300'
    } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`;

  const ErrorMessage = ({ name }) =>
    errors[name] ? (
      <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
    ) : null;

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg ring-1 ring-zinc-900/5">
        <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-900">
          Developer Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass('fullName')}
            />
            <ErrorMessage name="fullName" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass('email')}
            />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass('role')}
            >
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <ErrorMessage name="role" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              max="50"
              className={inputClass('experience')}
            />
            <ErrorMessage name="experience" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Skills
            </label>

            <div className="grid grid-cols-2 gap-4">
              {skillOptions.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 text-sm text-zinc-600"
                >
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="h-4 w-4 rounded border-zinc-300 text-blue-600"
                  />
                  {skill}
                </label>
              ))}
            </div>

            <ErrorMessage name="skills" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm text-zinc-700">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 rounded border-zinc-300 text-blue-600"
              />
              I agree to the terms and conditions
            </label>
            <ErrorMessage name="agreeToTerms" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm text-zinc-700">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="h-4 w-4 rounded border-zinc-300 text-blue-600"
              />
              Receive notifications about new opportunities
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
