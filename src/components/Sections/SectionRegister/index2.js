import React from "react";

import { Formik, Form } from "formik";
import CustomField from '../SectionRegister/CustomField';
import * as Yup from "yup";



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

const schema = Yup.object().shape({

    name: Yup.string()
        .min(5, "O nome deve ter no mínimo 3 caracteres")
        .max(20, "o nome deve ter 20 caracteres no máximo")
        .required("Nome é obrigatório "),

    email: Yup.string()
        .lowercase('Email deve ser em letras minusculas')
        .email("Formato de endereço de e-mail inválido")
        .required("E-mail é obrigatório"),

    fields: Yup.object().shape({

         // specialty: Yup.string().required("Campo é obrigatório"),

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

export default function SectionRegister({theme}){
    return (
        <>
            {/* section begin */}

            <section id="section-register" className={theme ? "dark-mode" : "light-mode"}>
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
                                validationSchema={schema}
                                initialValues={{
                                    firstname: '',
                                    age: ''
                                }}
                            >
                                {({ handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                                    <Form>
                                        <div className="col-md-6 mb-0">
                                            <div className="form-group">
                                                <CustomField 
                                                    name="firstname" 
                                                    type="text" 
                                                    placeholder="Primeiro Nome"
                                                    className={`form-control ${touched.firstname && errors.firstname ? "is-invalid" : ""
                                                                }`}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">              
                                            <div className="form-group">
                                                <CustomField 
                                                    name="age" 
                                                    type="number" 
                                                    placeholder="Idade"
                                                    className={`form-control ${touched.age && errors.age ? "is-invalid" : ""
                                                }`}
                                                />
                                            </div>
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