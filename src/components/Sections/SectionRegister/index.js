import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";

import api from '../../../services/api';
import { useHistory, useParams } from "react-router-dom";


import Aos from "aos";
import "aos/dist/aos.css";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const crmExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const optionsUF = [

    { id: 'AC', title: 'Acre' },
    { id: 'AL', title: 'Alagoas' },
    { id: 'AP', title: 'Amapa' },
    { id: 'AM', title: 'Amazonas' },
    { id: 'BA', title: 'Bahia' },
    { id: 'CE', title: 'Ceará' },
    { id: 'DF', title: 'Distrito Federal' },
    { id: 'ES', title: 'Espirito Santo' },
    { id: 'GO', title: 'Goiás' },
    { id: 'MA', title: 'Maranhão' },
    { id: 'MT', title: 'Mato Grosso' },
    { id: 'MS', title: 'Mato Grosso do Sul' },
    { id: 'MG', title: 'Minas Gerais' },
    { id: 'PA', title: 'Pará' },
    { id: 'PB', title: 'Paraíba' },
    { id: 'PR', title: 'Paraná' },
    { id: 'PE', title: 'Pernambuco' },
    { id: 'PI', title: 'Piauí' },
    { id: 'RJ', title: 'Rio de Janeiro' },
    { id: 'RN', title: 'Rio Grande do Norte' },
    { id: 'RS', title: 'Rio Grande do Sul' },
    { id: 'RO', title: 'Rondônia' },
    { id: 'RR', title: 'Roraima' },
    { id: 'SC', title: 'Santa Catarina' },
    { id: 'SP', title: 'São Paulo' },
    { id: 'SE', title: 'Sergipe' },
    { id: 'TO', title: 'Tocantins' },
];

const optionsUF_CRM = [

    { id: 'AC', title: 'Acre' },
    { id: 'AL', title: 'Alagoas' },
    { id: 'AP', title: 'Amapa' },
    { id: 'AM', title: 'Amazonas' },
    { id: 'BA', title: 'Bahia' },
    { id: 'CE', title: 'Ceará' },
    { id: 'DF', title: 'Distrito Federal' },
    { id: 'ES', title: 'Espirito Santo' },
    { id: 'GO', title: 'Goiás' },
    { id: 'MA', title: 'Maranhão' },
    { id: 'MT', title: 'Mato Grosso' },
    { id: 'MS', title: 'Mato Grosso do Sul' },
    { id: 'MG', title: 'Minas Gerais' },
    { id: 'PA', title: 'Pará' },
    { id: 'PB', title: 'Paraíba' },
    { id: 'PR', title: 'Paraná' },
    { id: 'PE', title: 'Pernambuco' },
    { id: 'PI', title: 'Piauí' },
    { id: 'RJ', title: 'Rio de Janeiro' },
    { id: 'RN', title: 'Rio Grande do Norte' },
    { id: 'RS', title: 'Rio Grande do Sul' },
    { id: 'RO', title: 'Rondônia' },
    { id: 'RR', title: 'Roraima' },
    { id: 'SC', title: 'Santa Catarina' },
    { id: 'SP', title: 'São Paulo' },
    { id: 'SE', title: 'Sergipe' },
    { id: 'TO', title: 'Tocantins' },
];

const RegisterSchema = Yup.object().shape({

    name: Yup.string()
        .min(5, "O nome deve ter no mínimo 3 caracteres")
        .max(20, "o nome deve ter 20 caracteres no máximo")
        .required("Nome é obrigatório "),

    email: Yup.string()
        .lowercase('Email deve ser em letras minusculas')
        .email("Formato de endereço de e-mail inválido")
        .required("E-mail é obrigatório"),

    // specialty: Yup.string()
    //     .email("Formato de endereço de e-mail inválido")
    //     .required("E-mail é obrigatório"),

    // password: Yup.string()
    //      .required("Senha é obrigatório")
    //      .matches( /^(?=.*[A-Za-z])(?=.*\d)[\w\W]{8,100}$/,"Digite uma senha forte. Ex: Nbb_885522")
    //      .min(8)
    //      .matches(RegExp("(.*[a-z].*)"), "Lowercase")
    //      .matches(RegExp("(.*[A-Z].*)"), "Uppercase")
    //      .matches(RegExp("(.*\\d.*)"), "Number"),

    fields: Yup.object().shape({
        contact: Yup.string()
            .matches(phoneRegExp, "Número de telefone não é válido")
            .required("Número de contato obrigatório"),
        crm: Yup.string()
            .matches(crmExp, "Número do CRM inválido")
            .required("CRM obrigatório"),

        state: Yup.string()
            .oneOf(optionsUF.map(opt => opt.id), "Seleção inválida")
            .required("Estado Obrigatório"),

        city: Yup.string().required("Cidade é obrigatório"),

        state_crm: Yup.string()
            .oneOf(optionsUF_CRM.map(opt => opt.id), "Seleção inválida")
            .required("CRM do Estado é Obrigatório"),


        acceptTerms: Yup.bool().oneOf([true], 'Precisa assinar os termos')
    }),

});



