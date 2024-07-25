import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import articleHero from "@/../public/blogImgs/blogPreviews/docker_hero.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: "Docker Compose, the basics of YAML",
  description: "Learn the basics of YAML by using the example of Docker Compose. Today we will create a Wordpres application with a MySql database that will save its states...",
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml',
      "en": 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics'
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Lesson 2", url: "/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics" }}
        nextLesson={{ title: "Lesson 4", url: "/en/blog-it/devops-course-for-juniors" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Docker <span class='purple'>Compose</span>, <br/>the basics of <span class='purple'>YAML</span>"
            articleInfo={{ time: "30 minutes", specialization: "DevOps/Developer", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Docker Compose in a few simple steps"
            contents={[
              { text: "Introduction to Docker Compose", url: "#introduction-to-docker-compose" },
              { text: "Docker Compose - Basic Example", url: "#docker-compose-basic-example" },
              { text: "Summary", url: "#summary" }
            ]}
          />
        </div>
        {/* Wprowadzenie Do Docker Compose */}
        <section id="introduction-to-docker-compose" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Introduction to Docker Compose</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <p className={styles.sectionContentText}>Docker Compose is a tool that allows you to define and run multi-container applications using a YAML file. In short, with one file we are able to run the entire necessary environment to operate our application. In today's example, we will go through the process of running the most popular CMS in the world, Wordpres.<br /><br />You are probably asking yourself why we have to use Docker Compose and not just the basic Docker command?<br /><br />The answer to this question is simpler than you think. In order to run any Wordpress application, you must have both the Wordpress CMS Panel and the MySql database. In the case of the basic Docker command, it would be necessary to run the CMS panel and the MySql database separately. Thanks to Docker Compose, we will be able to quickly run the entire Wordpress application, regardless of the host system, with one command.</p>
            <h3 className={styles.sectionContentHeader}>1. What is Docker Compose?</h3>
            <p className={styles.sectionContentText}>Docker Compose is a tool that allows you to run applications consisting of multiple Docker containers. It allows you to define services, networks and volumes in a YAML file, which simplifies the management and execution of complex applications. Thanks to Docker Compose, we can easily define, run and manage test and production environments.<br /><br /> Docker Compose is a basic tool for both production and testing, but it is not as advanced as e.g. Docker Swarm or Kubernetes . Nevertheless, its knowledge is necessary in order to further comprehensively explore container environments.</p>
            <h3 className={styles.sectionContentHeader}>2. What is YAML?</h3>
            <p className={styles.sectionContentText}>YAML is a text file format that is easy to write and read. It is often used to configure applications due to its simplicity. YAML files consist of keys and values ​​that are organized in a hierarchical structure. You can view them as JSON files, only on steroids.<br /><br />Depending on the interpretation program, the structure of the YAML file may vary, but the general principles are always the same. The entire difference will only be based on the use of different commands.</p>
            <ArticleImportantInfo
              type="warning"
              title="What does it mean that YAML is Indent Sensitive?"
              content="YAML, like e.g. Python, is very sensitive to all types of white characters (e.g. space, tab). Incorrect use of spaces and tabs will prevent the file from being read correctly. Pay attention to the indentation structure in the example below. "
            />
            <CodeBlock
              description="Sample YAML file - Docker Compose"
              commands={[
                "version: '3.8'",
                "services:",
                "&emsp;app:",
                "&emsp;&emsp;image: my_app_image",
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "8080:80"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;- APP_ENV=production'
              ]}
            />
          </div>
        </section>
        {/* Docker Compose Przykład */}
        <section id="docker-compose-basic-example" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Docker Compose - Example</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Before you start...</h3>
            <p className={styles.sectionContentText}>This tutorial will present you with a basic example of configuring the <span className={styles.pathBox}>docker-compose.yaml</span> file, in which we will configure Wordpress with the MySql database. Remember that you must have Docker Engine installed and running.<br /><br />You can run containers on your local machine, virtual machine or VPS. If you choose the last option (i.e. VPS), you will need to use SSH tunneling to access the container via a web browser. Tunneling in this case will be necessary due to the fact that we will not connect the domain to our container at this stage.</p>
            <ArticleImportantInfo
              type="hint"
              title="How to perform SSH tunneling?"
              content="Tunneling via SSH allows us to redirect traffic from our local port to the target port on our VPS server. To do this, execute the following command: <br/><br/>Syntax:<br/>ssh -N - p 22 {user}@{vps_ip} -L {local_port}:{vps_internal_ip}:{vps_internal_port}<br/><br/>For example: <br/>ssh -N -p 22 noob@123.123.12.12 -L 8080:127.0.0.1:8080 <br/><br/>The above command will try to connect via SSH to user 'noob' at '123.123.12.12' and then redirect traffic from your local port 8080 to the internal address of your VPS 127.0.0.1:8080. <br/><br/>This way you will be able to connect to your container from your local web browser.<br/>If the above information is too complicated for you at the moment, run Docker Compose on your local computer."
            />
            <h3 className={styles.sectionContentHeader}>1.How to run Wordpress from MySQL using Docker Compose?</h3>
            <p className={styles.sectionContentText}>First, go to the target directory where you want to create the file <span className={styles.pathBox}>docker-compose.yaml</span>.</p>
            <CodeBlock
              description="Create file in target directory"
              commands={[
                "touch docker-compose.yaml",
              ]}
            />
            <CodeBlock
              description="Complete the file as follows"
              commands={[
                "version: '3.8'",
                "services:",
                "&emsp;wordpress:",
                "&emsp;&emsp;image: wordpress:latest",
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "8080:80"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_HOST: db',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_USER: wordpress',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_PASSWORD: wordpress',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_NAME: wordpress',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- wordpress_data:/var/www/html',
                '',
                "&emsp;db:",
                "&emsp;&emsp;image: mysql:5.7",
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;MYSQL_ROOT_PASSWORD: rootpassword',
                '&emsp;&emsp;&emsp;MYSQL_DATABASE: wordpress',
                '&emsp;&emsp;&emsp;MYSQL_USER: wordpress',
                '&emsp;&emsp;&emsp;MYSQL_PASSWORD: wordpress',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- db_data:/var/lib/mysql',
                '',
                "volumes:",
                "&emsp;wordpress_data:",
                "&emsp;db_data:",
              ]}
            />
            <h3 className={styles.sectionContentHeader}>2. Docker-compose.yaml file for Wordpress + MySQL explained</h3>
            <p className={styles.sectionContentText}>When you were copying the content of the above file, you were probably holding your head and asking yourself "what is this all about?" At first glance, the structure of the above file <span className={styles.pathBox}>docker-compose.yaml</span> may seem complicated and incomprehensible, but in a moment we will explain the code line by line.<br /><br /> <strong style={{ fontWeight: "bold" }}>Section "version"</strong><br />Specifies the version of the syntax that Docker Compose will use. In this case we are using version '3.8'. Always use the latest version unless your project requires an older version. At this point, it is also possible to omit this information from the file, which will automatically result in using the latest version of Docker Compose.<br /><br /><strong style={{ fontWeight: "bold" }}>Section "services"</strong><br />Defines two services (containers): "wordpress" and "db" (you can use any names, as long as they are unique)</p>
            <br />
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Wordpress container</strong><br />
                <ul>
                  <li>"image" - We use the official latest version of the WordPress image</li>
                  <li>"ports" - Forward port 8080 of the host to port 80 of the container</li>
                  <li>"environment" - We define environment variables for the WordPress container</li>
                  <li>"volumes" - We create the "wordpress_data" volume to store WordPress data</li>
                </ul>
              </li>
              <li><strong style={{ fontWeight: "bold" }}>DB Container</strong><br />
                <ul>
                  <li>"image" - We are using the official MySQL version 5.7 image</li>
                  <li>"environment" - We define environment variables for the container hosting the MySQL database</li>
                  <li>"volumes" - Create the "db_data" volume to store MySQL data</li>
                </ul>
              </li>
            </ol>
            <p className={styles.sectionContentText}><strong style={{ fontWeight: "bold" }}>Section "volumes"</strong><br />Defines the volumes used by both of our containers/services.</p>
            <ArticleImportantInfo
              type="how"
              title="Why do we use Volumes?"
              content='If you carefully read the previous lesson in the "DevOps Course for Juniors" course series, you must have remembered the fact that Docker containers are by nature like the HTTP protocol, i.e. "stateless".<br/><br/> What does this mean in practice?<br/><br/>This means that a given container will store the information until it is deleted or upgraded to a higher version of the image. When using Wordpress technology with a MySQL database, this is an unacceptable situation!<br/><br/>By creating Volumes, we allow our Docker containers to save data on the host system, and not in RAM. Thanks to this procedure, your data will not be lost after redeploying the image. <br/><br/> If you forgot to do this, any configurations you made in Wordpress, such as page creation, updates, etc., would be unstable.'
            />
            <ArticleImportantInfo
              type="warning"
              title="Do not include sensitive data in Compose files!"
              content='In the above example, sensitive information such as MySQL login data was saved directly in the docker-compose.yaml file to clarify the example.<br/><br/>This approach is UNACCEPTABLE, in a production environment use e.g. Docker Secrets .'
            />
            <h3 className={styles.sectionContentHeader}>3. How to start/stop containers with Docker Compose?</h3>
            <p className={styles.sectionContentText}>In order to start/stop containers, it is necessary to go to the folder in the terminal where our <span className={styles.pathBox}>docker-compose.yaml</span> file is stored.</p>
            <CodeBlock
              description="To run containers from the docker-compose.yaml file, run the command (deatached mode)"
              commands={[
                "docker compose up -d",
              ]}
            />
            <CodeBlock
              description="Make sure your containers are working properly"
              commands={[
                "dockerps",
              ]}
            />
            <p className={styles.sectionContentText}>If everything went well, you should be able to launch the Wordpress admin panel from your web browser. To do this, go to <span className={styles.pathBox}>http://localhost:8080</span>.</p>
            <CodeBlock
              description="To stop containers from the docker-compose.yaml file, run the command (deatached mode)"
              commands={[
                "docker compose down",
              ]}
            />
          </div>
        </section>
        {/* Podsumowanie */}
        <section id="summary" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Docker Compose - Example</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Good job!</h3>
            <p className={styles.sectionContentText}>Congratulations, you've successfully launched your first full-fledged Docker container cluster. As you can see, in the example above, it is not as difficult as it may seem. At this point, all you need to do is transfer the above file <span className={styles.pathBox}>docker-compose.yaml</span> to another server or machine to be able to enjoy a new instance of the Wordpress application with a configured MySQL database. There is no need to download Wordpress files yourself or configure the MySQL database yourself. Everything is done on the fly by Docker Compose.<br /><br /> Even though you may feel proud at this point, you cannot rest on your laurels because you managed to run your first system on your own. . Wordpress is the most popular CMS in the world, which has both advantages and disadvantages. Exposing the container to the world in the state it is in now may turn out to be an invitation to a hacker to our server, due to the countless number of malicious crawlers looking for unsecured Wordpress instances. In the following lessons, I will take a closer look at this problem and before we put our application out into the world, we will use a basic WAF (Web Application Firewall), which is Modsecurity.</p>
          </div>
        </section>
      </article>
    </main >
  )
}