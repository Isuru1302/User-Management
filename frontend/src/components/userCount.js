import axios from 'axios';

export function allUsers() {
     return axios.get('http://127.0.0.1:8000/api/userCount')
        .then(response=>{
            return response.data.results;
        })
}
