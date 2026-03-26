import React from "react";

const Filter = ({ handleFilterText, filterText }) => {
  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",   // desktop limit
        width: "100%",       // mobile safe
        margin: "30px auto",
        padding: "0 12px",   // prevents edge sticking on mobile
      }}
    >
      <select
        value={filterText}
        onChange={(e) => handleFilterText(e.target.value)}
        className="form-select"
        aria-label="Filter notes"
        style={{
          height: "52px",
          backgroundColor: "#111827",
          color: "#E5E7EB",
          border: "1px solid #1F2937",
          borderRadius: "12px",
          padding: "0 16px",
          fontSize: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          width: "100%",     // critical
        }}
      >
        <option value="All notes">All Notes</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
    </div>
  );
};

export default Filter;
