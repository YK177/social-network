import {Dispatch} from 'redux'
import {authAPI} from '../api/api'

export type AuthResponseType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type ActionsType = ReturnType<typeof setAuthUserData>

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
} as AuthResponseType

const authReducer = (state: AuthResponseType = initialState, action: ActionsType): AuthResponseType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            login,
            email,
        },
    } as const
}

export const authUserData = () => (dispatch: Dispatch) => {
    authAPI
        .authMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default authReducer