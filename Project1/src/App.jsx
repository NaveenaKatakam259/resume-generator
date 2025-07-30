import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage";
import Resumeform from "./components/ResumeForm";
import { Routes, Route } from "react-router-dom";
import { useState} from "react"
import { useEffect } from "react";
import PreviewPage from "./components/PreviewPage";
import Template2 from "./components/Template2"; 
import Template3 from "./components/Template3";
import Template1 from "./components/Template1";


function App(){
  useEffect(() => {
    let data= localStorage.getItem("resume");
     data && setResumeData(JSON.parse(data));
  },[])

  let [resumeData,setResumeData]=useState({
       personalDetails:{
        name: "",
        location: "",
        email: "",
        linkedIn:"",
        mobile: "",
        github: "",
        website: "",
 },
 summary:"",
 experience:[
  {company:"",position:"",duration:"",description:""}
 ],
 education:[
  {school:"", duration:"",grade:""}
 ],
 projects:[
  {name:"",technologies:"",description:""}
 ],
 skills:""
  })
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
         <Route path="/edit" element={<Resumeform resumeData={resumeData} setResumeData={setResumeData}/>}></Route>
        <Route path="/preview" element={<PreviewPage />}></Route>
        <Route path="/preview/1" element={<Template1 data={resumeData} />} />
        <Route path="/preview/2" element={<Template2 resumeData={resumeData} />} />
        <Route path="/preview/3" element={<Template3 resumeData={resumeData} />} />
      </Routes>
    </div>
  )
}
export default App;