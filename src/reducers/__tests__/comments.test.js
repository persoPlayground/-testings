import comments from '../comments';

it('handles save comment action', () =>{
    const action = {
        type: 'SAVE_COMMENT',
        comment: 'new comment'
    }

    const newState = comments([], action);
    expect(newState).toEqual(['new comment'])
})