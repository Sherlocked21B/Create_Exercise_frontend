import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        };

    }

    // componentDidMount(){
    //     this.setState({
    //         users:['test user'],
    //         username:'test user'
    //     })
    // }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        axios.post("http://localhost:5000/users/add", user)
            .then(res => console.log(res.data));

        console.log(user);

        this.setState({
            username: ''
        })
    }



    render() {
        return (
            <div>
                <h3>Creste New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username::</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="from-group">
                        <input type="submit"
                            className="btn btn-primary"
                            value="Create User" />
                    </div>
                </form>
            </div>
        )
    }
}
