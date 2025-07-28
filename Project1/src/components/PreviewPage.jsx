import "./PreviewPage.css"
import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"
import { useNavigate } from "react-router-dom"
function Preview(){
    let navigate=useNavigate()
    let templatesArray=[
        {name:"Classic",image:img1,path:1},
        {name:"Modern",image:img2,path:2},
        {name:"Professional",image:img3,path:3},
    ]
    return(
        <div className='card-container'>
            {
                templatesArray.map((item, index)=>{
                return(
                    <div className='card' onClick={()=>navigate(`/preview/${item.path}`) }>
                    <img src={item.image} width="80%" height="80%" alt=""/>
                    <h3>{item.name}</h3>
                    </div>
                )
                
                })
            }
        </div>
    )
    }
 export default Preview
