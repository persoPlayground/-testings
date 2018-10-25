export default (state = [], action) => {
    switch(action.type){
        case 'SAVE_COMMENT':
        return [...state, action.comment]
        case 'FETCH_COMMENTS':
        const comments = action.payload.data.map(obj => obj.name);
        return [...state, ...comments]
        default:
        return state;
    }
}