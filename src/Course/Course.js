import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

import './Course.css'

import img from '../assets/image4.png'

export function Course() {
  return (
    <div className="course">
      <Header />
      <main className="course__container">
        <div className="mainContainer">
            <h1 className="mainArcticle">О курсе</h1>
            <div className="homeContainer">
                <div className="">
                <h2 className="Arcticle">Не очень умный дом</h2>
                <p className="MainText">
                    На этом курсе команды  не будут знакомиться с системами современных умных домов и не сделают собственный прототип дома и вообще будет пусто и скучно
                </p>
                </div>
                <img src={img} alt="" className="mainImg" />
            </div>
            <div className="direct">
                <h1 className="mainArcticle">Направления подготовки</h1>
                <div className="directBox">
                    <div className="boxItem">
                        <h3 className="itemArcticle">IT</h3>
                        <ul>
                            <li className="itemText">Написание кода на C++</li>
                            <li className="itemText">Управление умной теплицей</li>
                        </ul>
                    </div>
                    <div className="boxItem">
                        <h3 className="itemArcticle">РОБОТОТЕХНИКА</h3>
                        <ul>
                            <li className="itemText">Написание кода в Arduino IDE</li>
                            <li className="itemText">Создание электронных схем</li>
                            <li className="itemText">Сборка элементов</li>
                        </ul>
                    </div>
                    <div className="boxItem">
                        <h3 className="itemArcticle">ДИЗАЙН</h3>
                        <ul>
                            <li className="itemText">Работа с эргономикой</li>
                            <li className="itemText">Работа в Blender</li>
                            <li className="itemText">Создание концепта теплицы</li>
                            <li className="itemText">Создание дизайна теплицы</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="teachers">
                <h1 className="mainArcticle">Преподаватели</h1>
                <div className="nameTeacher">
                    <div className="nameBox">
                        <h3 className="arcticleTeacher">Фамилия Имя</h3>
                        <ul>
                            <li className="itemName">Опыт преподавания: </li>
                            <li className="itemName">Преподает в:</li>
                            <li className="itemName">Достижения: </li>
                        </ul>
                    </div>
                    <p className="photo">ФОТО</p>
                </div>
                <div className="nameTeacher">
                    <p className="photo">ФОТО</p>
                    <div className="nameBox">
                        <h3 className="arcticleTeacher">Фамилия Имя</h3>
                        <ul>
                            <li className="itemName">Опыт преподавания: </li>
                            <li className="itemName">Преподает в:</li>
                            <li className="itemName">Достижения: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
