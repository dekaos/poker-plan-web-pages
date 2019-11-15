import { Component } from 'inferno';
import { BrowserRouter, Route  } from 'inferno-router';

import './App.css';

class App extends Component {
  render() {
    const Home = () => (
      <div className="home">
        <div className="center">
          <div className="logo">
            <img src="/logo.png" width="140" height="140" alt="Poker Plan"/>
          </div>
          <h1>Poker Plan</h1>
          <p>Para entrar em contato conosco envie um email para <a href="mailto:anderson@stuhler.com.br">anderson@stuhler.com.br</a>.</p>
          <footer className="footer">
            <div className="container">
              &copy; Poker Plan
            </div>
          </footer>
        </div>
      </div>
    );
    const PrivacyAndPolicy = () => (
      <div className="app">
        <header className="header">
          <div className="container">
            <h1>Poker Plan</h1>
          </div>
        </header>
        <div className="main">
          <div className="container padder">
            <h2>Termos e condições de uso</h2>
            <p>
              Estes termos e condições ("Terms", "Agreement") são um acordo entre o desenvolvedor de aplicativos móveis ("Desenvolvedor de aplicativos móveis" ou "nós") e você ("User", "você" ou "seu"). Este Acordo estabelece os termos gerais e as condições de seu uso do aplicativo móvel Poker Plan e qualquer um de seus produtos ou serviços (coletivamente, "Aplicativo Móvel" ou "Serviços").
            </p>
            <h2>Backups</h2>
            <p>
              Não somos responsáveis pelo conteúdo que reside no dispositivo móvel. Em nenhum caso, seremos responsabilizados por qualquer perda de qualquer conteúdo. É sua única responsabilidade manter o backup adequado do seu conteúdo.
            </p>
            <h2>Links para outros aplicativos móveis</h2>
            <p>
              Embora este aplicativo móvel possa vincular-se a outros aplicativos móveis, não estamos, direta ou indiretamente, implicando qualquer aprovação, associação, patrocínio, endosso ou afiliação a qualquer aplicativo móvel vinculado, a menos que especificamente indicado aqui. Não nos responsabilizamos por examinar ou avaliar e não garantimos as ofertas de quaisquer empresas ou indivíduos ou o conteúdo de seus aplicativos móveis. Não assumimos qualquer responsabilidade ou obrigação pelas ações, produtos, serviços e conteúdo de outros terceiros. Você deve revisar cuidadosamente as declarações legais e outras condições de uso de qualquer aplicativo móvel que acessar através de um link deste Aplicativo Móvel. Seu vínculo com outros aplicativos móveis externos é por sua conta e risco.
            </p>
            <h2>Alterações e emendas</h2>
            <p>
              Reservamo-nos o direito de modificar este Acordo ou as suas políticas relativas ao Aplicativo ou Serviços Móveis a qualquer momento, em vigor após a publicação de uma versão atualizada deste Acordo no Aplicativo Móvel. Quando o fizermos, revisaremos a data atualizada na parte inferior desta página. O uso continuado do Aplicativo Móvel após tais alterações constituirá seu consentimento para tais alterações. A política foi criada com WebsitePolicies.
            </p>
            <h2>Aceitação destes termos</h2>
            <p>
              Você reconhece que leu este Acordo e concorda com todos os seus termos e condições. Ao usar o Aplicativo Móvel ou seus Serviços, você concorda em estar vinculado por este Acordo. Se você não concordar em cumprir os termos deste Acordo, você não está autorizado a usar ou acessar o Aplicativo Móvel e seus Serviços.
            </p>
            <h2>Entrar em contato conosco</h2>
            <p>Se você quiser entrar em contato conosco para entender mais sobre este Acordo ou deseja entrar em contato conosco sobre qualquer assunto relacionado a ele, você pode enviar um e-mail para <a href="mailto:anderson@stuhler.com.br">anderson@stuhler.com.br</a>.</p>
            <p>Este documento foi atualizado pela última vez em 15 de novembro de 2019.</p>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            &copy; Poker Plan
          </div>
        </footer>
      </div>
    );

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/privacy-and-policy" component={PrivacyAndPolicy}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
