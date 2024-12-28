import React from "react";
import { QRCodeSVG } from 'qrcode.react';
import s from './QrCodeGenerator.module.css';

export const GenerateHistory = () => {
    const items = localStorage.getItem('generateHistory')?.split(',') || [];

    return (
        items.map((item, index) => (
            <div key={index} className={s.gcont}>
                <div className={s.gname}>{item}</div>
                {/* Проверка: показывать QR-код, если больше одного элемента или элемент не пустой */}
                {(items.length > 1 || item.trim() !== '') && (
                    <QRCodeSVG className={s.gsvg} value={item} />
                )}
            </div>
        ))
    );
};
