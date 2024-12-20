import React, { useState } from 'react';
import './MainPage.css';
import logo from '../Assets/P.png';

const MainPage = () => {
  const [inputBoxes, setInputBoxes] = useState([
    { date: '', time: '' },
    { date: '', time: '' },
    { date: '', time: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedBoxes = [...inputBoxes];
    updatedBoxes[index][field] = value;
    setInputBoxes(updatedBoxes);

    if ((index === inputBoxes.length - 1) && updatedBoxes[index].date && updatedBoxes[index].time && inputBoxes.length < 10) {
      setInputBoxes([
        ...updatedBoxes,
        { date: '', time: '' },
      ]);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="logolar">
          <img src={logo} alt="" className="resim" />
        </ul>

        <ul>
          <button className="btnLogin">Giriş Yap</button>
          <button className="btnRegister">Kayıt Ol</button>
        </ul>
      </nav>

      <div className="content">
        <div className="info">
          <div className="question">
            <input
              type="text"
              placeholder="Enter question here, add options below"
              required
            />
          </div>
          <div className="vertical-line"></div>

          {}
          {inputBoxes.map((box, index) => (
            <div className="input-box" key={index}>
              <input
                type="date"
                placeholder="Select Date"
                value={box.date}
                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                required
              />
              <input
                type="time"
                placeholder="Select Time"
                value={box.time}
                onChange={(e) => handleInputChange(index, 'time', e.target.value)}
                required
              />
            </div>
          ))}

          <button className="settings">Poll Settings +</button>
          <a href="#" className="btn">Create Poll</a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
