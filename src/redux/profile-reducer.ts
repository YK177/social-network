import {ActionType, PostType, ProfilePageType} from "./store";

export type ProfileActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
                name: 'Erik Jhonson',
                lastSeen: 0,
                comment: state.newPostText,
                likeCounter: 0,
                shareCounter: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}

export default profileReducer