import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const ProviderType = new GraphQLObjectType({
    name : "provider",
    fields : () =>({
        providerid : {type:GraphQLID},
        providername : {type:GraphQLString}
    }),
});