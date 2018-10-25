import axios from "axios";

export const saveComment = comment => ({
    type: 'SAVE_COMMENT',
    comment
});

export const fetchComment = () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/comments');
    return({
        type: 'FETCH_COMMENTS',
        payload: res
    })
}

export const authentication = isloggedin => ({
    type: 'CHANGE_AUTH',
    payload: isloggedin
});