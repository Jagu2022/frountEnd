import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios'
export default function Students() {
    const[student, setStudent] = useState([])
    const studentForm = useFormik({
        initialValues:{
            firstname: '',
            lastname: '',
            gender: '',
            age: '',
            password: '',
            username: ''
        },
        validationSchema:yup.object({
            firstname:yup.string().required('firstname is required').min(2,'firstname is too shot'),
            lastname:yup.string().required('lastname is required'),
            password: yup.string().required('password is required').matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,20}$/, 'need uniq password'),
            age: yup.string().required('age is required').test({
                name: 'validation age',
                message: 'too old for marriage',
                test: (value,a)=>{
                    console.log(a.parent)
                    if(a.parent.gender === 'male' && value<21){
                        return false
                    }
                    if(a.parent.gender === 'female' && value<18){
                        return false
                    }
                    return true
                }
            }),
            username: yup.string().required('fill user field').test({
                name:'user validation',
                message: 'user already exist',
                test: (async(value, a) => {
                    var res = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`)
                    if(res.data.length !== 0) {
                        return a.createError({message:'This username is already exist'})
                    }else{
                        return true
                    }
                })
            })
        }),
        onSubmit: (values) => {
            console.log(values)
            setStudent([...student,values])
        },
    })
        
  return (
    <div style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
        <h1>Students</h1>
        <form onSubmit={studentForm.handleSubmit}>
            
            <input placeholder='firstname' type='text' name='firstname' onBlur={studentForm.handleBlur}  onChange={studentForm.handleChange}/>
            <br/>
            <div>
                <strong style={{color:'red'}}>{studentForm.touched.firstname && studentForm.errors.firstname}</strong>
            </div>
            <input placeholder='lastname' type='text' name='lastname' onBlur={studentForm.handleBlur} onChange={studentForm.handleChange}/>
            <br/>
            <div>
                <strong style={{color:'red'}}>{studentForm.touched.lastname && studentForm.errors.lastname}</strong>
            </div>
            <input  type='radio' name='gender' value='male' onBlur={studentForm.handleBlur} onChange={studentForm.handleChange}/>male
            <input  type='radio' name='gender' value='female' onBlur={studentForm.handleBlur} onChange={studentForm.handleChange}/>female
           
            <br/>
            <input placeholder='age' type='text' name='age' onBlur={studentForm.handleBlur} onChange={studentForm.handleChange} />
            <div>
                <strong style={{color:'red'}}>{studentForm.touched.age && studentForm.errors.age}</strong>
            </div>
            <br/>
            <input placeholder='username' type='text' name='username' onBlur={studentForm.handleBlur} onChange={studentForm.handleChange} />
            <div>
                <strong style={{color:'red'}}>{studentForm.touched.username && studentForm.errors.username}</strong>
            </div>
            <br/>
            <input placeholder='password' type='text' name='password' onBlur={studentForm.handleBlur} onChange={studentForm.handleChange}/>
            <br/>
            <div>
                <strong >{studentForm.touched.password && studentForm.errors.password}</strong>
            </div>
            <button>add student</button>
        </form>
        <hr/>
        {
            student.length > 0 && (
                <table border={'2px solid'}>
            <thead>
                <th>firstname</th>
                <th>lastname</th>
                <th>age</th>
            </thead>
            {
                student.map((e) => {
                    return  <tr key={Math.random()}>
                                <td>{e.firstname}</td>
                                <td>{e.lastname}</td>
                                <td>{e.age}</td>
                            </tr>
                })
            }
        </table>
            )
        }
    </div>
  )
}
