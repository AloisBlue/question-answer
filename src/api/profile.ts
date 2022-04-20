import axios from "axios";


const baseUrl = "";

const profileApi = {
  getProfile: async () => {
    let res = await axios.get(`${baseUrl}/api/profiles/user`);
    return res.data;
  }
}

export default profileApi;
