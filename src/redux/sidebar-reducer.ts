export type FriendType = {
    id: number
    avatar: string
    firstName: string
    lastName: string
}
export type SideBarType = {
    friends: FriendType[]
}

const initialState: SideBarType = {
    friends: [
        {
            id: 1,
            avatar: 'https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png',
            firstName: 'Natsuki',
            lastName: 'Minako',
        },
        {
            id: 2,
            avatar: 'https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png',
            firstName: 'Bryan',
            lastName: 'O\'Ryan'
        },
        {
            id: 3,
            avatar: 'https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg',
            firstName: 'Albert',
            lastName: 'Herrera'
        }
    ]
}

const sidebarReducer = (state = initialState) => {
    return state
}

export default sidebarReducer