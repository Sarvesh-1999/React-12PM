import React, { useRef } from 'react'

const UnControlledForms = () => {

    let emailRef  = useRef() // {current : ud}
    let passwordRef = useRef() // {current : ud}

    function handleSubmit(e){
        e.preventDefault()
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        let user = {
            email : emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(user);
        // clearing input fields
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }

  return (
    <div>
        <h1 className='font-bold text-center m-5'>UnControlledForms</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={emailRef} placeholder='Email'  className='border'/>
            <br />
            <input type="text" ref={passwordRef} placeholder='Password' className='border'/>
            <br />
            <button className='bg-amber-300 px-2 rounded-full'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default UnControlledForms