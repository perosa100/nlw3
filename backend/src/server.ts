import express from 'express'
import 'express-async-errors'
import path from 'path'
import errorHandler from './erros/handler'
import './database/connection'

import routes from './routes'
import cors from 'cors'
import <style type="text/css">button,
  html,
  input,
  select,
  textarea {
    font-family: sans-serif;
  }

  #naviga div a {
    font-family: open_sansregular, Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: bold;
    line-height: 0.9em;
    color: #474747;
  }

  #naviga div ul a {
    font-weight: bolder;
  }

  #naviga div li {
    display: block;
    padding: 5px 10px 5px 20px;
    border-bottom: 1px solid #e8e7e7;
  }

  #naviga div li.deeper {
    background: url(/public/stylesheets/images/menu-ativo.gif) 10px 14px
      no-repeat;
    border-top: 0 solid #0a5517;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }

  #naviga div li.deeper a {
    display: block;
    padding: 5px 5px 10px 20px;
    font-weight: 600;
    line-height: 1.2em;
  }

  #naviga div a.submenuborder {
    border-bottom: 1px solid #b3b3b3;
  }

  #naviga div a.parent {
    border-bottom: 1px solid #e8e7e7;
  }

  #naviga div div.submenu {
    margin-left: 15px;
    background: #e3e3e3;
  }
  .arearestrita {
    border-top: 1px solid #ededed;
    background: #64e35b;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#7d7d7d),
      to(#64e35b)
    );
    background: -webkit-linear-gradient(top, #7d7d7d, #64e35b);
    background: -moz-linear-gradient(top, #7d7d7d, #64e35b);
    background: -ms-linear-gradient(top, #7d7d7d, #64e35b);
    background: -o-linear-gradient(top, #7d7d7d, #64e35b);
    padding: 11.5px 23px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
    -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
    box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
    text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
    color: #290129;
    font-size: 17px;
    font-family: Helvetica, Arial, Sans-Serif;
    text-decoration: none;
    vertical-align: middle;
  }
  .arearestrita:hover {
    border-top-color: #65ba96;
    background: #65ba96;
    color: #ccc;
  }
  .arearestrita:active {
    border-top-color: #00060a;
    background: #00060a;
  }

  .alinhaMeio {
    padding-left: 150px;
  }

  @media only screen and (max-width: 526px) {
    .arearestrita {
      border-top: 1px solid #ededed;
      background: #64e35b;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#7d7d7d),
        to(#64e35b)
      );
      background: -webkit-linear-gradient(top, #7d7d7d, #64e35b);
      background: -moz-linear-gradient(top, #7d7d7d, #64e35b);
      background: -ms-linear-gradient(top, #7d7d7d, #64e35b);
      background: -o-linear-gradient(top, #7d7d7d, #64e35b);
      padding: 5px 10px;

      border-radius: 20px;
      -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
      -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
      box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
      text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
      color: #290129;
      font-size: 14px;
      font-family: Helvetica, Arial, Sans-Serif;
      text-decoration: none;
      height: auto;
      width: auto;
    }
    .arearestrita:hover {
      border-top-color: #65ba96;
      background: #65ba96;
      color: #ccc;
    }
    .arearestrita:active {
      border-top-color: #00060a;
      background: #00060a;
    }
    .alinhaMeio {
      padding-left: 65px;
    }
  }
</style>
<div class="alinhaMeio span12"><a class="arearestrita" href="http://arearestrita.ufgd.edu.br/" title="Cadastro processo seletivo area restrita">Realizar inscri&ccedil;&atilde;o - &Aacute;rea Restrita</a></div>
&nbsp;

<div id="naviga">
<div class="span12">
<ul class="menuIngressoUfgd in collapse" style="height: auto; display: block">
	<li class="deeper parent" id="menuVestibular"><a aria-controls="reitoria" data-target="#vestibulares" data-toggle="collapse" href="javascript:;" title="vestibulares">Vestibulares</a>

	<div class="submenu in collapse" id="vestibulares" style="height: auto"><a class="submenuborder" href="/vestibular/processo-seletivo-vestibular-psv/index" title="Processo Seletivo Vestibular - PSV">Processo Seletivo Vestibular - PSV</a> <a class="submenuborder" href="/vestibular/psead/index" title="Educação a Distância - PSEaD">Educa&ccedil;&atilde;o a Dist&acirc;ncia - PSEaD</a> <a class="submenuborder" href="/vestibular/letras-libras-ead-licenciatura/index" title="Letras-Libras/EaD – Licenciatura - PSVLetras-Libras">Letras-Libras/EaD &ndash; Licenciatura - PSVLetras-Libras</a> <a class="submenuborder" href="/vestibular/licenciatura-indigena-teko-arandu/index" title="Licenciatura Indígena -Teko Arandu – PSLIN">Licenciatura Ind&iacute;gena -Teko Arandu &ndash; PSLIN</a> <a class="submenuborder" href="/vestibular/licenciatura-em-educacao-do-campo-psleduc/index" title="Licenciatura em Educação do Campo - PSLEDUC">Licenciatura em Educa&ccedil;&atilde;o do Campo - PSLEDUC</a> <a class="submenuborder" href="http://portal.mec.gov.br/cotas/perguntas-frequentes.html" title="Como funciona o Sistema de Cotas">Como funciona o Sistema de Cotas</a></div>
	</li>
	<li><a href="https://cs.ufgd.edu.br/sisu/" title="SiSU/ENEM">Sistema de Sele&ccedil;&atilde;o Unificada - SiSU/ENEM</a></li>
	<li><a href="/vestibular/transferencia-voluntaria-pstv/index" title="Transferência Voluntária">Transfer&ecirc;ncia Volunt&aacute;ria - PSTV</a></li>
	<li><a href="/vestibular/portador-de-diploma-pspd/index" title="Portador de Diploma">Portador de Diploma - PSPD</a></li>
	<li class="deeper parent" id="menuResidencias"><a aria-controls="reitoria" data-target="#residencias" data-toggle="collapse" href="javascript:;" title="residencias">Resid&ecirc;ncias-HU/UFGD</a>
	<div class="submenu in collapse" id="residencias"><a class="submenuborder" href="/vestibular/residencia-hu-ufgd-psrm/index" title="Residência Médica-PSRM">Resid&ecirc;ncia M&eacute;dica-PSRM</a> <a class="submenuborder" href="/vestibular/residencia-profissional-em-area-da-saude-psraps/index" title="Residência Profissional em Área da Saúde - PSRAPS">Resid&ecirc;ncia Profissional em &Aacute;rea da Sa&uacute;de - PSRAPS</a></div>
	</li>
	<li><a href="/vestibular/selecao-de-professor-substituto-pssps/index" title="Seleção de Professor Substituto">Sele&ccedil;&atilde;o de Professor Substituto - PSSPS</a></li>
	<li class="deeper parent" id="menuConcursos"><a aria-controls="reitoria" data-target="#concursos" data-toggle="collapse" href="javascript:;" title="concursos">Concursos</a>
	<div class="submenu in collapse" id="concursos"><a class="submenuborder" href="/vestibular/docente-de-provas-e-titulos-cdpt/index" title="Docente de Provas e Títulos - CDPT">Docente de Provas e T&iacute;tulos - CDPT</a> <a class="submenuborder" href="/vestibular/tecnico-administrativo-em-educacao-cpta/index" title="Técnico-Administrativo em Educação - CPTA">T&eacute;cnico-Administrativo em Educa&ccedil;&atilde;o - CPTA</a></div>
	</li>
	<li><a href="/vestibular/pssct/index" title="Seleção de Técnico-Administrativo Temporário">Sele&ccedil;&atilde;o de T&eacute;cnico-Administrativo Tempor&aacute;rio</a></li>
	<li><a href="/vestibular/pro-estagio/index" title="Pró-Estágio">Pr&oacute;-Est&aacute;gio</a></li>
</ul>
</div>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
&nbsp; from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import { Database, Resource } from '@admin-bro/typeorm'
const app = express()
const adminBro = new AdminBro({
  Databases: [],
  rootPath: '/admin'
})

AdminBro.registerAdapter(TypeOrmAdapter)
const router = AdminBroExpress.buildRouter(adminBro)
app.use(cors())

app.use(routes)

app.use(express.json())

app.use(routes)

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
app.use(adminBro.options.rootPath, router)

app.listen(3333, () => console.log('AdminBro is under localhost:3333/admin'))
