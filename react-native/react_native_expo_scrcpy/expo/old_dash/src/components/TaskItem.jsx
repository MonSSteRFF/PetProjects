const TaskItem = (props) => {

  return (
    <div className="TaskItem">
      <div className="container">
        <p>{props.TaskItem.name}</p>
        <p>{props.TaskItem.user}</p>
        <p>{props.TaskItem.time}</p>
      </div>
    </div>
  );
};

export default TaskItem;