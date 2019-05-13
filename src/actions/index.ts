
export type VisibilityFilterType = 'SHOW_All' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export type SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export interface VisibilityFilterAction {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFilterType
}
export const AddTodo = 'ADD_TODO';

export const ToggleTodo = 'TOGGLE_TODO';

interface AddTodoAction {
    type: typeof AddTodo,
    id: number,
    text: string
}

interface ToggleTodoAction {
    type: typeof ToggleTodo,
    id: number
}

export type TodoAction  = AddTodoAction | ToggleTodoAction;

let nextTodoId = 0
export const addTodo: (text: string) => AddTodoAction = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})



export const setVisibilityFilter: (filter: VisibilityFilterType) => VisibilityFilterAction = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo: (id:number) => ToggleTodoAction = id => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const SHOW_ALL: VisibilityFilterType = 'SHOW_All';

export const SHOW_COMPLETED: VisibilityFilterType = 'SHOW_COMPLETED';

export const  SHOW_ACTIVE: VisibilityFilterType = 'SHOW_ACTIVE';

export const VisibilityFilters = {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}

// interface Customer {
//     name: string,
//     age: number
// }

// class Person {
//     constructor(public name: string, public age: number){}
// }

// const foo: Customer = new Person('test', 11);

// const bar: Customer = { name: 'Andrew', age: 10 };
