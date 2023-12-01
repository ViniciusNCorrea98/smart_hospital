import '../styles/home.css'
import FotoHeader from '../assets/home/Component\ 1.jpg'
import FotoYoga from '../assets/home/yoga-img-home.png'
import ArrowRight from '../assets/icons/icon-arrow-right.png'

function Home() {
  window.scroll(0, 0)
  return (
    <div className="container-main">
        
      <div className='container-header'>
        <div className='div-img'>
            <img src={FotoHeader} alt='foto header'/>
        </div>
        <div className='div-texts'>
            <div className='txt-header1'><h1>Bem-vindo ao futuro</h1></div>
            <div className='txt-header2'><h1>Conheça a Saúde 2.0</h1></div>
        </div>
      </div>

      <section className='first-section'>
        <div className='maisSobre'>
            <h2>Mais sobre saude</h2>
            <div className='container-first-section'>
              <span>
                A ascensão da Inteligência Artificial (IA) na área da saúde tem transformado significativamente a dinâmica do mercado, influenciando diretamente a rotina de trabalho dos profissionais da saúde. Com avanços em diagnósticos precisos, tratamentos personalizados e eficiência operacional, a IA emerge como uma aliada crucial, promovendo inovações que aceleram processos, melhoram a tomada de decisões clínicas e ampliam a qualidade do atendimento. Este fenômeno impulsiona a otimização dos serviços de saúde, destacando a IA como uma ferramenta indispensável na busca pela excelência e eficácia nos cuidados médicos.
              </span>
              <img src={FotoYoga} alt='Foto de Yoga ilustrativa' />
            </div>
        </div>


        <div className='nav-home'>
          <h3>Saiba mais sobre saúde:</h3>

          <div className='link-nav-home'>
            <span>
              <a href='#' className='txt-link-nav'>
                Redução da mortalidade infantil
              </a>
            </span>
            <div className='dinamic-arrow'>
              <img src={ArrowRight} alt='Seta para direita'/>
            </div>
          </div>

          <div className='link-nav-home'>
            <span>
              <a href='#' className='txt-link-nav'>
                Combate a doenças transmissíveis
              </a>
            </span>
            <div className='dinamic-arrow'>
              <img src={ArrowRight} alt='Seta para direita'/>
            </div>
          </div>

          <div className='link-nav-home'>
            <span>
              <a href='#' className='txt-link-nav'>
                Prevenção e tratamento de doenças não transmissíveis
                </a>
            </span>
            <div className='dinamic-arrow'>
              <img src={ArrowRight} alt='Seta para direita'/>
            </div>
          </div>

          <div className='link-nav-home'>
            <span>
              <a href='#' className='txt-link-nav'>
                Melhoria Geral da Saúde
                </a>
              </span>
            <div className='dinamic-arrow'>
              <img src={ArrowRight} alt='Seta para direita'/>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;