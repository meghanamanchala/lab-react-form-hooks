// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Form.css'
import { useForm } from "react-hook-form"
function Form() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful,isSubmitting } } = useForm();
    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve,800));
        console.log(data);
    }
    return (
        <div className='form'>
            <form  className="form-sheet" onSubmit={handleSubmit(onSubmit)}>

                {isSubmitSuccessful ? <h2 className='output'>Registaration successfull</h2> : " "}
                <div>
                    <input type='text' placeholder='First name'
                        {...register("firstName", {
                            required: "Please enter your first name",
                            pattern: {
                                value: /^[a-zA-Z]+$/,

                                message: "Invalid first name"
                            }
                        })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <input type='text' placeholder='Last name'
                        {...register("lastName", {
                            required: "Please enter your last name",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Invalid last name"
                            }
                        })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <input type='email' placeholder='Email Id'{...register("email", {
                        required: "Please enter your email id",
                        validate: (value) => {
                            if (!value.includes("@")) {
                                return "Invalid Email"
                            } return true;
                        },
                        pattern:{
                            value:/^\S+@\S+\.\S+$/,
                            message: "Invalid email"
                        }
                    })} />
{errors.email &&<p>{errors.email.message}</p> }
                </div>
                <div>
                    <input type='password' placeholder='Password'
                        {...register("pass", {
                            required: "Please enter your password",
                            minLength:{value:5,message:"Password must be more than 4 characters"},maxLength:{value:20,message:"Password cannot  be more than 20 characters"},
                            pattern:{
                                value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                                message: "Invalid password"
                            }
                        })} />
 {errors.pass &&<p>{errors.pass.message}</p> }

                </div>
                <button type='submit'  disabled={isSubmitting}>{isSubmitting ? 'Loading': 'Register'}</button>

            </form>
        </div>
    )
}

export default Form