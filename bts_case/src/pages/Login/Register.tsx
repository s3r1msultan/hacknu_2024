import { useState } from "react";
import "./AuthForm.scss";
import { useNavigate } from "react-router-dom";

interface FormState {
  name: string;
  surname: string;
  email: string;
  address: string;
  phone: string;
}
const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    surname: "",
    email: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input name="surname" placeholder="Surname" value={form.surname} onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <button type="submit" className="btn-signup">
            SIGN UP
          </button>
        </form>
        <div className="login-link">
          Already have an account? <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
