// @flow
import * as React from 'react';
import { ChangeEvent } from "react";

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => Promise<void>
};
type ProfileStatusState = {
    editMode: boolean
    status: string
};

export class ProfileStatus extends React.Component<ProfileStatusProps, ProfileStatusState> {
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
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
            // .then(res => {
            //   //console.log(res)
            // })
        // if(this.statusInputRef.current) {
        //     this.props.updateStatus(this.statusInputRef.current.value);
        // }
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<ProfileStatusState>, snapshot?: any) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<>
            <b onDoubleClick={this.activateEditMode.bind(this)}>Status: </b>
            {this.state.editMode
                ? (<div>
                    <input
                        //ref={this.statusInputRef}
                        type={'text'}
                        onChange={(e) => this.onStatusChange(e)}
                        value={this.state.status}
                        onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                </div>)
                : (<div>
                    <p onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '---'}</p>
                </div>)
            }
        </>)
    }

}