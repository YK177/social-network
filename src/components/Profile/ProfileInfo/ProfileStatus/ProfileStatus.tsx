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

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? (<div className={s.input}>
                            <input type="text"
                                   autoFocus
                                   value={this.props.status}
                                   onChange={this.onStatusChange}
                                   onBlur={this.deactivateEditMode}
                            />
                        </div>)
                        : (<div>
                            <span onDoubleClick={this.activateEditMode}>{this.state.status || '/-------------/'}</span>
                        </div>)
                }
            </div>
        )
    }

}