import gql from 'graphql-tag';
import {DocumentNode} from "graphql/language";

export const  GET_USER: DocumentNode = gql`
    query($id: Int!) {
        user(id: $id) {
            id
            name
        }
    }
`

export const  GET_USERS: DocumentNode = gql`
    query  {
        users {
            id
            name
        }
    }
`