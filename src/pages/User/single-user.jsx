import React, { useEffect, useState } from 'react'
import styles from './UserDetails.module.scss'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'

import { getUserDetails } from '../../services/users/services'
import Spinner from '../../components/Spinner'

const SingleUser = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    console.log('user', user)
    const getUserDetailsAPI = async (name) => {
        try {
            setLoading(true)
            const res = await getUserDetails(name);
            console.log('res', res)
            setUser(res?.data);
            setLoading(false)
        } catch (error) { }
    }
    useEffect(() => {
        getUserDetailsAPI(params?.name)
    }, [])
    return (
        <>
            {loading && <Spinner />}
            <div className={styles.applicationDiv}>
                <div className={styles.generalDetails}>
                    <div className={styles.singleDetail}>
                        <p className={styles.detailName}>Name</p>
                        <p className={styles.detailInfo}>{user?.name}</p>
                    </div>
                    <div className={styles.singleDetail}>
                        <p className={styles.detailName}>Age</p>
                        <p className={styles.detailInfo}>{user?.age}</p>
                    </div>
                    <div className={styles.singleDetail}>
                        <p className={styles.detailName}>Gender</p>
                        <p className={styles.detailInfo}>{user?.gender}</p>
                    </div>
                    <div className={styles.singleDetail}>
                        <p className={styles.detailName}>Comapany Name </p>
                        <p className={styles.detailInfo}>
                            {`${user?.company_name || "--"}`}
                        </p>
                    </div>


                </div>

            </div>
        </>
    )
}

export default SingleUser
