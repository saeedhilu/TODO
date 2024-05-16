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
      //  using splice method (but filter is the best method)
      const allitem = this.state.arr
      allitem.splice(key,1)
      this.setState({
        arr :allitem /*this.state.arr.filter((data,index)=>index !== key) */
        })
    }
    updateData = (index,value)=>{
      const input_value= this.state.arr[index]
      const update_input = [...this.state.input]
      update_input[index]=input_value 
      console.log('this is updated datat',update_input);
      this.setState({
        input: update_input
       

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
                <li key={index}>
                  {item}
                  <div className="icon">

                    <i id="icon-delete" onClick={()=>this.deleteData(index)} className="fa-solid fa-trash"></i>
                    <i id="icon-edit" onClick={()=>this.updateData(index)} className="fa-solid fa-pen-to-square"></i>
                  </div>
                </li>
              ))}
            </ul>  


        </div>
      )
    }
  }
