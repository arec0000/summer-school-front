import { useNavigateToTop } from '../hooks/useNavigateToTop'

import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

import './Main.css'

import img1 from '../assets/main/image1.png'
import img2 from '../assets/main/image2.png'
import img3 from '../assets/main/image3.png'

export function Main() {
  const navigate = useNavigateToTop()

  function handleClick() {
    navigate('/course/smart-home/')
  }

  return (
    <div className="main">
      <Header />
      <main className="main__container">
        <div className="mainContainer">

          <h1 className="main-arcticle">О НАС</h1>
          <div className="summerSchool">
            <div className="">
              <h2 className="Arcticle">Что такое летняя школа?</h2>
              <p className="MainText">
                Летняя школа направлена на развитие профессиональных и гибких навыков в инженерной сфере. По итогу обучения ты сможешь разработать и реализовать командный проект.
              </p>
            </div>
            <img className="MainImg" src={img1} alt="" />
          </div>

          <div className="schoolProgram">
            <img src={img2} alt="" className="MainImg" />
            <div className="">
              <h2 className="Arcticle">По итогу программы участники:</h2>
              <ul className="Programm-item">
                <li className="MainText" >Собственный реализованный проект</li>
                <li className="MainText" >Опыт коммуникации с заказчиками</li>
                <li className="MainText" >Умение работать в программах: Blender, Arduino IDE, esp Block, Google</li>
                <li className="MainText" >Сформированная рабочая команда</li>
                <li className="MainText" >Сертификат о прохождении Летней школы</li>
                <li className="MainText" >Дополнительные баллы для поступления в вуз</li>
              </ul>
            </div>
          </div>

          <div className="location">
            <div className="">
              <h2 className="Arcticle">Место и время проведения</h2>
              <p className="MainText">
                Занятия проводятся с понедельника по пятницу с 9:00 до 16:00 по адресу Шаповалова 2А
              </p>
            </div>
            <img src={img3} alt="" className="MainImg" />
          </div>
        </div>

        <div className="course">
          <h1 className="main-arcticle">НАШИ КУРСЫ</h1>
          <div className="courseContainer">
            <button className="block block_linked" onClick={handleClick}>
              <h3 className="courseArcticle">Умный дом</h3>
              <p className="courseText">
                На этом курсе команды будут знакомиться с системами современных умных домов и сделают собственный прототип
              </p>
              <div className="price">
                <p className="courseText" >3 недели     •   15.000р</p>
                <span className="send">
                  Подробнее
                </span>
              </div>
            </button>

            <div className="block block_disabled">
              <h3 className="courseArcticle">Не очень умный дом</h3>
              <p className="courseText">
                На этом курсе команды не будут знакомиться с системами современных умных домов и вообще будут заниматься чем-то другим
              </p>
              <p className="soon">Будет позже...</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
