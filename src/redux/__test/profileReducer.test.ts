import profileReducer, { addPost } from "redux/profileReducer";
import uuid from "react-uuid";
import { ProfilePageType } from "redux/store-example";

let initialState: ProfilePageType;

beforeEach(() => {
    initialState = {
        posts: [
            {
                id: uuid(),
                img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
                text: 'Some smart thoughts',
                likes: 12,
            },
            {
                id: uuid(),
                img: 'https://i.playground.ru/p/yqb0VvET26QbSdzN4CbtkQ.jpeg',
                text: 'Some smart thoughts',
                likes: 1,
            },
        ],
        profile: null,
        status: '123',
    };
})

it('new post should be added', () => {
    let action = addPost('New post text');
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3)
})