import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { GET_SERVICE_BY_PROVIDER_ID, SEARCH_SERVICE } from '../GraphQL/Queries'

function GetProviderService(provider_id : number, search_text: string) {
    console.log(search_text);
    let apiname = SEARCH_SERVICE;
    let params;
    if(search_text === ''){
      apiname = GET_SERVICE_BY_PROVIDER_ID;
      params = {variables : {provider_id}};
    }
    else{
      apiname = SEARCH_SERVICE;
      params = {variables:{provider_id: provider_id, search_text: search_text}};
    }
    var {data} = useQuery(apiname,params);

  return (
        <>
        {data && data !== undefined && data.getServiceByProviderId !== undefined && data.getServiceByProviderId.map((service :any) => {
          let url = "/detail/"+service.serviceid;
           return(<div className="cont-part" key={service.serviceid}>
             <Link to={url}>{service.service}</Link>
             </div>)
        })}
        {data && data !== undefined && data.searchService !== undefined && data.searchService.map((service :any) => {
          let url = "/detail/"+service.serviceid;
           return(<div className="cont-part" key={service.serviceid}>
             <Link to={url}>{service.service}</Link>
             </div>)
        })}
        </>
    
  )
}

export default GetProviderService