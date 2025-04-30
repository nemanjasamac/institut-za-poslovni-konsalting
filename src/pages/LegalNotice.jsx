import React from 'react';
import LegalPage from '../components/LegalPage';

function LegalNotice() {
  const currentYear = new Date().getFullYear();
  
  return (
    <LegalPage title="Pravna napomena">
      <p className="text-lg mb-6">
        Poslednje ažuriranje: 30. april 2025.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">1. Informacije o privrednom društvu</h2>
      <p className="mb-4">
        Institut za poslovni konsalting je privredno društvo organizovano u skladu sa zakonima Republike Srbije, sa sedištem na adresi Brankova 16, 11000 Beograd, Srbija.
      </p>
      <p className="mb-4">
        <strong>Osnovni podaci o privrednom društvu:</strong>
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Pun naziv: Institut za poslovni konsalting d.o.o.</li>
        <li className="mb-2">Skraćeni naziv: Institut za poslovni konsalting</li>
        <li className="mb-2">Matični broj: 12345678</li>
        <li className="mb-2">PIB: 123456789</li>
        <li className="mb-2">Broj računa: 123-456789-10</li>
        <li className="mb-2">Banka: Komercijalna banka a.d. Beograd</li>
        <li className="mb-2">Registarski broj: BD 12345/2020</li>
        <li className="mb-2">Datum registracije: 01.01.2020.</li>
        <li className="mb-2">Osnovna delatnost: 7022 - Konsultantske aktivnosti u vezi s poslovanjem i ostalim upravljanjem</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">2. Odgovornost za sadržaj</h2>
      <p className="mb-4">
        Institut za poslovni konsalting nastoji da obezbedi tačnost, potpunost i ažurnost svih informacija objavljenih na ovom veb sajtu. Međutim, ne možemo garantovati apsolutnu tačnost, potpunost ili prikladnost informacija. Sve informacije na ovom veb sajtu pružaju se "takve kakve su", bez garancija bilo koje vrste, bilo eksplicitnih ili implicitnih.
      </p>
      <p className="mb-4">
        Institut za poslovni konsalting zadržava pravo da izmeni sadržaj ovog veb sajta u bilo kom trenutku, bez obaveštenja. Ne prihvatamo nikakvu odgovornost za bilo kakve radnje preduzete na osnovu sadržaja ovog veb sajta.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">3. Odgovornost za linkove</h2>
      <p className="mb-4">
        Naš veb sajt može sadržati linkove ka drugim veb sajtovima koji nisu pod našom kontrolom. Nemamo kontrolu nad prirodom, sadržajem i dostupnošću tih sajtova. Uključivanje bilo kojih linkova ne podrazumeva nužno preporuku ili odobravanje stavova izraženih na tim sajtovima.
      </p>
      <p className="mb-4">
        Institut za poslovni konsalting uložio je razumne napore da linkovi na ovom veb sajtu vode ka informacijama koje su relevantne za naše korisnike. Međutim, internet se konstantno menja i moguće je da neki od ovih linkova u određenom trenutku ne funkcionišu ispravno. Ne možemo garantovati kontinuiranu dostupnost drugih veb sajtova.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">4. Autorsko pravo</h2>
      <p className="mb-4">
        Celokupan sadržaj ovog veb sajta, uključujući, ali ne ograničavajući se na tekstove, grafiku, logotipe, ikonice, slike, audio i video materijale, digitalna preuzimanja, pakete podataka i softvere, predstavlja vlasništvo Instituta za poslovni konsalting ili njegovih davaoca sadržaja i zaštićen je zakonima Republike Srbije i međunarodnim zakonima o autorskim pravima i drugim propisima iz oblasti intelektualne svojine.
      </p>
      <p className="mb-4">
        Neovlašćeno korišćenje bilo kog sadržaja sa ovog veb sajta može predstavljati kršenje zakona o autorskim pravima, zakona o žigovima i drugih propisa. Zabranjeno je reprodukovati, distribuirati, prikazivati ili emitovati bilo koji sadržaj sa ovog veb sajta bez naše izričite pisane dozvole, osim ako nije drugačije definisano Uslovima korišćenja.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">5. Zaštita podataka</h2>
      <p className="mb-4">
        Prikupljanje i obrada ličnih podataka koje posedujemo vrše se u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije i našom Politikom privatnosti. Za više informacija o tome kako prikupljamo, koristimo i štitimo vaše lične podatke, molimo vas da pogledate našu <a href="/politika-privatnosti" className="text-[#1A2B4C] hover:underline">Politiku privatnosti</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">6. Odricanje od odgovornosti za stručne savete</h2>
      <p className="mb-4">
        Informacije na ovom veb sajtu imaju samo informativni karakter i ne predstavljaju stručni savet. Konkretne situacije mogu zahtevati specifične pristupe koji nisu obuhvaćeni informacijama dostupnim na ovom veb sajtu. Pre donošenja bilo kakvih odluka na osnovu informacija sa ovog veb sajta, preporučujemo vam da potražite odgovarajući stručni savet prilagođen vašim specifičnim okolnostima.
      </p>
      <p className="mb-4">
        Institut za poslovni konsalting ne prihvata nikakvu odgovornost za bilo kakve radnje preduzete kao rezultat informacija dobijenih sa ovog veb sajta.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">7. Ograničenje odgovornosti</h2>
      <p className="mb-4">
        Institut za poslovni konsalting neće biti odgovoran za bilo kakve direktne, indirektne, slučajne, posledične ili kaznene štete koje proizilaze iz pristupa, korišćenja ili nemogućnosti korišćenja ovog veb sajta ili bilo kog njegovog sadržaja, ili iz bilo kakvog postupanja ili propusta pri korišćenju ovog veb sajta.
      </p>
      <p className="mb-4">
        Ovo ograničenje odgovornosti odnosi se na sve štete bilo koje vrste, uključujući (bez ograničenja) kompenzaciju, direktnu, indirektnu ili posledičnu štetu, gubitak podataka, prihoda ili profita, gubitak ili oštećenje imovine i zahteve trećih strana.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">8. Zaštićeni znaci</h2>
      <p className="mb-4">
        Svi zaštitni znaci, logotipi, nazivi proizvoda i usluga koji se pojavljuju na ovom veb sajtu su zaštitni znaci ili registrovani zaštitni znaci Instituta za poslovni konsalting ili trećih strana. Ništa što je sadržano na ovom veb sajtu ne treba tumačiti kao davanje, implicitno ili na drugi način, bilo kakve licence ili prava na korišćenje bilo kog zaštitnog znaka prikazanog na ovom veb sajtu bez našeg pisanog odobrenja ili odobrenja trećih strana koje su vlasnici tih zaštitnih znakova.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">9. Merodavno pravo i jurisdikcija</h2>
      <p className="mb-4">
        Ova Pravna napomena i sva pitanja koja proizilaze iz ili su povezana sa ovom Pravnom napomenom biće uređena i tumačena u skladu sa zakonima Republike Srbije, bez primene odredbi o sukobu zakona.
      </p>
      <p className="mb-4">
        Svi sporovi koji proizilaze iz ili su u vezi sa ovom Pravnom napomenom, uključujući sporove koji se odnose na njeno važenje, tumačenje, kršenje ili prestanak, rešavaće se pred nadležnim sudom u Beogradu, Srbija.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">10. Izmene</h2>
      <p className="mb-4">
        Institut za poslovni konsalting zadržava pravo da izmeni ovu Pravnu napomenu u bilo kom trenutku objavljivanjem izmenjene verzije na ovom veb sajtu. Nastavak korišćenja ovog veb sajta nakon takvih izmena predstavljaće vaš pristanak na izmene.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">11. Kontakt informacije</h2>
      <p className="mb-4">
        Za pitanja u vezi sa ovom Pravnom napomenom, molimo vas da nas kontaktirate:
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

export default LegalNotice;