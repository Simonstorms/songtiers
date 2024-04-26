"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar headline={"Datenschutzerklärung"} />
            <main className="max-w-6xl mt-20 mx-auto  ">
                <div className="px-8  ">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <Link
                            className="flex items-center py-10 justify-center"
                            href="/"
                        >
                            <div className="border  p-2 dark:border-white border-black rounded-full ">
                                <CloseIcon />
                            </div>
                        </Link>
                    </motion.div>

                    <h2 className="text-4xl font-bold leading-[70px]">
                        1. Datenschutz auf einen Blick{" "}
                    </h2>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Allgemeine Hinweise
                    </h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick
                        darüber, was mit Ihren personenbezogenen Daten passiert,
                        wenn Sie diese Website besuchen. Personenbezogene Daten
                        sind alle Daten, mit denen Sie persönlich identifiziert
                        werden können. Ausführliche Informationen zum Thema
                        Datenschutz entnehmen Sie unserer unter diesem Text
                        aufgeführten Datenschutzerklärung.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Datenerfassung auf dieser Website
                    </h3>
                    <h4 className="text-2xl font-bold leading-[70px]">
                        Wer ist verantwortlich für die Datenerfassung auf dieser
                        Website?
                    </h4>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch
                        den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                        Abschnitt „Hinweis zur Verantwortlichen Stelle“ in
                        dieser Datenschutzerklärung entnehmen.
                    </p>
                    <h4 className="text-2xl font-bold leading-[70px]">
                        Wie erfassen wir Ihre Daten?
                    </h4>
                    <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie
                        uns diese mitteilen. Hierbei kann es sich z. B. um Daten
                        handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                        Andere Daten werden automatisch oder nach Ihrer
                        Einwilligung beim Besuch der Website durch unsere IT-
                        Systeme erfasst. Das sind vor allem technische Daten (z.
                        B. Internetbrowser, Betriebssystem oder Uhrzeit des
                        Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                        automatisch, sobald Sie diese Website betreten.
                    </p>
                    <h4>Wofür nutzen wir Ihre Daten?</h4>
                    <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie
                        Bereitstellung der Website zu gewährleisten. Andere
                        Daten können zur Analyse Ihres Nutzerverhaltens
                        verwendet werden.
                    </p>
                    <h4 className="text-2xl font-bold leading-[70px]">
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                    </h4>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung oder Löschung dieser Daten
                        zu verlangen. Wenn Sie eine Einwilligung zur
                        Datenverarbeitung erteilt haben, können Sie diese
                        Einwilligung jederzeit für die Zukunft widerrufen.
                        Außerdem haben Sie das Recht, unter bestimmten Umständen
                        die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Des Weiteren steht
                        Ihnen ein Beschwerderecht bei der zuständigen
                        Aufsichtsbehörde zu.
                    </p>
                    <p>
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                        können Sie sich jederzeit an uns wenden.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Analyse-Tools und Tools von Drittanbietern
                    </h3>
                    <p>
                        Beim Besuch dieser Website kann Ihr Surf-Verhalten
                        statistisch ausgewertet werden. Das geschieht vor allem
                        mit sogenannten Analyseprogrammen.
                    </p>
                    <p>
                        Detaillierte Informationen zu diesen Analyseprogrammen
                        finden Sie in der folgenden Datenschutzerklärung.
                    </p>
                    <h2 className="text-4xl font-bold leading-[70px]">
                        2. Hosting
                    </h2>
                    <p>
                        Wir hosten die Inhalte unserer Website bei folgendem
                        Anbieter:
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Externes Hosting
                    </h3>
                    <p>
                        Diese Website wird extern gehostet. Die
                        personenbezogenen Daten, die auf dieser Website erfasst
                        werden, werden auf den Servern des Hosters / der Hoster
                        gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                        Kontaktanfragen, Meta- und Kommunikationsdaten,
                        Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                        sonstige Daten, die über eine Website generiert werden,
                        handeln.
                    </p>
                    <p>
                        Das externe Hosting erfolgt zum Zwecke der
                        Vertragserfüllung gegenüber unseren potenziellen und
                        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                        Interesse einer sicheren, schnellen und effizienten
                        Bereitstellung unseres Online-Angebots durch einen
                        professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                        Sofern eine entsprechende Einwilligung abgefragt wurde,
                        erfolgt die Verarbeitung ausschließlich auf Grundlage
                        von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
                        soweit die Einwilligung die Speicherung von Cookies oder
                        den Zugriff auf Informationen im Endgerät des Nutzers
                        (z. B. Device-Fingerprinting) im Sinne des TTDSG
                        umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p>
                        Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                        verarbeiten, wie dies zur Erfüllung seiner
                        Leistungspflichten erforderlich ist und unsere Weisungen
                        in Bezug auf diese Daten befolgen.
                    </p>
                    <p>Wir setzen folgende(n) Hoster ein:</p>
                    <p>
                        Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                        USA. Vercel ist eine Cloud Plattform, über die wir
                        unsere Website bereitstellen.
                    </p>
                    <h2 className="text-4xl font-bold leading-[70px]">
                        3. Allgemeine Hinweise und Pflichtinformationen
                    </h2>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Datenschutz
                    </h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                        persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend den
                        gesetzlichen Datenschutzvorschriften sowie dieser
                        Datenschutzerklärung.
                    </p>
                    <p>
                        Wenn Sie diese Website benutzen, werden verschiedene
                        personenbezogene Daten erhoben. Personenbezogene Daten
                        sind Daten, mit denen Sie persönlich identifiziert
                        werden können. Die vorliegende Datenschutzerklärung
                        erläutert, welche Daten wir erheben und wofür wir sie
                        nutzen. Sie erläutert auch, wie und zu welchem Zweck das
                        geschieht.
                    </p>
                    <p>
                        Wir weisen darauf hin, dass die Datenübertragung im
                        Internet (z. B. bei der Kommunikation per E-Mail)
                        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                        der Daten vor dem Zugriff durch Dritte ist nicht
                        möglich.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Hinweis zur verantwortlichen Stelle
                    </h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf
                        dieser Website ist: Simon Gneuß
                    </p>
                    <p>E-Mail: info@simongneuss.com</p>
                    <p>
                        Verantwortliche Stelle ist die natürliche oder
                        juristische Person, die allein oder gemeinsam mit
                        anderen über die Zwecke und Mittel der Verarbeitung von
                        personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o.
                        Ä.) entscheidet.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Speicherdauer
                    </h3>
                    <p>
                        Soweit innerhalb dieser Datenschutzerklärung keine
                        speziellere Speicherdauer genannt wurde, verbleiben Ihre
                        personenbezogenen Daten bei uns, bis der Zweck für die
                        Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                        Löschersuchen geltend machen oder eine Einwilligung zur
                        Datenverarbeitung widerrufen, werden Ihre Daten
                        gelöscht, sofern wir keine anderen rechtlich zulässigen
                        Gründe für die Speicherung Ihrer personenbezogenen Daten
                        haben (z. B. steuer- oder handelsrechtliche
                        Aufbewahrungsfristen); im letztgenannten Fall erfolgt
                        die Löschung nach Fortfall dieser Gründe.
                    </p>
                    <h3 className="text-3xl font-bold py-7">
                        Allgemeine Hinweise zu den Rechtsgrundlagen der
                        Datenverarbeitung auf dieser Website
                    </h3>
                    <p>
                        Sofern Sie in die Datenverarbeitung eingewilligt haben,
                        verarbeiten wir Ihre personenbezogenen Daten auf
                        Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9
                        Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
                        einer ausdrücklichen Einwilligung in die Übertragung
                        personenbezogener Daten in Drittstaaten erfolgt die
                        Datenverarbeitung außerdem auf Grundlage von Art. 49
                        Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                        Cookies oder in den Zugriff auf Informationen in Ihr
                        Endgerät (z. B. via Device-Fingerprinting) eingewilligt
                        haben, erfolgt die Datenverarbeitung zusätzlich auf
                        Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist
                        jederzeit widerrufbar. Sind Ihre Daten zur
                        Vertragserfüllung oder zur Durchführung vorvertraglicher
                        Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf
                        Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
                        verarbeiten wir Ihre Daten, sofern diese zur Erfüllung
                        einer rechtlichen Verpflichtung erforderlich sind auf
                        Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                        Datenverarbeitung kann ferner auf Grundlage unseres
                        berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                        erfolgen. Über die jeweils im Einzelfall einschlägigen
                        Rechtsgrundlagen wird in den folgenden Absätzen dieser
                        Datenschutzerklärung informiert.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Empfänger von personenbezogenen Daten
                    </h3>
                    <p>
                        Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
                        verschiedenen externen Stellen zusammen. Dabei ist
                        teilweise auch eine Übermittlung von personenbezogenen
                        Daten an diese externen Stellen erforderlich. Wir geben
                        personenbezogene Daten nur dann an externe Stellen
                        weiter, wenn dies im Rahmen einer Vertragserfüllung
                        erforderlich ist, wenn wir gesetzlich hierzu
                        verpflichtet sind (z. B. Weitergabe von Daten an
                        Steuerbehörden), wenn wir ein berechtigtes Interesse
                        nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben
                        oder wenn eine sonstige Rechtsgrundlage die
                        Datenweitergabe erlaubt. Beim Einsatz von
                        Auftragsverarbeitern geben wir personenbezogene Daten
                        unserer Kunden nur auf Grundlage eines gültigen Vertrags
                        über Auftragsverarbeitung weiter. Im Falle einer
                        gemeinsamen Verarbeitung wird ein Vertrag über
                        gemeinsame Verarbeitung geschlossen.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                    </h3>
                    <p>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                        ausdrücklichen Einwilligung möglich. Sie können eine
                        bereits erteilte Einwilligung jederzeit widerrufen. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                    <h3 className="text-3xl font-bold py-7">
                        Widerspruchsrecht gegen die Datenerhebung in besonderen
                        Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                    </h3>
                    <p>
                        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS.
                        1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                        RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                        SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
                        PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES
                        GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                        PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
                        VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                        DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                        WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN
                        NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN
                        ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                        NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
                        ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                        GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                        RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
                        DSGVO).
                    </p>
                    <p>
                        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                        DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                        JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                        BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
                        DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS
                        PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
                        VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
                        PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM
                        ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH
                        ART. 21 ABS. 2 DSGVO).
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Beschwerderecht bei der zuständigen Aufsichtsbehörde
                    </h3>
                    <p>
                        Im Falle von Verstößen gegen die DSGVO steht den
                        Betroffenen ein Beschwerderecht bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                        ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                        oder des Orts des mutmaßlichen Verstoßes zu. Das
                        Beschwerderecht besteht unbeschadet anderweitiger
                        verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Recht auf Datenübertragbarkeit
                    </h3>
                    <p>
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                        Einwilligung oder in Erfüllung eines Vertrags
                        automatisiert verarbeiten, an sich oder an einen Dritten
                        in einem gängigen, maschinenlesbaren Format aushändigen
                        zu lassen. Sofern Sie die direkte Übertragung der Daten
                        an einen anderen Verantwortlichen verlangen, erfolgt
                        dies nur, soweit es technisch machbar ist.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Auskunft, Berichtigung und Löschung
                    </h3>
                    <p>
                        Sie haben im Rahmen der geltenden gesetzlichen
                        Bestimmungen jederzeit das Recht auf unentgeltliche
                        Auskunft über Ihre gespeicherten personenbezogenen
                        Daten, deren Herkunft und Empfänger und den Zweck der
                        Datenverarbeitung und ggf. ein Recht auf Berichtigung
                        oder Löschung dieser Daten. Hierzu sowie zu weiteren
                        Fragen zum Thema personenbezogene Daten können Sie sich
                        jederzeit an uns wenden.
                    </p>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Recht auf Einschränkung der Verarbeitung
                    </h3>
                    <p>
                        Sie haben das Recht, die Einschränkung der Verarbeitung
                        Ihrer personenbezogenen Daten zu verlangen. Hierzu
                        können Sie sich jederzeit an uns wenden. Das Recht auf
                        Einschränkung der Verarbeitung besteht in folgenden
                        Fällen:
                    </p>
                    <p>
                        Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                        personenbezogenen Daten bestreiten, benötigen wir in der
                        Regel Zeit, um dies zu überprüfen. Für die Dauer der
                        Prüfung haben Sie das Recht, die Einschränkung der
                        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                    <p>
                        Wenn die Verarbeitung Ihrer personenbezogenen Daten
                        unrechtmäßig geschah/geschieht, können Sie statt der
                        Löschung die Einschränkung der Datenverarbeitung
                        verlangen.
                        <br />
                        Wenn wir Ihre personenbezogenen Daten nicht mehr
                        benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                        oder Geltendmachung von Rechtsansprüchen benötigen,
                        haben Sie das Recht, statt der Löschung die
                        Einschränkung der Verarbeitung Ihrer personenbezogenen
                        Daten zu verlangen.
                        <br />
                        Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                        eingelegt haben, muss eine Abwägung zwischen Ihren und
                        unseren Interessen vorgenommen werden. Solange noch
                        nicht feststeht, wessen Interessen überwiegen, haben Sie
                        das Recht, die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen.
                    </p>

                    <p>
                        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                        eingeschränkt haben, dürfen diese Daten – von ihrer
                        Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                        zur Geltendmachung, Ausübung oder Verteidigung von
                        Rechtsansprüchen oder zum Schutz der Rechte einer
                        anderen natürlichen oder juristischen Person oder aus
                        Gründen eines wichtigen öffentlichen Interesses der
                        Europäischen Union oder eines Mitgliedstaats verarbeitet
                        werden.
                    </p>
                    <h4 className="text-2xl font-bold leading-[70px]">
                        SSL- bzw. TLS-Verschlüsselung
                    </h4>
                    <p>
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz
                        der Übertragung vertraulicher Inhalte, wie zum Beispiel
                        Bestellungen oder Anfragen, die Sie an uns als
                        Seitenbetreiber senden, eine SSL- bzw. TLS-
                        Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                        Sie daran, dass die Adresszeile des Browsers von
                        „http://“ auf „https://“ wechselt und an dem
                        Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                    <p>
                        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                        können die Daten, die Sie an uns übermitteln, nicht von
                        Dritten mitgelesen werden.
                    </p>
                    <h2 className="text-4xl font-bold leading-[70px]">
                        6. Plugins und Tools
                    </h2>
                    <h3 className="text-3xl font-bold leading-[70px]">
                        Spotify
                    </h3>
                    <p>
                        Auf dieser Website sind Funktionen des Musik-Dienstes
                        Spotify eingebunden. Anbieter ist die Spotify AB, Birger
                        Jarlsgatan 61, 113 56 Stockholm in Schweden. Die Spotify
                        Plugins erkennen Sie an dem grünen Logo auf dieser
                        Website. Eine Übersicht über die Spotify-Plugins finden
                        Sie unter: https://developer.spotify.com.
                    </p>
                    <p>
                        Dadurch kann beim Besuch dieser Website über das Plugin
                        eine direkte Verbindung zwischen Ihrem Browser und dem
                        Spotify-Server hergestellt werden. Spotify erhält
                        dadurch die Information, dass Sie mit Ihrer IP-Adresse
                        diese Website besucht haben. Wenn Sie den Spotify Button
                        anklicken, während Sie in Ihrem Spotify-Account
                        eingeloggt sind, können Sie die Inhalte dieser Website
                        auf Ihrem Spotify Profil verlinken. Dadurch kann Spotify
                        den Besuch dieser Website Ihrem Benutzerkonto zuordnen.
                    </p>
                    <p>
                        Wir weisen darauf hin, dass bei der Nutzung von Spotify
                        Cookies von Google Analytics eingesetzt werden, sodass
                        Ihre Nutzungsdaten bei der Nutzung von Spotify auch an
                        Google weitergegeben werden können. Google Analytics ist
                        ein Tool des Google-Konzerns zur Analyse des
                        Nutzerverhaltens mit Sitz in den USA. Für diese
                        Einbindung ist allein Spotify verantwortlich. Wir als
                        Websitebetreiber haben auf diese Verarbeitung keinen
                        Einfluss.
                    </p>
                    <p>
                        Die Speicherung und Analyse der Daten erfolgt auf
                        Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                        Websitebetreiber hat ein berechtigtes Interesse an der
                        ansprechenden akustischen Ausgestaltung seiner Website.
                        Sofern eine entsprechende Einwilligung abgefragt wurde,
                        erfolgt die Verarbeitung ausschließlich auf Grundlage
                        von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
                        soweit die Einwilligung die Speicherung von Cookies oder
                        den Zugriff auf Informationen im Endgerät des Nutzers
                        (z. B. Device-Fingerprinting) im Sinne des TTDSG
                        umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p>
                        Weitere Informationen hierzu finden Sie in der
                        Datenschutzerklärung von Spotify:
                        https://www.spotify.com/de/legal/privacy-policy/.
                    </p>
                    <p>
                        Wenn Sie nicht wünschen, dass Spotify den Besuch dieser
                        Website Ihrem Spotify-Nutzerkonto zuordnen kann, loggen
                        Sie sich bitte aus Ihrem Spotify-Benutzerkonto aus.
                    </p>
                </div>
            </main>
        </>
    );
}
