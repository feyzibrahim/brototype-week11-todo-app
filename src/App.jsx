import { useState } from "react";
import "./App.css";
import { BsTrash3Fill } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(2);

  const incrementCount = () => setCount((count) => count + 1);
  const decrementCount = () => setCount((count) => count - 1);

  let [selectedFilter, setSelectedFilter] = useState(0);

  let [data, setData] = useState([
    { key: 0, name: "Some Task", isDone: true },
    { key: 1, name: "Some Task", isDone: false },
  ]);

  let handleDelete = (k) => {
    console.log(k);
    let newData = data.filter((d) => d.key !== k);
    setData(newData);
    decrementCount();
  };

  let [inputData, setInputData] = useState("");
  let insertData = () => {
    if (inputData !== "") {
      let newD = { key: count, name: inputData, isDone: false };
      let newData = [...data, newD];
      setData(newData);
      setInputData("");
      incrementCount();
    }
  };

  let toggleCheck = (key) => {
    const updateData = data.map((d) =>
      d.key === key ? { ...d, isDone: !d.isDone } : d
    );
    setData(updateData);
  };

  return (
    <>
      <h2>
        to<span>do.</span>
      </h2>
      <div className="mainBody">
        <div className="filters">
          <h3>Filters</h3>
          <div className="filterButtons">
            <button
              className={selectedFilter === 0 ? "activeButton" : ""}
              onClick={() => {
                setSelectedFilter(0);
              }}
            >
              All
            </button>
          </div>
        </div>
        <div className="tasks">
          <div className="insertTask">
            <input
              type="text"
              name="data"
              id="data"
              className="search"
              placeholder="Enter your task"
              value={inputData}
              onChange={(data) => {
                setInputData(data.target.value);
              }}
            />
            <button
              onClick={() => {
                insertData("Faiz");
              }}
              className="addTask"
            >
              Add Task
            </button>
          </div>
          <h3 className="headingTasks">
            {count} Tasks <span>to</span>do.
          </h3>
          <div className="tableBody">
            {data &&
              data.map((d, i) => {
                return (
                  <div className="taskRow" key={i}>
                    <div className="checkBoxAndName">
                      <input
                        type="checkbox"
                        name="click"
                        id=""
                        checked={d.isDone}
                        onChange={() => {
                          toggleCheck(d.key);
                        }}
                      />
                      <p className={d.isDone ? "strikeTheLine" : ""}>
                        {d.name}
                      </p>
                    </div>
                    <BsTrash3Fill
                      className="trashIcon"
                      onClick={() => handleDelete(d.key)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
