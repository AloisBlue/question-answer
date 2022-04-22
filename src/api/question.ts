import axios from "axios";
import { Answer, Comment, Question } from "../models/Question";


const baseUrl = "";

const questionApi = {
  askQuestion: async (question: Question) => {
    let res = await axios.post(`${baseUrl}/api/questions/question`, { payload: question });
    return res.data;
  },
  getQuestions: async () => {
    let res = await axios.get(`${baseUrl}/api/questions/questions`);
    return res.data;
  },
  sendAnswer: async (questionId: string, state: Answer) => {
    let res = await axios.post(`${baseUrl}/api/questions/${questionId}/answer`, { payload: state })
    return res.data;
  },
  getQuestion: async (questionId: string) => {
    let res = await axios.get(`${baseUrl}/api/questions/${questionId}`)
    return res.data;
  },
  sendComment: async (questionId: string, answerId: string, state: Comment) => {
    let res = await axios.post(`${baseUrl}/api/questions/${questionId}/${answerId}/comment`, { payload: state })
    return res.data;
  }
}

export default questionApi;
