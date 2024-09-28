import React, { useEffect, useState } from "react";
import axios from "axios";

function LeaderBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://script.google.com/macros/s/AKfycbyoP5c5uTcIAixrwhtbG3ejDzzZTbsJHnYQguq_ydB_jy1XtWpGAwAtQ58FotZUGAOO/exec?sheet=Sheet1`
        );

        const fetchedData = response.data; // Correct way to access the data
        setData(fetchedData);

        // console.log("Fetched Data", data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lb-bg">
      <h1>LeaderBoard</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>College</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 100).map((row, index) => (
              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeaderBoard;