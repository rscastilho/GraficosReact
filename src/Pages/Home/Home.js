import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { users } from '../../Data/data'
import Bars from '../Graphics/Bars/Bars';
import LineGraph from '../Graphics/Line/LineGraph';
import Pie from '../Graphics/Pie/PieGraph';
import styles from './Home.module.css'

const Home = () => {
    const [userData, setUserData] = useState([]);

    const fetchData = useCallback(() => {
        setUserData(users);
        console.log('carregando', userData)
    }, [userData]);



    const [dados, setDados] = useState({
        labels: users.map((nome) => nome.name),
        datasets: [{
            label: "Valores",
            data: users.map((valor) => valor.amount),
            backgroundColor: [
                'red',
                'yellow',
                'green',
                'orange',
                '#ccc',
                '#3c3c3c',
                'pink',
                'brown',
                'blue',
                '#f5c355'
            ],
            borderColor: ['black'],
            borderWidth: .4,
            // borderRadius: 15
            // hoverOffset: 5,
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'green'
                        }
                    }
                }
            }
        }]
    });



    useEffect(() => {
        console.log(dados)
        fetchData();
    }, [dados, fetchData])


    return (
        <div className={`${styles.grafico}`}>
            {dados &&
                <>
                    < Bars
                        chartData={dados}
                    />
                    <hr />
                    <Pie chartData={dados} />
                    <hr/>
                    <LineGraph chartData={dados}/>

                </>

            }
            {/* {JSON.stringify(userData, null)} */}
        </div>
    )
}

export default Home