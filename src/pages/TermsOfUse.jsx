import React from 'react';
import LegalPage from '../components/LegalPage';

function TermsOfUse() {
  const currentYear = new Date().getFullYear();
  
  return (
    <LegalPage title="Uslovi korišćenja">
      <p className="text-lg mb-6">
        Poslednje ažuriranje: 30. april 2025.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">1. Prihvatanje uslova</h2>
      <p className="mb-4">
        Dobrodošli na veb sajt Institut za poslovni konsalting. Ovi Uslovi korišćenja ("Uslovi") regulišu vaš pristup i korišćenje veb sajta <a href="https://institut-konsalting.rs" className="text-[#1A2B4C] hover:underline">institut-konsalting.rs</a> ("Sajt"), kojim upravlja Institut za poslovni konsalting sa sedištem u ulici Brankova 16, 11000 Beograd, Srbija (u daljem tekstu: "mi", "nas", "naš" ili "Institut").
      </p>
      <p className="mb-4">
        Pristupom i korišćenjem ovog Sajta, potvrđujete da ste pročitali, razumeli i pristali da budete obavezani ovim Uslovima, našom Politikom privatnosti i svim važećim zakonima i propisima. Ako se ne slažete sa bilo kojim delom ovih Uslova, molimo vas da ne koristite naš Sajt.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">2. Promene uslova</h2>
      <p className="mb-4">
        Zadržavamo pravo da po sopstvenom nahođenju izmenimo ili zamenimo ove Uslove u bilo kom trenutku. Najnoviju verziju uvek ćemo objaviti na ovoj stranici sa datumom poslednjeg ažuriranja. Nastavak korišćenja Sajta nakon takvih promena predstavlja vaš pristanak na nove Uslove.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">3. Pristup Sajtu</h2>
      <p className="mb-4">
        Institut za poslovni konsalting ulaže razumne napore da obezbedi dostupnost Sajta 24 sata dnevno. Međutim, ne možemo garantovati da će Sajt biti dostupan u svakom trenutku, niti možemo garantovati da će pristup biti neprekidan, bez grešaka ili propusta.
      </p>
      <p className="mb-4">
        Zadržavamo pravo da u bilo kom trenutku i bez prethodnog obaveštenja:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Izmenimo, ažuriramo ili uklonimo bilo koji sadržaj;</li>
        <li className="mb-2">Ograničimo dostupnost ili pristup Sajtu;</li>
        <li className="mb-2">Privremeno ili trajno obustavimo rad Sajta iz tehničkih, bezbednosnih, pravnih ili drugih razloga.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">4. Intelektualna svojina</h2>
      <p className="mb-4">
        Sajt i svi njegovi sadržaji, uključujući, ali ne ograničavajući se na tekst, grafiku, logotipe, ikone, slike, audio zapise, video zapise, digitalna preuzimanja, softver i podatke, predstavljaju vlasništvo Instituta za poslovni konsalting ili naših davaoca licenci i zaštićeni su međunarodnim zakonima o autorskim pravima, žigovima i drugim zakonima o intelektualnoj svojini.
      </p>
      <p className="mb-4">
        Dozvoljeno vam je da pristupate, pregledate i štampate materijale sa Sajta isključivo za ličnu, nekomercijalnu upotrebu, pod uslovom da ne menjate ili brišete bilo kakve oznake autorskih prava, žigova ili drugih napomena o vlasničkim pravima. Nije dozvoljeno reprodukovanje, distribucija, modifikacija, stvaranje izvedenih dela, javno prikazivanje, objavljivanje, preuzimanje, licenciranje ili bilo kakvo korišćenje sadržaja Sajta u komercijalne svrhe bez našeg izričitog pisanog odobrenja.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">5. Veze ka drugim sajtovima</h2>
      <p className="mb-4">
        Naš Sajt može sadržati veze ka veb sajtovima trećih strana koji nisu pod našom kontrolom. Ne možemo prihvatiti odgovornost za sadržaj, politike privatnosti ili prakse bilo kog veb sajta trećih strana. Uključivanje bilo koje veze ne podrazumeva naše odobravanje ili preporuku povezanog sajta ili bilo kog proizvoda ili usluge koja se na njemu opisuje. Korišćenje takvih veza je na vašu sopstvenu odgovornost.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">6. Korisnički sadržaj</h2>
      <p className="mb-4">
        Određene funkcije našeg Sajta mogu vam omogućiti da objavite sadržaj, uključujući komentare, povratne informacije ili upite (u daljem tekstu: "Korisnički sadržaj"). Zadržavamo pravo da uklonimo bilo koji Korisnički sadržaj koji, po našem mišljenju, krši ove Uslove ili je na drugi način neprikladan.
      </p>
      <p className="mb-4">
        Objavljivanjem Korisničkog sadržaja na našem Sajtu:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Garantujete da posedujete ili imate pravo na korišćenje svih neophodnih prava na Korisničkom sadržaju;</li>
        <li className="mb-2">Dodeljujete Institutu za poslovni konsalting neekskluzivno, besplatno pravo da koristi, menja, reprodukuje i distribuira taj Korisnički sadržaj u vezi sa našim poslovanjem;</li>
        <li className="mb-2">Razumete i slažete se da je Korisnički sadržaj vaša isključiva odgovornost.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">7. Zabranjene aktivnosti</h2>
      <p className="mb-4">
        Prilikom korišćenja našeg Sajta, slažete se da nećete:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Kršiti bilo koje važeće zakone, propise ili ove Uslove;</li>
        <li className="mb-2">Koristiti Sajt na način koji bi mogao oštetiti, onesposobiti ili preopteretiti naše servere ili mreže;</li>
        <li className="mb-2">Pristupati podacima koji nisu namenjeni vama ili ulogovali se na server ili nalog na koji niste ovlašćeni da pristupite;</li>
        <li className="mb-2">Pokušati da istražite, skenirate ili testirate ranjivost sistema ili mreže, ili prekršiti sigurnosne ili autentifikacijske mere;</li>
        <li className="mb-2">Pokušati da ometate uslugu bilo kom korisniku, domaćinu ili mreži;</li>
        <li className="mb-2">Slati neželjene email poruke, spam ili bilo koji oblik automatizovanog slanja poruka;</li>
        <li className="mb-2">Falsifikovati zaglavlja ili na drugi način manipulisati identifikatorima;</li>
        <li className="mb-2">Objavljivati ili prenositi bilo koji sadržaj koji je nezakonit, štetan, preteći, uvredljiv ili na drugi način neprimeren.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">8. Odricanje od odgovornosti</h2>
      <p className="mb-4">
        Sajt i svi materijali, informacije i usluge koje se na njemu nalaze pružaju se "takvi kakvi su" i "kako su dostupni", bez bilo kakvih garancija, eksplicitnih ili implicitnih. Institut za poslovni konsalting ne daje nikakve garancije u vezi sa tačnošću, pouzdanošću ili potpunošću sadržaja Sajta.
      </p>
      <p className="mb-4">
        Do maksimalnog stepena dozvoljenog važećim zakonom, Institut za poslovni konsalting izričito se odriče svih garancija bilo koje vrste, bilo eksplicitnih ili implicitnih, uključujući, ali ne ograničavajući se na implicitne garancije o podesnosti za određenu svrhu i nepovredivosti prava intelektualne svojine ili druge povrede prava.
      </p>
      <p className="mb-4">
        Institut za poslovni konsalting ne garantuje da će Sajt ispuniti vaše zahteve, da će biti dostupan neprekidno, pravovremeno, sigurno ili bez grešaka, niti da će rezultati koji se mogu dobiti korišćenjem Sajta biti tačni ili pouzdani.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">9. Ograničenje odgovornosti</h2>
      <p className="mb-4">
        Institut za poslovni konsalting, njegovi direktori, zaposleni, partneri, zastupnici, dobavljači ili povezane strane neće biti odgovorni za bilo kakvu indirektnu, slučajnu, posebnu, posledičnu ili kaznenu štetu, uključujući, bez ograničenja, gubitak dobiti, podataka, korišćenja, poslovnog ugleda ili drugih nematerijalnih gubitaka, koja proizilazi iz:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Vašeg pristupa ili korišćenja ili nemogućnosti pristupa ili korišćenja Sajta;</li>
        <li className="mb-2">Bilo kog ponašanja ili sadržaja bilo koje treće strane na Sajtu;</li>
        <li className="mb-2">Bilo kog sadržaja dobijenog sa Sajta;</li>
        <li className="mb-2">Neovlašćenog pristupa, korišćenja ili izmene vaših prenosa ili sadržaja.</li>
      </ul>
      <p className="mb-4">
        Ovo ograničenje odgovornosti primenjivaće se u najvećoj meri dozvoljenoj zakonom u primenjivoj jurisdikciji.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">10. Obeštećenje</h2>
      <p className="mb-4">
        Pristajete da branite, obeštetite i držite Institut za poslovni konsalting i njegove podružnice, partnere, službenike, agente, zaposlene, dobavljače i licencore neoštećenim od bilo kakvih potraživanja, odgovornosti, šteta, gubitaka i troškova, uključujući, bez ograničenja, razumne advokatske naknade i troškove, koji proizilaze iz:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Vašeg pristupa i korišćenja Sajta;</li>
        <li className="mb-2">Vašeg kršenja ovih Uslova;</li>
        <li className="mb-2">Vašeg kršenja bilo kog prava treće strane, uključujući, bez ograničenja, bilo koje pravo na privatnost ili prava intelektualne svojine.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">11. Raskid</h2>
      <p className="mb-4">
        Možemo raskinuti ili suspendovati vaš pristup Sajtu odmah, bez prethodnog obaveštenja ili odgovornosti, iz bilo kog razloga, uključujući, bez ograničenja, kršenje ovih Uslova.
      </p>
      <p className="mb-4">
        Po raskidu, vaše pravo na korišćenje Sajta odmah prestaje. Ako želite da prekinete svoj nalog (ako je primenjivo), možete jednostavno prestati da koristite Sajt.
      </p>
      <p className="mb-4">
        Sve odredbe ovih Uslova koje bi po svojoj prirodi trebale preživeti raskid, preživjeće raskid, uključujući, bez ograničenja, odredbe o vlasništvu, odricanja od odgovornosti, obeštećenja i ograničenja odgovornosti.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">12. Merodavno pravo</h2>
      <p className="mb-4">
        Ovi Uslovi će biti uređeni i tumačeni u skladu sa zakonima Republike Srbije, bez obzira na njene odredbe o sukobu zakona.
      </p>
      <p className="mb-4">
        Svi sporovi koji proizilaze iz ili u vezi sa ovim Uslovima biće podvrgnuti isključivoj nadležnosti sudova u Beogradu, Srbija.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">13. Razdvojivost</h2>
      <p className="mb-4">
        Ako se bilo koja odredba ovih Uslova smatra nezakonitom, nevažećom ili neizvršivom, u celini ili delimično, takva odredba će se smatrati razdvojenom od ovih Uslova i neće uticati na validnost i izvršivost preostalih odredbi.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">14. Kontakt informacije</h2>
      <p className="mb-4">
        Za pitanja o ovim Uslovima korišćenja, molimo vas da nas kontaktirate:
      </p>
      <p className="mb-4">
        <strong>Institut za poslovni konsalting</strong><br />
        Brankova 16<br />
        11000 Beograd<br />
        Srbija<br />
        Email: <a href="mailto:info@institut-konsalting.rs" className="text-[#1A2B4C] hover:underline">info@institut-konsalting.rs</a><br />
        Telefon: +381 11 234 5678
      </p>

      <p className="mt-10 text-sm text-gray-500">
        © {currentYear} Institut za poslovni konsalting. Sva prava zadržana.
      </p>
    </LegalPage>
  );
}

export default TermsOfUse;