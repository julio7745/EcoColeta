import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';

import '../../styles/relatorio/relatorio.css';

interface ColetaFace {
    _id: string,
    massa: string,
    volume: string,
    cliente: string,
    material: string,
}
interface coletasFace {
    coletas: ColetaFace[],
}
interface relatorioProps {
    setClassNameOfLoading: (_: string) => void,
}

function Relatorio(props: relatorioProps) {
    const [totalColetas, setTotalColetas] = useState<number>(0);
    const [totalVolume, setTotalVolume] = useState<number>(0);
    const [totalPeso, setTotalPeso] = useState<number>(0);
    const [coletasPorCliente, setColetasPorCliente] = useState<{ [key: string]: number }>({});
    const [coletasPorMaterial, setColetasPorMaterial] = useState<{ [key: string]: number }>({});

    const fetchData = async () => {
        props.setClassNameOfLoading('loading true');

        try {
            const response = await axios.get('http://192.168.18.154:3024/getColetas');
            const coletasData = jwtDecode(response.data.token) as coletasFace;

            let totalColetas = coletasData.coletas.length;
            let totalVolume = 0;
            let totalPeso = 0;
            let coletasPorCliente: { [key: string]: number } = {};
            let coletasPorMaterial: { [key: string]: number } = {};

            coletasData.coletas.forEach((coleta) => {
                coletasPorCliente[coleta.cliente] = (coletasPorCliente[coleta.cliente] || 0) + 1;
                coletasPorMaterial[coleta.material] = (coletasPorMaterial[coleta.material] || 0) + 1;
                totalVolume += parseFloat(coleta.volume);
                totalPeso += parseFloat(coleta.massa);
            });

        setTotalColetas(totalColetas);
        setTotalVolume(totalVolume);
        setTotalPeso(totalPeso);
        setColetasPorCliente(coletasPorCliente);
        setColetasPorMaterial(coletasPorMaterial);

    } catch (error) {
        console.error('Erro ao buscar coletas:', error);
    }

    props.setClassNameOfLoading('loading');
  }

  // eslint-disable-next-line
  useEffect(() => { fetchData() }, []);

  return (
    <div className='relatorio'>
        <div className="containerTopic">
            <h1>Relatório geral:</h1>
            <div><h2>Total de Coletas: </h2><p>{totalColetas}</p></div>
            <div><h2>Volume Total: </h2><p>{totalVolume}</p></div>
            <div><h2>Peso Total: </h2><p>{totalPeso}</p></div>
        </div>
        <div className="containerTopic">
            <h1>Coletas por cliente:</h1>
            {
                Object.keys(coletasPorCliente).map((cliente) => (
                    <div><h2 key={cliente}> {cliente}: </h2> <p>{coletasPorCliente[cliente]} </p></div>
                ))
            }
        </div>
        <div className="containerTopic">
            <h1>Coletas por material:</h1>
            {
                Object.keys(coletasPorMaterial).map((material) => (
                    <div><h2 key={material}> {material}: </h2> <p>{coletasPorMaterial[material]} </p></div>
                ))
            }
        </div>
    </div>
  );
}

export default Relatorio;
