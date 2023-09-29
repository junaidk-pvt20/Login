import React, { useEffect, useState } from 'react'
import Table from "../../components/Table";
import { getUsers } from '../../services/users/services';
import editIcon from "../../assets/icons/edit.png";
import { useNavigate } from 'react-router-dom';
import { PATH } from "./../../utils/pagePath";
import styles from "./UserDetails.module.scss";
import Modal from "../../components/Modal";
// import EditModal from "./EditModal";

const Index = () => {
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    console.log('users', users)
    // const handleEdit = async (id) => {
    //     setOpenModal(true);
    // }
    // const closeModal = () => {
    //     setOpenModal(!openModal);
    // };
    const column = [
        {
            name: "Name",
            width: "150px",
            selector: (row) => (
                <div className={styles.candidateName}
                    onClick={() =>
                        navigate(`${PATH.USERS}/${row.name1}`
                        )
                    }
                >
                    {row?.name1}
                </div>
            ),
        },
        {
            name: "Age",
            width: "150px",
            selector: (row) => row?.age,
        },
        {
            name: "Gender",
            width: "150px",
            selector: (row) => row?.gender,
        },
        {
            name: "designation",
            width: "150px",
            selector: (row) => row?.designation,
        },
        {
            name: "address",
            width: "150px",
            selector: (row) => row?.address,
        },
        {
            name: "Company Name",
            width: "200px",
            selector: (row) => row?.company_name,
        },

        {
            name: "Action",
            width: "100px",
            center: true,
            cell: (row) => {
                return (
                    <div
                        className={styles.actionIcons}
                    >
                        <img
                            className="{styles.actionIcon}"
                            src={editIcon}
                            alt="Edit Row"
                        // onClick={() => handleEdit(row?.id)}
                        />
                    </div>
                );
            },
        },
    ];
    const getUserAPI = async (params) => {
        try {
            const res = await getUsers();
            setUsers(res?.data);
        } catch (error) { }
    }
    useEffect(() => {
        getUserAPI()
    }, [])

    return (
        <>
            <Table
                columns={column}
                data={users}
            // className={styles.candidatesTable}

            />
            {/* <EditModal
                setOpenModal={setOpenModal}
                styles={styles}
                Modal={Modal}
                openModal={openModal}
                closeModal={closeModal}
            /> */}
        </>
    )
}

export default Index