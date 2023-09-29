import React, { Fragment, memo, useMemo } from 'react'
import styles from './Table.module.scss'
import DataTable from 'react-data-table-component'
// import Pagination from './Pagination'
import classNames from 'classnames'
import Spinner from '../Spinner'

const Index = (props) => {
    const columns = useMemo(() => props?.columns?.map(data => ({ ...data, sortable: props?.isSortable || data?.sortable })), [props?.columns])
    return (
        <Fragment>
            <DataTable
                {...props}

                pagination={false}
                columns={columns}
                className={classNames(styles.table, props.className)}
                progressComponent={<Spinner />}
                // progressPending={true}
                fixedHeader={true}
                fixedHeaderScrollHeight='auto'
            />
        </Fragment>
    )
}

export default memo(Index)