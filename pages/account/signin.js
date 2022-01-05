import Router from 'next/router';
import React, { useState } from 'react';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import Layout from '../../components/Layout';
import db from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from '../../StateProvider';

const Signin = () => {
    const [error, setError] = useState("");
    const [state, dispatch] = useStateValue();
    
    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        db.collection("users").onSnapshot(snapshot => snapshot.docs.map(doc => {
            let email2 = doc.data().email;
            let password2 = doc.data().password;
            if((email === email2) && (password === password2)) {
                dispatch({
                    type: actionTypes.LOGGED_IN,
                    user: true
                })
                setError("");
                Router.push('/menu');
            } else {
                setError("Wrong username/password!");
            }
        }))
    }

    return (
        <Layout>
            <div className="max-w-xl px-4 py-8 m-auto text-center">
                <h2 className="mb-12 text-3xl font-bold">Sign in or create an account</h2>
                <Form handleForm={handleForm}>
                    <FormInput type="email" placeholder="Email address" />
                    <FormInput type="password" placeholder="Password" />
                    <FormInput type="submit" value="Sign in" className="w-auto font-bold text-white bg-green-600 border-green-600 cursor-pointer rounded-3xl" />
                </Form>
                <div className="py-6 font-semibold text-center text-red-600">{error}</div>
            </div>
        </Layout>
    )
}

export default Signin
