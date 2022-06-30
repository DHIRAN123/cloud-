import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_PROVIDER } from "./Queries/Provider";
import { GET_SERVICE_BY_PROVIDER_ID, GET_SERVICE_BY_SERVICE_ID, SEARCH_SERVICE } from "./Queries/ProviderService";


const RootQuery = new GraphQLObjectType({
    name : "RootQuery",
    fields : {
        getAllProviders : GET_ALL_PROVIDER,
        getServiceByProviderId : GET_SERVICE_BY_PROVIDER_ID,
        getServiceByServiceId : GET_SERVICE_BY_SERVICE_ID,
        searchService: SEARCH_SERVICE
    }
});

export const schema = new GraphQLSchema({
    query : RootQuery
});