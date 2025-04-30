import React from 'react';
import LegalPage from '../components/LegalPage';

function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  
  return (
    <LegalPage title="Politika privatnosti">
      <p className="text-lg mb-6">
        Poslednje ažuriranje: 30. april 2025.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">1. Uvod</h2>
      <p className="mb-4">
        Institut za poslovni konsalting, sa sedištem u ulici Brankova 16, 11000 Beograd, Srbija (u daljem tekstu: "mi", "nas", "naš" ili "Institut"), posvećen je zaštiti vaše privatnosti i ličnih podataka. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, delimo i štitimo vaše lične podatke kada posetite našu veb stranicu <a href="https://institut-konsalting.rs" className="text-[#1A2B4C] hover:underline">institut-konsalting.rs</a> (u daljem tekstu: "Sajt") ili koristite naše usluge.
      </p>
      <p className="mb-4">
        Molimo vas da pažljivo pročitate ovu Politiku privatnosti kako biste razumeli naše politike i prakse u vezi sa vašim ličnim podacima. Korišćenjem našeg Sajta, saglasni ste sa prikupljanjem i korišćenjem informacija u skladu sa ovom Politikom privatnosti.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">2. Zakonski okvir</h2>
      <p className="mb-4">
        Ova Politika privatnosti je u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije ("Sl. glasnik RS", br. 87/2018), koji je usklađen sa Opštom uredbom o zaštiti podataka (GDPR) Evropske unije.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">3. Koje podatke prikupljamo</h2>
      <p className="mb-4">
        U zavisnosti od vašeg korišćenja našeg Sajta i usluga, možemo prikupiti sledeće vrste ličnih podataka:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Identifikacione informacije: ime i prezime;</li>
        <li className="mb-2">Kontakt informacije: email adresa, broj telefona, adresa;</li>
        <li className="mb-2">Poslovne informacije: naziv kompanije, pozicija, delatnost;</li>
        <li className="mb-2">Informacije o upitu: priroda vašeg upita ili zahteva, tema konsultacije;</li>
        <li className="mb-2">Tehničke informacije: IP adresa, tip i verzija internet pretraživača, postavke vremenske zone, operativni sistem i platforma, informacije o vašoj poseti Sajtu (uključujući potpunu URL putanju, vreme i datum vaše posete).</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">4. Kako prikupljamo podatke</h2>
      <p className="mb-4">
        Vaše lične podatke prikupljamo kroz sledeće kanale:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Direktno od vas kada popunjavate kontakt formu, šaljete email ili nas kontaktirate putem telefona;</li>
        <li className="mb-2">Automatski putem kolačića (cookies) i sličnih tehnologija kada posećujete naš Sajt;</li>
        <li className="mb-2">Od trećih strana ili javno dostupnih izvora, kao što su poslovni registri ili društvene mreže, u skladu sa primenjivim zakonima o zaštiti podataka.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">5. Svrha obrade podataka</h2>
      <p className="mb-4">
        Vaše lične podatke obrađujemo za sledeće svrhe:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Pružanje traženih usluga i odgovaranje na vaše upite;</li>
        <li className="mb-2">Zakazivanje i održavanje konsultacija;</li>
        <li className="mb-2">Poboljšanje našeg Sajta i usluga;</li>
        <li className="mb-2">Slanje informacija o našim uslugama koje bi vas mogle zanimati (uz vaš pristanak);</li>
        <li className="mb-2">Ispunjavanje zakonskih obaveza;</li>
        <li className="mb-2">Zaštita naših prava i interesa.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">6. Pravni osnov za obradu podataka</h2>
      <p className="mb-4">
        Vaše lične podatke obrađujemo po sledećim pravnim osnovima:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Vaš pristanak;</li>
        <li className="mb-2">Izvršenje ugovora ili preduzimanje radnji na vaš zahtev pre sklapanja ugovora;</li>
        <li className="mb-2">Poštovanje zakonskih obaveza;</li>
        <li className="mb-2">Naši legitimni interesi, pod uslovom da ti interesi nisu nadjačani vašim interesima ili osnovnim pravima i slobodama.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">7. Kolačići (Cookies)</h2>
      <p className="mb-4">
        Naš Sajt koristi kolačiće i slične tehnologije za poboljšanje vašeg iskustva tokom posete Sajtu. Kolačići su male tekstualne datoteke koje se privremeno čuvaju na vašem uređaju i omogućavaju Sajtu da vas prepozna prilikom ponovne posete.
      </p>
      <p className="mb-4">
        Možete podesiti svoj internet pretraživač da odbije sve ili neke kolačiće, ili da vas upozori kada veb stranice postavljaju ili pristupaju kolačićima. Molimo vas da imate na umu da ukoliko onemogućite ili odbijete kolačiće, neki delovi našeg Sajta možda neće pravilno funkcionisati.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">8. Deljenje i prenos podataka</h2>
      <p className="mb-4">
        Vaše lične podatke možemo podeliti sa:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Pružaocima usluga koji nam pomažu u vođenju poslovanja i pružanju usluga (npr. hosting provajderi, IT dobavljači);</li>
        <li className="mb-2">Profesionalnim savetnicima kao što su pravnici, računovođe i osiguravači;</li>
        <li className="mb-2">Državnim organima kada je to zakonski propisano.</li>
      </ul>
      <p className="mb-4">
        Pri prenosu ličnih podataka, osiguravamo adekvatne mere zaštite u skladu sa važećim zakonima o zaštiti podataka. Vaše podatke nećemo prodavati, iznajmljivati ili distribuirati trećim stranama bez vaše izričite saglasnosti, osim kako je opisano u ovoj Politici privatnosti.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">9. Bezbednost podataka</h2>
      <p className="mb-4">
        Primenjujemo odgovarajuće tehničke i organizacione mere kako bismo zaštitili vaše lične podatke od neovlašćenog pristupa, gubitka, zloupotrebe ili oštećenja. Redovno preispitujemo i unapređujemo ove mere u skladu sa tehnološkim razvojem i poslovnim potrebama.
      </p>
      <p className="mb-4">
        Iako preduzimamo sve razumne mere za zaštitu vaših podataka, prenos informacija putem interneta nikada nije potpuno siguran. Svaki prenos podataka je na vašu odgovornost.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">10. Zadržavanje podataka</h2>
      <p className="mb-4">
        Vaše lične podatke čuvamo samo onoliko dugo koliko je potrebno za ispunjenje svrhe zbog koje su prikupljeni, uključujući zadovoljavanje zakonskih, računovodstvenih ili izveštajnih zahteva. Pri određivanju perioda zadržavanja, uzimamo u obzir količinu, prirodu i osetljivost podataka, potencijalni rizik od zloupotrebe, svrhe obrade i da li te svrhe možemo postići drugim sredstvima.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">11. Vaša prava</h2>
      <p className="mb-4">
        U skladu sa važećim zakonima o zaštiti podataka, imate sledeća prava:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Pravo na pristup: imate pravo da zatražite kopiju vaših ličnih podataka koje posedujemo;</li>
        <li className="mb-2">Pravo na ispravku: imate pravo da zatražite ispravku netačnih ili nepotpunih ličnih podataka;</li>
        <li className="mb-2">Pravo na brisanje: u određenim okolnostima, imate pravo da zatražite brisanje vaših ličnih podataka;</li>
        <li className="mb-2">Pravo na ograničenje obrade: u određenim okolnostima, imate pravo da zatražite ograničenje obrade vaših ličnih podataka;</li>
        <li className="mb-2">Pravo na prenosivost podataka: imate pravo da zatražite prenos vaših podataka drugom rukovaocu;</li>
        <li className="mb-2">Pravo na prigovor: imate pravo da uložite prigovor na obradu vaših ličnih podataka u određenim okolnostima;</li>
        <li className="mb-2">Pravo na povlačenje pristanka: kada se obrada zasniva na pristanku, imate pravo da povučete pristanak u bilo kom trenutku.</li>
      </ul>
      <p className="mb-4">
        Za ostvarivanje ovih prava ili bilo kakva pitanja u vezi sa obradom vaših ličnih podataka, možete nas kontaktirati putem email adrese <a href="mailto:info@institut-konsalting.rs" className="text-[#1A2B4C] hover:underline">info@institut-konsalting.rs</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">12. Pravo na žalbu</h2>
      <p className="mb-4">
        Ako smatrate da obrada vaših ličnih podataka nije u skladu sa važećim zakonima o zaštiti podataka, imate pravo da podnesete žalbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije (<a href="https://www.poverenik.rs" target="_blank" rel="noopener noreferrer" className="text-[#1A2B4C] hover:underline">www.poverenik.rs</a>).
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">13. Izmene politike privatnosti</h2>
      <p className="mb-4">
        Možemo povremeno ažurirati ovu Politiku privatnosti kako bismo odrazili promene u našim praksama ili iz drugih operativnih, pravnih ili regulatornih razloga. Najnoviju verziju ćemo uvek objaviti na našem Sajtu sa datumom poslednjeg ažuriranja. Savetujemo vam da povremeno posetite ovu stranicu kako biste bili informisani o svim promenama.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4 mt-8">14. Kontakt informacije</h2>
      <p className="mb-4">
        Za sva pitanja u vezi sa ovom Politikom privatnosti ili obradom vaših ličnih podataka, možete nas kontaktirati na:
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

export default PrivacyPolicy;