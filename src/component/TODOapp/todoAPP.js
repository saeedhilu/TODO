  import React, { Component } from 'react'
  import './todoAPP.css'

  export default class todoAPP extends Component {
    state = {
      input: '',
      arr :[]
    }

    handleChange = event=>{
      this.setState({
        input: event.target.value
      });
      console.log(this.state.input);


    };
    dataFetching = (event)=>{
      event.preventDefault()
      const {input} = this.state;
      this.setState({
        arr: [...this.state.arr,input],
        input:''
      })
    }
    deleteData = (key) =>{
       
      this.setState({
        arr :this.state.arr.filter((data,index)=>index !== key)
        })
    }
    updateData = ()=>{
      this.setState({
        input:this.state.arr[0]
      })
    }

    render() {
      const {input,arr} = this.state;
      console.log(arr);

      return (
        <div className='todo-container'>

          
            <h1>Todo APP</h1>

            <form onSubmit={this.dataFetching}>
                <input type="text" value={input} onChange={this.handleChange} placeholder='Enter you nane'/>
            </form>

          <ul className="todo-list">  
            {arr.map((item,index)=>(
            
                  <li key={index}>{item}<i id='icon-delete' onClick={()=>this.deleteData(index)} className="fa-solid fa-trash">   </i><i id='icon-edit' onClick={this.updateData} class="fa-solid fa-pen-to-square"></i>
                  </li >

            ))}
            
              
          </ul>       


        </div>
      )
    }
  }
