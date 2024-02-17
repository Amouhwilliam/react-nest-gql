import { useQuery } from '@tanstack/react-query'
import { GraphQLClient, request } from 'graphql-request';
import {DocumentNode} from "graphql/language";

interface GQLQueryInterface {
    key: string;
    query: DocumentNode;
    variables?: any;
    config?: any
}
const endpoint: string = "http://localhost:3333/graphql";
export const useGQLQuery = ({key, query, variables, config = {}}: GQLQueryInterface) => {
    const fetcher = async (query: DocumentNode, variables: any) => await request(endpoint, query, variables, config);

    return useQuery({queryKey: [key], queryFn: async () => await fetcher(query, variables)});
}

