import { useState } from "react";
import TodoCss from "./Todo.module.css";

function Todo() {
  const allTask = [];

  const [task, setTast] = useState("");
  const [addTast, addTaskFun] = useState(allTask);
  const [Ctask, setCtask] = useState(0);
  const [Utask, setUtask] = useState(0);
  const [totalTask, setTotalTask] = useState(0);

  function inputFun(e) {
    setTast(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function addTastMain() {
    if (task) {
      addTaskFun([...addTast, { taskName: task, complete: false }]);
    }
    setTast("");
  }

  function handleCheck(id) {
    const myArray = [...addTast];
    myArray[id].complete = !myArray[id].complete;
    addTaskFun(myArray);

    const completeTask = myArray.filter((value, index) => {
      return value.complete;
    });
    setCtask(completeTask.length);

    const unComleteTast = myArray.filter((value, index) => {
      return !value.complete;
    });
    setUtask(unComleteTast.length);

    const totelTasks = myArray.filter((value, index) => {
      return value;
    });

    setTotalTask(totelTasks.length);
  }

  return (
    <>
      <div className={TodoCss.todo_main}>
        <div className={TodoCss.todo_box}>
          <form onSubmit={handleForm}>
            <h5 className={TodoCss.hedding}>My Todo Application</h5>
            <div className={TodoCss.input_sec}>
              <input
                className="form-control me-2"
                onChange={inputFun}
                value={task}
              />
              <button
                className="form-control w-25 btn btn-info"
                onClick={addTastMain}
              >
                Add Tast
              </button>
            </div>
          </form>

          <div className={TodoCss.content_box}>
            <div className={TodoCss.content_box_items}>
              {addTast.map((value, index) => (
                <ul>
                  <li>
                    <div className="d-flex aligin-items-center justify-content-between">
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          checked={value.complete}
                          onClick={() => handleCheck(index)}
                        />
                        <p
                          className="m-0 ms-2"
                          style={{
                            textDecoration: value.complete
                              ? "line-through"
                              : "",
                          }}
                        >
                          {value.taskName}
                        </p>
                      </div>
                      <div>
                        <i class="bi bi-pencil-square text-primary me-3"></i>
                        <i class="bi bi-trash  text-warning"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className={TodoCss.total_task}>
            <p>totel :- {totalTask}</p>
          </div>

          <div className={TodoCss.footer_content}>
            <p>Component Task :- {Ctask}</p>
            <p>{Utask} -: Remaining Task</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
