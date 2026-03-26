import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader"
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await registerUser(username, password);

      toast.success("Registration successful! Please login.");
      navigate("/login"); // keep as-is
      setIsLoading(false)
    } catch (err) {
      const backendError =
        err.response?.data?.username ||
        err.response?.data?.password ||
        "Registration failed";
      toast.error(backendError);
      setIsLoading(false);
    }
  };

  return (
    <>
    {isLoading && <Loader isLoading={isLoading}/>}
     <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #020617ee)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#0f172a",
          borderRadius: "16px",
          animation: "fadeUp 0.4s ease",
        }}
      >
        <div className="card-body p-4">
          <h3 className="text-white fw-bold mb-1 text-center">
            Create your account ✨
          </h3>
          <p className="text-muted text-center mb-4">
            Start writing with WriteNow
          </p>

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-primary-subtle text-dark border-secondary"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ padding: "12px", borderRadius: "10px" }}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control bg-primary-subtle text-dark border-secondary"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: "12px", borderRadius: "10px" }}
              />
            </div>

            <button
              type="submit"
              className="btn w-100 fw-semibold"
              style={{
                backgroundColor: "#22c55e",
                color: "#020617",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              Register
            </button>
          </form>

          <p className="text-center text-muted mt-4 mb-0">
            Already have an account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
    </>
   
  );
}
