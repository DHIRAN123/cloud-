import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_SERVICE_BY_SERVICE_ID } from '../GraphQL/Queries';




function ProviderServiceDetail(){
     const  {serviceid} = useParams<{serviceid:string}>();
let service_id: number = serviceid==undefined?0:parseInt(serviceid!); 
console.log(serviceid)
     const {data} = useQuery(GET_SERVICE_BY_SERVICE_ID,{variables :{service_id}});
    
    return(
    <>
    {data && data.getServiceByServiceId.map((service:any) => {
        
          return (
             <div className='service-box'>
               <div className='service-inner'>
               <h2>{service.service}</h2>
               <p>{service.description}</p>
                 <a href={service.cost} target="_blank">{service.cost}</a>
                 </div>
             </div>
          )
          
         })}
    </>
    )
}

export default ProviderServiceDetail;