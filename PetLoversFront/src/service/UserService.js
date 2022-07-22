import axios from "axios";

const user_rest_getByCedula = 'http://localhost:8080/user/v1';

class UserService{
    getUser(cedula){
        return axios.get(user_rest_getByCedula,cedula);
    }
    getUsers(){
        return axios.get(user_rest_getByCedula);
    }
}

export default new UserService();