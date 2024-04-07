import {useFormik} from 'formik'
import * as Yup from 'yup' 
import axios from 'axios'

const Form = () => {
    const studentForm = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            password: '',
            age: '',
            gender: '',
            username: '',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('firstname is required').min(2,'too short'),
            lastname: Yup.string().required('lastname is required'),
            password: Yup.string().required('must enter password').matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,20}$/, 'need uniq password'),
            age: Yup.string().required('age is required').test({
                name:'validateAge',
                message:'not eligible',
                test:(value, a)=>{
                    console.log(value)
                    console.log(a)
                    if(a.parent.gender == 'male' && value<21) {
                        return false
                    }
                    if(a.parent.gender == 'female' && value<18){
                        return false
                    }
                    return true
                }
            }),

            username : Yup.string().required('user name was must enter').test({
                name: 'user name validation',
                message: 'user already exist',
                test: async(value, a)=> {
                    console.log(a)
                    var res = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`)
                    console.log(res)
                    if(res.data.length !=0){
                        return a.createError({message: 'this user is already exist'})
                    }else{
                        return true
                    }
                }
            })
        }),
        onSubmit: (values,a)=> {
            console.log(values)
            console.log(studentForm)
        }
    })
    
    return(
        <div>
            <h1>Form validation</h1>
            <div>
                <form onSubmit={studentForm.handleSubmit}>
                    <input type="text" name="username" placeholder="user name" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                    <div>
                        {studentForm.touched.username && studentForm.errors.username}
                    </div>
                    <br/>
                    <input type="text" name="firstname" placeholder="first name" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                    <div>
                        {studentForm.touched.firstname && studentForm.errors.firstname}
                    </div>
                    <br/>
                    <input type="text" name="lastname" placeholder="last name" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                    <div>
                        {studentForm.touched.lastname && studentForm.errors.lastname}
                    </div>
                    <br/>
                    
                    <input type="radio" name="gender"  value='male' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>male
                    <input type="radio" name="gender"  value='female' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>female
                    <br/>
                    <input type="text" name="age" placeholder="age" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                    <div>
                        {studentForm.touched.age && studentForm.errors.age}
                    </div>
                    <br/>
                    <input type="text" name="password" placeholder="password" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
                    <div>
                        {studentForm.touched.password && studentForm.errors.password}
                    </div>
                    <br/>
                    <button>add Student</button>
                </form>
            </div>
        </div>
    )
}

export default Form