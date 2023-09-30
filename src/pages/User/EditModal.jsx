import React from "react";
// import EmailVerify from "./EmailVerify";
import Field from "../../components/Field";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { API_STATUS } from "../../utils/constants";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { EMAIL_REGEX } from "../../utils/regEx";

const EditModal = ({
    styles,
    Modal,
    openModal,
    closeModal,
    setOpenModal,
}) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
        },
        mode: "all",
    })
    const onSubmit = async (data) => {
        const payload = {
            email_address: data?.email,
            jobprofile_id: data?.jobprofile
        }
        // const res = await putUser(payload);
        // if (res?.status === API_STATUS?.SUCCESS) {
        //     toast.success(res?.data?.message);
        //     setOpenModal(false);
        // }
    };
    return (
        <Modal
            modal={{
                isOpen: openModal,
                toggle: closeModal,
                position: "centre",
            }}
            header={{
                component: (
                    <div className={styles.textContent}>
                        <p className={styles.addcandidate}>Edit User</p>
                    </div>
                ),
            }}
            body={{ className: styles.modalDiv }}
            isClose={true}
        >
            {/* <EmailVerify
                setAddCandidate={setAddCandidate}
                jobProfiles={jobProfiles}
                setOpenModal={setOpenModal}
                setJobID={setJobID}
                setPreviousDetails={setPreviousDetails}
                getStateAPI={getStateAPI}
                getCityAPI={getCityAPI}
            /> */}
            <div>
                <form className={styles.editForm} onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        controller={{
                            name: "email",
                            control: control,
                            render: ({ field }) => {
                                return (
                                    <Input
                                        {...register("email", {
                                            required: "Email is required.",
                                        })}
                                        placeholder="user@example.com"
                                        invalid={errors.email}
                                        {...field}
                                    />
                                );
                            },
                        }}
                        error={{
                            errorMessage: errors?.email?.message,
                        }}
                        label={{
                            label: "Email",
                        }}
                    />

                    <Button className={styles.emailSubmit} type="submit" label="Save" />
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;
