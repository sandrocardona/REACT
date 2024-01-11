import User from "./User";
import React, {Component} from "react";

class UserList extends Component{
    render(){
        return(
            <ul>
            {this.props.users.map(u => {
                <User 
                name={u.name}
                />
            })}
            </ul>
        );
    }
}

export default UserList;