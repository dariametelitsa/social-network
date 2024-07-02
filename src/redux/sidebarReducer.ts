import { myFriendsType } from "./store-example";
import avatar from './avatar5.jpeg'

const initialState: myFriendsType[] =  [
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
];

export const sidebarReducer = (state: myFriendsType[] = initialState, action: any): myFriendsType[] => {
    return state;
};

export default sidebarReducer;