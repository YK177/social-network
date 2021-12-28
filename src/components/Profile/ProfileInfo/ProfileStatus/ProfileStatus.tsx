import React, {ChangeEvent} from 'react'
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.state.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        if (this.state.editMode) {
            return (
                <div className={s.input}>
                    <input type="text"
                           autoFocus
                           value={this.state.status}
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                    />
                </div>
            )
        }
        return (
            <div>
                <span onDoubleClick={this.activateEditMode}>
                    {this.props.status || '/-------------/'}
                </span>
            </div>
        )
    }
}