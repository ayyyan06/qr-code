import React from "react";
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory = () => {
    const items = localStorage.getItem("scanHistory")?.split(",") || [];

    // Фильтруем пустые строки из массива
    const filteredItems = items.filter(item => item.trim() !== '');

    return (
        filteredItems.map((item, index) => (
            <div key={index}>
                <div>{item}</div>
                {/* Проверяем, если больше одного элемента или элемент не пустой */}
                {(filteredItems.length > 1 || (filteredItems.length === 1 && item.trim() !== '')) && (
                    <QRCodeSVG value={item} />
                )}
            </div>
        ))
    );
};
