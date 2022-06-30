import { gql } from "@apollo/client";

export const GET_ALL_PROVIDERS = gql`
    query getAllProviders {
        getAllProviders{
            providerid
            providername
        }
    }
`;

export const GET_SERVICE_BY_PROVIDER_ID = gql`
    query getServiceByProviderId(
        $provider_id : Int!
    ){
        getServiceByProviderId(
            provider_id : $provider_id
        ){
            serviceid
            service
            providerid
        }
    }
`;
export const GET_SERVICE_BY_SERVICE_ID = gql`
    query getServiceByServiceId(
        $service_id : Int!
    ){
        getServiceByServiceId(
            service_id : $service_id
        ){
            serviceid
            service
            cost
            description
            service_type   
        }
    }
`;

export const SEARCH_SERVICE = gql`
    query searchService(
        $provider_id : Int!,
        $search_text : String!
    ){
        searchService(
        provider_id : $provider_id,
        search_text : $search_text
        ){
            serviceid
            service
        }
    }
`;