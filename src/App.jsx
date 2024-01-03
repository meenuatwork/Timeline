import Heading from "./Heading"
import Time from "./Timeline"
const App =()=>{
//  let date = new Date();
 return (
  <div>
  <h1></h1>  
  <Heading/>
  <Time year= {2003} event="I was born"/>
  <Time year= {2005} event="I started going to school."/>
  <Time year= {2008} event="I went to Jhashi Fort with school friends."/>
  <Time year= {2010} event="When  my mother was not at home, I was cooking food and I  got burnt."/>
  <Time year= {2013} event="When I was learning to ride a bicycle, I fell on  the road and got hurt."/>
  <Time year= {2014} event="It was my brothers wedding and I enjoyed it a lot."/>
  <Time year= {2023} event="When I was going to Laangha temple, so I fell on the mountain."/>
  </div>  
 )

}

export default App

