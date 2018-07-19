import axios from 'axios';
import qs from 'qs'
axios.defaults.baseURL = 'http://api.test.ucuxin.com/';

const Api = {
    
    GetScienceTipPages:function(data){
        let newData = qs.stringify(data)
        // console.log(qs.stringify(data))
        return axios({
            method: 'get',
            // url: `Dns/v3/DnsWeb/GetScienceTipPages?pageSize=${pageSize}&pageIndex=${pageIndex}&token=201e0f66171b470b85fb2f7203aa6fae`,
            url: `Dns/v3/DnsWeb/GetScienceTipPages?${newData}`,
           
        })
    }
}

export default Api;
