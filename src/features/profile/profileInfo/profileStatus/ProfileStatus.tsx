// @flow
import * as React from 'react';

type ProfileStatusProps = {
    status: string
};
type ProfileStatusStateProps = {
    editMode: boolean
};

export class ProfileStatus extends React.Component<ProfileStatusProps, ProfileStatusStateProps> {
    state = {
        editMode: false,
    }

    activateEditMode()  {
        this.setState({
            editMode: true,
        })
        //this.state.editMode = true;
        //this.forceUpdate(); //насильственное обновление
    }

    deactivateEditMode = () => {
        console.log(this)
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (<>
            {this.state.editMode
                ? (<div>
                    <input type={'text'} onChange={() => {
                    }} value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                </div>)
                : (<div onDoubleClick={this.activateEditMode.bind(this)}>
                    <p>{this.props.status}</p>
                </div>)
            }
        </>)
    }

}