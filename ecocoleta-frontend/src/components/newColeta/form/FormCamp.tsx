
import React, { useEffect } from 'react';

import '../../../styles/newColeta/formCamp.css';

type DataKeys = keyof {
    massa: string,
    volume: string,
    cliente: string,
    material: string,
};

interface ColetaFace {
    massa: string,  
    volume: string, 
    cliente: string,
    material: string,
}
interface FormCampProps {
    type: string,
    name: DataKeys,
    coleta: ColetaFace,
    editOrCreate: string,
    coletaEmEdicao: ColetaFace,
    setColeta: (_: ColetaFace) => void,
}

function FormCamp(props: FormCampProps) {

    const loadData = async () => {
        if(props.editOrCreate === 'edit'){
            props.setColeta(props.coletaEmEdicao);
        }
    }
    
    // eslint-disable-next-line
    useEffect(() => { loadData() }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        props.setColeta({ ...props.coleta, [name]: value });
    };

    function capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className='campForm'>
            <label htmlFor={props.name}>
                {capitalizeFirstLetter(props.name)} {props.name === 'massa' ?
                    '(kg)' : props.name === 'volume' ? '(L)' : ''
                } 
            </label>
            <input
                type='text'
                name={props.name}
                onChange={handleChange}
                value={props.coleta[props.name]}
                placeholder={capitalizeFirstLetter(props.name)}
            />
        </div>
    )
}

export default FormCamp;
