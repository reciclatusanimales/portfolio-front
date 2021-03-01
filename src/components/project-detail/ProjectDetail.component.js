import React from "react"
import ReactMarkdown from "react-markdown"
import Button from "../layout/button/Button.component"
import { ProjectTemplate, ProjectStack, StackImg } from "./ProjectDetail.styles"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Title from "../layout/title/Title.component"
import SyntaxHighlighter from "react-syntax-highlighter"
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs"

const ProjectDetail = ({ project }) => {
  const { title, subtitle, stack } = project
  const markdown = `
  >_Están pasando demasiadas cosas raras para que todo pueda seguir tan normal._

  [Clics](https://clics.reciclatusanimales.com) es una comunidad que reúne distintas funcionalidades implementadas con múltiples tecnologías tales como NodeJS (Express), NextJS (React) y TailwindCSS.
  Aquí los usuarios pueden interactuar entre ellos a través de grupos, posts, comentarios, invitaciones, _likes_ (o me agrada) y mensajes. Posee su propio sistema de notificaciones y un chat en tiempo real.
  
  A pesar de que aparenta ser una aplicación bastante sencilla, la verdad es que ocurren un montón de cosas por detrás del telón. 
  Tres son las aplicaciones que funcionan de manera simultanea para lograrlo. 
  
  <br />

  ### _Backend_.

  <br /> 

  La primera, es el _backend_, y está escrita en __TypeScript__, implementada en __Node.js__ mediante __Express.js__. 
  El gestor de su base de datos es __PostgreSQL__ y utiliza __TypeORM__ como _ORM_.
  
  Se encuentra corriendo dentro del mismo subdominio (clics.reciclatusanimales.com), pero a través del puerto 4000.
  
  Esta aplicación se encarga de responder la mayoría de las peticiones del cliente como la gestión de cuentas de usuario, de grupos y temas de la comunidad, como también de gestionar los comentarios, _me agrada_, y _follows_ entre usuarios.

  A la vez, se comunica con la siguiente aplicación (la de notificaciones) mediante un _dispatcher_ accionado por _triggers_ o _subscribers_ presentes en algunas entidades de la base de datos.
  Los _subscribers_ están pendiente de la creación, modificación o eliminación de registros en los modelos de comentarios, _likes_, invitaciones a grupos, y _follows_, el último como se puede apreciar en el código a continuación.
  
  ~~~javascript
    @EventSubscriber()
    export class FollowSubscriber implements EntitySubscriberInterface<Follow> {
      listenTo() {
        return Follow;
      }

      afterInsert(event: InsertEvent<any>) {
        const entity = event.entity;
        if (entity.followedUser) {
          const type = "follow";
          const {
            username: sendername,
            followedUser: { username },
          } = entity;

          createNotification({ username, sendername, type })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
      }
    }
  ~~~

  <br />

  Este evento, al igual que los demás _subscribers_, se encarga de llamar a la función \`createNotification()\` que envía los parámetros necesarios para crear la notificación a la siguiente aplicación. 
  Como se encuentra detallado más adelante, la aplicación de notificaciones está construída con __Apollo Server__ y __GraphQL__, por lo que es necesario envíar la petición a un _resolver_ de esta utilizando [graphql-request](https://github.com/prisma-labs/graphql-request).
  

  [graphql-request](https://github.com/prisma-labs/graphql-request), permite crear una mínima instancia de un cliente __GraphQL__ (ya que solo ejecuta un llamado) que permitirá hacer la consulta (_mutation_).

  ~~~javascript
    const CREATE_NOTIFICATION = gql\`
      mutation createNotification(
        $username: String!
        $type: String!
        $value: String
        $sendername: String
        $subName: String
        $postId: Int
        $commentId: Int
      ) {
        createNotification(
          username: $username
          type: $type
          value: $value
          sendername: $sendername
          subName: $subName
          postId: $postId
          commentId: $commentId
        ) {
          identifier
        }
      }
    \`;
  ~~~

  <br />
  <br />

  ### Notificaciones y _chat_.
  
  <br />

  La siguiente aplicación es la encargada de crear y gestionar las notificaciones, además de permitir la mensajería en tiempo real.
  También está construida en __Node.js__ con __Express.js__, aunque está escrita en __JavaScript__, y apunta a la misma base de datos, pero utiliza __Sequelize__ como ORM.
  
  Se encuentra corriendo en otro subdominio (chat-notificacions.reciclatusanimales.com) a través del puerto 5000, aunque no puede ser alcanzada desde el exterior más que por el _backend_ y el _frontend_.
    
  Aunque esta aplicación es también un _backend_, se implementó de forma independiente a la anterior para que solo se ocupara de las funcionalidades que requieren la ejecución de _web sockets_ para establecer la comunicación bidireccional entre cliente y servidor.

  

  Las notificaciones son creadas cuando se recibe una petición desde la aplicación principal de _backend_ 

  `

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          language={language}
          style={monokaiSublime}
          children={value}
        />
      )
    },
  }

  return (
    <ProjectTemplate>
      <SectionCenter>
        <article>
          <Title title={title} />
          <h3>{subtitle}</h3>

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
