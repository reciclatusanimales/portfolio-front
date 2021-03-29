import React from "react"
import ReactMarkdown from "react-markdown"
import Button from "../layout/button/Button.component"
import { ProjectTemplate, ProjectStack, StackImg } from "./ProjectDetail.styles"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Title from "../layout/title/Title.component"
import SyntaxHighlighter from "react-syntax-highlighter"
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs"

const ProjectDetail = ({ project }) => {
  const { title, stack, content } = project
  const markdown = `

  🔗[https://cuenteros.reciclatusanimales.com](https://cuenteros.reciclatusanimales.com)
  <br />
  💾[https://github.com/reciclatusanimales/cuenteros](https://github.com/reciclatusanimales/cuenteros)

  [Cuenteros](https://cuenteros.reciclatusanimales.com) es una comindad literaria desarrollada con __Django__, __Javascript__ y __PostgreSQL__.
  
  ![Image](https://resources.reciclatusanimales.com/image/cuenteros-post.png)  

  Comenzó como un blog para la publicación de cuentos, relatos y pequeñas historias del ámbito literario, pero de a poco fue creciendo incorporando más funcionaliades. Desde las publicaciones y sus respectivos comentarios y respuestas, hasta los likes, marcadores, mensajes entre usuarios y posteriores notificaciones y chat en tiempo ~~casi~~ real.
  
  ![Image](https://resources.reciclatusanimales.com/image/cuenteros.png)
  
  El chat, en realidad, no utiliza ningún _socket_ de __Javascript__ o _channel_ de __Django__. No funciona en tiempo real. Solo simula hacerlo.
  <br />
  Y lo hace a través de __AJAX__, realizando una solicitud al servidor cada 2.5 segundos en busca de cambios en el estado del hilo de mensajes.
  
  ~~~javascript    
    function checkUpdates() {		
      const thread_id = document.getElementById('send').getAttribute('data-thread-id')
      const last_update = document.getElementById("last-update").value

      fetch(check_updates_url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "thread_id": Number(thread_id), 
          "last_update": last_update
        })
      }).then(
        response => response.json()
      ).then(function(data) {
        if(data.update_list){
          updateHtml("chat-list", data.html_list)
          addEvents()
        }
        if(data.update){         
          updateHtml("chat-detail", data.html)
          ScrollBottomInThread()
        }
      })            
    }
  ~~~

  Esta función se encarga de consultar por actualizaciones, además de agregar los respectivos _listeners_ a los nuevos elementos creados en el __DOM__.

  \`\`\`setInterval(checkUpdates, 3000)\`\`\`

  
  ![Image](https://resources.reciclatusanimales.com/gif/cuenteros-xhr.gif)
  
  <br />

  Una vez que que la respuesta devuelva el booleano \`\`\`update: true\`\`\`, el contenido __HTML__ de la conversación será actualizado, agregando los nuevos mensajes recibidos.

  <br />

  ![Image](https://resources.reciclatusanimales.com/gif/cuenteros-chat.gif)


  `

  const renderers = {
    code: ({ language, value }) => {
      return (
        <>
          <div className="terminal-window">
            <div className="terminal-icons">
              <span></span>
            </div>
            <div className="terminal-title">root@reciclatusanimales.com: ~</div>
          </div>
          <SyntaxHighlighter
            language={language}
            style={monokaiSublime}
            children={value}
          />
          <div className="terminal-foot"></div>
        </>
      )
    },
    image: props => {
      return (
        <img
          {...props}
          style={{ maxWidth: "650px", minWidth: "280px", width: "100%" }}
          alt="Code"
        />
      )
    },
  }

  return (
    <ProjectTemplate>
      <SectionCenter>
        <article>
          <Title title={title} />

          <ProjectStack>
            {stack.map(item => {
              return <StackImg src={item.image} key={item.id} alt={item.name} />
            })}
          </ProjectStack>

          <ReactMarkdown
            renderers={renderers}
            children={markdown}
            allowDangerousHtml={true}
            escapeHtml={false}
          />
        </article>
        <Button to="/projects">proyectos</Button>
      </SectionCenter>
    </ProjectTemplate>
  )
}

export default ProjectDetail
