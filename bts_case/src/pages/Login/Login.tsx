import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.scss";
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Welcome</h1>
        <div className="initial">A</div>
        <form>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-login">
            LOGIN
          </button>
        </form>
        <div className="signup-link">
          Don't have an account? <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
