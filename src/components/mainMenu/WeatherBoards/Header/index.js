import React from 'react'

import styles from './styles.module.scss'

const Header = ({ src, name }) => {
    return (
        <div className={styles.title}>
            <img className={styles.logo} src={src} alt="img" />
            {name}
        </div>
    )
}

export default Header
