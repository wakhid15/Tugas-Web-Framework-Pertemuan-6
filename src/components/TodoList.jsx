/* eslint-disable no-unreachable */
import '../style/List.css';

const TodoList = ({ todos }) => {
  return (
    <div className="listing">
      {todos.map((item) => {
        return (
          <div className="list" key={item}>
            <input type="checkbox" />
            <p className="item">{item}</p>
          </div>
        );
      })}

      {/* <ul>
        {todos.map((item) => {
            return (
                <li key={item}>
                <input type="checkbox" className="check" />
                <p>{item}</p>
                </li>
                );
            })}
        </ul> */}
    </div>
  );
};

export default TodoList;
