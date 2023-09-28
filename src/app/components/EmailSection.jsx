"use client";
import Link from 'next/link';
import React, {useState} from 'react'


const EmailSection = () => {
    const [email, setEmail] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };
        
        const response = await fetch(endpoint, options);
        const resData = await response.json()

        if(response.status === 200){
            console.log("enviado")
            setEmail(true)
        }
        
    }
        
  return (

    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 -left-4 transfrm -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect and upload your idea</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
            Let's connect and learn more about our products and services.
            </p>
        </div>
        <div className="">
            <div className="flex justify-around bg-slate-800 rounded-full p-2">
                <a href='https://github.com/ForgottenTrainer' className="mx-5">
                    <img src="git.svg" alt="git" className='hover:bg-slate-200 bg-white rounded-full hover:ease-in-out' />
                </a>
                <a href='https://www.instagram.com/forgottent312/' className="mx-5">
                    <img src="insta.svg" alt="git" className='bg-pink-500 hover:bg-pink-300 rounded-md hover:ease-in-out' />
                </a>
                <a href='https://www.linkedin.com/in/rogelio-gonz%C3%A1lez-p%C3%A9rez-891493212/' className="mx-5">
                    <img src="link.svg" alt="git" className='bg-blue-500 hover:bg-blue-300 rounded-md hover:ease-in-out' />
                </a>
            </div>
        </div>
    </section>

  )
}

export default EmailSection
