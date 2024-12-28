import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react';
import s from './QrCodeScanner.module.css'

const QrCodeScanner = () => {
    const [value, setValue] = useState('')
    if(!localStorage.getItem('scanHistory')) {
        localStorage.setItem('scanHistory', '')
    }


    let items = []

    const scanHandler = (result) => {
        // console.log(result[0].rawValue)
        console.log(items)  

        items = localStorage.getItem('scanHistory').split(',')
        items.push(result[0].rawValue)
        localStorage.setItem('scanHistory', items)        

        setValue(result[0].rawValue)
    }

    const settings = {
        audio: false,   
        finder: false
    }

    const styles = {
        container: {width: 300, height: 300, margin: 50}
    }

    return (
        <div className={s.container}>
            <h1>QR Code Scanner</h1>

            <Scanner 
                classNames={s.scanner}
                onScan={scanHandler} 
                components={settings}
                styles={styles}
            />
            <div className={s.qr}>
                {value}
            </div>
        </div>
    )
}

export default QrCodeScanner