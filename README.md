# Problemi sa kojima sam se susreo

- Crtica kod New Arrivals title je inline block umesto da sam je zakucao sa apsolutnom pozicijom (kako to izgleda da treba po dizajnu) kako bi se lepo pomerala prilikom resize-a windowa. Nisam siguran kako bih to mogao da izvedem sa ::before varijantom i apsolutnom pozicijom a da se prilikom smanjenja prozora ne proguta ta crtica.

- Mala kartica kod "Products" za sirinu telefona nije razdvojena kako je to na figmi predstavljeno.

- Slike su malo pomerene unutar kalupa u odnosu na figmu. Deluje mi kao da su koriscene za nijansu drugacije slike.

- Problemi sa swiperom:
	New Arrivals sekcija:
		1.Ukoliko se prvobitno ucita stranica sa punom sirinom ili se resizuje na punu sirinu swiper nece raditi kada se smanji sirina na sirinu tableta i telefona.
		2.Kada se stranica reload-uje na dimenziji za tablet i manje swiper radi ali se slajdovi ne pomeraju lepo sve dok se ne resizuje
		3.Kada se stranica reload-uje na dimenziji za telefon swiper redovno radi

	Testimonials sekcija:
		1. Ukoliko se prvobitno ucita stranica sa punom sirinom desna strelica ce raditi za desktop i tablet sirinu ali nece za mobilni jer on koristi drugo dugme za desno koje je bilo sakriveno (napravljen je breakpoint u js-u za tu dimenziju i promenu na to dugme ali ne radi).
		2. Ukoliko se stranica reload-uje na sirini za telefon dugme za desno ce redovno raditi za ovu sirinu ali nece kada povecamo sirinu prozora na velicinu za desktop i tablet. 

- Jasno mi je da swiper doda svoje podklase i atribute tamo gde je zadato prilikom loadovanja stranice ali nisam nasao nacin da bude responzivan prilikom promene sirine windowa.


	
