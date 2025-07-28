import {Link} from 'react-router-dom'
import './NavBar.css'; // Assuming you have a CSS file for styling
function NavBar()
{
    return(
        <div className='container'>
            <h1 className='logo'>ResumeGen</h1>
        <div className='navlinks'>
            
            <div className='navlinks'>
                <Link to={"/home"}>Home</Link>
                <Link to={"/edit"}>EditResume</Link>
                <Link to={"/preview"}>Preview</Link>
            </div>
        </div>
        </div>
    )
}
export default NavBar;