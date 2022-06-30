import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";


export const ProviderServiceType = new GraphQLObjectType({
    name : "providerservices",
    fields : () => ({
        serviceid : {type:GraphQLID},
        providerid : {type: GraphQLInt},
        cost : {type : GraphQLString},
        description : {type : GraphQLString},
        service : {type : GraphQLString},
        service_type:{type: GraphQLString}
    }),
});