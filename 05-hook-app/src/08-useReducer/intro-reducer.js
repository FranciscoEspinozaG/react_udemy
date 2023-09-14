const initialState = [
    {
        id: 1,
        toDo: 'Pasar aspiradora',
        done: false,
    }
];

const todoReducer = (state = initialState, action = {})=>{
    
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let toDos = todoReducer();

const newTodo = {
    id:2,
    toDo: 'Hacer las camas',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

const lavarLoza = {
    id:3,
    toDo: 'Lavar la loza',
    done: true
}

const laLoza = {
    type: '[TODO] add todo',
    payload: lavarLoza,
}

toDos = todoReducer(toDos, addTodoAction)

toDos = todoReducer(toDos, laLoza)

console.log(toDos)