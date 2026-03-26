import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Modal = ({ handleIsOpen, deleteNote }) => {
  const navigate = useNavigate();

  const handleDeleteNote = async () => {
    try {
      await deleteNote();
      navigate("/app");
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="c-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
    >
      <div
        className="c-modal"
        style={{
          backgroundColor: "#111827", // deep slate dark
          padding: "32px",
          borderRadius: "18px",
          width: "90%",
          maxWidth: "500px", // slightly wider
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.6)",
          color: "#e5e7eb",
          position: "relative"
        }}
      >
        <button
          className="close-button"
          onClick={handleIsOpen}
          style={{
            position: "absolute",
            top: "12px",
            right: "16px",
            background: "none",
            border: "none",
            color: "#94a3b8",
            fontSize: "24px",
            cursor: "pointer"
          }}
        >
          ×
        </button>

        <div className="c-modal-content text-center">
          <h4
            style={{
              marginBottom: "14px",
              fontWeight: "700",
              color: "#60a5fa", // soft sky blue
              fontSize: "20px"
            }}
          >
            Delete Note
          </h4>

          <p
            style={{
              color: "#d1d5db",
              marginBottom: "28px",
              fontSize: "15px",
              lineHeight: "1.6"
            }}
          >
            Are you sure you want to permanently delete this note?
          </p>

          <span className="d-flex justify-content-center gap-4">
            <button
              onClick={handleDeleteNote}
              className="btn d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#dc2626",
                border: "none",
                color: "#fff",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "12px",
                minWidth: "110px"
              }}
            >
              Delete
            </button>

            <button
              onClick={handleIsOpen}
              className="btn d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#2563eb",
                border: "none",
                color: "#fff",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "12px",
                minWidth: "110px"
              }}
            >
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
