import styles from "./styles.module.css"
import vassoura1 from "../../assets/images/Vassoura1.png"
import vassoura2 from "../../assets/images/Vassoura2.png"
import vassoura3 from "../../assets/images/Vassoura3.png"
import vassoura4 from "../../assets/images/Vassoura4.png"
import hagrid from "../../assets/images/HagridPS1.png"
import ShopMusic from "../../components/BackgroundMusic/ShopMusic.jsx"



const Quidditch = () => {

    return (
        <div className={styles.principal}>
            <ShopMusic />
            <div className={styles.paginaEsquerda}>
                <div className={styles.vassoura}>
                    <img src={vassoura1} className={styles.imagem1} alt="vassoura" />
                        <button className={styles.botao}> <a href="https://www.mercadolivre.com.br/vassoura-cerdas-naturais-extramacias-varre-suave-condor/p/MLB16195475#reco_item_pos=0&reco_backend=univb-pdp-buybox&reco_backend_type=low_level&reco_client=pdp-v2p&reco_id=23a67d5f-a1f8-45dd-8219-4023a2978981&reco_backend_model=univb" target="_blank">COMPRAR</a></button>
                </div>
                <div className={styles.vassoura}>
                    <img src={vassoura2} className={styles.imagem}alt="vassoura" />
                        <button className={styles.botao}> <a href="https://youtu.be/_JtWAjOlaT0?si=roTpzvXFNievdtKi" target="_blank">COMPRAR</a></button>
                </div>
            </div>

            <div className={styles.paginaMeio}>
                <a href="https://youtu.be/8aF54VgRna0?si=ghjbzjQ3LfhUSqG9" target="_blank"> <img className={styles.hagrid} src={hagrid} alt="hagrid da shoppe" /> </a>
                <div className={styles.pergaminho}>
                    <span>
                        Fala meu cria!
                    </span>
                    <span>
                        Oque gostaria de comprar hoje?
                    </span>
                </div>
            </div>

            <div className={styles.paginaDireita}>
            <div className={styles.vassoura}>
                    <img src={vassoura3} className={styles.imagem} alt="vassoura" />
                        <button className={styles.botao}> <a href="https://www.bing.com/ck/a?!&&p=88a3be6674697af6JmltdHM9MTcxNzk3NzYwMCZpZ3VpZD0wOTdhZDZhYS0wYmZkLTYzMWEtMDExMC1jMjMxMGFlOTYyYTUmaW5zaWQ9NTIyMQ&ptn=3&ver=2&hsh=3&fclid=097ad6aa-0bfd-631a-0110-c2310ae962a5&psq=prefeitura+de+vassouras&u=a1aHR0cHM6Ly93d3cudmFzc291cmFzLnJqLmdvdi5ici8&ntb=1" target="_blank">COMPRAR</a></button>
                </div>
                <div className={styles.vassoura}>
                    <img src={vassoura4} className={styles.imagem} alt="vassoura" />
                        <button className={styles.botao}> <a href="https://www.mercadolivre.com.br/vassoura-caipira-de-palha-natural-30-cm/p/MLB21478853?item_id=MLB4642290534&from=gshop&matt_tool=78665334&matt_word=&matt_source=bing&matt_campaign=MLB_ML_BING_AO_CPG-ALL-ALL_X_PLA_ALLB_TXS_ALL&matt_campaign_id=382858296&matt_ad_group=CPG&matt_match_type=e&matt_network=o&matt_device=c&matt_keyword=default&msclkid=68c95a4a0a7e1cdbe89d3c2dd135896b&utm_source=bing&utm_medium=cpc&utm_campaign=MLB_ML_BING_AO_CPG-ALL-ALL_X_PLA_ALLB_TXS_ALL&utm_term=4581390094370910&utm_content=CPG" target="_blank">COMPRAR</a></button>
                </div>
            </div>
        </div>
    )
  };
  export default Quidditch;