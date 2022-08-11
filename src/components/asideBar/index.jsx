import React, {useContext} from 'react'
import {Context} from '../context'
import {countryApi} from 'services'
import {BackgroundVideo, Input, List} from 'components'
import styles from './styles.module.scss'
import stylesVideo from '../backgroundVideo/styles.module.scss'

const AsideBar = () => {
    const {switchingModal, clickedInputMobile} = useContext(Context)
    const api = countryApi()

    return (
        <div className={styles.aside} style={{
            display: switchingModal ? 'block' : null
        }}>
            <Input
                className={styles.aside__input}
                placeholder={`Search for a city or airport`}
            />
            <div className={styles.aside__wrapper} style={{
                opacity: clickedInputMobile ? '1' : null
            }}>
                <List
                    api={api}
                    classNameList={styles.aside__results}
                    classNameItem={styles.aside__item}
                    classNameName={styles.aside__name}
                    classNameCountry={styles.aside__country}
                />
            </div>

            <div className={styles.aside__inner}>
                <div className={styles.aside__myLocation}>
                    <BackgroundVideo position={'absolute'} width={'100%'} radius={'14px'} className={stylesVideo.cardVideo}/>
                    <div className={styles.aside__left}>
                        <div className={styles.aside__title}>My location</div>
                        <div className={styles.aside__city}>Minsk</div>
                        <div className={styles.aside__description}>Partly Cloudy</div>
                    </div>
                    <div className={styles.aside__right}>
                        <div className={styles.aside__degrees}>21°</div>
                        <div className={styles.aside__coordinates}>H:29°  L:15°</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AsideBar