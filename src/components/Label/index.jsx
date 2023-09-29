import classNames from 'classnames'
import React from 'react'
import { Label } from 'reactstrap'
import styles from './Label.module.scss'

const index = (props) => {
    return (
        <Label className={classNames(styles.label,props?.className)}>
            {props.label} {props?.isRequiredSign ? <span className={styles.requiredSign}>*</span>:''}
        </Label>
    )
}

export default index