
import React from 'react';

import '../../../styles/newColeta/formCamp.css';

type DataKeys = keyof {
    cliente: string,
    massa: string,
    volume: string,
    material: string,
};

interface FormCampProps {
    dados: {
        cliente: string,
        massa: string,  
        volume: string, 
        material: string,
    },
    setDados: Function,
    name: DataKeys,
    type: string
}

function FormCamp(props: FormCampProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        props.setDados({ ...props.dados, [name]: value });
    };

    function capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className='campForm'>
            <label htmlFor={props.name}>
                {capitalizeFirstLetter(props.name)} {props.name === 'massa'? '(kg)' : props.name === 'volume' ? '(L)' : ''}: 
            </label>
            <input
                type='text'
                name={props.name}
                placeholder={capitalizeFirstLetter(props.name)}
                value={props.dados[props.name]}
                onChange={handleChange}
            />
        </div>
        
    )
}

export default FormCamp;