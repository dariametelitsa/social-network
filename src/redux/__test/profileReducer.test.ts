import profileReducer, { addPost, deletePost } from "redux/profileReducer";
import uuid from "react-uuid";
import { ProfilePageType } from "redux/store-example";

let initialState: ProfilePageType;

beforeEach(() => {
    initialState = {
        posts: [
            {
                id: '1',
                img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
                text: 'Some smart thoughts',
                likes: 12,
            },
            {
                id: '2',
                img: 'https://i.playground.ru/p/yqb0VvET26QbSdzN4CbtkQ.jpeg',
                text: 'Some smart thoughts',
                likes: 1,
            },
        ],
        profile: null,
        status: '123',
    };
})

it('length of posts should be incremented', () => {
    let action = addPost('New post text');
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3)
});

it('message of new post should be corrected', () => {
    const newTitle = 'New post text';
    let action = addPost(newTitle);
    let newState = profileReducer(initialState, action);

    expect(newState.posts[2].text).toBe(newTitle);
})

it('after deleting length of posts should be decrement', () => {
    let action = deletePost('1');
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1)
})