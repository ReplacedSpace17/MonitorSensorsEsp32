

import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig';
import './css/widgets.css';

import ProgressCircle from './ProgressCircle';

import tempIcon from './images/termometro.png'
import distanceIcon from './images/espaciado-de-texto.png'
import phIcon from './images/gotas.png'

const DashIndicators = () => {
    const [value, setValue] = useState('');
    const [valuePh, setValuePh] = useState('');
    const [valueDistance, setValueDistance] = useState('');
    const [valueTemp, setValueTemp] = useState('');

    useEffect(() => {
        const databaseRefTemp = firebase.database().ref('/Sensores/ds18x20');
        const databaseRefPh = firebase.database().ref('/Sensores/ph4502c');
        const databaseRefDistance = firebase.database().ref('/Sensores/hcsr04');

        // temperatura
        const handleValueChangeTemp = snapshot => {
            // Actualizar el estado con el valor recibido de Firebase
            setValueTemp(snapshot.val());
        };
        // ph
        const handleValueChangePH = snapshot => {
            // Actualizar el estado con el valor recibido de Firebase
            setValuePh(snapshot.val());
        };
        // distancia
        const handleValueChangeDistance = snapshot => {
            // Actualizar el estado con el valor recibido de Firebase
            setValueDistance(snapshot.val());
        };

        // Escuchar cambios en el valor de Firebase
        databaseRefTemp.on('value', handleValueChangeTemp);
        databaseRefPh.on('value', handleValueChangePH);
        databaseRefDistance.on('value', handleValueChangeDistance);


        // Limpiar la suscripción cuando el componente se desmonte
        return () => {
            databaseRefTemp.off('value', handleValueChangeTemp);
            databaseRefPh.off('value', handleValueChangePH);
            databaseRefDistance.off('value', handleValueChangeDistance);
        };
    }, []);


    return (
        <div className='cont-Widgets'>
            <div className='cont-Targets-all'>
                <h1 className='titleWid'>Meters</h1>
                <div className='containerTarg'>
                    <div className='contMeters'>
                        <h1 className='titleMeters'>Temperatura</h1>
                        <ProgressCircle value={valueTemp} />
                    </div>
                    <div className='contMeters'>
                        <h1 className='titleMeters'>Distancia</h1>
                        <ProgressCircle value={valueDistance} />
                    </div>
                    <div className='contMeters'>
                        <h1 className='titleMeters'>pH Indicator</h1>
                        <ProgressCircle value={valuePh} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashIndicators;