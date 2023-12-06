// Write your code here
import './index.css'

const TodosItem = props => {
  const {TodoList, deleteTodo} = props
  const {title, id} = TodoList

  const deleteButton = () => {
    deleteTodo(id)
  }

  return (
    <ul>
      <li>
        <p>{title}</p>
        <button onClick={deleteButton}>Delete</button>
      </li>
    </ul>
  )
}

export default TodosItem
