import {useMutation, useQuery} from '@tanstack/react-query'
import { GraphQLClient, request } from 'graphql-request';
import {DocumentNode} from "graphql/language";

interface GQLMutationInterface {
    mutation: DocumentNode;
    variables?: any;
    config?: any
}
const endpoint: string = "http://localhost:3333/graphql";
export const useGQLMutation = ({mutation, variables, config = {}}: GQLMutationInterface) => {
    const fetcher = async (mutation: DocumentNode, variables: any) => await request(endpoint, mutation, variables, config);

    return useMutation({ mutationFn: async () => await fetcher(mutation, variables)});
}

