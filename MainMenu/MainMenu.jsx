import React from 'react'
import './MainMenu.css';
import logo from '../Assets/P.png';

const MainMenu = () => {
  return (
    <div>
        <nav class="navbar">   
            <ul className='logolar'>
                <img src={logo} alt="" className='resim'/>       
                <a href="" className="logo">Pollen</a>
            </ul> 

            <ul>
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#">Hakkımızda</a></li>           
                <li><a href="#">İletişim</a></li>
                <div class="vertical-line"></div>
                <button class="btnLogin">Giriş Yap</button>         
                <button class="btnRegister">Kayıt Ol</button>        
            </ul>   

        </nav>

        <div class="content">
            <div class="info">
                <h1>Kolay, hızlı, etkili</h1>
                <p> Sorularınızı hazırlayın, 
                    linki paylaşın ve anında geri bildirim 
                    toplayarak sonuçları izleyin.</p>
                <a href="#" class="btn">Anket oluştur</a>
            </div>
        </div>       
    </div>
  )
}

export default MainMenu