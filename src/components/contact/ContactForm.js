import React from "react";
import useForm from 'react-hook-form';

const ContactForm = () => {
    const {register, handleSubmit, errors} = useForm({
        mode:"onBlur"
    });
    const onSubmit = data => console.log(data);
    return (
        <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                <div className="uk-width-1-1@m">
                    <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                        <h3 className="uk-card-title uk-text-center">CONTACT</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="uk-grid-small" uk-grid="true">
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <input name="firstName" className="uk-input" placeholder="firstname..." ref={register({required: true, maxLength: 20})} />
                                    {errors.firstName && <span className="uk-badge" style={{backgroundColor:'pink'}}>First name is required</span>}
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <input name="lastName" className="uk-input" placeholder="lastname..." ref={register({required:true, pattern: /^[A-Za-z]+$/i})} />
                                    {errors.lastName && <span className="uk-badge" style={{backgroundColor:'pink'}}>Last name is required</span>}
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <input name="mail" className="uk-input" placeholder="email..." ref={register({pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} />
                                    {errors.mail && <span className="uk-badge" style={{backgroundColor:'pink'}}>Your have to write a correct email address</span>}
                                </div>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-inline uk-width-1-1">
                                    <input name="age" type="number" className="uk-input" placeholder="age..." ref={register({min :18})} />
                                    {errors.age && <span className="uk-badge" style={{backgroundColor:'pink'}}>You should have at least 18</span>}
                                </div>
                            </div>
                            <div className="uk-margin">
                                <input type="submit" className="uk-button uk-button-primary uk-button-large uk-width-1-1"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;