import questionApi from "../../api/question";
import { Answer, Comment, Question } from "../../models/Question";
import Paths from "../../routes/Paths";
import { ASK_QUESTION, GET_QUESTION, GET_QUESTIONS, SEND_ANSWER, SEND_COMMENT } from "../types";
import { errorsSetter } from "./errors";


const askQuestionAction = (data: Question) => ({
    type: ASK_QUESTION,
    payload: data
});

const getQuestionsAction = (data: Question[]) => ({
  type: GET_QUESTIONS,
  payload: data
});

const sendAnswerAction = (data: Answer) => ({
  type: SEND_ANSWER,
  payload: data
});

const getQuestionAction = (data: Question) => ({
  type: GET_QUESTION,
  payload: data
});

const sendCommentAction = (data: Comment) => ({
  type: SEND_COMMENT,
  payload: data
});

export const askQuestion = (question: Question, navigate: Function, toast: any) => async (dispatch: Function) => {
    try {
      let resp = await questionApi.askQuestion(question);
          
      dispatch(askQuestionAction(resp));
      navigate(Paths.questions.dashboard);
      toast.success('Your question has been added');
    } catch (error) {
      // ::Can implement redirection if question exists
      dispatch(errorsSetter(error));
    }
}

export const getQuestions = () => async (dispatch: Function) => {
  try {
    let resp: { questionsFound: Question[] } = await questionApi.getQuestions();
        
    dispatch(getQuestionsAction(resp.questionsFound));
  } catch (error) {
    dispatch(errorsSetter(error));
  }
}

export const sendAnswer = (questionId: string, state: Answer, toast: any, setOpennedQuestion: Function) => async (dispatch: Function) => {
  try {
    let resp = await questionApi.sendAnswer(questionId, state);
        
    dispatch(sendAnswerAction(resp));
    dispatch(getQuestions());
    setOpennedQuestion(false);
    toast.success('Your answer has been saved');
  } catch (error) {
    dispatch(errorsSetter(error));
  }
}

export const getQuestion = (questionId: string) => async (dispatch: Function) => {
  try {
    let resp: { questionFound: Question } = await questionApi.getQuestion(questionId);
        
    dispatch(getQuestionAction(resp.questionFound));
  } catch (error) {
    dispatch(errorsSetter(error));
  }
}

export const sendComment = (questionId: string, answerId: string, state: Comment, toast: any, setState: Function) => async (dispatch: Function) => {
  try {
    let resp = await questionApi.sendComment(questionId, answerId, state);
        
    dispatch(sendCommentAction(resp));
    dispatch(getQuestion(questionId));
    setState({
      comment: ''
    });
    toast.success('Your comment has been saved');
  } catch (error) {
    dispatch(errorsSetter(error));
  }
}