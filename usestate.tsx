import React from 'react';
function App(){ 

  const [data,setData] = React.useState([])
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(Response => {
    setData(Response.data)
  })
  const todolist = data.map(t=> <TodoList name = {t.userId} title = {t.title}/>)
  return (
    
    <div>
      {todolist}
    </div>
  )
}
function TodoList(props){
  return (
    <div style={{ backgroundColor: 'yellow', padding: '20px', margin: '20px' }}>
      <h1>todos of {props.name}</h1>

      <p>{props.title}</p>

    </div>
  )
}
export default App
