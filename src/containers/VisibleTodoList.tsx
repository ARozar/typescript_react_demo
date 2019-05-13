import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import { TodoItem } from  '../reducers/todos'

interface StateToProps {
  todos: TodoItem[];
}

interface DispatchFromProps {
  toggleTodo: (id: number) => void;
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state): StateToProps => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect<StateToProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)