import "./table.css";

function Table() {
  let workoutRep1 = ["11", "10", "8", "Fail 99"];
  let workoutRep2 = ["9", "10", "2", "9"];

  return (
    <div>
      <table className="main-table">
        <tr className="basic-row">
          <th>ID</th>
          <th>Date</th>
          <th>
            Workout<button>+</button>
          </th>
          <th style={{ width: "200px" }}>Set x Reps</th>
        </tr>
        <tr className="basic-row">
          <td>1</td>
          <td>{Date()}</td>
          <td>Dropdown</td>
          <td>
            <div className="saved-rep">{workoutRep1[0]}</div>
            <div className="saved-rep">{workoutRep1[1]}</div>
            <div className="saved-rep">{workoutRep1[2]}</div>
            <div className="saved-rep">{workoutRep1[3]}</div>
          </td>
        </tr>
        <tr className="basic-row">
          <td>1</td>
          <td>{Date()}</td>
          <td>Dropdown</td>
          <td>
            <div className="saved-rep">{workoutRep2[0]}</div>
            <div className="saved-rep">{workoutRep2[1]}</div>
            <div className="saved-rep">{workoutRep2[2]}</div>
            <div className="saved-rep">{workoutRep2[3]}</div>
          </td>
        </tr>
        <tr className="basic-row">
          <td>2</td>
          <td>{Date()}</td>
          <td>Choose</td>
          <td>
            <div className="current-rev-div">
              <input className="rep-input" />
              <input className="rep-input" />
              <input className="rep-input" />
              <input className="rep-input" />
              <button className="add-rep-button">+</button>
            </div>
          </td>
        </tr>
      </table>
      <button className="save-button" onClick={alert("Try Again")}>
        SAVE
      </button>
    </div>
  );
}

export default Table;
