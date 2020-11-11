import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
             email: '',
             password: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = e => {
       e.preventDefault()
        console.log(this.state)
        axios.post('https://reqres.in/api/users', this.state)
        .then(response => {
          console.log(response)

        })
        .catch(error => {
            console.log(error)
        })

    }
    updateHandler = e => {
        e.preventDefault()
        axios.put("https://reqres.in/api/users/2", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }
    deleteHandler = e => {
        e.preventDefault()
        axios.delete("https://reqres.in/api/users/2", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const{email, password} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="password" value={password} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                    <button type="submit" onClick={this.updateHandler}>Update</button>
                    <button type="reset" onClick={this.deleteHandler}>Delete</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
