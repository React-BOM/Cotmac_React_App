import React, { useState } from "react";
import Navbar from "./Navbar";
import './Dashboard.css';
import Footer from "./footer1";

const Dashboard = () => {
  const [tableData, setTableData] = useState(
    Array(12).fill(Array(10).fill("")) // Creates a 12x10 table with empty values
  );

  const [rowValues, setRowValues] = useState({
    totalIOWithSpare: Array(9).fill("0"),
    totalIOOffered: Array(9).fill("0"),
    tagReq: Array(9).fill("0"),
    totalTags: {
      tag1: "0",
      tag2: "",
      tag3: "",
      tag4: "",
      tag5: "",
      tag6: "",
      tag7: "",
      tag8: "",
      tag9: "",
    },
    sixteen: Array(9).fill("16"),
    eight: Array(9).fill("8"),
    four: Array(9).fill("4"),
    zero: Array(9).fill("0%"),
  });

  const handleInputChange = (e, rowIndex, colIndex) => {
    const value = e.target.value;
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = value;
    setTableData(updatedData);
  };

  const handleRowValueChange = (e, rowName, colIndex) => {
    const value = e.target.value;
    const updatedValues = { ...rowValues };
    updatedValues[rowName][colIndex] = value;
    setRowValues(updatedValues);
  };

  // Generic Input component
  const InputField = ({ value, onChange, rowIndex, colIndex }) => (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e, rowIndex, colIndex)}
      className="form-control custom-input"
    />
  );

  // Generic Output component (for non-editable fields)
  const OutputField = ({ value }) => (
    <span className="form-control-plaintext">{value}</span>
  );

  const renderRow = (rowData, rowName, isEditable = false) => {
    return Array.from({ length: 9 }, (_, index) => {
      const value = isEditable
        ? rowData[index]
        : rowValues[rowName][index];

      return (
        <td key={index}>
          {isEditable ? (
            <InputField
              value={value}
              onChange={handleInputChange}
              rowIndex={rowData.rowIndex}
              colIndex={index + 1}
            />
          ) : (
            <OutputField value={value} />
          )}
        </td>
      );
    });
  };

  return (
    <>
    <Navbar />
    <div className="dashboard-container">
      <div className="container mt-5">
        <table className="table table-bordered custom-table">
          <thead>
            <tr>
              <th>Specification</th>
              <th>DI</th>
              <th>DO</th>
              <th>AI</th>
              <th>AI HART</th>
              <th>T/C</th>
              <th>RTD</th>
              <th>AO</th>
              <th>AD H</th>
              <th>M RTU</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 (Actual I/O - Input fields) */}
            <tr className="input-row">
              <td>Actual I/O</td>
              {renderRow(tableData[0], "zero", true)}
            </tr>

            {/* Row 2 (0%) - Output field */}
            <tr className="output-row">
              <td>0%</td>
              {renderRow(rowValues.zero, "zero")}
            </tr>

            {/* Row 3 (Total I/O with Spare) - Output fields */}
            <tr className="output-row">
              <td>Total I/O with Spare</td>
              {renderRow(rowValues.totalIOWithSpare, "totalIOWithSpare")}
            </tr>

            {/* Row 4 (16) - Output fields */}
            <tr className="output-row">
              <td>16</td>
              {renderRow(rowValues.sixteen, "sixteen")}
            </tr>

            {/* Row 5 (100%) - Output fields */}
            <tr className="output-row">
              <td>8</td>
              {renderRow(rowValues.eight, "eight")}
            </tr>

            {/* Row 6 (20) - Output fields */}
            <tr className="output-row">
              <td>4</td>
              {renderRow(rowValues.four, "four")}
            </tr>

            {/* Row 7 (Total I/O Offered) - Output fields */}
            <tr className="output-row">
              <td>Total I/O Offered</td>
              {renderRow(rowValues.totalIOOffered, "totalIOOffered")}
            </tr>

            {/* Row 8 (Tag Req) - Output fields */}
            <tr className="output-row">
              <td>Tag Req</td>
              {renderRow(rowValues.tagReq, "tagReq")}
            </tr>

            {/* Row 9 (Total Tags) - Input fields */}
            <tr className="input-row">
              <td>Total Tags</td>
              {Array.from({ length: 9 }, (_, index) => (
                <td key={index}>
                  <InputField
                    value={rowValues.totalTags[`tag${index + 1}`]}
                    onChange={(e) => handleRowValueChange(e, "totalTags", index)}
                    rowIndex={9}
                    colIndex={index}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
