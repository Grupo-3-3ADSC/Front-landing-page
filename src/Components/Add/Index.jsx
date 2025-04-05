import './style.css'
import CardAdd from '../CardAdd/Index';
import security from '../../assets/security-icon.png'
import arrow from '../../assets/arrow-icon.png'
import dolar from '../../assets/dolar-icon.png'

function Add() {
    return (
        <section className='add'>
            <div className="card-content">
                <CardAdd
                    img={security}
                    title="Segurança"
                    about="Controle de acesso personalizado e backup automático garantem a proteção dos dados no sistema"
                />

                <CardAdd
                    img={arrow}
                    title="Foco"
                    about="Sistema otimiza a gestão de estoque e orçamento, aumentando a produtividade e facilitando decisões estratégicas."
                />

                <CardAdd
                    img={dolar}
                    title="Analise"
                    about="Relatórios gráficos e tabelas fornecem análises detalhadas para otimizar o estoque e a previsão de demanda."
                />

            </div>
        </section>
    )
}

export default Add;