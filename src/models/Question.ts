export interface Question {
    // add user object by import later
    _id?: string;
    user?: any;
    title: string;
    question: string;
    answers?: Answer[];
}

export interface Answer {
    _id?: string;
    question?: string;
    user?: string;
    answer: string;
    upvote?: [];
    downvote?: [];
    check?: string;
    comments?: Comment[]
}

export interface Comment {
    answer?: string;
    comment: string;
}