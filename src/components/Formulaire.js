import React, { useEffect, useState } from 'react';

const Formulaire = () => {

    useEffect(() => {
        const elFetchor = async () => {
            const responses = await fetch('http://vps-a47222b1.vps.ovh.net:5067/Authentication?Pseudo=chipadipadoum&Password=4242', { 
                method: 'POST'
            })
            const authentification = await responses.json();
            return authentification
        }
        elFetchor()
    },[]);

    const [ input , setInput ] = useState("")
    const [ inputPassword , setInputPassword ] = useState("")

    const handleChangeUsername = (event) => {
        setInput(event.target.value) ;
    }

    const handleChangePassword = (event) => {
        setInputPassword(event.target.value) ;
    }

    console.log();

    return (
        <div>
            <label htmlFor="">pseudo</label>
            <input value={ input } type="text" onChange={ handleChangeUsername } />
            <label htmlFor="">Mot de passe</label>
            <input value={ inputPassword } type="text" onChange={ handleChangePassword } />
            <p>username : { input }</p>
            <p>password : { inputPassword }</p>
        </div>
    );
};

export default Formulaire;