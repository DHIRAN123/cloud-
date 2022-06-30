import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_PROVIDERS } from '../GraphQL/Queries'
import GetProviderService from './GetProviderService';

type ProviderProps = {
    searchText : string;
}

function GetProviders(props: ProviderProps) {
    const {data} = useQuery(GET_ALL_PROVIDERS);
    const servicehtml1 = GetProviderService(1,props.searchText);
    const servicehtml2 = GetProviderService(2,props.searchText);
    const servicehtml3 = GetProviderService(3,props.searchText);

  return (
    <>{data && data.getAllProviders.map((provider : any) => {
        let logohtml = <></>;
        let servicehtml = <></>;
        if(provider.providerid == 1){
            logohtml = <><img src="aws-logo.png" alt=""/><h3>AWS</h3></>;
            servicehtml = servicehtml1;
        }
        else if(provider.providerid == 2){
            logohtml = <><img src="azure.png" alt=""/><h3>AZURE</h3></>;
            servicehtml = servicehtml2;
        }
        else if(provider.providerid == 3){
            logohtml = <><img src="gcp.png" alt=""/><h3>GCP</h3></>;
            servicehtml = servicehtml3;
        }
        return(
        <div className="col-sm-4 border bg-light py-3 px-lg-5 text-center col" key={provider.providerid}>
            {logohtml}
            {servicehtml}
        </div>);
    })}</>
  )
}

export default GetProviders;