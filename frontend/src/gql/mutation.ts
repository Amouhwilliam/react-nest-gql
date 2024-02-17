import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";

export const  CREATE_USER: DocumentNode = gql`
    mutation createUser($name: String!) {
        createUser(createUserInput:
        {
            name: $name
        }){
            id,
            name
        }
    }
`

export const  UPDATE_USER: DocumentNode = gql`
    mutation updateUser($id: ID!, $name: String!) {
        updateUser(updateUserInput: 
        {
            id: $id,
            name: $name
        }){
            id,
            name
        }
    }
`

export const  DELETE_USER: DocumentNode = gql`
    mutation deleteUser($id: ID!) {
        removeUser(id: $id){
            id,
            name
        }
    }
`
