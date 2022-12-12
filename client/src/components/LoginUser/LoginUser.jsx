import React, {createContext, useContext} from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Yup from "yup"
import  { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2'





export default function LoginUser() {

    const history = useHistory();
    const cookies = new Cookies()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",

        },

        validationSchema: Yup.object({

            email: Yup.string()
                .max(200, "Between 15 chars or less")
                .required('Required'),


            password: Yup.string()
                .required('No password provided')
                .min(10, 'Debe tener 10 caracteres')
                .max(10, "Debe tener 10 caracteres"),

        }),

        onSubmit: async (values) => {

            console.log(values)
            await axios.post('http://localhost:3001/auth/login', values).then(cred=> document.cookie = `token=${cred.data.token}; max-age=${500*500}; path=/; samesite=strict`
            ).catch((error)=> {
                return (Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.message}`
                  }))
            })
            
            history.push('/')
        }
    })

    if(cookies.get('token')) {
        return <Redirect to='/'  />
    } else {
        return (
            <>
    <div >
                <div >
                    <form onSubmit={formik.handleSubmit}>
    
                        {/* <!-- user input //nickname --> */}
                        <div>
                        <h1 >Sign in!</h1>
                            <input id="email" name="email" type="text" placeholder='email'
                                className="form-control form-control-lg"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />  <span>{formik.touched.email && formik.errors.email ? <label >{formik.errors.email}</label> : null}<br /></span> </div>
    
                        {/*  Password input  */}
                        <div className="form-outline mb-4">
                            <input id="password" name="password" type="password" placeholder='Password'
                                className="form-control form-control-lg"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                                <span>{formik.touched.password && formik.errors.password ? <label >{formik.errors.password}</label> : null}<br /></span>
                        </div>


    
                        {/*  submit - home  */}
                        <div>
                            <div><Link to='/'><button >Home</button></Link>
                                <button  type='submit' onChange={formik.handleChange} onBlur={formik.handleBlur}> Submit</button>
                                </div>
                        </div>
    
                    </form>
    
                </div>
                </div>
    
    
            </>
    
    
        )
    }
}
