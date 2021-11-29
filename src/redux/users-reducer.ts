export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    isFetching: boolean
}

export type UsersPageType = typeof initialState

const initialState = {
    users: [] as UserType[],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userID
                        ? {...user, followed: true}
                        : user)
            }
        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userID
                        ? {...user, followed: false}
                        : user)
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FITCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

export const followUser = (userID: number) => {
    return {
        type: 'FOLLOW-USER',
        userID,
    } as const
}

export const unFollowUser = (userID: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userID,
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount,
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FITCHING',
        isFetching,
    } as const
}

export default usersReducer