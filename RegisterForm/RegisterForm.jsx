import React from 'react'
import './RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../Assets/P.png';
import copyright from '../Assets/copyright.png';

const RegisterForm = () => {
  return (
    <div>
        <h1>P O L L E N</h1>
        <div className='wrapper'>
        <form action="">
            <h1>Kayıt Ol</h1>
            <div className='input-box'>
                <input type="text" placeholder='Kullanıcı adı' required/>
                <FaUser className='icon' />
            </div>  
            <div className='input-box'>
                <input type="text" placeholder='E-posta' required/>
                <MdEmail className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Şifre' required/>
                <FaLock className='icon' />
            </div>   
            <button type="submit">Kayıt Ol</button>
        </form>
        </div>
    
        <div className='register-info'>
            <p>
                By creating an account, I agree to Pollen'sTerms of Service, Privacy PolicyandIntellectual Property Rights
            </p>
        </div>
        <div className='copyrights'>
            <img src={logo} alt="" className='register-logo'/>
            <div className='vertical-line'></div>
            <img src={copyright} alt="" className='register-copyright'/>
        </div>

        <div className='cookies'>            
                Hakkımızda Reklam Oluştur Sayfa Oluştur Geliştiriciler Kariyer 
                Olanakları Çerezler Ad Choices Koşullar Yardım Kişi Yükleme ve 
                Hesabı Olmayan Kişiler Ayarlar           
        </div>
    </div>
  )
}

export default RegisterForm