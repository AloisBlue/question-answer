import axios from "axios";
import { Question } from "../models/Question";


const baseUrl = "";

const questionApi = {
  askQuestion: async (question: Question) => {
    let res = await axios.post(`${baseUrl}/api/questions/question`, { payload: question });
    return res.data;
  }
}

export default questionApi;
