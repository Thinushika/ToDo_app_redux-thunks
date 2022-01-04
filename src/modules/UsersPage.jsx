import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserAsync } from '../redux/reducers/thunks'

const UsersPage = () => {

    const dispatch = useDispatch()
    const {isLoading, todos, errrorMessage} = useSelector( (state) => state.todos);

    useEffect(() => {
        dispatch(loadUserAsync());
    },[]);

    return (
        <div>
            <h1>User Listing</h1>
            { isLoading && <h3>Loading...</h3>}




            {errrorMessage && <h3>{errrorMessage}</h3>}
            {todos && todos.map((todo) => <h5 key={todo.userId}>{todo.title }</h5>)}
        </div>
    )
}

export default UsersPage