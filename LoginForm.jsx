import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../Assets/P.png';
import copyright from '../Assets/copyright.png';

const LoginForm = () => {
    return (
        <div>
            <h1 className="header">P O L L E N</h1>
            <div className='wrapper'>
            <form action="">
                <h1>Giriş Yap</h1>
                <div className="input-box">
                    <input type="text" placeholder='Kullanıcı adı' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Şifre' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Beni hatırla</label>
                    <a href="#">Şifreni mi unuttun?</a>
                </div>
                
                <button type="submit">Giriş Yap</button>
                
                <div className="register-link">
                    <p>Hesabın yok mu? <a href="#">Kayıt ol</a></p>
                </div>
            </form>
            </div>

            <div className="login-info">
                <p>
                    By creating an account, I agree to Pollen'sTerms of Service,
                    Privacy PolicyandIntellectual Property Rights
                </p>
            </div>
            <div className='copyrights'>
                <img src={logo} alt="" className='login-logo'/>
                <div className="vertical-line"></div>
                <img src={copyright} alt="" className='login-copyright'/>
            </div>
        </div>
    );
};

export default LoginForm;


// By clicking "Sign Up" your indicating and confirming that you 
// agree to all times of use and Privacy Policy. You also agree 
// to receive news, tips and marketing/promotional material by 
// email which you can opt out from at anytime.