const SectionRegister = ({ password }) => {
    const history = useHistory();
    let { eventKey } = useParams();
    const [isSubmitting, SetisSubmitting] = useState(false);

    const [ initialValues, SetInitialValues ] = useState({
        name: "",
        email: "",
        fields: {
            state: "",
            city: "",
            state_crm: "",
            crm: "",
            specialty: "",
            contact: "",
            acceptTerms: false
        },
        eventKey: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setsuccessMessage] = useState(null);

    const handleSubmit = async (values, actions) => {
  
        setsuccessMessage('');
        setErrorMessage('');

        if (isSubmitting) return;
            SetisSubmitting(true)
        try {
            console.log('handleSubmit', values);
            
            await api.post('participant', values)

            // alert('Dados Cadastrado com Sucesso!');
            setsuccessMessage('Dados Cadastrado com Sucesso!');

            setTimeout(function () {
                setsuccessMessage('');
            }, 3000);
            

            actions.resetForm();
            history.push(`/${eventKey}`);
            window.open(`/${eventKey}/signin`, '_blank');

        } catch (error) {
            console.log('handleSubmit', {error,values});
            
            setErrorMessage(error?.response?.data?.message || "Nao foi possivel realizar o cadastro, tente novamente.");
            setTimeout(function () {
                setErrorMessage('');
            }, 3000);

        } finally {
            SetisSubmitting(false);
        }

        actions.setSubmitting(false);

    };

    useEffect(()=>{

        SetInitialValues(prev => ({...prev, password, eventKey}));


    },[password, eventKey]);

    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <>
            {/* section begin */}

            <section id="section-register" className="text-light">
                <div className="wm wm-border dark" data-aos="fade-down">inscrição</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <h1 data-aos="fade-up">Inscreva-se</h1>
                            <div className="separator"><span><i className="fa fa-square" /></span></div>
                            <div className="spacer-single" />
                        </div>
                        <div className="col-md-8 offset-md-2"  data-aos="fade-up">
                            <Formik
                                name="contactForm" id="contact_form"
                                initialValues={initialValues}
                                enableReinitialize
                                validationSchema={RegisterSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                                    <Form>
                                        <div className="row">
                                            <div className="col-md-6 mb-0">

                                            <div className="">
                                                    <input
                                                        type="hidden"
                                                        name="eventKey"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.eventKey}
                                                    />
                                                     <input
                                                        type="hidden"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                    />

                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        placeholder="Nome Completo*"
                                                        className={`form-control ${touched.name && errors.name ? "is-invalid" : ""
                                                            }`}
                                                    />

                                                    <ErrorMessage
                                                        component="div"
                                                        name="name"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email*"
                                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="fields[specialty]"
                                                        placeholder="Especialidade"
                                                        className={`form-control ${touched?.fields?.specialty && errors?.fields?.specialty ? "is-invalid" : ""
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="fields[specialty]"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="fields[contact]"
                                                        placeholder="Telefone com DDD *"
                                                        className={`form-control ${touched?.fields?.contact && errors?.fields?.contact ? "is-invalid" : ""
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="fields[contact]"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                            </div>

                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="fields[city]"
                                                        placeholder="Cidade *"
                                                        className={`form-control ${touched?.fields?.city && errors?.fields?.city ? "is-invalid" : ""
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="fields[city]"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        name="fields[state]"
                                                        component="select"
                                                        placeholder="Estado *"
                                                        className={` form-control ${touched?.fields?.state && errors?.fields?.state ? "is-invalid" : ""
                                                            }`}
                                                    >
                                                        <option value="">Selecione seu Estado*</option>
                                                        {optionsUF.map((option) => (
                                                            <option value={option.id} key={option.id}>
                                                                {option.title}
                                                            </option>
                                                        ))}
                                                    </Field>

                                                    <ErrorMessage
                                                        component="div"
                                                        name="fields[state]"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="text"
                                                        name="fields[crm]"
                                                        placeholder="CRM *"
                                                        className={`form-control ${touched?.fields?.crm && errors?.fields?.crm ? "is-invalid" : ""
                                                            }`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="fields[crm]"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        name="fields[state_crm]"
                                                        component="select"
                                                        placeholder="UF Estado *"
                                                        className={` form-control ${touched?.fields?.state_crm && errors?.fields?.state_crm ? "is-invalid" : ""
                                                            }`}
                                                    >
                                                        <option value="">UF CRM *</option>
                                                        {optionsUF_CRM.map((option) => (
                                                            <option value={option.id} key={option.id}>
                                                                {option.title}
                                                            </option>
                                                        ))}
                                                    </Field>

                                                    <ErrorMessage
                                                        component="div"
                                                        name="fields[state_crm]"
                                                        className="invalid-feedback"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group form-check">
                                            <Field
                                                type="checkbox"
                                                name="fields[acceptTerms]"
                                                id="acceptTerms"
                                                className={'form-check-input ' + (
                                                    errors?.fields?.acceptTerms && touched?.fields?.acceptTerms ? ' is-invalid' : ''
                                                )}
                                            />

                                            <label htmlFor="acceptTerms" className="form-check-label">
                                                Declaro que as informações acima prestadas são verdadeiras e assumo a inteira responsabilidade pelas mesmas, ciente das penalidades cabíveis da lei.
                                                </label>
                                            <ErrorMessage name="fields[acceptTerms]" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button  data-aos="fade-up"
                                                    type="submit"
                                                    className="btn btn-line"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Cadastrando.." : "Inscrever-se"}
                                                </button>

                                            </div>
                                            {errorMessage && (
                                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                    {errorMessage}
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            )}

                                            {successMessage && (
                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                    {successMessage}
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </section>
            {/* section close */}
        </>
    );
}

export default SectionRegister;