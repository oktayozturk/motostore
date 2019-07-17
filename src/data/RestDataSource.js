import Axios from 'axios'
import { RestUrls } from './Urls'

export class RestDataSource {
    GetData = (datatype, params) => {
        const rest_url = RestUrls[datatype]
        const retval = this.SendRequest('get', rest_url, params)
        // console.log('Sending http request to:', rest_url)
        // console.log('Request parameters:', params)
        // console.log('Response from url:', retval)
        return retval
    }

    StoreData = (dataType, data) => 
        this.SendRequest('post', RestUrls[dataType], {}, data)

    SendRequest = (method, url, params, data) => 
        Axios.request({method, url, params, data})
    
}

