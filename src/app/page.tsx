import PersonCard from "@/components/microComponents/PersonCard";

import devopsBg from "@/../public/img/devopsBg.png";
import admin from "@/../public/img/admin.png";
import infinityArrow from "@/../public/img/icons/infinityArrow.png";
import HeaderWithQuote from "@/components/macroComponents/HeaderWithQuote";

export default function Home() {
  return (
    <main>
      <div className="heroSection container">
        <div className="left">
          <HeaderWithQuote />
        </div>
        <div className="right">
          <PersonCard
            color="#673de6"
            imageBg={devopsBg}
            imageBgAlt="Tło z fioletowymi napisami DevOps"
            imageFg={admin}
            imageFgAlt="Usmiechnięty mężczyzna z komputerem"
            icon={infinityArrow}
            label="ADMINISTRATOR" />
        </div>
      </div>
    </main>
  )
}
