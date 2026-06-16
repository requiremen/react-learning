function App(){
  const post = [{
    name:"akshat",
    content :"i love learning from harkirat",
  },{
    name:"harkirat",
    content :"i love coding"
  }]
  setInterval(() => {
    console.log("interval ran")
    post.push({
      name:"abrakadabra",
      content:"bsdk"
    })
    console.log(post)
    
  }, 1000);
  console.log(post)
  let postresponse = post.map(p=><Post name={p.name} content={p.content}/>)
  return(
    <div>
    {postresponse}
    </div>
  )
}
function Post(props){
  return(
    <div style={{backgroundColor:"yellow",padding:20,margin:10}}>
      <div>
        <h1>{props.name}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
export default App;
