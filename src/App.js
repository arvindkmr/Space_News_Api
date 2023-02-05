import { useEffect ,useState} from 'react';
import './App.css';

function App() {
  const [data, setData]= useState([]);
  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles").then((response)=>{
        response.json().then((apiData)=>{
          setData(apiData)
        })
    })
  },[])
  return (
    <div className="App">
    <div className="title">
      <h2>Space News Api- project</h2>
    </div>
    <div className="newContainer">

    {data.map((val)=>{
      return <div key={val.id} className="article" onClick={()=>{window.location.href=val.url}}> 
                  <h3>
                    {val.title}
                  </h3>
                    <img src={val.imageUrl} alt="Loading....." />
                    <p>{val.summary}</p>
                     <h4> <strong style={{fontSize:"20px"}}>Date : </strong>{val.publishedAt.substring(0,10)}</h4>
                    
              </div>
    })}
    </div>
    </div>
  );
}

export default App;
