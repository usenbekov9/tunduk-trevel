import { useState } from 'react'
import styles from './Header.module.css'
import { RiSearchLine } from "react-icons/ri";
import { Button } from '@mui/material';
import { FiMenu, FiX } from "react-icons/fi";

const menu = [
    { name: "Каталог", link: "/catalog" },
    { name: "Контакты", link: "/contacts" },
    { name: "О компании", link: "/about-company" },
    { name: "Блог", link: "/blog" },
    { name: "Новости", link: "/news" }
]

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.header__top}>

                {/* LOGO */}
                <div className={styles.header__logo}>
                    <img src="/logo.png" alt="" />
                    <div>
                        <h2>TYNDYK TRAVEL</h2>
                        <p>Кыялыныздагы эс алуу</p>
                    </div>
                </div>

                {/* DESKTOP NAV */}
                <div className={styles.header__nav}>
                    {menu.map(item => (
                        <a key={item.name} href={item.link}>{item.name}</a>
                    ))}
                </div>

                {/* SEARCH */}
                <div className={styles.header__search}>
                    <input type="text" placeholder='Поиск' />
                    <span><RiSearchLine size={20} /></span>
                </div>

                {/* CALL BUTTON */}
                <div className={styles.header__order_call}>
                    <Button
                        sx={{
                            borderRadius: "40px",
                            backgroundColor: "#2D9CDB",
                            textTransform: "none",
                            color: "#fff",
                            padding: "10px 20px"
                        }}
                        variant="contained"
                    >
                        Обратный звонок
                    </Button>
                </div>

                {/* PHONE */}
                <div className={styles.header__info}>
                    <h2>
                        <a href="tel:+996755099069">+996755099069</a>
                    </h2>
                    <p>9:00 - 19:00</p>
                </div>

                {/* BURGER */}
                <div className={styles.burger} onClick={() => setOpen(!open)}>
                    {open ? <FiX size={26} /> : <FiMenu size={26} />}
                </div>

            </div>

            {/* MOBILE MENU */}
            <div className={`${styles.mobileMenu} ${open ? styles.active : ''}`}>
                {menu.map(item => (
                    <a key={item.name} href={item.link}>{item.name}</a>
                ))}

                <div className={styles.mobileBottom}>
                    <input type="text" placeholder="Поиск..." />
                    <Button fullWidth variant="contained">Обратный звонок</Button>
                </div>
            </div>
        </header>
    )
}

export default Header