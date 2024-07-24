import type { Metadata } from 'next'
import styles from "@/scss/pages/politykaPrywatnosci.module.scss";



export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy of the website jakub wojtysiak.online',
    alternates: {
        canonical: 'https://jakubwojtysiak.online/en/privacy-policy',
        languages: {
            'pl': 'https://jakubwojtysiak.online/polityka-prywatnosci',
            "en": 'https://jakubwojtysiak.online/en/privacy-policy'
        }
    }
}

export default function Home() {
    return (
        <main>
            <div className={`${styles.politykaPrywatnosci} container`}>
                <h1>Privacy policy</h1>
                <hr />
                <h2>1. General information</h2>
                <ol>
                    <li>The privacy policy describes the principles of our processing of information about you, including personal data and cookies, i.e. the so-called cookies.</li>
                    <li>This policy applies to the website operating at the url address: jakubwojtysiak.online</li>
                    <li>The website operator and personal data administrator is: Jakub Wojtysiak Graniczna 15A, 05-077 Warszawa</li>
                    <li>E-mail address of the operator: it.jakub.wojtysiak@gmail.com</li>
                    <li>The Operator is the Administrator of your personal data in relation to data provided voluntarily on the Website.</li>
                    <li>
                        The website uses personal data for the following purposes:
                        <ul>
                            <li>Supporting inquiries via the form</li>
                            <li>Presentation of the offer or information</li>
                        </ul>
                    </li>
                    <li>
                        The website performs the functions of obtaining information about users and their behavior in the following way:
                        <ul>
                            <li>By voluntarily entering data in forms that are entered into the Operator's systems.</li>
                            <li>By saving cookies on end devices (so-called "cookies").</li>
                        </ul>
                    </li>
                </ol>
                <hr />
                <h2>2. Selected data protection methods used by the Operator</h2>
                <ol>
                    <li>Places for logging in and entering personal data are protected in the transmission layer (SSL certificate). Thanks to this, personal data and login details entered on the website are encrypted on the user's computer and can only be read on the target server.</li>
                    <li>An important element of data protection is the regular updating of all software used by the Operator to process personal data, which in particular means regular updates of programming components.</li>
                </ol>
                <hr />
                <h2>3. Hosting</h2>
                <ol>
                    <li>The website is hosted (technically maintained) on the operator's servers: Hostinger</li>
                    <li>The hosting company keeps logs at the server level to ensure technical reliability. The following may be recorded:
                        <ul>
                            <li>resources specified by the URL identifier (addresses of requested resources - pages, files),</li>
                            <li>request arrival time,</li>
                            <li>response sending time,</li>
                            <li>name of the client station - identification carried out via the HTTP protocol,</li>
                            <li>information about errors that occurred during the HTTP transaction,</li>
                            <li>URL address of the page previously visited by the user (referrer link) - if the Website was accessed via a link,</li>
                            <li>information about the user's browser,</li>
                            <li>IP address information,</li>
                            <li>diagnostic information related to the process of self-ordering services via recorders on the website,</li>
                            <li>information related to the handling of e-mail addressed to and sent by the Operator.</li>
                        </ul>
                    </li>
                </ol>
                <hr />
                <h2>4. Your rights and additional information on how your data is used</h2>
                <ol>
                    <li>In some situations, the Administrator has the right to transfer your personal data to other recipients if it is necessary to perform the contract concluded with you or to fulfill the obligations imposed on the Administrator. This applies to the following target groups:
                        <ul>
                            <li>persons authorized by us, employees and collaborators who must have access to personal data in order to perform their duties,</li>
                            <li>hosting company,</li>
                            <li>companies handling mailings,</li>
                            <li>companies handling SMS messages,</li>
                            <li>companies with which the Administrator cooperates in the field of own marketing,</li>
                            <li>couriers,</li>
                            <li>insurers,</li>
                            <li>law firms and debt collectors,</li>
                            <li>banks,</li>
                            <li>payment operators,</li>
                            <li>public bodies.</li>
                        </ul>
                    </li>
                    <li>Your personal data processed by the Administrator no longer than is necessary to perform related activities specified in separate regulations (e.g. accounting). With regard to marketing data, the data will not be processed for longer than 3 years.</li>
                    <li>You have the right to request from the Administrator:
                        <ul>
                            <li>access to personal data relating to you,</li>
                            <li>their corrections,</li>
                            <li>removal,</li>
                            <li>limitations on processing</li>
                            <li>and data transfer.</li>
                        </ul>
                    </li>
                    <li>You have the right to object to the processing indicated in point 3.2 to the processing of personal data for the purposes of legitimate interests pursued by the Administrator, including profiling, but the right to object will not be possible if there are valid legitimate grounds. for processing, interests, rights and freedoms that override you, in particular the establishment, exercise or defense of claims.</li>
                    <li>A complaint may be lodged against the Administrator's actions to the President of the Personal Data Protection Office, ul. Stawki 2, 00-193 Warszawa.</li>
                    <li>Providing personal data is voluntary, but necessary to operate the Website.</li>
                    <li>Activities involving automated decision-making may be undertaken in relation to you, including profiling, in order to provide services under the concluded contract and for the purpose of conducting direct marketing by the Administrator.</li>
                    <li>Personal data is not transferred from third countries within the meaning of personal data protection regulations. This means that we do not send them outside the European Union.</li>
                </ol>
                <hr />
                <h2>5. Information in forms</h2>
                <ol>
                    <li>The website collects information provided voluntarily by the user, including personal data, if provided.</li>
                    <li>The website may save information about connection parameters (time stamp, IP address).</li>
                    <li>In some cases, the website may save information that makes it easier to link the data in the form with the e-mail address of the user completing the form. In this case, the user's email address appears inside the URL of the page containing the form.</li>
                    <li>The data provided in the form is processed for the purpose resulting from the function of a specific form, e.g. in order to process a service request or a commercial contact, register services, etc. Each time, the context and description of the form clearly inform what it is used for.</li>
                </ol>
                <hr />
                <h2>6. Administrator Logs</h2>
                <ol>
                    <li>Information on user behavior on the website may be subject to logging. This data is used to administer the website.</li>
                </ol>
                <hr />
                <h2>7. Important marketing techniques</h2>
                <ol>
                    <li>The Operator uses statistical analysis of website traffic via Google Analytics (Google Inc. based in the USA). The operator does not transfer personal data to the operator of this service, only anonymized information. The service is based on the use of cookies on the user's end device. In terms of information about user preferences collected by the Google advertising network, the user can view and edit information resulting from cookies using the tool: https://www.google.com/ads/preferences/</li>
                    <li>The Operator uses remarketing techniques that allow advertising messages to be matched to the user's behavior on the website, which may give the illusion that the user's personal data are used to track him, but in practice, no personal data is transferred from the Operator to advertising operators. The technological condition for such activities is that cookies are enabled.</li>
                    <li>The operator uses the Facebook pixel. This technology allows Facebook (Facebook Inc. based in the USA) to know that a given person registered there uses the Website. In this case, it is based on data for which it is itself the administrator; the Operator does not provide any additional personal data to Facebook. The service is based on the use of cookies on the end devicem user.</li>
                    <li>The Operator uses a solution that automates the operation of the Website for users, e.g., which can send an e-mail to the user after visiting a specific subpage, provided that he or she has agreed to receive commercial correspondence from the Operator.</li>
                </ol>
                <hr />
                <h2>8. Information about cookies</h2>
                <ol>
                    <li>The website uses cookies.</li>
                    <li>Cookies are IT data, in particular text files, which are stored on the Website User's end device and are intended for using the Website's websites. Cookies usually contain the name of the website they come from, their storage time on the end device and a unique number.</li>
                    <li>The entity that places cookies on the Website User's end device and obtains access to them is the Website operator.</li>
                    <li>
                        Cookies are used for the following purposes:
                        <ul>
                            <li>maintaining the Website user's session (after logging in), thanks to which the user does not have to re-enter the login and password on each subpage of the Website;</li>
                            <li>to achieve the objectives set out above in the "Important marketing techniques" section;</li>
                        </ul>
                    </li>
                    <li>The Website uses two basic types of cookies: "session cookies" and "persistent cookies". "Session" cookies are temporary files that are stored on the User's end device until logging out, leaving the website or turning off the software (web browser). "Permanent" cookies are stored on the User's end device for the time specified in the cookie parameters or until they are deleted by the User.</li>
                    <li>Software for browsing websites (web browser) usually allows cookies to be stored on the User's end device by default. Website users may change the settings in this regard. The web browser allows you to delete cookies. It is also possible to automatically block cookies. Detailed information on this subject can be found in the help or documentation of your web browser.</li>
                    <li>Restrictions on the use of cookies may affect some of the functionalities available on the Website.</li>
                    <li>Cookies placed on the Website User's end device may also be used by entities cooperating with the Website operator, in particular the following companies: Google (Google Inc. based in the USA), Facebook (Facebook Inc. based in the USA), Twitter (Twitter Inc. based in the USA).</li>
                </ol>
                <hr />
                <h2>9. Managing cookies - how to express and withdraw consent in practice?</h2>
                <ol>
                    <li>If the user does not want to receive cookies, he or she can change the browser settings. We reserve that disabling the use of cookies necessary for authentication processes, security and maintaining user preferences may make it difficult, and in extreme cases may prevent the use of websites</li>
                    <li>To manage cookie settings, please refer to your web browser settings </li>
                </ol>
            </div>
        </main >
    )
}