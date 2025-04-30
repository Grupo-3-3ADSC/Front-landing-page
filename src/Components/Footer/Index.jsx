import './style.css'
import ods from '../../assets/ods.png'


function Footer() {
    return (
        <footer>
            <div>
                <img src={ods} alt="" />
                <h3><strong>Objetivo 8</strong> <br /> Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.</h3>
            </div>
            <ul>
                <li>Contato:</li>
                <li>(10)10101-10101</li>
                <li>grupo3@sptech.school</li>
                <li>@Grupo3_Sptech</li>
            </ul>
        </footer>
    )
}

export default Footer;