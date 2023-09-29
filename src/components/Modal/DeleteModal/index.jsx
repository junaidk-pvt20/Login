import React, { memo } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './DeleteModal.module.scss'
import classNames from 'classnames';
import Button from '../../Button';
import deleteIcon from '../../../assets/icons/delete.png'

function Index(props) {
    return (
        <Modal 
            {...props?.modal}
            className={classNames(styles.modal,props?.className)} 
            backdropClassName={classNames(styles.backdrop,props?.modal?.backdropClassName)}
            centered
            backdrop="static"
            keyboard={false}
        >
            <ModalHeader
                {...props?.header}
                className={classNames(styles.header,props?.header?.className)}
                toggle={props?.isClose ? props?.modal?.toggle : ''}
                centered
            >
                Delete {props?.itemName}
            </ModalHeader>
            <ModalBody 
                className={classNames(styles.body,props?.body?.className)}
                centered
            >
                <img  className={styles.img} src={deleteIcon} alt='Trash Can' />
                <p>{props?.deleteMessage || `Are you sure you want to delete the ${props?.itemName}`}</p>
            </ModalBody>
            <ModalFooter 
                className={classNames(styles.footer,props?.footer?.className)}
            >
                <Button label="Cancel" outline={true} onClick={props?.modal?.toggle}/>
                <Button label="Delete" onClick={props?.footer?.handleDelete}/>
            </ModalFooter>
        </Modal>
    );
}

export default memo(Index);