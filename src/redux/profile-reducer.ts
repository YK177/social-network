export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

export type PostType = {
    id: number
    avatar: string
    name: string
    lastSeen: number
    comment: string
    likeCounter: number
    shareCounter: number
}
export type ProfilePageType = typeof initialState

const initialState = {
    profile: {
        'aboutMe': 'я круто чувак 1001%',
        'contacts': {
            'facebook': 'facebook.com',
            'website': null,
            'vk': 'vk.com/dimych',
            'twitter': 'https://twitter.com/@sdf',
            'instagram': 'instagra.com/sds',
            'youtube': null,
            'github': 'github.com',
            'mainLink': null
        },
        'lookingForAJob': true,
        'lookingForAJobDescription': 'не ищу, а дурачусь',
        'fullName': 'samurai dimych',
        'userId': 2,
        'photos': {
            'small': 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
            'large': 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
        }
    } as ProfileType,
    newPostText: '',
    posts: [
        {
            id: 1,
            avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
            name: 'Erik Jhonson',
            lastSeen: 15,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolorem error inventore iste labore laborum optio perspiciatis praesentium vel. Esse, fuga libero maiores optio pariatur perspiciatis, possimus quia sit tempora, voluptate voluptates voluptatum. Aliquid aperiam atque dignissimos doloremque in iste iusto numquam odio praesentium, quod sed sunt vitae? Aliquam commodi placeat ratione recusandae suscipit temporibus voluptates! A ab aliquid at autem doloribus earum enim esse eum in itaque magni maiores nisi odit quo rem, repudiandae sed sequi similique suscipit totam. Adipisci corporis debitis ea eaque est, eveniet illum minus omnis porro quia, quibusdam repellat saepe sed tempore, unde voluptatum.',
            likeCounter: 324,
            shareCounter: 98
        },
        {
            id: 2,
            avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
            name: 'Erik Jhonson',
            lastSeen: 36,
            comment: 'Amet, lectus sodales accumsan sed sit faucibus. Leo, est. Justo amet hac tempus sed sed sapien sed luctus vitae imperdiet amet non molestie dui ex. Dui quam, tempus eleifend dictum. Libero, urna amet, faucibus. Amet, quis, dui sapien interdum non tortor, efficitur mattis ut. Non in lectus vestibulum augue sodales sodales mauris eget odio. Mattis in integer nunc quis, sit amet, et integer vulputate amet, mattis platea interdum urna urna amet, non aenean odio. Sed elit. Non lectus nec in et ipsum orci, ornare interdum elit. Hac odio. In amet dui est. Non urna hac vitae lorem faucibus. Efficitur cursu.',
            likeCounter: 15,
            shareCounter: 2
        }
    ] as PostType[]
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                newPostText: '',
                posts: [
                    {
                        id: new Date().getTime(),
                        avatar: 'https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg',
                        name: 'Erik Jhonson',
                        lastSeen: 0,
                        comment: state.newPostText,
                        likeCounter: 0,
                        shareCounter: 0
                    },
                    ...state.posts
                ]
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export type ActionType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>

export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}

export default profileReducer