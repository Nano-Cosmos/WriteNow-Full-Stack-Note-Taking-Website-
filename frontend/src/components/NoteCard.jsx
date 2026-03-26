import { FaNoteSticky } from "react-icons/fa6";
import FormatDate from "../FormatDate";
import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  const body = `${note.body.split(" ").slice(0, 20).join(" ")}.....`;
  const color =
    note.category === "BUSINESS"
      ? "#60a5fa" // soft blue
      : note.category === "PERSONAL"
      ? "#22c55e" // soft green
      : "#facc15"; // soft yellow for important

  return (
    <div className="col-md-4 single-note-item all-category" style={{ marginBottom: "24px", position: "relative" }}>
      <div
        className="card card-body"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.95)",
          backdropFilter: "blur(8px)",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.55)",
          color: "#e5e7eb",
          transition: "all 0.3s ease",
          cursor: "pointer",
          overflow: "hidden",
          padding: "18px"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.7)";
          e.currentTarget.style.border = `1px solid ${color}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.55)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
        }}
      >
        {/* Category Stick */}
        <span
          className="side-stick"
          style={{
            backgroundColor: color,
            width: "4px",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0",
            borderRadius: "14px 0 0 14px"
          }}
        ></span>

        {/* Icon */}
        <FaNoteSticky
          style={{
            marginLeft: "auto",
            color: color,
            fontSize: "22px"
          }}
        />

        {/* Title */}
        <Link to={`notes/${note.slug}`} style={{ textDecoration: "none" }}>
          <h5
            className="note-title text-truncate w-100 mb-1"
            style={{ fontWeight: "600", color: "#f1f5f9" }}
          >
            {note.title}
          </h5>
        </Link>

        {/* Date */}
        <p style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "12px" }}>
          {FormatDate(note.updated)}
        </p>

        {/* Body */}
        <div className="note-content">
          <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6" }}>
            {body}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="d-flex align-items-center mt-3">
          <Link to={`/notes/${note.slug}`}>
            <MdMarkunread
              style={{
                fontSize: "24px",
                cursor: "pointer",
                color: color,
                marginRight: "12px"
              }}
            />
          </Link>

          <span
            style={{
              color: "#94a3b8",
              cursor: "pointer",
              marginRight: "12px"
            }}
          >
            <i className="fa fa-trash"></i>
          </span>

          {/* Dropdown */}
          <div className="ml-auto">
            <div className="category-selector btn-group">
              <a
                className="nav-link dropdown-toggle category-dropdown label-group p-0"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span style={{ color: "#94a3b8", fontSize: "20px" }}>•••</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right category-menu"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  minWidth: "160px"
                }}
              >
                <a className="dropdown-item text-blue-400" href="javascript:void(0);">
                  Business
                </a>
                <a className="dropdown-item text-green-400" href="javascript:void(0);">
                  Social
                </a>
                <a className="dropdown-item text-yellow-400" href="javascript:void(0);">
                  {note.category}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
