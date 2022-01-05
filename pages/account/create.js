import Router from 'next/router'
import React from 'react'
import Form from '../../components/Form'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import Layout from '../../components/Layout'
import db from "../../firebase"

const Create = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const fname = e.target[0].value;
        const lname = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
        db.collection("users").add(
            {
                fname: fname,
                lname: lname,
                email: email,
                password: password
            }
        );
        Router.push('/account/signin');
    }
    return (
        <Layout>
            <div className="max-w-xl px-4 py-8 m-auto text-center">
                <h2 className="mb-12 text-3xl font-bold">Create an account</h2>
                <h4 className="mb-5 font-bold tracking-widest text-gray-600">STARBUCKS® REWARDS</h4>
                <p className="mb-10 text-gray-600">Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.</p>
                <Form handleForm={handleForm}>
                    <FormLabel text="Personal Information" />
                    <FormInput type="text" placeholder="First name" />
                    <FormInput type="text" placeholder="Last name" />
                    <FormLabel text="Account Security" />
                    <FormInput type="email" placeholder="Email address" />
                    <FormInput type="password" placeholder="Password" />
                    <FormInput type="submit" value="Create account" className="w-auto font-bold text-white bg-green-600 border-green-600 cursor-pointer rounded-3xl" />
                </Form>
            </div>
        </Layout>
    )
}

export default Create
