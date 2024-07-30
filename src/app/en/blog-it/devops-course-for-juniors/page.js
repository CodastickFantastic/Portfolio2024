import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/coursesPresentation/lesson_101.png";
import roadMapImg from "@/../public/blogImgs/coursesPresentation/devOps_roadmap.png";


export const metadata = {
  title: 'DevOps Course for Juniors - From 0 to DevOps in a few steps',
  description: 'Take your first steps in DevOps and learn how to host applications on a VPS yourself.',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow',
      "en": "https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors"
    }
  }
}

export default function KursDevOpsDlaJuniorow() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator nextLesson={{ title: "Lesson 1", url: "/en/blog-it/devops-course-for-juniors/how-to-securely-configure-my-first-vps" }} />
      <article>
        <div className={styles.articleContainer}>
          {/* Spis Treści + Hero */}
          <ArticleHeader
            h1="<span class='purple'>DevOps</span> for Juniors<br/>"
            underTitle="From 0 to DevOps in a few steps"
            articleInfo={{ time: "Hurry slowly", specialization: "DevOps", level: "Junior - Mid" }}
            headerImg={articleHero}
            contentsTitle="Basics of Hosting on Your Own VPS Server"
            contents={[
              { text: "Secure configuration of a VPS server", url: "/en/blog-it/devops-course-for-juniors/how-to-securely-configure-my-first-vps", icon: "pageIcon" },
              { text: "Application Dockerization - Docker Basics", url: "/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics", icon: "pageIcon" },
              { text: "Docker Compose - YAML Basics", url: "/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics", icon: "pageIcon" },
              { text: "Image Storage - Github Container Registry", url: "/en/blog-it/devops-course-for-juniors", icon: "pageIcon", notAvailable: true },
              { text: "Show the App to the World - Traefik Reverse Proxy", url: "/en/blog-it/devops-course-for-juniors", icon: "pageIcon", notAvailable: true },
              { text: "CI/CD Docker x GithubActions", url: "/en/blog-it/devops-course-for-juniors", icon: "pageIcon", notAvailable: true }
            ]}
          />
        </div>
        {/* Kurs - Dla Kogo?*/}
        <section id="dla-kogo-kurs-devops" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>DevOps course for newbies, is it for me?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <p className={styles.sectionContentText} style={{ marginTop: 24 }}>The Junior DevOps course is everything you need to get started with self-hosting web applications. This is a solution for people who are just about to be introduced with DevOps and will provide access to practical tips in this field.<br /><br /> thanks to the basic course, you will learn how to effectively host web applications on your own controller. Whether you're an aspiring developer, systems administrator or interested person, the DevOps course provides you with access to the tools and knowledge to break into this exciting field.</p>
            <div className={styles.forWhoSection}>
              <ForWhoTile
                icon="studentIcon"
                title="Computer Science Students"
                subTitle="Technical Secondary School, Studies"
                content="If your field of study is related to Frontend, Backend, DevOps, you will definitely need to self-deploy the application someday."
              />
              <ForWhoTile
                icon="adminIcon"
                title="SystemAdmin"
                subTitle="Junior - Mid"
                content="Are you starting your adventure with Linux? Maybe you already know a bit about DevOps? Regardless of your skill level, you can check out my basic application deployment method."
              />
              <ForWhoTile
                icon="programmerIcon"
                title="Developer"
                subTitle="Mid - Senior"
                content="As a web application developer, you will not always be able to afford professional DevOps services. See for yourself that self-hosting websites is simple."
              />
            </div>
            <RoadMapSection
              title="Tired of information about DevOps?"
              content="If the above materials have started to raise more and more valuable questions in your head about the work and operation of DevOps teams, I strongly encourage you to deepen your knowledge on your own.<br/><br/>Check out the roadmap.sh website where you will find a dedicated RoadMap in where you will be able to learn step by step what skills are required from today's DevOps engineers"
              img={roadMapImg}
              imgAlt="Devops Roadmap - roadmap.sh"
              imgSrc="Source: https://roadmap.sh/devops"
              url="https://roadmap.sh/devops"
            />

          </div>
        </section>
      </article>
    </main>
  )
}

function ForWhoTile({ icon, title, subTitle, content }) {

  return (
    <div className={styles.forWhoTile}>
      <div className={styles.forWhoHeader}>
        <div className={`${styles.icon} ${styles[icon]}`} />
        <div className={styles.title}>
          <p className={styles.mainTitle}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  )
}

function RoadMapSection({ title, content, img, imgAlt, imgSrc, url }) {

  return (
    <div className={styles.roadmapSection}>
      <div className={styles.contentSection}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        <Link href={url} className={styles.roadmapLink} target="_blank">Go to roadmap <span className={`${styles.icon} ${styles.arrow}`} /></Link>
      </div>
      <div className={styles.imageSection}>
        <Image src={img} alt={imgAlt} />
        <p className={styles.imgSrc}>{imgSrc}</p>
      </div>
    </div>
  )
}