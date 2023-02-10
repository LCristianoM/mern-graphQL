import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/Task";
import { AiOutlineDelete } from "react-icons/ai"

function TaskCard({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });
  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 justify-between flex" >
      <h1 className="text-sm" > {task.title} </h1>
      <button
        onClick={() => {
          deleteTask({
            variables: {
              id: task._id,
            },
          });
        }}
      >
        <AiOutlineDelete/>
      </button>
    </div>
  );
}

export default TaskCard;
