import React, { useEffect, useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit, FiArrowLeft } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import FormatDate from "../FormatDate";
import Modal from "../components/Modal";

const NoteDetailPage = ({ deleteNote }) => {
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();

  const handleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/notes/${slug}/`)
      .then(res => {
        setNote(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [slug]);

  return (
    <>
      <div
        className="note-container container position-relative"
        style={{
          maxWidth: "820px",
          marginTop: "40px",
          backgroundColor: "rgba(30,41,59,0.95)",
          backdropFilter: "blur(8px)",
          padding: "36px",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.65)",
          color: "#e5e7eb",
          transition: "all 0.3s ease"
        }}
      >

        {/* Back Button */}
        <button
          onClick={() => navigate("/app")}
          className="btn d-flex align-items-center gap-2"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "#cbd5f5",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "8px 14px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "500",
            backdropFilter: "blur(6px)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateX(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          <FiArrowLeft />
          Back
        </button>

        {/* Title */}
        <h3
          className="title text-center"
          style={{
            fontWeight: "700",
            marginBottom: "16px",
            color: "#a5b4fc"
          }}
        >
          {note.title}
        </h3>

        {/* Dates */}
        <div
          className="d-flex justify-content-center flex-wrap"
          style={{ gap: "12px", marginBottom: "26px" }}
        >
          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              color: "#cbd5f5",
              backgroundColor: "rgba(255,255,255,0.05)"
            }}
          >
            Created: {FormatDate(note.created)}
          </span>

          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              color: "#cbd5f5",
              backgroundColor: "rgba(255,255,255,0.05)"
            }}
          >
            Updated: {FormatDate(note.updated)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Link to={`../edit-note/${slug}`}>
            <button
              className="btn d-flex align-items-center gap-2"
              style={{
                backgroundColor: "#1e40af",
                border: "none",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: "12px",
                fontWeight: "600",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <FiEdit />
              Edit
            </button>
          </Link>

          <button
            onClick={handleIsOpen}
            className="btn d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#7f1d1d",
              border: "none",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "12px",
              fontWeight: "600",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <BiSolidTrashAlt />
            Delete
          </button>
        </div>

        {/* Note Body */}
        <p
          className="description"
          style={{
            backgroundColor: "rgba(20,25,40,0.95)",
            padding: "28px",
            borderRadius: "14px",
            color: "#e5e7eb",
            lineHeight: "1.9",
            fontSize: "16px",
            whiteSpace: "pre-wrap",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 4px 20px rgba(0,0,0,0.25)"
          }}
        >
          {note.body}
        </p>
      </div>

      {/* Delete Modal */}
      {isOpen && (
        <Modal
          handleIsOpen={handleIsOpen}
          deleteNote={() => deleteNote(slug)}
        />
      )}
    </>
  );
};

export default NoteDetailPage;
