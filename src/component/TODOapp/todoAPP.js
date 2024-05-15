import React, { Component } from 'react'
import './todoAPP.css'

export default class todoAPP extends Component {
  render() {
    return (
      <div className='todo-container'>

        <h1>Todo APP</h1>
       <form action="">
       <input type="text" placeholder='Enter you nane'/>
       </form>
        
       <ul class="todo-list">
                <li>item</li>
        </ul>
      </div>
    )
  }
}
