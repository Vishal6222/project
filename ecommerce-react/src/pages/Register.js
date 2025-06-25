import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // TODO: Implement API call to register user
      // For now, simulate successful registration
      localStorage.setItem("registeredUsers", JSON.stringify([
        ...(JSON.parse(localStorage.getItem("registeredUsers") || "[]")),
        { email: formData.email, password: formData.password, name: formData.name }
      ]));
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary w-100 mb-3">Register</button>
        <p className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}