import questionApi from "../../api/question";
import { Question } from "../../models/Question";
import Paths from "../../routes/Paths";
import { ASK_QUESTION } from "../types";
import { errorsSetter } from "./errors";


const askQuestionAction = (data: Question) => ({
    type: ASK_QUESTION,
    payload: data
});

export const askQuestion = (question: Question, navigate: Function, toast: any) => async (dispatch: Function) => {
    try {
      let resp = await questionApi.askQuestion(question);
          
      dispatch(askQuestionAction(resp));
      navigate(Paths.questions.dashboard);
      toast.success('Question added successfully');
    } catch (error) {
      // ::Can implement redirection if question exists
      dispatch(errorsSetter(error));
    }
}