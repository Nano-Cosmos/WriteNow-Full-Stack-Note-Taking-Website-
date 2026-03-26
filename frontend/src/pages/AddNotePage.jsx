import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNotePage = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const newNote = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title && !body && !category) {
      return;
    }
    try {
      addNote(newNote);
      setTitle("");
      setBody("");
      setCategory("");
      navigate("/app");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="container"
      style={{
        maxWidth: "650px",
        marginTop: "40px"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.95)",
          padding: "30px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
          color: "#e5e7eb"
        }}
      >
        <h5
          style={{
            marginBottom: "20px",
            fontWeight: "600",
            color: "#f9fafb",
            textAlign: "center"
          }}
        >
          Add New Note
        </h5>

        <div className="mb-3">
          <label className="form-label" style={{ color: "#cbd5f5" }}>
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter note's title"
            value={title}
            style={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e5e7eb"
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" style={{ color: "#cbd5f5" }}>
            Content
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            className="form-control"
            rows={6}
            placeholder="Enter note's content"
            value={body}
            style={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e5e7eb",
              resize: "none"
            }}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label" style={{ color: "#cbd5f5" }}>
            Note's category
          </label>
          <select
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            style={{
              height: "42px",
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e5e7eb"
            }}
          >
            <option selected>Pick a category</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
          </select>
        </div>

        <button
          className="btn d-flex align-items-center justify-content-center"
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            border: "none",
            color: "#fff",
            fontWeight: "600",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNotePage;
