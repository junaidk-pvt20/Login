import React, { memo, Fragment } from 'react'
import LeftSideBar from './LeftSideBar'
import styles from './PostLogin.module.scss'
import { Outlet } from 'react-router-dom'

const Index = () => {
    return (
        <Fragment>

            <div className={styles.layout}>
                <LeftSideBar />
                <div className={styles.rightSideContainer}>
                    <Outlet />
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Index)