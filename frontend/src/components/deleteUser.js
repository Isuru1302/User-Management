import axios from 'axios';

const handleAction = (id) =>{

    axios.delete("http://127.0.0.1:8000/api/delUser/"+id)
        .then(response =>{
            alert('User Deleted');
            window.location.reload();
        }

    )
}

export default handleAction;
