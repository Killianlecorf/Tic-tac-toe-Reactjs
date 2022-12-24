import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlayGame from './PlayGame';

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
        return input
    }

    const handleChangePassword = (event) => {
        setInputPassword(event.target.value) ;
        return inputPassword
    }

    const displayValidation = () => {
        let userInputValue = input ;
        let passwordInputValue =  inputPassword ;

        if ( passwordInputValue === '4242' && userInputValue !== "") {
            return  <NavLink to='/game'><button className='submitButton' >Submit</button> </NavLink>
        }
        return <NavLink to='/'><button className='submitButton' >Submit</button></NavLink>
    }

    const verificationErrorSubmit = () => {
        let userInputValue = input ;
        let passwordInputValue =  inputPassword ;

        if (userInputValue === "" ) {
            return <div className="error-area"><div className="error-content"><p>Ajouter un pseudo</p></div></div>
        }

        if (passwordInputValue === "") {
            return <div className="error-area"><div className="error-content"><p>Ajouter un mot de passe </p></div></div>
        }


    }


    return (
        <div className='form-area' >
            <div className="form-content">
                <div className="form-input">
                    <label htmlFor="">pseudo</label>
                    <input className='inputUserValue' value={ input } type="text" onChange={ handleChangeUsername } />
                    <label htmlFor="">Mot de passe</label>
                    <input className='inputPasswordValue' value={ inputPassword } type="password" onChange={ handleChangePassword } />
                </div>
                    { verificationErrorSubmit() }
                <div className="submit-content">
                { displayValidation() }
                </div>
            </div>
        </div>
    );
};

export default Formulaire;