import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TaskList;
