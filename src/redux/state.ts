import uuid from "react-uuid";
import avatar from './avatar5.jpeg'

export type postsProps = {
    id: string;
    img: string;
    text: string;
    likes: number;
};
export type dialogType = {
    id: string
    name: string
};
export type messageType = {
    id: string
    message: string
};
export type myFriendsType = {
    img: string,
    name: string,
};
export type stateType = {
    profilePage: {
        'posts': postsProps[]
        newPostText: string
    }
    dialogsPage: {
        'dialogs': dialogType[]
        'messages': messageType[]
        newMessageText: string
    },
    sidebar: myFriendsType[]
};

//actions

export const AddPostAction = () => ({type: 'ADD_POST'} as const);

export const ChangeNewTextAction = (newText: string) => ({
        type: 'UPDATE_NEW_POST_TEXT',
        newText
    } as const);

export const AddMessageAction = () => ({type: 'ADD_MESSAGE'} as const);

export const ChangeNewMessageAction = (newText: string) => ({
    type: 'UPDATE_NEW_MESSAGE',
    newText
} as const);

//AC
export type AddPostActionType = ReturnType<typeof AddPostAction>
export type AddMessageActionType = ReturnType<typeof AddMessageAction>
export type ChangeNewTextActionType = ReturnType<typeof ChangeNewTextAction>
export type ChangeNewMessageActionType = ReturnType<typeof ChangeNewMessageAction>

export type DispatchActionTypes = AddPostActionType | ChangeNewTextActionType | ChangeNewMessageActionType | AddMessageActionType

export type TStore = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    _addPost: () => void
    _addMessage: () => void
    _updateNewPostText: (newText: string) => void
    _updateNewMessageText: (newText: string) => void
    subscriber: (observer: () => void) => void
    dispatch: (action: DispatchActionTypes) => void
};

export const store: TStore = {
    _state: {
        'profilePage': {
            'posts': [
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
                {
                    id: uuid(),
                    img: 'https://s10.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/04/Dean-Winchester-5-22-Swan-Song-dean-winchester-12125430-2000-1333-1024x682.jpg',
                    text: 'Some smart thoughts',
                    likes: 45,
                },
                {
                    id: uuid(),
                    img: 'https://media.tatler.ru/photos/6197e27bae12fbf5007d6bb1/master/w_1600%2Cc_limit/61aa05e776c92c7096a2c01653ad7f4a.jpg',
                    text: 'Some smart thoughts',
                    likes: 234,
                },
                {
                    id: uuid(),
                    img: 'https://www.mentoday.ru/upload/img_cache/759/7598e1612953fc84db99b021bb73789a_ce_1080x720x0x18_cropped_666x444.jpg',
                    text: 'Some smart thoughts',
                    likes: 972,
                },
            ],
            newPostText: 'i am new here'
        },
        'dialogsPage': {
            'dialogs': [
                {id: '1', name: 'Tom'},
                {id: '2', name: 'Steve'},
                {id: '3', name: 'Veronica'},
                {id: '4', name: 'Nataniel'},
                {id: '5', name: 'Mike'},
                {id: '6', name: 'Aurora'},
            ],
            'messages': [
                {id: '1', message: 'Hello World 1!'},
                {id: '2', message: 'Hello World! 2'},
                {id: '3', message: 'Hello World! 3'},
                {id: '4', message: 'Hello World! 4'},
                {id: '5', message: 'Hello World! 5'},
            ],
            newMessageText: '',
        },
        'sidebar': [
            {
                img: avatar,
                name: 'Vasia'
            },
            {
                img: 'https://s5.afisha.ru/mediastorage/6e/d9/25b648cf760b44d1870b4c33d96e.jpg',
                name: 'Kolia'
            },
            {
                img: 'https://gameguru.ru/media/publications/392_zu04cT9.jpg',
                name: 'Stanislav'
            },
        ],
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer;
    },

    _addPost() {
        const newPost: postsProps = {
            id: uuid(),
            img: avatar,
            text: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._updateNewPostText('');
        this._callSubscriber();
    },
    _addMessage() {
        const newMessage: messageType = {
            id: uuid(),
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._updateNewMessageText('');
        this._callSubscriber();
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    _updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST':
                this._addPost();
                break;
            case 'UPDATE_NEW_POST_TEXT':
                this._updateNewPostText(action.newText);
                break;
            case 'ADD_MESSAGE':
                this._addPost();
                break;
            case 'UPDATE_NEW_MESSAGE':
                this._updateNewPostText(action.newText);
                break;
            default:
                return;
        }
    }
};

export default store;


// // let state: stateType = {
// //     'profilePage': {
// //         'posts': [
// //             {
// //                 id: uuid(),
// //                 img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
// //                 text: 'Some smart thoughts',
// //                 likes: 12,
// //             },
// //             {
// //                 id: uuid(),
// //                 img: 'https://i.playground.ru/p/yqb0VvET26QbSdzN4CbtkQ.jpeg',
// //                 text: 'Some smart thoughts',
// //                 likes: 1,
// //             },
// //             {
// //                 id: uuid(),
// //                 img: 'https://s10.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/04/Dean-Winchester-5-22-Swan-Song-dean-winchester-12125430-2000-1333-1024x682.jpg',
// //                 text: 'Some smart thoughts',
// //                 likes: 45,
// //             },
// //             {
// //                 id: uuid(),
// //                 img: 'https://media.tatler.ru/photos/6197e27bae12fbf5007d6bb1/master/w_1600%2Cc_limit/61aa05e776c92c7096a2c01653ad7f4a.jpg',
// //                 text: 'Some smart thoughts',
// //                 likes: 234,
// //             },
// //             {
// //                 id: uuid(),
// //                 img: 'https://www.mentoday.ru/upload/img_cache/759/7598e1612953fc84db99b021bb73789a_ce_1080x720x0x18_cropped_666x444.jpg',
// //                 text: 'Some smart thoughts',
// //                 likes: 972,
// //             },
// //         ],
// //         newPostText: 'i am new here'
// //     },
// //     'dialogsPage': {
// //         'dialogs': [
// //             {id: '1', name: 'Tom'},
// //             {id: '2', name: 'Steve'},
// //             {id: '3', name: 'Veronica'},
// //             {id: '4', name: 'Nataniel'},
// //             {id: '5', name: 'Mike'},
// //             {id: '6', name: 'Aurora'},
// //         ],
// //         'messages': [
// //             {id: 1, message: 'Hello World 1!'},
// //             {id: 2, message: 'Hello World! 2'},
// //             {id: 3, message: 'Hello World! 3'},
// //             {id: 4, message: 'Hello World! 4'},
// //             {id: 5, message: 'Hello World! 5'},
// //         ],
// //     },
// //     'sidebar': [
// //         {
// //             img: avatar,
// //             name: 'Vasia'
// //         },
// //         {
// //             img: 'https://s5.afisha.ru/mediastorage/6e/d9/25b648cf760b44d1870b4c33d96e.jpg',
// //             name: 'Kolia'
// //         },
// //         {
// //             img: 'https://gameguru.ru/media/publications/392_zu04cT9.jpg',
// //             name: 'Stanislav'
// //         },
// //     ],
// // };
//
//
// export let addPost = (postMessage: string) => {
//     const newPost: postsProps = {
//         id: uuid(),
//         img: avatar,
//         text: postMessage,
//         likes: 0,
//     };
//     state.profilePage.posts.push(newPost);
//     updateNewPostText('');
//     rerenderEntireTree();
// };
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree();
// };
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer;
// }