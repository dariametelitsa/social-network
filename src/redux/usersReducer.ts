import { usersPageType } from "./store";
import { v1 } from "uuid";

export const someActionCreator = () => ({});

const initialState: usersPageType = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'Machiavelli',
            status: 'Hi there',
            location: {
                city: 'New-York',
                country: 'USA',
            }
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Pablo Picasso',
            status: "I'm a great painter!",
            location: {
                city: 'Barcelona',
                country: 'Spain',
            }
        },
    ],
};

const usersReducer = (state: usersPageType = initialState, action: any): usersPageType => {
    switch (action.type) {
        default:
            return state;
    }
}

