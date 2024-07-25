import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/blogPreviews/docker_hero.png";
import dockerfile_example from "@/../public/blogImgs/img/dockerfile_example.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'Containerization of applications - the basics of Docker',
  description: 'Get to know Docker in a few simple steps and start using it today!',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/dokeryzacja-aplikacji-podstawy-dockera',
      "en": 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics'
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Lesson 1", url: "/en/blog-it/devops-course-for-juniors/how-to-securely-configure-my-first-vps" }}
        nextLesson={{ title: "Lesson 3", url: "/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Containerization of <span class='purple'>applications</span>, i.e. the basics of <span class='purple'>Docker</span>"
            articleInfo={{ time: "20 minutes", specialization: "DevOps/Developer", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Get to know Docker in a few simple steps"
            contents={[
              { text: "Introduction to Docker", url: "#introduction-to-docker" },
              { text: "Docker - Basic Concepts", url: "#docker-basic-concepts" },
              { text: "Docker installation", url: "#docker-installation" },
              { text: "Basic Docker Commands", url: "#basic-docker-commands" },
              { text: "How to create secure Docker images?", url: "#secure-docker-image" },
              { text: "First Dockerfile - Secure Example", url: "#first-dockerfile-secure-example" }
            ]}
          />
        </div>
        {/* Wprowadzenie Do Docker'a */}
        <section id="introduction-to-docker" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Introduction to Docker</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. What is Docker?</h3>
            <p className={styles.sectionContentText}>Docker is a containerization technology that allows you to create, manage, and run applications in isolated environments called containers. Containerization, on the other hand, is a method of packaging applications and their dependencies into one portable environment that can be run on any Docker-supporting system. This makes applications more portable, scalable and easy to manage.</p>
            <h3 className={styles.sectionContentHeader}>2. What are the key features of Docker?</h3>
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Isolation</strong> - Each container runs in an isolated environment, ensuring that applications cannot communicate with each other unless we allow them to. Moreover, there will be no collisions with other applications. (e.g. port mapping collision)</li>
              <li><strong style={{ fontWeight: "bold" }}>Portability</strong> - Containers can be run on different platforms and operating systems without having to change the code. The application migration itself is almost automatic.</li>
              <li><strong style={{ fontWeight: "bold" }}>Performance</strong> - Docker containers, compared to virtual machines, are light and efficient due to the fact that they use the Kernel Host.</li>
              <li><strong style={{ fontWeight: "bold" }}>Scalability</strong> - Docker makes it easy to scale applications both vertically (greater computing power) and horizontally (more application instances).</li>
            </ol>
            <ArticleImportantInfo
              type="how"
              title="How does Docker work?"
              content="Docker uses container technologies that leverage OS-level virtualization to run multiple isolated applications on a single physical machine. Containers are lightweight because they share the host operating system kernel, which distinguishes them from traditional virtual machines that require full operating systems "
            />
            <h3 className={styles.sectionContentHeader}>3. Advantages of using Docker</h3>
            <p className={styles.sectionContentText}>Docker has revolutionized the way we build, deploy, and manage applications, offering portability, scalability, and performance that were previously difficult to achieve. With Docker, developers can focus on writing code rather than managing infrastructure. Its main advantages include:</p>
            <ul>
              <li><strong style={{ fontWeight: "bold" }}>Fast Deployment</strong> - With Docker, applications can be quickly packaged and run in various environments, reducing deployment time.</li>
              <li><strong style={{ fontWeight: "bold" }}>Dependency management</strong> - Docker ensures that all application dependencies are contained in the container, eliminating issues related to differences in environments.</li>
              <li><strong style={{ fontWeight: "bold" }}>Performance</strong> - Docker containers, compared to virtual machines, are light and efficient due to the fact that they use the Host Kernel.</li>
              <li><strong style={{ fontWeight: "bold" }}>Better resource utilization</strong> - Containers are more resource efficient than traditional virtual machines, allowing for better use of available computing power.</li>
            </ul>
          </div>
        </section>
        {/* Podstawowe pojęcia w Dockerze */}
        <section id="docker-basic-concepts" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Docker Basic Concepts</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. What is Docker Image?</h3>
            <p className={styles.sectionContentText}>A rigid template that contains everything needed to run the application: code, runtime, libraries, and system tools. Images are versioned and can be downloaded from repositories such as <span className="purple">Docker Hub</span> or <span className="purple">Github Container Registry.</span>The first stage of running an application in Docker is creating or downloading an image.</p>
            <h3 className={styles.sectionContentHeader}>2. What is a Docker Container?</h3>
            <p className={styles.sectionContentText}>A container is a running instance of a Docker image. It is an isolated environment that can be started, stopped, copied and deleted. Each container is an independent application. Importantly, Docker containers do not store application states (e.g. databases). If you delete a specific container that does not have Volumes, you will lose all data from the container.</p>
            <h3 className={styles.sectionContentHeader}>3. What is Volumen (Volume) Docker?</h3>
            <p className={styles.sectionContentText}>Docker Volume is a mechanism used to permanently store data generated and used by Docker containers. Volumens are managed by Docker and allow data to be separated from the container lifecycle. Thanks to this, data can be preserved even after the container is removed, which is crucial for the durability and reliability of the application.<br /><br />We distinguish 3 types of Volumes:</p>
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Managed Volumes</strong><br />These are volumes created and managed by Docker. They are stored in a special place on the host's file system<br />(usually in the <span className={styles.pathBox}>/var/lib/docker/volumes</span> directory).</li>
              <li><strong style={{ fontWeight: "bold" }}>Bind Mounts</strong><br />Using bind mounts, the user manually specifies a location on the host file system to be made available to the container. This allows you to access host files and directories from within the container.</li>
              <li><strong style={{ fontWeight: "bold" }}>TMPFS Mounts</strong><br />These are volumes created in RAM. They are very fast, but not permanent. Data in tmpfs mounts is lost after a container or system restart.</li>
            </ol>
            <h3 className={styles.sectionContentHeader}>4. What is Dockerfile?</h3>
            <p className={styles.sectionContentText}>Text file containing a set of instructions that Docker uses to build the image. These instructions specify what databases, libraries, and configuration settings are included in the image. It is a kind of "Image Recipe", created by the Application Developer.</p>
            <h3 className={styles.sectionContentHeader}>5. What is Docker Hub?</h3>
            <p className={styles.sectionContentText}> A public repository where you can store and share Docker images. Users can download ready-made images or upload their own. Unfortunately, the free version does not allow storing private images, unlike Github Container Registry.</p>
          </div>
        </section>
        {/* Jak Zainstalować Docker'a */}
        <section id="docker-installation" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>How to install Docker?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Before you start installing Docker</h3>
            <p className={styles.sectionContentText}>Depending on your operating system, installing Docker requires different steps and components. For example, on Linux only Docker Engine is required, while on Windows it is also necessary to install Docker Desktop.<br /><br />Details on installing the Docker environment can be found in the link below.</p>
            <Link className={styles.linkBtn} href="https://docs.docker.com/engine/install/">Docker Documentation</Link>
            <h3 className={styles.sectionContentHeader}>How to install Docker on Ubuntu?</h3>
            <p className={styles.sectionContentText}>Below is an example Docker installation on Ubuntu.</p>
            <CodeBlock
              description="Uninstall old versions of Docker"
              commands={[
                "for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done"
              ]}
            />
            <CodeBlock
              description="Add official Docker GPG keys"
              commands={[
                "sudo apt-get update",
                "sudo apt-get install ca-certificates curl",
                "sudo install -m 0755 -d /etc/apt/keyrings",
                "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc",
                "sudo chmod a+r /etc/apt/keyrings/docker.asc",
              ]}
            />
            <CodeBlock
              description="Add Docker Repository to apt sources"
              commands={[
                'echo\'deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu\$(./ etc/os-release && echo "$VERSION_CODENAME") stable" | \ sudo tee /etc/apt/sources.list.d/docker.list > /dev/null',
                "sudo apt-get update",
              ]}
            />
            <CodeBlock
              description="Docker Installation"
              commands={[
                'sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin'
              ]}
            />
            <CodeBlock
              description="Verify correct installation"
              commands={[
                'sudo docker run hello-world'
              ]}
            />
            <p className={styles.sectionContentText}>The above command downloads the Hello-World image and then runs it. You should see positive output from the application if the installation was successful.</p>
          </div>
        </section>
        {/* Podstawowe Komendy Docker*/}
        <section id="basic-docker-commands" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Basic Docker Commands</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Docker Cheat Sheet</h3>
            <p className={styles.sectionContentText}>Below are the basic commands that will allow you to use Docker almost completely</p>
            <CodeBlock
              description="Docker System Commands"
              commands={[
                "docker --help <var>Display instructions</var>",
                "docker version <var>Displays Docker version</var>",
                "docker info <var>Displays information about Docker installation</var>"
              ]}
            />
            <CodeBlock
              description="Docker Image Management"
              commands={[
                "docker pull [image_name] <var>Retrieves image from Docker Hub repository</var>",
                "docker images -a <var>Show all available images on the system</var>",
                "docker build . -t [image_name:tag] <var>Build an image and give it a name and tag</var>",
                "docker push [repository/image_name:tag] <var>Push image to selected repository</var>",
                "docker rmi [image_id] <var>Remove image from system</var>"
              ]}
            />
            <CodeBlock
              description="Docker Container Management"
              commands={[
                "docker run [image_name] <var>Runs a new container from the specified image.</var>",
                "docker run [image_name] -d <var>Runs a new container from the specified image. (Detached mode)</var>",
                "docker ps <var>Displays a list of running containers</var>",
                "docker ps -a <var>List all containers</var>",
                "docker stop [container_id] <var>Stop Container</var>",
                "docker rm [container_id] <var>Remove Container</var>",
                "docker exec -it [container_id] /bin/bash <var>Launching the Container system shell</var>",
                "docker exec -it [container_id] /bin/sh <var>Running the Container system shell (environment without Bash)</var>"
              ]}
            />
          </div>
        </section>
        {/* Bezpieczna Konfiguracja Docker*/}
        <section id="secure-docker-image" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>How to safely configure a Docker image?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Why is secure Docker image configuration so important?</h3>
            <p className={styles.sectionContentText}>Secure Docker image configuration is crucial for several reasons that have a direct impact on the integrity, confidentiality and availability of the application and the data it contains. Here are the most important reasons to keep your Docker images secure:</p>
            <ol style={{ marginTop: 24 }}>
              <li><strong style={{ fontWeight: "bold" }}>Protection against hackers</strong><br />
                Docker images do not differ in use from regular applications. They may be vulnerable to various types of attacks, such as malware, man-in-the-middle attacks, and exploitation of vulnerabilities in operating systems and applications. Secure configuration minimizes the risk of such attacks by ensuring current and verified software versions.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Application isolation</strong><br />
                The main benefit of using Docker technology is application isolation. Docker containers are designed to isolate applications from the host system and other containers. Improperly configured images can lead to data leaks between containers or allow privilege escalation to the host, which can threaten the entire system and, in extreme cases, even the cluster.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Ensuring Data Integrity</strong><br />
                Data stored and processed by applications must be protected against unauthorized access and modifications. Secure image configurations help prevent data breaches and ensure that your data remains intact.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Minimize attack surface</strong><br />
                Docker image minimization removes unnecessary packages and dependencies, reducing the attack surface. The fewer components in the image, the less chance that any of them will have security vulnerabilities. Always try to base your production image on minimal system images.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Compliance with laws and regulations</strong><br />
                Many industries are subject to strict data protection and privacy regulations, such as GDPR and HIPAA. Securely configuring Docker images helps you meet these requirements, which is key to avoiding financial penalties and reputational damage.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Makes management and scalability easier</strong><br />
                Secure images are easier to maintain and monitor. Automation of updates, patching and security audits is easier, which enables effective scaling of applications in production environments. It is also worth using all kinds of automatic tests in our CI/CD from Docker itself to exclude any shortcomings.
              </li>
            </ol>
            <h3 className={styles.sectionContentHeader}>Practices for creating secure Docker images</h3>
            <p className={styles.sectionContentText}>Let's now move on to the basic and minimum practices for securing applications hosted in a Docker environment. Implementing the solutions below should largely reduce attack vectors against our application. Please note that the steps below apply only to the security of the Docker image and not the entire application. In order to maximize the security of our systems, it is worth using monitoring tools and proxies such as WAF (Web Application Firewall), which will automatically eliminate known attacks.</p>
            <ArticleImportantInfo
              type="hint"
              title="Which WAF should I choose?"
              content="Depending on the application you want to host, there are many open source and commercial Web Application Firewall solutions. The most important thing is to choose the right tool for a given application. For example, PHP-based applications will have different attack vectors than those based on Node. js. For hosting e.g. Wordpress, it is worth considering Modsecurity WAF (via Nginx), while for Next.js applications it is worth considering using Arcjet (via NPM). Of course, there is nothing stopping you from using several WAFs at the same time Inappropriate selection may lead to many false positives." />
            <ol style={{ marginTop: 24 }}>
              <li><strong style={{ fontWeight: "bold" }}>Using official and trusted sources</strong><br />
                Only use official images available on Docker Hub or other trusted registries. Official images are regularly updated and checked for security vulnerabilities. Also remember to use official packages and libraries in your application.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Software update</strong><br />
                Regularly update all libraries and operating system images in Docker. Make sure images are rebuilt with the latest package versions and security patches. Try to perform these operations relatively regularly.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Image Minimization</strong><br />
                Create images containing only the necessary components to run your application. Use lightweight base operating systems such as Alpine Linux or Slim versions. Remember that before selecting an image, you can verify its security in Docer Hub. Each image has its own database of vulnerabilities, which you can read about on the publisher's subpage.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Secret data management</strong><br />
                Docker images allow you to preview their "deployment". Avoid placing secrets such as passwords, API keys, and certificates directly in the Docker image. Use environment variables or secret management tools such as Docker Secrets.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Setting appropriate permissions - Root Lock</strong><br />
                Use security policies such as SELinux or AppArmor to further secure containers and limit their access to system resources.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Configure appropriate security policies</strong><br />
                Secure images are easier to maintain and monitor. Automation of updates, patching and security audits is easier, which enables effective scaling of applications in production environments. It is also worth using all kinds of automatic tests in our CI/CD from Docker itself to exclude any shortcomings.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Regular security audits</strong><br />
                Regularly perform manual or automated security audits of your Docker images to detect and remediate potential security vulnerabilities. Use security scanning tools such as Docker Bench for Security and Docker Scout.
              </li>
            </ol>
            <h3 className={styles.sectionContentHeader}>Summary</h3>
            <p className={styles.sectionContentText}>Secure Docker image configuration is crucial to protect your applications and data from a variety of threats. Taking care of security not only avoids problems with data breaches, but also ensures the stability and reliability of applications in production environments. By implementing good practices such as image minimization, regular updates, secret data management, and security audits, you can significantly reduce the risks associated with using Docker technology.</p>
          </div>
        </section >
        {/* Pierwszy Dockerfile - Bezpieczny Przykład */}
        < section id="first-dockerfile-secure-example" className={styles.articleSection} >
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>How to create your first secure Dockerfile?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Dockerfile structure</h3>
            <p className={styles.sectionContentText}>A Dockerfile is a script that contains a set of instructions and commands that Docker uses to build an image. Each statement in a Dockerfile performs a specific operation, such as installing a package, setting an environment variable, or copying files. Below is a detailed description of the basic Dockerfile structure.</p>
            <Image className={styles.blogImg} src={dockerfile_example} alt="Dockerfile structure description" style={{ maxWidth: 770 }} />
            <p className={styles.sectionContentText}>The above information presents the minimum knowledge necessary to create your first custom Docker image. Of course, the Dockerfile itself accepts much more instructions and options that can be found in the Docker documentation.</p>
            <ArticleImportantInfo
              type="hint"
              title="Dockerfile at a glance..."
              content="Imagine that every time you want to deploy an application on a new server, you have to perform a series of activities to prepare the environment for your application. You must first download the necessary files, then install the libraries, configure the databases and then run the application so that it listens on a given port.<br/><br/>Performing these activities manually is a monotonous and undeveloping task, as we repeat the same activities over and over again. Docker comes to our aid and performs all these operations for us.< br/><br/>Treat the Dockerfile as an instruction for yourself in which you perform all the steps to run your application step by step. If you need to perform any action during deployment, it should also be included in the Dockerfile.<br /><br/>A properly constructed Dockerfile will reward you with the time you would otherwise have to devote to a one-time, independent application deployment. In addition, your application will become incredibly easy to transfer between servers."
            />
            <h3 className={styles.sectionContentHeader}>2. How to build an image from a Dockerfile?</h3>
            <CodeBlock
              description="To create an image from a Dockerfile, execute the following command (The terminal must be in the directory with the Dockerfile)"
              commands={[
                "docker build . -t <var>image-name</var>:<var>tag</var>",
                "<var>EXAMPLE</var> docker build . -t jakubwojtysiak.online:v1.0",
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. How to run a Docker image from CMD?</h3>
            <CodeBlock
              description="To run the previously created image from the Dockerfile, execute the following command"
              commands={[
                "docker run -p <var>IP_ADDRESS</var>:<var>OPENED_CONTAINER_PORT</var>:<var>LOCAL_BROADCASTING_PORT</var>/<var>PROTOCOL</var> <var>IMG_ID</var>",
                "<var>EXAMPLE</var> docker run -p 127.0.0.1:8080:80/tcp <IMG-ID>",
              ]}
            />
            <p className={styles.sectionContentText}>The above command starts the Docker container on our local machine on port 80. The application in the container listens on port 8080. The container port 8080 has been mapped to local port 80.<br /><br />If everything went well, your application should be available at 127.0.0.1:80 or localhost:80.</p>
            <ArticleImportantInfo
              type="hint"
              title="Do I have to specify port 80 in the URL?"
              content="Web applications by default listen on ports 80 and 443. If you do the above mapping, just enter 127.0.0.1 or localhost in the browser's URL bar and the browser will automatically redirect you to port 80.<br/><br/>This happens because all browsers automatically connect the client to port 80 and then to port 443 if an SSL certificate is available."
            />
          </div>
        </section>
        {/* Podsumowanie */}
        {/* <section id="instalacja-i-konfiguracja-clamav" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Podsumowanie</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Kilka słów na zakończenie</h3>
            <p className={styles.sectionContentText}>Na samym poczatku chciałbym podziękować Ci za cierpliwość i pogratulować wytrwałości. Mam nadzięję, że niniejszy artykuł był dla Ciebie zrozumiały. W razie gdybyś miał jakieś problemy zawsze możesz odezwać się do mnie prywatnie w celu otrzymania pomocy.<br /><br />Jak sam widzisz, bezpieczna konfiguracja Twojego nowego serwera VPS wcale nie jest taka trudna jakby się to wydawało. Działanie to tak na prawdę, w głównej mierze opiera się na pewnych powielanych schamatach, które wraz z upływem czasu są aktualizowane o bezpieczniejsze rozwiązania. Serwer który dzisiaj przygotowaliśmy możesz wykorzystać do hostowania swoich pierwszych aplikacji. Jest on bezpiecznie skonfigurowany i nie powinien pozwolić na włam.<br /><br />Niniejszy artykuł jest pierwszym z serii kursu "Od zera do DevOps'era". Pamiętaj że jest to dopiero pierwszy etap, w którym wspólnie przygotowaliśmy podłoże pod postawienie naszej aplikacji webowej. Skupiliśmy się przede wszystkich na podstawach, czyli na tym aby nasza infrastruktura serwerowa była bezpieczna już od pierwszego jej uruchomienia.<br /><br />W kolejnych cześćiach kursu poznamy kolejne kroki mające na celu kompletny deployment aplikacji webowej za pomocą technologii Docker. Poznamy podstawy bezpiecznego Tworzenia obrazów Dockera, poznamy szczegóły komendy Docker Compose oraz finalnie udostepnimy naszą aplikację światu za pomocą narzędzia jakim jest Traefik. Przed nami masa dobrej zabawy. Nie zapomnij obserwować mojej strony aby być na bieżąco z najnowszymi kursami.</p>
          </div>
        </section> */}
      </article >
    </main >
  )
}