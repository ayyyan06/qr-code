import React from 'react'
import {QRCodeSVG} from 'qrcode.react'
import { useState } from 'react'
import s from './QrCodeGenerator.module.css'

const QrCodeGenerator = () => {
    if(!localStorage.getItem('generateHistory')) {
        localStorage.setItem('generateHistory', '')
    }
    const [val, changeState] = useState('')
    let text = ''
    let items = []

    const clickHandler = () => {
        changeState(text)

        let x = localStorage.getItem('generateHistory')
        if(x.length > 0) { 
            items = x.split(',')
        }

        console.log(items, localStorage.getItem('generateHistory'))

        if(text !== ''){
            items.push(text)
        }

        localStorage.setItem('generateHistory', items)
        console.log(items, localStorage.getItem('generateHistory'))

    }

    const changeHandler = (event) => {
        text = event.target.value
    }

    return(
        <div className={s.container}>
            <h1>QR Code Generator</h1>
            <input className={s.input} type="text" placeholder='text' onChange={changeHandler}/>
            <button className={s.generate} onClick={clickHandler}>Generate</button>
            <QRCodeSVG className={s.svg} value={val} />

        </div>
    )
}

export default QrCodeGenerator