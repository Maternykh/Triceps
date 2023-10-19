import React from 'react'
import {AiFillFire} from 'react-icons/ai'
import {MdSoupKitchen,MdLocalDrink} from 'react-icons/md'
import {LuSalad,LuCakeSlice} from 'react-icons/lu'
import {BiSolidCake} from 'react-icons/bi'
import {RiCake3Fill} from 'react-icons/ri'
const Navrec = () => {
  return (
    <div className='Navrec'>
        <a href="" className='href'>
        <div className="ssilka">
            <div className="icon">
                <AiFillFire className='iconin'/>
            </div>
            <div className="text">Горячее</div>
        </div>
        </a>
        <a href="" className='href'>
        <div className="ssilka">
            <div className="icon">
                <MdSoupKitchen className='iconin'/>
            </div>
            <div className="text">Супы</div>
        </div>
        </a>
        <a href="" className='href'>
            <div className="ssilka" >
                <div className="icon">
                    <LuSalad className='iconin'/>
                </div>
                <div className="text">Салаты</div>
            </div>
        </a>
        <a href="" className='href'>
            <div className="ssilka" >
                <div className="icon">
                    <BiSolidCake className='iconin'/>
                </div>
                <div className="text">Закуски</div>
            </div>
        </a>
        <a href="" className='href'>
            <div className="ssilka" >
                <div className="icon">
                    <LuCakeSlice className='iconin'/>
                </div>
                <div className="text">Выпечка</div>
            </div>
        </a>
        <a href="" className='href'>
            <div className="ssilka" >
                <div className="icon">
                    <RiCake3Fill className='iconin'/>
                </div>
                <div className="text">Дисерты</div>
            </div>
        </a>
        <a href="" className='href'>
            <div className="ssilka" >
                <div className="icon">
                    <MdLocalDrink className='iconin'/>
                </div>
                <div className="text">Напитки</div>
            </div>
        </a>
    </div>
  )
}

export default Navrec