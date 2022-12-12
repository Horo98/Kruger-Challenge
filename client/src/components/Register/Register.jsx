import React from 'react';
import axios from 'axios';
import { useFormik, yupToFormErrors } from 'formik';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from "yup";
import { Link } from 'react-router-dom';

// import PhoneInput from 'react-phone-number-input';
import Swal from 'sweetalert2'


// import 'react-phone-number-input/style.css';
import styles from '../Register/Register.module.css';
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Register() {


  

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            lastname: ""
        },



        validationSchema: Yup.object({

            username: Yup.string()
                .required('Nickname required'),
            email: Yup.string()
                .email("Invalud email address")
                .required('Email required'),
            password: Yup.string()
                .required('No password provided')
                .min(10, 'Debe tener 10 caracteres')
                .max(10, "Debe tener 10 caracteres")

        }),


        onSubmit: async (values) => {
            await axios.post('http://localhost:3001/auth/register', values).then(res=> (Swal.fire({
                icon: 'success',
                title: `${res.data.message}`,
                showConfirmButton: false,
                timer: 2000
              }))).catch(error=> (Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data.error}`
              })) )

        }

    })





        return (
            <>
                <div className={styles.background}>
                    <form onSubmit={formik.handleSubmit} className={styles.box}>
                        <h1 className={styles.title}>Informacion empleado</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm"> <div className={styles.font}>
                                    <input id="username" name="username" type="text" placeholder='Nombre'
                                        className="form-control form-control-lg w-50 p-2 "
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                    /> <span>{formik.touched.username && formik.errors.username ? <label className={styles.errorsName}>{formik.errors.username} </label> : null}<br /></span></div>



                                </div>
                                <div className="col-sm"> <div className={styles.font}>
                                    <input id="lastname" name="lastname" type="text" placeholder='Apellido'
                                        className="form-control form-control-lg w-50 p-2 "
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastname}
                                    /> <span>{formik.touched.lastname && formik.errors.lastname ? <label className={styles.errorsName}>{formik.errors.lastname} </label> : null}<br /></span></div>



                                </div>
                                <div >
                                    <div className={styles.font}>
                                        <input id="email" name="email" type="text" placeholder='Email'
                                            className="form-control form-control-lg w-50 p-2"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} />
                                        <span>{formik.touched.email && formik.errors.email ? <label className={styles.errorsMail}>{formik.errors.email}</label> : null}<br /></span>    </div>


                                    <div className={styles.font}>
                                        <input id="password" name="password" type="password" placeholder='Cedula'
                                            className="form-control form-control-lg w-50 p-2"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password} />
                                        <span>{formik.touched.password && formik.errors.password ? <label className={styles.errorsPassword}>{formik.errors.password}</label> : null}<br /></span> </div>

                            
                                    <div className={styles.font}>
                                        <div>
                                            {/* <a className="enlace" href="http://localhost:3001/auth/google/callback">Registrase con Google</a> */}
                                        </div>
                                        <div className={styles.move}><br /><br />

                                            
                                            
                                            <div>
                            <div>
                                <button className={styles.blue}  type='submit' onChange={formik.handleChange} onBlur={formik.handleBlur}> Submit</button>
                            </div>
                        </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                     
<h1>El empleado ingresara a la plataforma con su email y su numero de cedula</h1>
                    </form>
                </div>
            </>


        )

    
}
