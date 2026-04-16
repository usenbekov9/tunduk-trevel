import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import styles from './TourSearch.module.css';

registerLocale('ru', ru); // Подключаем русский язык

const TourSearch = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className={styles.searchBlock}>
            <h3 className={styles.title}>Поиск тура</h3>
            <div className={styles.form}>
                
                <div className={styles.inputGroup}>
                    <label>Тип тура</label>
                    <select className={styles.customSelect}>
                        <option>Любой</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label>Продолжительность</label>
                    <div className={styles.row}>
                        <select className={styles.customSelect}><option>От</option></select>
                        <select className={styles.customSelect}><option>До</option></select>
                    </div>
                </div>

                {/* Поле с календарем */}
                <div className={styles.inputGroup}>
                    <label>Даты тура</label>
                    <div className={styles.datePickerWrapper}>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Любой"
                            dateFormat="dd MMM yyyy"
                            locale="ru"
                            className={styles.dateInput} // Твой класс для стилизации
                        />
                    </div>
                </div>

                <button className={styles.searchBtn}>Найти</button>
            </div>
        </div>
    );
};

export default TourSearch;