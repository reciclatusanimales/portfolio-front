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
  El último proyecto, aunque en realidad es el más importante, es el servidor que alberga a todas las aplicaciones de [reciclatusanimales.com](https://reciclatusanimales.com).

  <br />

  ![Image](https://resources.reciclatusanimales.com/image/server.png)

  Es un servidor VPS con SO Centos 7 con IP 107.6.142.229.
  Los servicios que están corriendo en él son NGINX, Gunicorn, PostgreSQL, PM2, entre otros.

  ~~~python
    from django.utils.deprecation import MiddlewareMixin
    from django.core.exceptions import PermissionDenied
    from .models import ApiKey
    from django.urls import reverse

    class AuthMiddleware(MiddlewareMixin):

      def __init__(self, get_response):
          self.get_response = get_response

      def process_request(self, request):
              if(request.path.startswith(reverse('admin:index')) or request.path == reverse('home')):
                  return None
                  
              api_key = request.headers.get('Api-Key')
              
              try:
                  key = ApiKey.objects.get(key=api_key)
                  return None
              except ApiKey.DoesNotExist:
                  raise PermissionDenied("Acceso restringido.")

  ~~~
  <br />

  Luego, si las validaciones son franqueadas se crea la instancia del correo en la cola y con la función \`\`\`run_queue()\`\`\` se hace correr la cola.

  ~~~python
    def send_email(request):
  
      ...
      
      email_queue = EmailQueue.objects.create(
        template=template, 
        email_from=email_from, 
        email_name=email_name, 
        email_to=email_to, 
        subject=subject, 
        content=content,
        params=params
      )

      email_queue.save()

      json_response['success'] = True

      run_queue()

      return api_response(json_response)

  ~~~

  <br />

  Además, el modelo \`\`\`EmailQueue\`\`\` posee un signal que comprueba cada vez que se genera un correo que la plantilla de este tenga una respuesta automática, y de ser así ingresa un nuevo correo a la cola.

  ~~~python
    
    import logging

    from django.dispatch import receiver
    from django.db.models.signals import post_save
    from core.models import EmailQueue, Template
    from .constants import default_sender

    logger = logging.getLogger('django')

    @receiver(post_save, sender=EmailQueue)
    def create_response_email(sender, instance, created, **kwargs):
      if(created):
        if(instance.template.response):
          email_queue = EmailQueue.objects.create(
            template=instance.template.response, 
            email_from=default_sender, 
            email_name=instance.email_name, 
            email_to=instance.email_from, 
            subject=instance.template.response.subject, 
            params=instance.params, 
            content=''
          )

          email_queue.save()
  ~~~

  <br />

  Y al volver a crear una instancia \`\`\`EmailQueue\`\`\`, se hace correr nuevamente la cola:
  <br />

  ![Image](https://resources.reciclatusanimales.com/gif/email-service.gif)

  <br />

  Finalmente y debido a que se necesita correr el comando \`\`\`manage.py process_tasks\`\`\` para la ejecución automática de la cola, el servidor tiene implementado un servicio de inicio automático para esta tarea:  

  ~~~bash
    [Unit]
    Description=Email_sender

    [Service]
    Type=simple
    WorkingDirectory=/your_working_directory/
    ExecStart=/your_virtualenv_directory/bin/python /your_working_directory/manage.py process_tasks

    [Install]
    WantedBy=multi-user.target
  ~~~
  
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
            children={content}
            allowDangerousHtml={true}
            escapeHtml={false}
          />
        </article>
        <Button to="/projects" aria-label="Proyectos">
          proyectos
        </Button>
      </SectionCenter>
    </ProjectTemplate>
  )
}

export default ProjectDetail
