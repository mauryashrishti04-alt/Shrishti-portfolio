import Intro from "./components/Intro";
import Project from "./components/Project";
const App=()=>{
  const projects=[
    {title:"E-Commerce App",description:"Built using React,Node"},
    {title:"Android cab booking App",description:"Built using Kotlin"},
  ]
  return<div>
    <h1>This is Shrishti portfolio</h1>
    <h3>I am student of BCA</h3>
    <Intro Age={20} Email="mauryashrishti@gmail.com" contact={9834567231}/>
    {
      projects.map((project,index)=>(
       <Project key={index} title={project[0].title} description={project[0].description}/>
      ))
    }
    </div>
}


export default App;