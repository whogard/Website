import React from 'react'
import './MainPage.css';
import logo from '../Assets/P.png';

const MainPage = () => {
  return (
    <div>
        <nav class="navbar">   
            <ul className='logolar'>
                <img src={logo} alt="" className='resim'/>       
                
            </ul> 

            <ul>
                <button class="btnLogin">Giriş Yap</button>         
                <button class="btnRegister">Kayıt Ol</button>        
            </ul>   

        </nav>

        <div class="content">
            <div class="info"> 
                <h1>Enter question here, add options below</h1>
                <div class="vertical-line"></div>
                <div className="input-box">
                    <input type="text" placeholder='Option 1' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Option 2' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Option 3'/>
                </div>

                <button class="settings">Poll Settings +</button>
                
            </div>
            <a href="#" class="btn">Create Poll</a>
        </div>       
    </div>
  )
}

export default MainPage