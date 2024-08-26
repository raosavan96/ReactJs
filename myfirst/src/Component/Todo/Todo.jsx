import { useState } from "react";
import TodoCss from "./Todo.module.css";

function Todo() {
  const allTask = [
    {
      taskName: "Buy Car",
      complete: true,
    },
    {
      taskName: "Buy Iphone",
      complete: true,
    },
    {
      taskName: "Buy Bike",
      complete: true,
    },
  ];

  const [task, setTast] = useState("");
  const [addTast, addTaskFun] = useState(allTask);

  function inputFun(e) {
    setTast(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function addTastMain() {
    if (task) {
      addTaskFun([...allTask, task]);
    }
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
                        <input type="checkbox" checked={value.complete} />
                        <p className="m-0 ms-2">{value.taskName}</p>
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

          <div className={TodoCss.footer_content}>
            <p>Component Task :-</p>
            <p>-: Remaining Task</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
