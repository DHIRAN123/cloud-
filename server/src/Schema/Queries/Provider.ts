import { GraphQLList } from "graphql";
import { Provider } from "../../Entities/Provider";
import { ProviderType } from "../TypeDefs/Provider";

export const GET_ALL_PROVIDER = {
    type : new GraphQLList(ProviderType),
    resolve() {
        return Provider.find();
    }
}