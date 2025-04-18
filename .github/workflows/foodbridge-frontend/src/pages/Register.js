import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "donor",  // Default role is donor
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6">
      <h2 className="text-center mb-4 text-xl">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-4"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <select
          className="border p-2 w-full mb-4"
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

