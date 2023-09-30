import classNames from 'classnames'
import React, { useState } from 'react'
import { Input } from 'reactstrap'
import styles from './Input.module.scss'
import eyeIconOpen from '../../assets/icons/eye.svg'
import eyeIconClose from '../../assets/icons/eye-slash.svg'

const Index = (props) => {
    const [type, setType] = useState(props?.type || "text")

    const handleChangeInputType = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    return (
        <div className={classNames(styles.inputContainer, props?.containerclassname)}>
            <Input
                {...props}
                className={
                    classNames(
                        styles.inputField,
                        props.className,
                        props.type === "password" && styles.passwordInput,
                        props.type === "search" && styles.searchInput,
                        props?.invalid?.message && styles.invalid
                    )}
                type={props?.type === "search" ? "text" : type}
            />
            {props?.type === "password" ?
                <p className={classNames(styles.eyeIcon)} onClick={handleChangeInputType}>
                    {type === "password" ? <img src={eyeIconOpen} alt='eye Icon' /> : <img src={eyeIconClose} alt='eye Icon' />}
                </p>
                : ''}
        </div>
    )
}

export default Index