import * as actions from '../actions';

const initialState = {comments: [], offset: 0, count: 5, hasMore: true};

let getCommentIndex = (comments, id) => {
    return comments.map(comment => {
        return comment.id;
    }).indexOf(id);
};

export default function articles(state = initialState, action) {
    switch (action.type) {
        case actions.COMMENT_REQUEST:
            return {
                ...state,
                offset: action.offset,
                count: action.count
            };

        case actions.COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.concat(action.comments),
                hasMore: action.comments.length >= state.count
            };
        case actions.COMMENT_FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                hasMore: false
            };

        case actions.CREATE_COMMENT:

            if (action.comment.parent) {
                let parentIndex = getCommentIndex(state.comments, action.comment.parent);
                let parentComment = state.comments[parentIndex];
                if (!parentComment.children) {
                    parentComment.children = [];
                }
                parentComment.children.push(action.comment);
                state.comments[parentIndex] = parentComment;
            } else {
                state.comments.unshift(action.comment);
            }

            return {
                ...state,
                comments: state.comments,
                offset: state.offset + 1
            };

        case actions.REMOVE_COMMENT:
            state.comments.splice(getCommentIndex(state.comments, action.id), 1);

            return {
                ...state,
                comments: state.comments,
                offset: state.offset - 1
            };

        case actions.UPDATE_COMMENT:
            let index = getCommentIndex(state.comments, action.comment.id);
            state.comments[index] = {
                ...state.comments[index],
                ...action.comment
            };

            return {
                ...state,
                comments: state.comments
            };

        default:
            return state;
    }
}