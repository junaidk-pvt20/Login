import React from 'react'
import styles from './Spinner.module.scss'
import { memo } from 'react'

const Index = () => {
  return (
    <div className={styles.spinnerBackground}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default memo(Index)