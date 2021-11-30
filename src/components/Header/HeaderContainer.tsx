import React from 'react'
import {Header} from './Header'
import {AppStateType} from '../../redux/store'
import {setAuthUserData} from '../../redux/auth-reducer'
import {connect} from 'react-redux'
import {authAPI} from '../../api/api'

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI
            .authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData: setAuthUserData})(HeaderContainer)