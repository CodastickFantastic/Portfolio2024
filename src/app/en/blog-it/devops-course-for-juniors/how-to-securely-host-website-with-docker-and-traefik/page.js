import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/blogPreviews/traefik_hero.png";
import dns_config_example from "@/../public/blogImgs/img/dns_configuration_example.png";
import traefik_labels_example from "@/../public/blogImgs/img/traefik_labels_example.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'How to securely host websites with Docker and Traefik?',
  description: 'Learn the basics of hosting your own websites using Docker containerization technology in combination with the Traefik tool.',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/how-to-securely-host-website-with-docker-and-traefik',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/jak-hostowac-aplikacje-internetowe-za-pomoca-docker-traefik',
      "en": 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/how-to-securely-host-website-with-docker-and-traefik'
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Lekcja 3", url: "/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics" }}
        nextLesson={{ title: "Lekcja 5", url: "/en/blog-it/devops-course-for-juniors" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="How to <span class='purple'>securely</span> host website with Docker and <span class='purple'>Traefik</span>?"
            articleInfo={{ time: "30 minutes", specialization: "DevOps/Developer", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Get to know Docker in a few simple steps"
            contents={[
              { text: "What is Traefik?", url: "#what-is-traefik" },
              { text: "Traefik basic configuration", url: "#basic-traefik-configuration" },
              { text: "Traefik secure configuration", url: "#secure-configuration-traefik" },
              { text: "Traefik website hosting", url: "#website-hosting" },
            ]}
          />
        </div>
        {/* What is Traefik? */}
        <section id="what-is-traefik" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>What is Traefik?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>What is Traefik?</h3>
            <p className={styles.sectionContentText}>Traefik is a modern reverse proxy and load balancer that was created for dynamic management of network traffic in microservice environments. Unlike traditional tools, Traefik is designed to integrate seamlessly with modern tools and platforms such as Docker and Kubernetes.</p>
            <h3 className={styles.sectionContentHeader}>Traefik key features</h3>
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Automatic configuration</strong> - One of the main features of Traefik is its ability to automatically discover services and configure routes (DNS). Thanks to integration with systems such as Kubernetes or Docker, Traefik automatically updates its settings when new services are added, changed or removed.</li>
              <li><strong style={{ fontWeight: "bold" }}>Support for multiple protocols</strong> - Traefik supports both TCP and UDP protocols, so it can be used in a wide range of applications. Additionally, it offers the ability to create middlewares that allow for increased control over applications.</li>
              <li><strong style={{ fontWeight: "bold" }}>Easy SSL setup</strong> - Traefik automatically manages SSL certificates using Let's Encrypt. This makes it possible to easily and quickly implement secure HTTPS connections without the need to manually manage certificates.</li>
              <li><strong style={{ fontWeight: "bold" }}>Loadbalancer</strong> - Traefik offers advanced load balancing features that enable even distribution of network traffic between different service instances.</li>
              <li><strong style={{ fontWeight: "bold" }}>Label based routing</strong> - In order to host the application on our domain, all we need to do is add the appropriate label to the container in the file <span className={styles.pathBox} >docker-compose.yml</span></li>
            </ol>
            <h3 className={styles.sectionContentHeader}>Why choose Traefik and not e.g. Docker Reverse Proxy?</h3>
            <p className={styles.sectionContentText}>Traefik, although it may seem difficult to use at first glance, will actually allow us to manage our container applications in a much simpler way than using e.g. Docker Reverse Proxy. If we use Traefik, we do not have to configure SSL certificates ourselves, worry about HTTP to HTTPS redirects, and we can also use Middleware quickly and easily. Additionally, the platform itself offers many advanced plug-ins that are worth considering for selected projects.</p>
          </div>
        </section>
        {/* Traefik basic configuration */}
        <section id="basic-configuration-traefik" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Traefik basic configuration</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>How to configure Traefik?</h3>
            <p className={styles.sectionContentText}>Below is a minimalist <span className={styles.pathBox}>compose.yml</span> file containing the basic Traefik configuration for Development.</p>
            <ArticleImportantInfo
              type="warning"
              title="Traefik Dashboard (Development Only)"
              content="In the example below, we are running a Traefik container with the Traefik Dashboard active. This approach is highly dangerous due to the need to run the Traefik API, which, if left unsecured, can lead to many security issues with hosted applications.<br/><br/> Treat The following example is strictly educational, later you will also find a safe implementation."
            />
            <CodeBlock
              description="Configuration file traefik-compose.yml (Development - Traefik Dashboard)"
              commands={[
                "services:",
                "&emsp;traefik:",
                "&emsp;&emsp;image: traefik:latest",
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "80:80"',
                '&emsp;&emsp;&emsp;- "443:443"',
                '&emsp;&emsp;command:',
                '&emsp;&emsp;&emsp;- "--api.dashboard=true"<var>Enable Traefik Dashboard</var>',
                '&emsp;&emsp;&emsp;- "--providers.docker.exposedbydefault=false"<var>Do not expose Docker containers by default</var>',
                '&emsp;&emsp;&emsp;- "--entrypoints.web.address=:80"',
                '&emsp;&emsp;&emsp;- "--entrypoints.websecure.address=:443"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.tlschallenge=true"<var>Enable ACME TLS Challenge</var>',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.email=<var>EMAIL</var>"<var>Define Email for ACME</var>',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"<var>Define Storage for ACME</var>',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "var/run/docker.sock:/var/run/docker.sock"<var>Expose Docker Socket (DANGEROUS!!!)</var>',
                '&emsp;&emsp;&emsp;- "./letsencrypt:/letsencrypt"<var>Volume for SSL Certs</var>',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true"<var>Enables Traefik Routing</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.rule=Host(`<var>example.domain</var>`)"<var>Define domain for Traefik Dashboard</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.entrypoints=websecure"<var>Host Traefik Dashbord Over HTTPS</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.service=api@internal"<var>Enable Traefik API - Need for Traefik Dashbord</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.tls.certresolver=myresolver"<var>Enable ACME TLS Challenge</var>',
              ]}
            />
            <p className={styles.sectionContentText}>In the above example, we have defined the Traefik service with the following parameters:</p>
            <ul>
              <li>We have provided ports 80 and 443 for our Traefik Reverse Proxy</li>
              <li>We have created a volume for SSL certificates</li>
              <li>We have provided access to our Docker Socet for the Traefik website (UNSAFE)</li>
              <li>In the commands section, we configured ports and SSL certificates, and additionally launched Traefik Dashboard</li>
              <li>In the labels section, we have assigned access to our Traefik Dashboard at the URL example.domain and </li>
            </ul>
            <p className={styles.sectionContentText}>In order to test the above configuration, you must have a purchased domain. If you have one, point it to your VPS server. Below is an example configuration of my domains.</p>
            <Image className={styles.blogImg} src={dns_config_example} alt="Example DNS Configuration" style={{ maxWidth: 770 }} />
            <CodeBlock
              description="Launch Traefik Dashboard"
              commands={[
                "docker compose up",
                "or",
                "docker compose -f <var>compose-file-name.yml</var> up"
              ]}
            />
            <p className={styles.sectionContentText}>Go to the domain of your choice, if everything works correctly, you will find the Traefik Dashboard here.</p>
          </div>
        </section>
        {/* Traefik secure configuration */}
        <section id="secure-configuration-traefik" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Traefik Secure Configuration</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Why is the above configuration not safe?</h3>
            <p className={styles.sectionContentText}>Now that we know the basic configuration of the Traefik website, it would be worth finding out what it should look like in a safe way. The above solution has several problems:</p>
            <ul>
              <li>We provide direct access to the Docker socket, which we should NEVER do unless we know how to do it</li>
              <li>We provide the Traefik API, which is additionally not protected in any way, so the attacker can view all our information</li>
              <li>Traefik Dashboard itself is also available to the public and is not password protected.</li>
            </ul>
            <h3 className={styles.sectionContentHeader}>Traefik safe configuration example</h3>
            <p className={styles.sectionContentText}>Below we will configure Traefik to use Docer Socet via proxy and completely disable access to Traefik Dashboard.</p>

            <CodeBlock
              description="Configuration file traefik-compose.yml (Development - Traefik Dashboard)"
              commands={[
                "services:",
                "&emsp;socket-proxy: <var>--New Service - Socket Proxy</var>",
                '&emsp;&emsp;image: "tecnativa/docker-socket-proxy"',
                '&emsp;&emsp;container_name: "socket-proxy"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;- CONTAINERS=1',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "/var/run/docker.sock:/var/run/docker.sock:ro"',
                "",
                "&emsp;traefik: <var>--Modified Traefik Service</var>",
                '&emsp;&emsp;image: "traefik:latest"',
                '&emsp;&emsp;depends_on:',
                '&emsp;&emsp;&emsp;- "socket-proxy"',
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "80:80"',
                '&emsp;&emsp;&emsp;- "443:443"',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"<var>--Connect to Socket Proxy</var>',
                '&emsp;&emsp;&emsp;- "traefik-external"<var>--Traefick Network</var>',
                '&emsp;&emsp;command:',
                '&emsp;&emsp;&emsp;- "--providers.docker.endpoint=tcp://socket-proxy:2375"<var>--Use Socket Proxy</var>',
                '&emsp;&emsp;&emsp;- "--providers.docker.exposedbydefault=false"',
                '&emsp;&emsp;&emsp;- "--entrypoints.web.address=:80"',
                '&emsp;&emsp;&emsp;- "--entrypoints.websecure.address=:443"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.tlschallenge=true"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.email=<var>EMAIL</var>"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "./letsencrypt:/letsencrypt"',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true"',
                "",
                "networks:",
                "&emsp;traefik-socket-proxy: <var>--Internal Network for Socket Proxy</var>",
                '&emsp;&emsp;name: "traefik-socket-proxy"',
                "&emsp;traefik-external: <var>-- Network that host External Websites</var>",
                '&emsp;&emsp;name: "traefik-external"',
              ]}
            />
            <p className={styles.sectionContentText}>Compare the safe example above with the previous one. The current solution does not provide Traefick Dashboard and uses an additional service called Socket-Proxy, which allows for limited communication between our Traefick and the Docker Socket. If necessary, you can additionally make a more restrictive proxy configuration using environment variables.</p>
          </div>
        </section>
        {/* Traefik secure configuration */}
        <section id="website-hosting" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Traefik website hosting</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Traefik Configuration File Structure</h3>
            <p className={styles.sectionContentText}>As we have noticed in the above examples, Traefik's configuration is not complicated, however, when we start defining our websites, we must meet one important requirement. Analyze the following example carefully...</p>
            <Image className={styles.blogImg} src={traefik_labels_example} alt="Example Traefik configuration " style={{ maxWidth: 770 }} />
            <ArticleImportantInfo
              type="warning"
              title="Service - Labels"
              content='Pay attention to the code fragments marked in yellow. We defined a service called "testing", and then in the "labels" section we used its name right after the phrase "routers". <br/><br/> This is the way to assign service names to labels using Traefik. If you make a mistake here, Traefik will not be able to locate your container. <br/><br/> Remember to always assign the assignment as in the example above, appropriately to the names of your websites.'
            />
            <ul>
              <li><strong style={{ fontWeight: 600 }}>image: traefik/whoami</strong> - Our Application Image</li>
              <li><strong style={{ fontWeight: 600 }}>container_name: "testing"</strong> - Our Container Name</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.enable=true"</strong> - Starts Routing for a given container</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.rule=Host(`example.com`)"</strong> - Specifies the URL address where the application is to be located</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.entrypoints=websecure"</strong> - Tells Traefik to host the application via port 443 (HTTPS)</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.certesolver=myresolver"</strong> - Tells Traefik to use our SSL (Let's Encrypt) agent</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.middlewares=waf@docker"</strong> - Informs Traefik that the given application should use the specified middleware</li>
              <li><strong style={{ fontWeight: 600 }}>networks:</strong> - In this section, let's connect the application to the Traefik-External network (Public network) created by us</li>
            </ul>
            <h3 className={styles.sectionContentHeader}>The entire Traefik configuration file with the HTTP page connected</h3>
            <p className={styles.sectionContentText}>Below is the entire configuration file containing the running website.</p>

            <CodeBlock
              description="Sample secure Traefik configuration with one website"
              commands={[
                "services:",
                "&emsp;socket-proxy: <var>--Socket Proxy</var>",
                '&emsp;&emsp;image: "tecnativa/docker-socket-proxy"',
                '&emsp;&emsp;container_name: "socket-proxy"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;- CONTAINERS=1',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "/var/run/docker.sock:/var/run/docker.sock:ro"',
                "",
                "&emsp;traefik: <var>--Traefik Service</var>",
                '&emsp;&emsp;image: "traefik:latest"',
                '&emsp;&emsp;depends_on:',
                '&emsp;&emsp;&emsp;- "socket-proxy"',
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "80:80"',
                '&emsp;&emsp;&emsp;- "443:443"',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"',
                '&emsp;&emsp;&emsp;- "traefik-external"',
                '&emsp;&emsp;command:',
                '&emsp;&emsp;&emsp;- "--providers.docker.endpoint=tcp://socket-proxy:2375"',
                '&emsp;&emsp;&emsp;- "--providers.docker.exposedbydefault=false"',
                '&emsp;&emsp;&emsp;- "--entrypoints.web.address=:80"',
                '&emsp;&emsp;&emsp;- "--entrypoints.websecure.address=:443"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.tlschallenge=true"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.email=<var>EMAIL</var>"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "./letsencrypt:/letsencrypt"',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true"',
                "",
                "&emsp;your-app: <var>-- Our Website</var>",
                '&emsp;&emsp;image: "traefik/whoami"',
                '&emsp;&emsp;container_name: "your-app"',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true" <var>-- Enable Traefik on your app</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.your-app.rule=Host(`whoami.jakubwojtysiak.online`)" <var>-- Replace with your domain</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.your-app.entrypoints=websecure" <var>-- Host webiste on 443 (HTTPS)</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.your-app.tls.certresolver=myresolver" <var>-- Use Lets Encrypt Cert Resolver</var>',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-external" <var>-- Attach website to external network, so Traefik can discover it (We have to use it as we decided to use Traefik Socket Proxy)</var>',
                "",
                "networks:",
                "&emsp;traefik-socket-proxy:",
                '&emsp;&emsp;name: "traefik-socket-proxy"',
                "&emsp;traefik-external:",
                '&emsp;&emsp;name: "traefik-external"',
              ]}
            />
            <CodeBlock
              description="Run compose.yml file"
              commands={[
                "docker compose up -d",
              ]}
            />
            <p className={styles.sectionContentText}>After switching to the domain of your choice, you should see a simple application that will display information about your query sent to the server. In exactly the same way you will be able to run any web applications.</p>
          </div>
        </section>
      </article>
    </main >
  )
}