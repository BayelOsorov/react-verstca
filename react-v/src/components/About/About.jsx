import React from "react";
import "./About.css";
import oMagazine from '../../images/О магазине.svg'
import Categories from '../../images/Категории.svg'
import rassylka from '../../images/РАссылка.svg'

const About = () => {
  return (
    <div>
      <div className='mainAbout'>

        <div className="block">
          <img src={oMagazine} alt="" />
          <p className='text1'>
            A watch is a portable timepiece intended to be carried or worn by a person. ... During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches.
          </p>
        </div>
        <div className="block">
          <img src={Categories} alt="" /> <br />
          <button>Часы</button>
          <button>Браслеты</button>
          <button>Ремни</button>
          <button>Ювелирные изделия</button>
          <button>Запонки</button>
        </div>
        <div className="block">
          <img src={rassylka} alt="" />
          <p className='text1'>
            Время это лучший учитель, но к сожалению оно убивает своих учеников
          </p>
          <input style={{ padding: '8px 15px' }} type="email" placeholder='Ваша почта' /> <button>Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default About;
