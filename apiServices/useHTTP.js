import { useCallback, useState } from 'react';
import {apiUrl, endpoint_news} from './base';


const useHTTP = () => {
    
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    
    const call = useCallback(async (endpoint, method="GET", params, callData)=>{

        const config = {
            headers: {
                Accept: 'application/json'
            },
            params,
            responseType: 'json',
        }

        try {
            setIsLoading(true);
            let response;
            switch(method) {
                case 'POST':
                    response = await apiUrl.post(endpoint, callData, config);
                    break
                case 'DELETE':
                    response = await apiUrl.delete(endpoint, config);
                    break
                case 'PUT':
                    response = await apiUrl.put(endpoint, callData, config);
                    break
                case 'GET':
                    default:
                    response = await apiUrl.get(endpoint, config);
                    break
            }
            console.log(response.data)
            setData(response.data);
            setError(false);
            return response;
        }
        catch(e) {
              setError(true);
              return e.response;
        }
        finally {
            setIsLoading(false);
        }
    }, [endpoint, params])

    return {
        call, data, isLoading, error
    }
}

export default useHTTP

