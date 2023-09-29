// import React, { memo, useEffect, useMemo, useState } from 'react'
// import Label from '../Label';
// import styles from './Table.module.scss'
// import { PAGINATION } from '../../utils/constants';
// import PAGINATION_ARROW from '../../assets/icons/arrow.png';
// import ReactPaginate from 'react-paginate';
// import classNames from 'classnames';

// const Pagination = (props) => {
//     const [rowsPerPageValue, setRowsPerPageValue] = useState(props?.rowsPerPageValue || PAGINATION.DEFAULT_ROWS_PER_PAGE)
//     const [currentPage, setCurrentPage] = useState(props?.currentPage || PAGINATION.DEFAULT_CURRENT_PAGE)
//     const noOfPages = useMemo(() => Math.ceil(props?.totalCount / rowsPerPageValue), [rowsPerPageValue, props?.totalCount])
//     const endingData = useMemo(() => currentPage * rowsPerPageValue, [currentPage, rowsPerPageValue])

//     const startingData = useMemo(() => {
//         if (currentPage === 1) {
//             return 1
//         } else if (endingData > props?.totalCount) {
//             return ((noOfPages - 1) * rowsPerPageValue) + 1
//         } else {
//             return ((currentPage - 1) * rowsPerPageValue) + 1
//         }
//     }, [currentPage, rowsPerPageValue, endingData, props?.totalCount])

//     const handleRowsChange = (e) => {
//         setRowsPerPageValue(e.target.value)
//     }

//     const handlePageClick = (e) => {
//         setCurrentPage(e?.selected + 1)
//         props?.setPageSelected(e?.selected + 1)
//     }
//     return (
//         <div className={styles.pagination}>
//             <p className={styles.dataRange}>
//                 {`${startingData} - ${endingData > props?.totalCount ? props?.totalCount : endingData} ${props?.tableName} out of ${props?.totalCount}`}
//             </p>
//             <div className={styles.paginationRightSide}>
//                 {/* <Label
//                     label="Rows per page"
//                     className={styles.label}
//                 /> */}
//                 {/* <select
//                     onChange={handleRowsChange}
//                     value={rowsPerPageValue}
//                     className={styles.rowPerPageDropdown}
//                 >
//                     {PAGINATION?.ROWS_PER_PAGE?.map(data=>{
//                         return(
//                             <option
//                                 key={data}
//                                 value={data}
//                             >
//                                 {data}
//                             </option>
//                         )
//                     })}
//                 </select> */}
//                 <ReactPaginate
//                     breakLabel="..."
//                     breakClassName={styles.break}
//                     previousClassName={styles.arrowBox}
//                     previousLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.previousArrow)} />}
//                     nextClassName={styles.arrowBox}
//                     nextLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.nextArrow)} />}
//                     renderOnZeroPageCount={null}
//                     pageCount={props?.totalCount / rowsPerPageValue}
//                     containerClassName={styles.paginationContainer}
//                     activeClassName={styles.activePage}
//                     pageRangeDisplayed={2}
//                     marginPagesDisplayed={1}
//                     onPageChange={handlePageClick}
//                     disabledClassName={styles.disabled}
//                     pageClassName={styles.page}
//                     forcePage={endingData > props?.totalCount ? Math.floor(noOfPages) : currentPage - 1}
//                 />
//             </div>
//         </div>
//     )
// }

// export default memo(Pagination)