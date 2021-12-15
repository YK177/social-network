import React from 'react'

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? (<div><input type="text"/></div>)
                        : (<div><span>status</span></div>)
                }
            </div>
        )
    }

}