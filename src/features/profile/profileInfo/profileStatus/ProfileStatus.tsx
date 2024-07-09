// @flow
import * as React from 'react';
import { ChangeEvent } from "react";

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
};
type ProfileStatusStateProps = {
    editMode: boolean
    status: string
};

export class ProfileStatus extends React.Component<ProfileStatusProps, ProfileStatusStateProps> {
    //statusInputRef = React.createRef<HTMLInputElement>();
    state = {
        editMode: false,
        status: this.props.status
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
        });
        this.props.updateStatus(this.state.status);
        // if(this.statusInputRef.current) {
        //     this.props.updateStatus(this.statusInputRef.current.value);
        // }
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })

    }

    render() {
        return (<>
            <b onDoubleClick={this.activateEditMode.bind(this)}>Статус: </b>
            {this.state.editMode
                ? (<div>
                    <input
                        //ref={this.statusInputRef}
                        type={'text'}
                        onChange={(e) => this.onStatusChange(e)}
                        value={this.state.status}
                        onBlur={this.deactivateEditMode} autoFocus={true}/>
                </div>)
                : (<div onDoubleClick={this.activateEditMode.bind(this)}>
                    <p>{this.props.status}</p>
                </div>)
            }
        </>)
    }

}