import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../store/store'
import { exportTodo } from '../store/action'


 function Todo(props) {
    
    const[newTodos, setNewTodos] = useState({
        task: '',
        isDone: ''
    })
    
    const[currentFilter, setCurrentfilter] = useState('all')
    const[filterTask, setFilterTask] = useState([])

    useEffect(()=> {
        filterTodos()
    },[currentFilter])
    
    const filterTodos = () => {
        if(currentFilter === 'all') {
            setFilterTask([...props.t.todo])
        }
        if(currentFilter === 'done') {
            var temp = [...props.t.todo]
            
            let newtemp = temp.filter((e) => {
                if(e.isDone === true){
                    console.log(e)
                    return true
                }
            })
            
            setFilterTask([...newtemp])
        }
        if(currentFilter === 'undone') {
            var temp = [...props.t.todo]
            
            let newtemp = temp.filter((e) => {
                if(e.isDone === false){
                    console.log(e)
                    return true
                }
            })
            
            setFilterTask([...newtemp])
        }
    }

    const handleAdd = (e) => {
        setNewTodos({
            task:e.target.value,
            isDone:false
        })
        console.log(newTodos)
    }
    console.log(props.t.todo)
  return (
    <div>
        <h1>Todo List</h1>
        <input type='radio' name='todoFilter' checked={currentFilter === 'all' } onChange={()=>{setCurrentfilter('all')}}/> all
        <input type='radio' name='todoFilter' checked={currentFilter === 'done'} onChange={()=>{setCurrentfilter('done')}}/> done
        <input type='radio' name='todoFilter' checked={currentFilter === 'undone'} onChange={()=>{setCurrentfilter('undone')}}/> undone
        <input type='text' onChange={(e)=>{handleAdd(e)}} />
        <button onClick={()=>{props.dispatch(exportTodo(newTodos))}}>add todo</button>
        <ul>
            {
                filterTask.map((e,i) => {
                    
                    return <li key={Math.random()}>
                                {e.isDone ? <s>{e.task}</s> : <i>{e.task} </i>}
                                {e.isDone ? <button onClick={()=>props.dispatch({type: "DONE",index: i})}>undo</button> : (<button onClick={()=>props.dispatch({type: "DONE",index: i})}>done</button>)}
                                <button onClick={()=>props.dispatch({type: "DEL",index: i})}>delete</button>
                            </li>
                })
            }
        </ul>
    </div>
  )
}
export default connect((store)=>{return store}) (Todo)
