import React from "react";
import "./TextArea.css";

const TextArea = () => {
  const handleRunQuery = () => {
    const query = document.querySelector(".query-input").value;
    console.log("Query from frontend:", query); // Add a log statement to see the query in the console

    fetch("http://localhost:3000/execute", {
      // Change the port to match the backend server's port (3000)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.text()) // Assuming the response is text format
      .then((data) => {
        console.log("Response from backend:", data); // Add a log statement to see the response in the console
        // Handle the response data here (data received from the backend)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="TextArea" className="query-container">
      <textarea
        className="query-input"
        placeholder="Enter SQL query here..."
      ></textarea>
      <button className="run-button" onClick={handleRunQuery}>
        Run Query
      </button>
    </div>
  );
};

export default TextArea;
