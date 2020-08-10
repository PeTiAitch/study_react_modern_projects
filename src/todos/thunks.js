import { 
    loadTodosInProgress, 
    loadTodosSuccess, 
    loadTodosFailure, 
    createTodo, 
    removeTodo,
    markAsCompleted
} from './actions';

const baseUrl = 'http://localhost:8080/php-projects/vanila/SimpleTodosAPI/public/index.php';
// const baseUrl = 'http://localhost:8000/api';

export const loadTodos = () => async (dispatch, getState) => {
    try {
        const url = baseUrl + '/todos';
        //const url = baseUrl + '/todos.json';
        dispatch(loadTodosInProgress());
        const response = await fetch(url);
        //const todos = await response.json();
        const { todos } = await response.json();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const addTodoRequest = (text) => async (dispatch, getState) => {
    const url = baseUrl + '/todos';
    //const url = baseUrl + '/todos.json';

    try {
        const body = JSON.stringify({ text });
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body
        });


        const { todo } = await response.json();
        //const todo = await response.json();

        dispatch(createTodo(todo))
    } catch (e) {
        displayAlert(e);
    }
};

export const removeTodoRequest = id => async (dispatch) => {
    //const url = `${baseUrl}/todos/${id}`;
    //const url = `${baseUrl}/todos/${id}.json`;

    try {
        await fetch(`${baseUrl}/todos/${id}`, {method: 'delete'});
    
        dispatch(removeTodo(id));
        //dispatch(removeTodo(id));
    } catch (e) {
        displayAlert(e);
    }
};

export const markAsCompletedRequest = id => async (dispatch) => {
    //const url = `${baseUrl}/todos/${id}`;
    //const url = `${baseUrl}/todos/${id}.json`;
    try {
        const response = await fetch(`${baseUrl}/todos/${id}/completed`, {
            method: 'put'
        });
        const {todo} = await response.json();
        dispatch(markAsCompleted(todo));
    } catch (e) {
        displayAlert(e);
    }
};

export const displayAlert = text => () => {
    alert(text);
};