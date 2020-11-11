import React from 'react'
import axios from 'axios'
class Lists extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            list: []
        }
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
            console.log(response)
            this.setState({list: response.data.data})
        })
        .catch(error => {
            console.log(error)})
    }
  render(){
      const{ list } = this.state
    return(
      <div>
         <h1>List</h1>
          {
              list.length>= 0 ?
              list.map(post=> <div key={post.id}>{post.email}</div>) :
              null
          }
        <hr/>
      </div>
    )
  }
}
export default Lists