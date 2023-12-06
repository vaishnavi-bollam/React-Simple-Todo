import {Component} from 'react'
import TodosItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {TodosList: initialTodosList}

  deleteTodo = id => {
    const {TodosList} = this.state
    const filteredTodo = TodosList.filter(each => each.id !== id)

    this.setState({TodosList: filteredTodo})
  }

  render() {
    const {TodosList} = this.state
    return (
      <div className="main-bg">
        <h1>Simple Todos</h1>
        {TodosList.map(eachTodo => (
          <TodosItem
            TodoList={eachTodo}
            deleteTodo={this.deleteTodo}
            key={eachTodo.id}
          />
        ))}
      </div>
    )
  }
}

export default SimpleTodos
