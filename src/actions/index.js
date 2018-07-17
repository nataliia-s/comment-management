import axios from 'axios';
import {API_URL} from "../config";

export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAILURE = 'COMMENT_FAILURE';
export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const requestError = (error) => ({
    type: COMMENT_FAILURE,
    errorMessage: error
});

export const requestComments = (offset, count) => ({
    type: COMMENT_REQUEST,
    offset: offset,
    count: count,
});

export const commentSuccess = (comments) => {
    return {
        type: COMMENT_SUCCESS,
        comments
    }
};

export const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment: comment
});

export const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    id: id
});

export const updComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment: comment
});

export function fetchComments(offset, count) {
    return (dispatch) => {
        dispatch(requestComments(offset, count));
        return axios.get(`${API_URL}?offset=${offset}&count=${count}`)
            .then(response => {
                const {data} = response;
                if (response.status === 200) {
                    dispatch(commentSuccess(data));
                } else {
                    dispatch(requestError(data.error));
                }
            })
            .catch((error) => dispatch(requestError(error.message)));
    }
}

export function addComment(comment, parent) {
    return (dispatch) => {

        return axios.post(`${API_URL}`, {
            content: comment,
            parent: parent
        })
            .then(response => {
                const {data} = response;
                if (data.error) {
                    dispatch(requestError(data.error));
                } else {
                    dispatch(createComment(data));
                }
            })
            .catch((error) => dispatch(requestError(error.message)));
    }
}

export function deleteComment(id) {
    return (dispatch) => {
        return axios.delete(`${API_URL}/${id}`)
            .then(
                response => {
                    const {data} = response;
                    if (data.error) {
                        dispatch(requestError(data.error));
                    } else {
                        dispatch(removeComment(id));
                    }
                }
            )
    }
}

export function updateComment(id, comment) {
    return (dispatch) => {
        return axios.put(
            `${API_URL}/${id}`, {
                content: comment
            })
            .then(response => {
                const {data} = response;
                if (data.error) {
                    dispatch(requestError(data.error));
                } else {
                    dispatch(updComment(data));
                }
            })
            .catch((error) => dispatch(requestError(error.message)));
    }
}



