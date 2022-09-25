import React from 'react'

import '../../styles/Labs.scss'

import F11tab from '../../components/Labs/F11tab'
import FooterLab from '../../components/Labs/FooterLab'
import HeaderLab from '../../components/Labs/HeaderLab'
import Performers from '../../components/Labs/Performers'

function F14() {

  const Subject = 'Фотоника'
  const LabName = 'Ф11 ЭЛЕКТРООПТИЧЕСКАЯ МОДУЛЯЦИЯ'
  const LabLink = 'ъыъ.рф/ыьеа'
  const FColName = 'Напряжение, В'
  const SColName = 'Ток, мА'

  return (
    <div className="container">
        <HeaderLab Subject={Subject} LabName={LabName} LabLink={LabLink}/>
        <Performers/>

        <div>
            <h2>Выполнение работы</h2>
            <div className="main-text">
            1. Включите приборы:
            <ul>
                <li>Источник излучения</li>
                <li>Измеритель оптического уровня мощности</li>
            </ul>
            </div>
            <div className="main-text">
                2 Научитесь снимать с микрометрического винта монохроматора длину волны.
            </div>
        </div>

        <div>
            <h2>Исследование источника 1</h2>
            <div className="main-text">3 Переключите оптический патчкорд в гнездо 1310.</div>
            <div className="main-text">4 Вращая микрометрический винт монохроматора, определите длину волны (она может быть не равной 1310 нм) и уровень мощности максимума.</div>
            <div className="main-text">5 Измерьте минимальный уровень мощности, измеряемый измерителем</div>
            <div className="main-text">6 Выполните измерения уровня мощности и длины волны вблизи диапазона 1310 нм (минимум - максимум - минимум).</div>
        </div>

        <div>
            <h2>Исследование источника 2</h2>
            <div className="main-text">7 Переключите оптический патчкорд в гнездо 1550.</div>
            <div className="main-text">8 Вращая микрометрический винт монохроматора, определите длину волны (она может быть не равной 1550 нм) и уровень мощности максимума.</div>
            <div className="main-text">9 Выполните измерения уровня мощности и длины волны вблизи диапазона 1550 нм (минимум - максимум - минимум).</div>
        </div>

        <FooterLab/>
    </div>
  )
}

export default F14