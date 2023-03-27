import '../style/Form.css';

const TodoForm = ({handleSubmit, handleChange, todo}) => {
//   const [todo, setTodo] = useState('');

//   const submitHandler = (todo) => {
//     handleSubmit(todo)
//     setTodo("")
//   }

  return (
    <div className='form'>
      <input type="text" value={todo} placeholder="Task" onChange={(e) => handleChange(e.target.value)}/>
      <button onClick={() => handleSubmit()}>SUBMIT</button>
    </div>
  );
};

export default TodoForm;
