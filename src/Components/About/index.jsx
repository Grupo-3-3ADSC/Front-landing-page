import './style.css'
import about from '../../assets/about.png'

function About() {

    return (
        <section className='about'>

            <img src={about}></img>

            <div>
                <h1>SOBRE NÓS</h1> <br />
                <p>
                    Somos um grupo de alunos do terceiro semestre da SPTECH, dedicados ao desenvolvimento de uma solução inovadora: um gerenciador de estoque e processos. Nosso objetivo é criar uma ferramenta prática e eficiente para otimizar o controle de produtos e melhorar a logística nas empresas.
                </p>
            </div>
        </section>
    )
}

export default About
