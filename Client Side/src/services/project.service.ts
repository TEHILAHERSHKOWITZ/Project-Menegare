import axios from "axios";

class ProjectService{

    getDetailsOfProjectMenegare(){
        return axios.get("https://randomuser.me/api")
        
        
    }


}    

export default new ProjectService