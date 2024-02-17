import React from 'react';
import './App.css';
import {useGQLQuery} from "./hooks/useGQLQuery";
import {GET_USER, GET_USERS} from "./gql/queries";
import {useGQLMutation} from "./hooks/useGQLMutation";
import {CREATE_USER, DELETE_USER, UPDATE_USER} from "./gql/mutation";

function App() {

    const createMutation = useGQLMutation({
        mutation: CREATE_USER, variables: {
            name: 'test'
        }
    });

    const updateMutation = useGQLMutation({
        mutation: UPDATE_USER, variables: {
            id: 1,
            name: 'test'
        }
    });

    const deleteMutation = useGQLMutation({
        mutation: DELETE_USER, variables: {
            id: 1
        }
    })

    const {data: usersData, isLoading: isLoadingUsers, error: usersError} =
        useGQLQuery({key: 'users', query: GET_USERS});

    const variables = {
        id: 1
    }
    const {data: userData, isLoading: isLoadingUser, error: userError} =
        useGQLQuery({key: 'user', query: GET_USER, variables});

    if (isLoadingUser || isLoadingUsers) return <div>Loading...</div>;
    if (userError || userError) return <div>Error: {userError?.message || usersError?.message}</div>;


    return (
        <div className="App">
            <div className={"text-2xl font-bold mt-3 cursor-pointer"} onClick={() => {
                createMutation.mutate();
            }}>Click me to
            </div>
        </div>
    );
}

export default App;
