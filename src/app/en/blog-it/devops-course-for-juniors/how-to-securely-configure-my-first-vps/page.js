import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/ubuntu_blog.webp";
import firewallChart from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/firewall_chart.png";
import firewallConfig from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/firewall_config.png";
import output1 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_1.png";
import output2 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_2.png";
import output3 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_3.png";
import output4 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_4.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'How to securely configure my first VPS server?',
  description: 'Configuring your first VPS server securely is not as scary as you think...',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/how-to-securely-configure-my-first-vps',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/jak-bezpiecznie-skonfigurowac-moj-pierwszy-serwer-vps',
      "en": "https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/how-to-securely-configure-my-first-vps"
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Introduction", url: "/en/blog-it/devops-course-for-juniors" }}
        nextLesson={{ title: "Lesson 2", url: "/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="How do I <span class='purple'>securely</span> configure my first VPS server?"
            articleInfo={{ time: "2 hours", specialization: "DevOps", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="VPS Server Configuration Step by Step"
            contents={[
              { text: "Introduction to VPS", url: "#introduction-to-vps", icon: "pageIcon" },
              { text: "Linux login and update", url: "#linux-login-and-update", icon: "pageIcon" },
              { text: "Linux Firewall Configuration", url: "#linux-firewall-configuration", icon: "pageIcon" },
              { text: "New Sudoer + SSH Key", url: "#new-sudoer-and-ssh-key", icon: "pageIcon" },
              { text: "Secure SSH Configuration", url: "#secure-ssh-configuration", icon: "pageIcon" },
              { text: "Fail2ban Installation and Configuration", url: "#installation-and-configuration-fail2ban", icon: "pageIcon" },
              { text: "Antivirus installation and configuration", url: "#clamav-installation-and-configuration", icon: "pageIcon" }
            ]}
          />
        </div>
        {/* Wprowadzenie Do VPS */}
        <section id="introduction-to-vps" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Introduction to VPS</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. What is a VPS server? (Virtual Private Server)</h3>
            <p className={styles.sectionContentText}>A virtual private server (VPS) is the perfect solution for those who need more control and flexibility than traditional hosting. VPS provides dedicated resources, greater security (correctly configured) and performance. It's a great choice for growing businesses, developers, and high-traffic websites. With VPS, you can easily scale your resources, manage applications and enjoy the independence of a dedicated server at an affordable price.</p>
            <h3 className={styles.sectionContentHeader}>2. Why choose VPS instead of Shared Hosting?</h3>
            <p className={styles.sectionContentText}>Choosing VPS over shared hosting provides greater performance, security and flexibility. VPS gives you dedicated resources, which eliminates the risk of performance degradation by other users. It also offers full control over the server configuration and the ability to adapt resources to individual needs. Perfect for websites with higher traffic and companies that need stability and better data protection.<br /><br />Moreover, when we use Shared Hosting services, we are able to run only one application assigned to a given hosting. We are thus technologically and cost-limited. Currently, the prices of Shared Hosting usually start from PLN 100 per year, while we can get a cheap VPS from as little as PLN 260 per year.<br /><br />Are you asking where the savings of VPS over Shared Hosting appear? , as I mentioned earlier, on Shared Hosting we are able to run only one website, while VPS allows us to host an unlimited number of websites, limited only by our system resources.<br /><br />It is also worth mentioning at the very end a very an important aspect which are the technological limitations of Shared Hosting. Over 90% of Shared Hosting providers are mainly focused on supporting Wordpress applications, which may make it impossible to run applications based on technologies such as React, Laravel, Django or .NET on such a service.</p>
            <h3 className={styles.sectionContentHeader}>3. Where to buy a VPS server?</h3>
            <p className={styles.sectionContentText}>It is worth considering purchasing a VPS server from reputable providers such as OVH, Hetzner, Hostinger, Google or DigitalOcean. The key criteria are reliability, performance and technical support. Be sure to pay attention to the location of servers, scalability options and the availability of additional services such as backups, external firewall and DDoS protection. Compare the offers and choose the solution that suits your needs.<br /><br />I personally serve my clients using Hostinger solutions (unsponsored article, unfortunately...).<br /><br />The company offers offers us VPS at very affordable prices. We can choose from server locations around the world. Additionally, we have access to functionalities such as External Firewall, Weekly Backups (included in the price), Basic server monitoring, and basic antivirus.</p>
            <Link href="https://hostinger.pl?REFERRALCODE=1WAIROUS35G77" target="_blank" className={styles.linkBtn}>Buy a VPS server</Link>
          </div>
        </section>
        {/* LOGOWANIE I AKTUALIZACJA LINUXA */}
        <section id="linux-login-and-update" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Linux login and update</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Before you start with VPS</h3>
            <p className={styles.sectionContentText}>Before we start the safe configuration of our VPS server, you must have one very important issue in mind, namely the fact that Linux as an operating system has many different distributions that differ not only in their applications, but also and architecture. This means that, depending on the selected distribution, it may be necessary to use other commands to perform certain operations.<br /><br />I personally use Ubuntu and this tutorial was written with Ubuntu users in mind. If you use another Linux distribution, nothing is lost.<br /><br />You can still use this material, but you will have to find the appropriate commands for your operating system distribution in several places.<br /><br />In addition, this article assumes that you have already deployed your Linux and are able to log in to it using SSH.<br /><br />If you do not know how to do this yourself, I invite you to this article in which, together, step by step we install our Linux on the servers of an external VPS Server Distributor</p>
            <h3 className={styles.sectionContentHeader}>1. How to log in to Linux? (SSH)</h3>
            <p className={styles.sectionContentText}>SSH (Secure Shell) is a network protocol that ensures secure communication between computers. It enables remote login, server management and file transfer, while protecting your data with encryption. SSH is indispensable for system administrators and developers, guaranteeing the privacy and integrity of information. It is a standard server management tool used in various IT environments.</p>
            <CodeBlock
              description="To log in to your machine for the first time, execute the command (Use a terminal e.g. Powershell or Terminus)"
              commands={[
                "ssh -p 22 root@<var>ip-of-our-vps</var>"
              ]}
            />
            <p className={styles.sectionContentText}>When you log in for the first time, you will be asked to confirm the creation of the keys. After acceptance, you will be connected to your server.</p>
            <ArticleImportantInfo
              type="warning"
              title="Login as Root"
              content="You have currently logged in to your VPS server as Root (Super User). This practice is never recommended until you are an advanced user. Nevertheless, it is required when first configuring our server.<br/><br/>Later At this stage, we will implement basic security rules, completely blocking the possibility of logging in remotely to the system as Root."
            />
            <h3 className={styles.sectionContentHeader}>2. How to update Linux? (Ubuntu)</h3>
            <p className={styles.sectionContentText}>The first step after logging in to a new machine should be to update it. If you have already learned the basics of Linux, the following commands should be familiar to you.</p>
            <CodeBlock
              commands={[
                'sudo apt update && sudo apt upgrade -y'
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Don't know Linux commands yet?"
              content="At the beginning of your adventure with Linux Administration, many commands may be unfamiliar and incomprehensible to you.</br/>Don't be afraid, I didn't know many things when I started. Fortunately, we live in times with access to the Internet :)< br />There are many Shell Explain applications available on the Internet!"
              cta={{ link: "https://shell.how", text: "Go to shell.how &rarr;" }}
            />
          </div>
        </section>
        {/* Konfiguracja Firewall'a Linux */}
        <section id="linux-firewall-configuration" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Linux Firewall Configuration</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Before you start, configure the Firewall</h3>
            <p className={styles.sectionContentText}>A firewall is an essential tool for controlling traffic coming in and out of your server. It is the first element of the entire system that receives all queries directed to your VPS server. A properly configured firewall can almost completely protect our system, but also if it is programmed too aggressively, we can block access to our network applications.<br /><br />Before we get to the heart of the matter, it is worth knowing that we distinguish 2 types of firewalls:</p>
            <ul>
              <li>External firewall (e.g. the one from the VPS provider)</li>
              <li>Internal Firewall (active directly on our Linux) </li>
            </ul>
            <Image className={styles.blogImg} src={firewallChart} alt="External + Internal Firewall Configuration" />
            <p className={styles.sectionContentText}>The firewall acts as a kind of filter through which all queries directed to our server pass. It's up to us what traffic we allow. The firewall configuration is mainly based on access to individual ports in our system.<br /><br />If you have problems running any application on the production server, first make sure that the port on which the application is transmitting is not blocked by one of the above-mentioned Firewalls</p>
            <h3 className={styles.sectionContentHeader}>1. How to configure an external firewall?</h3>
            <p className={styles.sectionContentText}>If your VPS server provider does not offer an External Firewall, you can skip this step without any problems.<br />It is not necessary due to the fact that the internal Linux implementation of the Firewall' and it should be 100% sufficient.<br /><br />The external firewall serves as additional security, which facilitates work mainly via the GUI.<br /><br />Below is an example configuration of my external firewall at Hostinger provider.</p>
            <ul>
              <li>It blocks access to all available TCP and UDP ports</li>
              <li>Opens ports 80 and 443 (Web Applications)</li>
              <li>Opens port 22 for the specified IP address (SSH with IP filter)</li>
            </ul>
            <Image className={styles.blogImg} src={firewallConfig} alt="Internal Firewall Configuration" style={{ maxWidth: 640 }} />
            <h3 className={styles.sectionContentHeader}>2. How to configure a Linux firewall? (UFW)</h3>
            <p className={styles.sectionContentText}>It's time for what tigers like the most, i.e. a return to the old and proven Command Line.<br />Below we will implement exactly the same solution as in the External Firewall.<br /><br />For this purpose, we will use a simplified Linux Firewall management interface called UFW (Uncomplicated Firewall)<br />We will do the following:</p>
            <ul>
              <li>We will block all incoming connections</li>
              <li>We will unblock all outgoing connections</li>
              <li>We will allow SSH access (Port 22)</li>
              <li>We will allow access to ports 80 and 443</li>
            </ul>
            <CodeBlock
              description="Installation of Uncomplicated Firewall"
              commands={[
                "sudo apt install ufw"
              ]}
            />
            <CodeBlock
              description="UFW Basic Rules Configuration"
              commands={[
                "sudo ufw default deny incoming",
                "sudo ufw default allow outgoing",
                "sudo ufw allow ssh",
                "sudo ufw allow 80/tcp",
                "sudo ufw allow 443/tcp"
              ]}
            />
            <CodeBlock
              description="Enable UFW"
              commands={[
                "sudo ufw enable",
                "sudo ufw status"
              ]}
            />
            <p className={styles.sectionContentText}>This way we managed to configure our internal Firewall in a safe way. We blocked access to all ports and allowed only access to SSH (Port 22) and ports 80, 443 on which our Reverse-Proxy will listen in the future in order to host our web applications.</p>
            <ArticleImportantInfo
              type="warning"
              title="IP Filtration for Port SSH(22)"
              content="If you decide to implement access to port 22 only using selected IPs using UFW, you may lose access to your server<br/><br/>This may happen if your Internet provider rotates IP addresses. Before you decide undergoing such a procedure, it will make 100% sure that your IP address is statically defined. <br/><br/>If it turns out that your IP address is dynamic, you can always implement IP filtering for SSH Port(22) using External Firewall."
            />
          </div>
        </section>
        {/* Nowy Użytkownik Sudoer + SSH Key */}
        <section id="new-sudoer-and-ssh-key" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>New User with sudo permissions + SSH Key</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. How to create a new sudo Linux user?</h3>
            <p className={styles.sectionContentText}>A user with sudo privileges is also called a Superuser due to the ability to perform actions reserved only for Root. An account that has such permissions can be called an administrative account.</p>
            <CodeBlock
              description="Create new user"
              commands={[
                "sudo adduser <var>username</var>"
              ]}
            />
            <CodeBlock
              description="Grant sudo permissions to the new user"
              commands={[
                "sudo usermod -aG sudo <var>username</var>"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>2. How to create SSH keys for a new Linux user?</h3>
            <p className={styles.sectionContentText}>In the next section, we will increase the security of our server by allowing login to it only using SSH keys.<br />At the beginning of this tutorial, you used your password for a given user to log in to the server via SSH. <br /><br />This approach is dangerous because in extreme cases, when your password is compromised, an unauthorized person will gain access to your VPS server, thanks to which they will be able to do whatever they want with it.<br /><br />The solution to this problem is to limit SSH login to only the use of SSH Keys.<br />In this case, as long as your key file is safely stored with you, no one will be able to log in to your server via SSH.<br /><br />This tutorial assumes that you do not have any SSH keys on your Local Computer yet </p>
            <CodeBlock
              description="On your local computer, run the following command to generate an SSH key pair (e.g. Windows, Mac)"
              commands={[
                "ssh-keygen -t rsa -b 4096"
              ]}
            />
            <p className={styles.sectionContentText}>Using this command will create two files on your local machine at the following path <span className={styles.pathBox}>C:\Users\user-name\.ssh</span></p>
            <ul>
              <li>id_rsa - Your private SSH key (Place on VPS)</li>
              <li>id_rsa.pub - Public SSH Key (Use to log in)</li>
            </ul>
            <ArticleImportantInfo
              type="warning"
              title="Backup SSH Keys"
              content="It is very important to save your local id_rsa file on some portable disk, because if it is deleted or malformed, you will not be able to log in to your VPS server!!!"
            />
            <h3 className={styles.sectionContentHeader}>3. How to add SSH keys to a new Linux user on a VPS?</h3>
            <p className={styles.sectionContentText}>The next step is to properly prepare the Linux user account that you created in the first subsection of this stage.<br /><br />We have the following steps to perform:</p>
            <ol>
              <li>Copying the Public Key from the Local Computer to our VPS Server</li>
              <li>Adding the Public Key to our new Linux User's account</li>
              <li>Test the configuration (Necessary)</li>
            </ol>
            <CodeBlock
              description="On the VPS server, you must execute the following commands to create an SSH directory for the new User"
              commands={[
                "mkdir /home/<var>new-username</var>/.ssh"
              ]}
            />
            <CodeBlock
              description="Change the new directory's affiliation from Root to New User"
              commands={[
                "sudo chown -R <var>n-n-user</var>:<var>n-n-user</var> /home/<var>n-n-user</var>/.ssh"
              ]}
            />
            <CodeBlock
              description="On your local computer, run the following command to copy the Public Key to the VPS Server"
              commands={[
                "scp C:/Users/<var>username</var>/.ssh/id_rsa.pub <var>new-username</var>@<var>ip-server-vps</var>: ~/.ssh"
              ]}
            />
            <p className={styles.sectionContentText}>You will be asked to enter the password for the new user you created.<br />When everything goes well, you should have an id_rsa.pub file in your new Linux user's .ssh folder.</p>
            <CodeBlock
              description="The final step is to add the SSH Key to the Authorized Keys on the VPS Server"
              commands={[
                "cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys",
                "rm ~/.ssh/id_rsa.pub"
              ]}
            />
            <p className={styles.sectionContentText}>In this way, you have correctly added your SSH Key to the Authorized Keys on the server.<br />In the next stages of the guide, you will learn how to activate the ability to log in using SSH Keys</p>
          </div>
        </section>
        {/* Bezpieczna Konfiguracja SSH */}
        <section id="secure-ssh-configuration" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Secure SSH Configuration (Secure Shell)</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. How to change the default SSH port?</h3>
            <p className={styles.sectionContentText}>SSH (Secure Shell) is a protocol used to remotely manage a server. Default SSH settings can be potentially dangerous, so it is worth configuring them appropriately.<br /><br />The default SSH port (22) is often the target of attacks. Changing the port to a different one may make it more difficult for potential hackers to access the server.</p>
            <ArticleImportantInfo
              type="hint"
              title="Hint !"
              content="Remember that this is not a necessary step, you can also filter the acceptable IPs to port 22 using Firewall<br />If you are a more advanced user, you can also consider using the Port Knock method.<br />Remember that the number of possible solutions are unlimited and the only limitations may be those related to lack of experience."
            />
            <CodeBlock
              description="Make a backup of your sshd_config file (just in case)"
              commands={[
                "sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup"
              ]}
            />
            <CodeBlock
              description="Open the sshd_config document with your chosen Linux text editor (e.g. nano)"
              commands={[
                "sudo nano /etc/ssh/sshd_config"
              ]}
            />
            <CodeBlock
              description="Locate the line containing the text #Port 22"
              commands={[
                "port 2200 <-- Remove the # sign and enter a new SSH port (e.g. 2200)"
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Hint !"
              content="If you use the nano text editor like me, you can use the following shortcuts:<br/><br/>CTRL + W <-- Search<br/>CTRL + S <-- Save File<br/>CTRL + X <-- Exit Editor<br/><br/>Most useful shortcuts should be visible at the bottom of the screen when you open the editor."
            />
            <p className={styles.sectionContentText}>Save changes</p>
            <ArticleImportantInfo
              type="warning"
              title="Warning!"
              content="Before making changes, remember to make appropriate changes to your External and Internal Firewall to allow connections to the new SSH port. Otherwise, you will be without access to the server...<br/><br/>Remember that after making new rules, restart UFW to implement the new configuration!!! (Command in the next step)"
            />
            <h3 className={styles.sectionContentHeader}>2. How to disable root logging in Linux?</h3>
            <p className={styles.sectionContentText}>Logging in as root directly via SSH is unsafe. A better solution is to use a user account with sudo permissions.</p>
            <CodeBlock
              description="To lock, reopen the sshd_config file and add the following information to the end of the file"
              commands={[
                "PermitRootLogin no <-- Add to end of file or find in file"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. How to enable logging in using SSH keys in Linux?</h3>
            <p className={styles.sectionContentText}>Why we should use SSH keys was explained in the previous chapter. However, we still don't know how to allow their use.</p>
            <CodeBlock
              description="Reopen the sshd_config file and make sure the specified option is enabled"
              commands={[
                "PubkeyAuthentication yes <-- There cannot be a # sign in front of it"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>4. How to restart SSH service in Linux?</h3>
            <p className={styles.sectionContentText}>In order to implement the changes we have made, you will need to restart the SSH service</p>
            <CodeBlock
              description="Run the following command on your Linux VPS"
              commands={[
                "sudo systemctl restart ssh"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>5. How to use an SSH key to log in to Linux?</h3>
            <p className={styles.sectionContentText}>Before we continue, make sure your SSH keys have been successfully configured.</p>
            <CodeBlock
              description="Open a new Terminal on your Local Computer and do the following command"
              commands={[
                "ssh -p <var>new-ssh-port</var> <var>n-n-user</var>@<var>ip-vps</var> -i <var>path-to-id_rsa</var >"
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Where is the id_rsa file?"
              content='Your id_rsa file can be found after entering the command “ ~/.ssh” (Local Computer) in the terminal.'
            />
            <ArticleImportantInfo
              type="how"
              title="Are SSH keys working properly?"
              content="If everything was configured correctly when logging in to SSH with a Key, you should not be asked for a password.<br />If you were asked for a user password anyway, it means that you made a mistake somewhere.<br/><br />Remember not to confuse the request for the user' s password with the request for the password for the id_rsa key<br />If you entered phasphrase when creating the keys, you will then be asked for the password for your id_rsa key, which is normal behavior."
            />
            <p className={styles.sectionContentText}>When you are 100% sure that your SSH keys are working properly, you can proceed to the next section.</p>
            <h3 className={styles.sectionContentHeader}>6. How to block SSH login to Linux using a password?</h3>
            <p className={styles.sectionContentText}>This operation is optional, but its implementation significantly increases the security of your VPS server.<br /><br />Open the sshd_config file again and check what directory it contains in the first line.<br />In my case it is <span className={styles.pathBox}>/etc/ssh/sshd_config.d</span></p>
            <Image className={styles.blogImg} src={output1} alt="Start of sshd_config file" style={{ maxWidth: 360 }} />
            <p className={styles.sectionContentText}>Go to the above directory and check what files it contains </p>
            <CodeBlock
              description="Go to directory"
              commands={[
                "cd <var>/path/to/your/directory</var>"
              ]}
            />
            <CodeBlock
              description="List directory"
              commands={[
                "ls-la"
              ]}
            />
            <p className={styles.sectionContentText}>In my case I got the following results</p>
            <Image className={styles.blogImg} src={output2} alt="Directory /etc/ssh/sshd_config.d" style={{ maxWidth: 600 }} />
            <p className={styles.sectionContentText}>The indicated files are additional SSH configuration files usually created by your VPS server provider.<br />Check what information your files contain.<br />In my case, the file that needs to be changed looks like this following</p>
            <Image className={styles.blogImg} src={output3} alt="Directory /etc/ssh/sshd_config.d" style={{ maxWidth: 600 }} />
            <p className={styles.sectionContentText}>Edit each file that contains the above line of text by changing the option "yes" to "no"</p>
            <CodeBlock
              description="Edit files"
              commands={[
                "sudo nano <var>filename</var>"
              ]}
            />
            <CodeBlock
              description='Replace “yes” with “no”'
              commands={[
                "PasswordAuthentication no"
              ]}
            />
            <ArticleImportantInfo
              type="warning"
              title="Before you restart your SSH service"
              content="Before performing the above operation, make sure that your SSH Keys are working properly.<br/>Otherwise, you will permanently lose access to your VPS and the data contained in it.<br/><br/>If it is a test server nothing is lost, just deploy it again.<br />Remember not to perform such actions on the production server if you don' t feel up to it yet!!!"
            />
            <CodeBlock
              description="Restart SSH service"
              commands={[
                "sudo systemctl restart ssh"
              ]}
            />
            <p className={styles.sectionContentText}>At this point we should log out of the root shell and start using our newly created Administrator account.</p>
          </div>
        </section>
        {/* Konfiguracja Fail2Ban */}
        <section id="installation-and-configuration-fail2ban" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Fail2Ban Installation and Configuration</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. What is Fail2Ban?</h3>
            <p className={styles.sectionContentText}>Fail2Ban is a tool that protects servers against unauthorized access. Monitors system logs to detect suspicious activity, such as multiple failed login attempts. If such behavior is detected, Fail2Ban blocks the source IP address for a specified period of time, reducing the risk of brute-force attacks. It works with various services, such as SSH, Apache, and Postfix, providing flexible and effective protection.<br /><br />In the following part of this course, you will learn the basics of configuring and using this tool.</p>
            <ArticleImportantInfo
              type="how"
              title="How does Fail2Ban work?"
              content="Fail2Ban is a tool that is mainly based on managing your Internal Firewall. File2Ban constantly monitors your system logs to detect unwanted behavior. When a given event from a specific IP address is performed too many times, Fail2Ban will automatically add a new rule to your Firewall blocking a given IP address for a specified amount of time. When the banning period ends, the given rule will be automatically removed from the Internal Firewall."
            />
            <h3 className={styles.sectionContentHeader}>2. How to install Fail2Ban?</h3>
            <CodeBlock
              description="To install, execute the command (as sudoer)"
              commands={[
                "sudo apt install fail2ban"
              ]}
            />
            <CodeBlock
              description="Verify the installation by checking the F2B logs to make sure there are no errors"
              commands={[
                "cat /var/log/fail2ban.log"
              ]}
            />
            <CodeBlock
              description="Check the status of the F2B website"
              commands={[
                "systemctl status fail2ban",
                "sudo fail2ban-client status"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. How to configure Fail2Ban?</h3>
            <p className={styles.sectionContentText}>The Fail2Ban service stores its configuration data in the jail.conf file, which can be found in the /etc/fail2ban directory.<br />Before we move on, let's check what is hidden in the first 20 lines of this file. </p>
            <CodeBlock
              description="Check the beginning of the file /etc/fail2ban/jail.conf"
              commands={[
                "head -20 /etc/fail2ban/jail.conf"
              ]}
            />
            <Image className={styles.blogImg} src={output4} alt="Directory /etc/ssh/sshd_config.d" style={{ maxWidth: 750 }} />
            <p className={styles.sectionContentText}>It is easy to notice that at the beginning of the file all fields are marked as comments, as evidenced by the # symbol at the beginning of each line.<br />This data serves as an introductory manual for the Fail2Ban tool.<br /><br />The most important information is that you should NOT change the jail.conf file directly, but make any changes using the jail.local file</p>
            <ArticleImportantInfo
              type="hint"
              title="File comparison - jail.conf vs jail.local"
              content="The jail.conf file belongs to the installation package of the Fail2Ban tool and is a file that is automatically overwritten with each update of the tool.<br />If you decided to perform F2B configuration in the jail.conf file, you would lose your setup with the next update of the tool. "
            />
            <p className={styles.sectionContentText}>Now that we have the basics covered, it's time to learn how to configure fail2ban.</p>
            <CodeBlock
              description="Go to Fail2Ban folder"
              commands={[
                "cd /etc/fail2ban"
              ]}
            />
            <CodeBlock
              description="Copy jail.conf to jail.local"
              commands={[
                "sudo cp jail.conf jail.local"
              ]}
            />
            <CodeBlock
              description="Open the jail.local file and start reading it"
              commands={[
                "sudo nano -l jail.local"
              ]}
            />
            <p className={styles.sectionContentText}>By viewing the jail.local file, we can see that line 41 is the beginning of the basic Fail2Ban configuration.<br /><br />If we go a little lower, we can find out that:</p>
            <ul>
              <li>The maximum number of failed login attempts can be 5 (Line 10 8)</li>
              <li>The time window for detecting failed login attempts is 10m (Line 105)</li>
              <li>IP banning time is 10m (Line 101)</li>
            </ul>
            <p className={styles.sectionContentText}>The above parameters tell us that if the client makes 5 incorrect login attempts within 10 minutes, his IP will be banned for 10 minutes. After this time, his IP address will be unblocked again.</p>
            <h3 className={styles.sectionContentHeader}>4. How to read Fail2Ban logs?</h3>
            <p className={styles.sectionContentText}>Fail2Ban also has its own log system which is correlated with other most important system logs.<br />With its help we can check all the most important events that have been recorded by our system.</p>
            <CodeBlock
              description="How to open the Fail2Ban log?"
              commands={[
                "sudo cat /var/log/fail2ban.log"
              ]}
            />
            <CodeBlock
              description="How to open the SSH log?"
              commands={[
                "sudo cat /var/log/auth.log"
              ]}
            />
            <p className={styles.sectionContentText}>Spend 15 minutes on your own to analyze the above logs to thoroughly understand their nature.<br />Remember that you gain more knowledge through independent learning and dedicated exploration of the topics of your interests.<br />The most important thing is skillfully asking yourself questions: How?, Why?, What for? When?<br /><br />Example questions:</p>
            <ul>
              <li>How can I check the IP address of the person who recently tried to SSH login to my VPS?</li>
              <li>How did the person authenticate with my VPS Server?</li>
              <li>Has the IP address been successfully banned by Fail2Ban?</li>
            </ul>
            <h3 className={styles.sectionContentHeader}>5. How to verify if Fail2Ban is working properly?</h3>
            <p className={styles.sectionContentText}>So far, we have already managed to acquire a really large and valuable piece of knowledge. However, theoretical knowledge and practical knowledge, especially in IT fields, often differ from the truth. Each time you implement a new solution on your server, you should be able to test whether the solution is working properly. The ability to install a given website is not difficult. The most important thing is the appropriate configuration of a given solution and its constant testing and improvement appropriate to the technologies we use.<br /><br />In order to perform basic Fail2Ban tests, we will make several attempts to log in to our VPS Server using SSH.<br />In To do this, open a new terminal so that you can simultaneously access the terminal where you are connected to your VPS and an empty new window.</p>
            <ArticleImportantInfo
              type="how"
              title="Hint"
              content="If you have disabled the ability to log in with a password in the Secure SSH Configuration subsection, you can:<br /><br/>1. Unlock the ability to log in with a password for the duration of the tests<br/>2. Create a backup of your id_rsa key, and then edit your key so that it is different from the original one.<br/><br/>If you choose the second option, be sure to restore your id_rsa key to the backup version after completing the tests, otherwise you will permanently lose the ability to log in to your server <br/><br/>I would like to remind you once again how important it is to have at least several copies of your SSH keys in different places."
            />
            <CodeBlock
              description="Make a new SSH connection (New Terminal)"
              commands={[
                "ssh -p <var>port-ssh</var> <var>n-n-user</var>@<var>ip-vps</var>"
              ]}
            />
            <p className={styles.sectionContentText}>If you chose the second method, which assumes a malformation of the id_rsa key, you should be asked for a password at this point.<br />Enter the incorrect password a maximum of 3 times.</p>
            <CodeBlock
              description="Check Logs (Terminal Logged in to VPS)"
              commands={[
                "sudo cat /var/log/fail2ban.log",
                "sudo cat /var/log/auth.log"
              ]}
            />
            <p className={styles.sectionContentText}>The logs should include information about your IP address and failed login attempts.<br />Read these logs and make sure you understand what they mean. </p>
            <CodeBlock
              description="Make 2 more login attempts (New Terminal)"
              commands={[
                "ssh -p <var>port-ssh</var> <var>n-n-user</var>@<var>ip-vps</var>"
              ]}
            />
            <p className={styles.sectionContentText}>At this point, if everything is working properly, your IP address should be blocked for 10 minutes. Unfortunately, if you do not have a second IP address, you must wait this time before you will be able to log in to your VPS server again. Just remember to restore a copy of your id_rsa file this time.</p>
            <ArticleImportantInfo
              type="hint"
              title="How to unblock IP in Fail2Ban Linux?"
              content={`If you don' t feel like waiting for your IP to be unblocked, you can always share your Internet from a phone that will have a different IP<br />Run the command "sudo fail2ban-client set sshd unbanip <your-ip>`}
            />
            <h3 className={styles.sectionContentHeader}>6. Fail2Ban Summary</h3>
            <p className={styles.sectionContentText}>In this chapter, we learned the minimal and basic configuration and operation of the Fail2Ban website. Due to the fact that this guide is intended to introduce you to the world of independent VPS configuration, I am not able to describe the details of this tool here.<br /><br />I encourage you to explore it yourself. Remember that thanks to Google and Chat-GPT you will be able to discover all the secrets of this tool on your own. The knowledge you gain in this way will be consolidated in a much better way, because you will have to learn step by step how a given solution works.<br /><br />Also, don't forget to constantly check my website, more will probably appear here in the future an extensive and comprehensive article on advanced configuration of the Fail2Ban service </p>
          </div>
        </section>
        {/* Konfiguracja ClamAV */}
        <section id="clamav-installation-and-configuration" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>ClamAV antivirus</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. What is ClamAV?</h3>
            <p className={styles.sectionContentText}>ClamAV, or Clam AntiVirus, is one of the most popular and comprehensive tools for detecting viruses in Linux systems. Its open-source nature, regular updates and the ability to integrate with a variety of systems make it an ideal choice for administrators who care about the security of their servers.<br /><br />ClamAV was originally designed mainly for Linux systems, although it is also available for other platforms such as Windows and macOS. It offers a number of features that help detect and remove malicious software, including viruses, Trojans, malware and other threats. It consists of 3 basic elements:</p>
            <ul>
              <li>ClamD: Daemon that is responsible for background scanning.</li>
              <li>ClamScan: Command-line tool that allows you to manually scan files.</li>
              <li>FreshClam: Service responsible for automatic virus database updates.</li>
            </ul>
            <ArticleImportantInfo
              type="how"
              title="How does ClamAV work?"
              content="ClamAV works by comparing files with a virus signature database. This database is regularly updated by the community and developers, ensuring protection against the latest threats.."
            />
            <h3 className={styles.sectionContentHeader}>2. How to install ClamAV?</h3>
            <CodeBlock
              description="To install, execute the command (as sudoer)"
              commands={[
                "sudo apt install clamav clamav-daemon"
              ]}
            />
            <CodeBlock
              description="Restart your VPS server"
              commands={[
                "sudo reboot"
              ]}
            />
            <CodeBlock
              description="Update virus database"
              commands={[
                "sudo freshclam"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. How to configure ClamAV?</h3>
            <p className={styles.sectionContentText}>The default ClamAV configuration should be fine for most users.<br />Still, edit the ClamAV configuration file to customize the settings to suit your needs.</p>
            <CodeBlock
              description="Open the configuration file and read its contents"
              commands={[
                "sudo nano /etc/clamav/clamd.conf",
                "sudo nano /etc/clamav/freshclam.conf"
              ]}
            />
            <CodeBlock
              description="If you have made any changes to the configuration, do not forget to restart the ClamAV website"
              commands={[
                "sudo systemctl restart clamav-daemon",
                "sudo systemctl restart clamav-freshclam"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>4. How to scan a Linux system with ClamAV?</h3>
            <CodeBlock
              description="Directory Scanning"
              commands={[
                "sudo clamscan -r /path/to/directory"
              ]}
            />
            <CodeBlock
              description="Whole System Scan"
              commands={[
                "sudo clamscan -r /"
              ]}
            />
            <CodeBlock
              description="Whole System Scan (Show only infected files)"
              commands={[
                "sudo clamscan -r --infected/"
              ]}
            />
            <CodeBlock
              description="Whole System Scan (Save scan result)"
              commands={[
                "sudo clamscan -r --infected / > ~/clamav_output.txt"
              ]}
            />
            <CodeBlock
              description="Whole System Scan (Automatic Virus Removal)"
              commands={[
                "sudo clamscan -r --infected --remove /"
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="How to cancel a command in the terminal?"
              content="If your terminal is blocked by the currently running command, you can cancel it with CTRL + C"
            />
          </div>
        </section>
        {/* Podsumowanie */}
        <section className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Summary</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>A few final words</h3>
            <p className={styles.sectionContentText}>At the very beginning, I would like to thank you for your patience and congratulate you on your perseverance. I hope this article was understandable to you. If you have any problems, you can always contact me privately for help.<br /><br />As you can see, safely configuring your new VPS server is not as difficult as it seems. In fact, this operation is mainly based on certain duplicated patterns, which are updated with safer solutions over time. You can use the server we have prepared today to host your first applications. It is safely configured and should not allow hacking.<br /><br />This article is the first in the series of the "From Zero to DevOps" course. Remember that this is only the first stage in which we have jointly prepared the ground for building our web application. We focused primarily on the basics, i.e. ensuring that our server infrastructure is safe from the first start.<br /><br />In the next parts of the course, we will learn the next steps to complete the deployment of a web application using Docker technology. We will learn the basics of safely creating Docker images, learn the details of the Docker Compose command and finally make our application available to the world using the Traefik tool. There's a lot of fun ahead of us. Don't forget to follow my website to stay up to date with the latest courses.</p>
          </div>
        </section>
      </article>
    </main >
  )
}