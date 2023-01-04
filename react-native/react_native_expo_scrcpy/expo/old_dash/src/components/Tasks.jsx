import TaskItem from "./TaskItem";


const Tasks = (props) => {

  return (
    <div className="Tasks">
      {props.data.map((state,index) =>
        <TaskItem
          TaskItem={{
            "name": state.task_name,
            "user": state.user.name.split(' ',2).shift(),
            "time": state.time
          }}
          key={index}
        />
      )}
    </div>
  );
};

export default Tasks;