import { saveComment } from '../index';

it('creates save comment action', () =>{
    const comment = 'new c'
expect(saveComment(comment)).toEqual({
    type: 'SAVE_COMMENT',
    comment
})
})