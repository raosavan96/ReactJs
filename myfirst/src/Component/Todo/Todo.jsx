import { useEffect, useState } from "react";
import TodoCss from "./Todo.module.css";
import toast from "react-hot-toast";

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
    toast("Task Added")
  }

  function handleCheck(id) {
    const myArray = [...addTast];
    myArray[id].complete = !myArray[id].complete;
    addTaskFun(myArray);
  }

  function handleDelete(id) {
    const arrayDelet = [...addTast]
    const deleteItem = arrayDelet.filter((value, index) => {
      return id !== index
    })

    addTaskFun(deleteItem)

  }

  function handeleEdit(id) {
    // (1)

    const arrayUpdate = [...addTast]
    const updateValue = arrayUpdate[id]
    let promptValue = prompt(`Edit value ${updateValue.taskName}`, updateValue.taskName)

    if (promptValue) {
      let newaValue = { taskName: promptValue, complete: false }
      arrayUpdate.splice(id, 1, newaValue)
      addTaskFun(arrayUpdate)
    }


  }

  useEffect(() => {
    const myArray = [...addTast];
    const completeTask = myArray.filter((value) => {
      return value.complete;
    });
    setCtask(completeTask.length);

    const unComleteTast = myArray.filter((value) => {
      return !value.complete;
    });
    setUtask(unComleteTast.length);

    const totelTasks = myArray.filter((value) => {
      return value;
    });

    setTotalTask(totelTasks.length);
  }, [addTast])

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
                className={`form-control w-25 btn btn-info ${TodoCss.btn_style}`}
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
                        <i class="bi bi-pencil-square text-primary me-3" onClick={() => handeleEdit(index)}></i>
                        <i class="bi bi-trash  text-warning" onClick={() => handleDelete(index)}></i>
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
