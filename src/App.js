import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling

const App = () => {
  const [vectorDimension, setVectorDimension] = useState("");
  const [namespaces, setNamespaces] = useState("");
  const [recordCount, setRecordCount] = useState(0);
  const [writesPerMonth, setWritesPerMonth] = useState(0);
  const [metaSize, setMetaSize] = useState("");

  return (
    <div className="estimate-container">
      <h2>Estimate your costs</h2>

      <div className="content-container">
        <div className="input-section">
          <div className="left-inputs">
            <div className="section">
              <h3>Compare Use Case Scenarios</h3>
              <div className="button-group">
                <button>RAG</button>
                <button>Classification</button>
                <button>Search</button>
                <button>Custom</button>
                <span className="reset">Reset</span>
              </div>
              <p>Adjust the parameters to reflect your use case.</p>
            </div>

            <label>Vector Dimensionality</label>
            <input
              type="number"
              value={vectorDimension}
              onChange={(e) => setVectorDimension(e.target.value)}
            />
            <label>Namespaces</label>
            <input
              type="number"
              value={namespaces}
              onChange={(e) => setNamespaces(e.target.value)}
            />
            <label>Record Count</label>
            <input
              type="range"
              min={0}
              max={100}
              value={recordCount}
              onChange={(e) => setRecordCount(e.target.value)}
            />
            <input
              type="number"
              value={recordCount}
              onChange={(e) => setRecordCount(e.target.value)}
            />
            <label>Writes per Month</label>
            <input
              type="range"
              min={0}
              max={100}
              value={writesPerMonth}
              onChange={(e) => setWritesPerMonth(e.target.value)}
            />
            <input
              type="number"
              value={writesPerMonth}
              onChange={(e) => setWritesPerMonth(e.target.value)}
            />
            <label>Meta Size</label>
            <input type="text" value={metaSize} onChange={(e) => setMetaSize(e.target.value)} />
            <span className="unit">bytes</span>
          </div>

          <div className="right-info">
            <h3>One-time Cost</h3>
            <p>
              <strong>Initial record upload:</strong> $0.80
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
