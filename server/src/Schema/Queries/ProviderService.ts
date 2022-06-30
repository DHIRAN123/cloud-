import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { ProviderServices } from "../../Entities/ProviderService";
import { ProviderServiceType } from "../TypeDefs/ProviderService";


export const GET_SERVICE_BY_PROVIDER_ID = {
    type : new GraphQLList(ProviderServiceType),
    args : {
        provider_id : {type : GraphQLInt}
    },
    resolve(parent : any, args : any){
        const {provider_id}  = args;
        return  ProviderServices.find({where : {providerid : provider_id}});
    }

}
export const GET_SERVICE_BY_SERVICE_ID = {
    type : new GraphQLList(ProviderServiceType),
    args : {
        service_id : {type : GraphQLInt}
        
    },
    resolve(parent : any, args : any){
        const {service_id}  = args;
        return  ProviderServices.find({where : {serviceid : service_id}});
    }
}

export const SEARCH_SERVICE = {
    type : new GraphQLList(ProviderServiceType),
    args :{
        search_text : {type : GraphQLString},
        provider_id : {type : GraphQLInt}
    },
    resolve(parent : any, args : any){
        const {search_text, provider_id} = args;
        return ProviderServices.createQueryBuilder()
            .where("providerid = :provider_id and (service like :search_text OR service_type like :search_text OR description like :search_text )",{provider_id: provider_id, search_text: `%${search_text}%`})
            .getMany()

    }
}