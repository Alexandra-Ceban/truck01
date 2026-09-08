import './header.css';
import './login.js';


const Header = ({onLogClick}) => {
    
    return (
        <header className="header">

            <img
                className="logo"
                alt="logo"
                src=""
            />
    
            
                <div className='logincircle'  onClick={onLogClick}>
                
                 <img 
                className="login-icon"
                alt="login"
                src="https://trucks.com/_next/static/media/user-profile-icon.24a_9qj4qlxlk.svg"
            /> </div>
            
          
               
        </header>
    );
};

export default Header;