import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

const EditNotePage = ({ updateNote }) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`notes/${slug}`)
      .then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
        setCategory(res.data.category);
      })
      .catch(error => console.error(error))
  }, [slug])

  const updatedNotes = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body || !category) return;

    try {
      await updateNote(updatedNotes, slug);
      navigate(`../notes/${slug}`);
    } catch (error) {
      console.error(error);
    }
  };

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
          Update Note
        </h5>

        <div className="mb-3">
          <label className="form-label" style={{ color: "#cbd5f5" }}>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter note's title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            className="form-control"
            rows={10}
            placeholder="Enter note's content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            border: "none",
            color: "#fff",
            fontWeight: "600",
            padding: "10px",
            borderRadius: "10px",
            textAlign:"center"
          }}
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditNotePage;
