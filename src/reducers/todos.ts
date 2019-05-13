import { TodoAction } from '../actions';
export interface TodoItem {
    id: Number,
    text: string,
    completed: Boolean
}

export interface TodoState extends Array<TodoItem> {
}
  


const todos = (state: TodoState = [] as TodoItem[], action: TodoAction): TodoState => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default todos