import React from 'react'
import './App.css'
import Lists from './components/List'
import PostForm from './components/PostForm'
class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Lists />
        <PostForm />
      </div>
    )
  }
}
export default App