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
            Наручные часы практически с самого момента своего появления превратились в обязательный аксессуар для любого человека, желающего выглядеть серьезным и солидным. Если вы носите часы, это означает, что вы бережно относитесь к времени и, скорее всего, являетесь надежным партнером. Если вы носите часы известных марок, это говорит о том, что вы состоятельный человек, которому присущ вкус и стиль. Вообще, наручные часы могут очень много рассказать о своем владельце, поэтому к их выбору необходимо относиться предельно серьезно. Особенно, если вы выбираете противоударные и водонепроницаемые, со скрытой камерой или другие модели достаточно дорогостоящих часов. Сделать правильный выбор вам поможет качественное описание ручных часов, в котором отражены все нюансы, связанные с производителями, моделями, механизмами, ремешками и прочим. Все это вы найдете в интернет-магазине часов и аксессуаров Watchtown.ru.
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
            Время - лучший учитель, но, к сожалению, оно убивает своих учеников.
            Гектор Берлиоз.
          </p>
          <input style={{ padding: '8px 15px' }} type="email" placeholder='Ваша почта' /> <button>Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default About;
