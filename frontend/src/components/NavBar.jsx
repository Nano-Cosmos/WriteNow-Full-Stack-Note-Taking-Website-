import { FaSquarePlus } from "react-icons/fa6";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ searchText, handleSearchText, logout }) => {
  const [isSearchHover, setIsSearchHover] = useState(false);
  const [isAddHover, setIsAddHover] = useState(false);
  const [isLogoutHover, setIsLogoutHover] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#0f172a",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
        padding: "0.75rem 0",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center w-100">
          
          {/* Top Row: Brand + Buttons (Mobile) */}
          <div className="d-flex justify-content-between align-items-center w-100 mb-2 mb-md-0">
            {/* Brand */}
            <Link 
              className="navbar-brand p-0" 
              to="/app" 
              style={{ 
                color: "#f8fafc",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              <div className="d-flex align-items-center">
                <div className="position-relative">
                </div>
                <div>
                  <h3 
                    style={{ 
                      fontWeight: "700", 
                      margin: 0, 
                      fontSize: "1.5rem",
                      background: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    WriteNow
                  </h3>
                  <div 
                    style={{
                      fontSize: "0.65rem",
                      color: "#94a3b8",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      marginTop: "-4px"
                    }}
                  >
                    Notes App
                  </div>
                </div>
              </div>
            </Link>

            {/* Buttons Group (Mobile only) */}
            <div className="d-flex d-md-none align-items-center gap-2">
              {/* Add Note Button (Mobile) */}
              <Link
                to="add-note"
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  color: "#3b82f6",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  padding: "0",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaSquarePlus size={20} />
              </Link>

              {/* Logout Button (Mobile) */}
              <button
                onClick={handleLogout}
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  color: "#ef4444",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  padding: "0",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(239, 68, 68, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaSignOutAlt size={18} />
              </button>
            </div>
          </div>

          {/* Middle Row: Search Bar (Full width on mobile) */}
          <div className="w-100 mb-3 mb-md-0 px-0 px-md-3">
            <div className="position-relative">
              <div
                className="input-group"
                style={{
                  height: "48px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(148, 163, 184, 0.15)",
                  boxShadow: isSearchHover 
                    ? "0 8px 30px rgba(59, 130, 246, 0.2), 0 0 0 2px rgba(59, 130, 246, 0.1)" 
                    : "0 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={() => setIsSearchHover(true)}
                onMouseLeave={() => setIsSearchHover(false)}
              >
                <span 
                  className="input-group-text border-0" 
                  style={{
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    borderRight: "1px solid rgba(148, 163, 184, 0.1)",
                    padding: "0 20px",
                    color: "#94a3b8"
                  }}
                >
                  <FaSearch />
                </span>
                <input
                  className="form-control border-0"
                  type="search"
                  placeholder="Search your notes..."
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => handleSearchText(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#f8fafc",
                    padding: "0 15px",
                    outline: "none",
                    fontSize: "0.95rem",
                    height: "100%",
                    border: "none"
                  }}
                />
                <button
                  className="btn border-0"
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    color: "#ffffff",
                    fontWeight: "600",
                    padding: "0 28px",
                    fontSize: "0.9rem",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    borderLeft: "1px solid rgba(148, 163, 184, 0.1)",
                    minWidth: "100px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Action Buttons (Desktop only) */}
          <div className="d-none d-md-flex align-items-center justify-content-end gap-3">
            {/* Add Note Button */}
            <Link
              to="add-note"
              className="btn d-flex align-items-center"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                color: "#3b82f6",
                fontWeight: "600",
                padding: "0px 22px",
                fontSize: "0.95rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={() => setIsAddHover(true)}
              onMouseLeave={() => setIsAddHover(false)}
            >
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  opacity: isAddHover ? "1" : "0",
                  transition: "opacity 0.3s ease"
                }}
              />
              <FaSquarePlus className="me-2" size={20} />
              <span style={{ position: "relative" }}>Add Note</span>
            </Link>

            {/* Divider */}
            <div 
              style={{ 
                width: "1px", 
                height: "30px", 
                backgroundColor: "rgba(148, 163, 184, 0.1)" 
              }} 
            />

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn d-flex align-items-center"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                color: "#ef4444",
                fontWeight: "600",
                padding: "10px 22px",
                fontSize: "0.95rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={() => setIsLogoutHover(true)}
              onMouseLeave={() => setIsLogoutHover(false)}
            >
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%)",
                  opacity: isLogoutHover ? "1" : "0",
                  transition: "opacity 0.3s ease"
                }}
              />
              <FaSignOutAlt className="me-2" size={18} />
              <span style={{ position: "relative" }}>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;