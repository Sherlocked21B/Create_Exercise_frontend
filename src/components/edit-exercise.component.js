import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {


    constructor(props){
        super(props);

        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeDescrption=this.onChangeDescrption.bind(this);
        this.onChangeDuration=this.onChangeDuration.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username:'',
            desciption:'',
            duration:0,
            date:new Date(),
            users:[]
        };
        
    }

    componentDidMount(){

        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then (res=>{
                this.setState({
                    username:res.data.username,
                    description:res.data.description,
                    duration:res.data.duration,
                    date: new Date(res.data.date),
                })
            })

       axios.get('http://localhost:5000/users')
        .then (res=>{
            if (res.data.length>0)
            {
                this.setState({
                    users:res.data.map(user=>user.username),
                })
            }
        })
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onChangeDescrption(e){
        this.setState({
           desciption:e.target.value
        });
    }

    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date:date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise={
            username:this.state.username,
            desciption:this.state.desciption,
            duration:this.state.duration,
            date:this.state.date,
        }

        axios.put('http://localhost:5000/exercises/update/'+this.props.match.params.id,exercise)
            .then(res=> console.log(res.data));

        console.log(exercise);
        window.location='/';
    }



    render() {
        return (
            <div>
                <h3>Edit New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username::</label>
                        <select ref="UserInput"
                          required
                          className='form-control'
                          value={this.state.username}
                          onChange={this.onChangeUsername}>
                              {
                                  this.state.users.map(function(user){
                                      return(
                                          <option
                                            key={user}
                                            value={user}>{user}
                                          </option>
                                      );
                                  })
                              }
                          </select>
                    </div>
                    <div className="from-group">
                        <label>Desciption::</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.desciption}
                        onChange={this.onChangeDescrption}/>
                    </div>
                    <div className="from-group">
                        <label>Duration::</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}/>
                    </div>
                    <div className="from-group">
                        <label>Date::</label>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}/>
                    </div>
                    <div className="from-group">
                        <label>Desciption::</label>
                        <input type="submit"
                        className="btn btn-primary"
                        value="Edit Exercise Log"/>
                    </div>
                </form>
            </div>
        )
    }
}
