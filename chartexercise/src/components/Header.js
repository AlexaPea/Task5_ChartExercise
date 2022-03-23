import {Link} from 'react-router-dom';
import './header.css';

const Header = () =>{
    return (
        <div className="header">
           
            <div className='btn-group'>
                <div className='btn btn-primary'><Link to="/">Chart One</Link></div>
                <div className='btn btn-primary'><Link to="/charttwo">Chart Two</Link></div>
                <div className='btn btn-primary'> <Link to="/chartthree">Chart Three</Link></div>
                <div className='btn btn-primary'> <Link to="/chartfour">Chart Four</Link></div>
                <div className='btn btn-primary'> <Link to="/chartfive">Chart Five</Link></div>
            </div>
            
            
        </div>
    );
}

export default Header;