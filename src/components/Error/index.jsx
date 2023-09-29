import classNames from 'classnames'
import React, { memo } from 'react'
import styles from './Error.module.scss'

const index = (props) => {
    return (
        <p className={classNames(styles.errorMessage,props?.className)}>{props?.errorMessage}</p>
    )
}

export default memo(index)