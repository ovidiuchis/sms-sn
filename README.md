# LUMINA DE LA ÎNCEPUTUL CLASEI - Campanie SMS

## Prezentare

Pagina de destinație modernă și optimizată pentru mobile pentru campania de strângere de fonduri prin SMS "LUMINA DE LA ÎNCEPUTUL CLASEI". Campania urmărește strângerea de fonduri pentru educația copiilor din mediul rural.

## Detalii Campanie

- **Nume:** LUMINA DE LA ÎNCEPUTUL CLASEI
- **SMS:** 8846 (text: LOC)
- **Donație:** 4 euro lunar
- **Organizația:** [Something New](https://something-new.ro/)

## Caracteristici

- **Design Mobile-First** cu interacțiuni prietenoase la atingere
- **Integrare SMS** directă cu preîncărcare mesaje
- **Cod QR** pentru acces ușor pe mobile
- **Layout Responsiv** pentru toate dispozitivele
- **Schema de Culori** cu galben ca culoare principală
- **Accesibilitate** conform WCAG

## Schema de Culori

- **Galben Principal:** #FFD43B (culoarea de brand)
- **Albastru:** #0054A6 (accente și text)
- **Albastru Deschis:** #0071CE (gradiente)
- **Text:** #000000 (negru), #5C5C5C (gri)
- **Accente:** #3B7251 (verde), #E2A9C4 (roz)

## Structura Fișierelor

```
├── index.html          # Structura HTML principală
├── styles.css          # Stilizare CSS și design responsiv
├── script.js           # Funcționalitate JavaScript și SMS
├── assets/             # Imagini și media
│   ├── header-image.jpg # Imaginea header (doi băieți cu rucsac)
│   ├── content-image.jpg # Imaginea principală de conținut
│   ├── qr-code.png     # Cod QR pentru donații SMS
│   └── logo_sn.png     # Logo Something New
└── README.md           # Documentația
```

## Imagini Necesare

1. **`header-image.jpg`** - Doi băieți cu rucsac (deja furnizată)
2. **`content-image.jpg`** - Educația rurală/copiii la școală
3. **`qr-code.png`** - Cod QR SMS (deja furnizat)
4. **`logo_sn.png`** - Logo Something New (deja furnizat)

## Funcționalitatea SMS

- **Detectare Mobile** automată
- **Preîncărcare SMS** cu mesajul "LOC" la 8864
- **Suport iOS/Android** cu formatare corectă
- **Fallback Desktop** cu instrucțiuni
- **Confirmare Succes** după acțiuni

## Structura Paginii & Modificări

### **Secțiuni și Conținut**

#### **1. Header Section** (`<header class="header">`)

- **Imagine:** `assets/header-image.jpg` - Doi copii cu rucsac
- **Titlu:** "LUMINA DE LA ÎNCEPUTUL CLASEI"
- **Subtitlu:** "O campanie pentru educația copiilor din mediul rural"
- **Culoare:** Galben gradient cu text negru

#### **2. Main Content Section** (`<section class="main-content">`)

- **Imagine:** `assets/content-image.jpg` - Educația rurală/copiii la școală
- **Text Principal:** Mesajul despre ghiozdanul gol și impactul donației
- **Culoare:** Fundal alb cu text albastru

#### **3. How it Works Section** (`<section class="how-it-works">`)

- **Titlu:** "CUM FUNCȚIONEAZĂ?"
- **SMS Box:** Afișează numărul 8846 și textul "LOC"
- **Culoare:** Fundal gri cu accent galben

#### **4. Testimonial Section** (`<section class="testimonial">`)

- **Imagine:** `assets/testimonial-image.jpg` - Copil trist care are nevoie de ajutor
- **Text:** Testimonialul Mariei (8 ani) din Valea Albă
- **Culoare:** Fundal alb cu text gri

#### **5. Call to Action Section** (`<section class="call-to-action">`)

- **Titlu:** "FII LUMINA DE LA ÎNCEPUTUL CLASEI!"
- **Buton:** "Trimite SMS 'LOC' la 8846"
- **QR Code:** `assets/qr-code.png` - Pentru scanare rapidă
- **Culoare:** Galben gradient cu buton albastru

#### **6. Footer** (`<footer class="footer">`)

- **Logo:** `assets/logo_sn.png` - Logo Something New
- **Info:** Copyright și link către something-new.ro
- **Culoare:** Albastru închis cu logo alb

### **Modificări Ușoare**

#### **Schimbarea Imaginilor:**

- **Header:** Înlocuiește `assets/header-image.jpg`
- **Conținut:** Înlocuiește `assets/content-image.jpg`
- **Testimonial:** Înlocuiește `assets/testimonial-image.jpg`
- **QR Code:** Înlocuiește `assets/qr-code.png`
- **Logo:** Înlocuiește `assets/logo_sn.png`

#### **Schimbarea Textului:**

- **Titlu Principal:** Caută `class="main-title"`
- **Subtitlu:** Caută `class="subtitle"`
- **Conținut:** Caută `class="content-text"`
- **Testimonial:** Caută `class="testimonial-text"`
- **SMS Number:** Caută toate aparițiile `8846`

#### **Schimbarea Culorilor:**

- **Variabile CSS:** Modifică valorile din `:root` în `styles.css`
- **Galben Principal:** `--campaign-yellow: #ffd43b`
- **Albastru:** `--campaign-blue: #0054a6`
- **Albastru Deschis:** `--campaign-light-blue: #0071ce`

#### **Schimbarea Numărului SMS:**

- **HTML:** Caută toate aparițiile `8846`
- **JavaScript:** Modifică `phoneNumber = '8846'` în `script.js`
- **README:** Actualizează secțiunea "Detalii Campanie"

## Optimizări Mobile

- **Touch-Friendly** (44px minimum)
- **Responsive Design** mobile-first
- **Performanță** optimizată
- **Accesibilitate** completă

## Configurare & Deployment

### **Checklist Pre-Deployment:**

1. ✅ **Imagini:** Toate imaginile sunt în folderul `assets/`
2. ✅ **Fișiere:** `index.html`, `styles.css`, `script.js` sunt complete
3. ✅ **SMS Number:** Verifică că toate referințele folosesc 8846
4. ✅ **Links:** Testează că link-ul către something-new.ro funcționează
5. ✅ **Responsive:** Testează pe mobile, tablet și desktop

### **Deployment:**

1. **Upload:** Încarcă toate fișierele pe serverul web
2. **Assets:** Asigură-te că folderul `assets/` conține toate imaginile
3. **HTTPS:** Folosește HTTPS pentru securitate (obligatoriu pentru SMS)
4. **Testing:** Testează funcționalitatea SMS pe dispozitive reale

### **Post-Deployment:**

1. **SMS Test:** Trimite un SMS test la 8846
2. **QR Code:** Scanează QR code-ul pentru verificare
3. **Mobile Test:** Testează pe diferite dispozitive mobile
4. **Performance:** Verifică viteza de încărcare

## Testare

- Testează pe dispozitive mobile
- Verifică funcționalitatea SMS
- Validează codul QR
- Testează responsivitatea

## Suport Browser

- **Modern:** Chrome, Firefox, Safari, Edge
- **Mobile:** iOS Safari, Chrome Mobile, Samsung Internet
- **Fallback:** Degradare grațioasă

## Troubleshooting

### **Probleme Comune:**

#### **SMS nu se deschide:**

- Verifică că folosești HTTPS (obligatoriu pentru SMS)
- Testează pe dispozitiv mobil real
- Verifică că numărul 8846 este corect

#### **Imaginile nu se încarcă:**

- Verifică că folderul `assets/` există
- Verifică că numele fișierelor sunt exacte (case-sensitive)
- Verifică că serverul suportă fișiere statice

#### **Layout-ul este stricat:**

- Verifică că `styles.css` este încărcat
- Verifică că nu există erori în consola browser-ului
- Testează pe diferite dimensiuni de ecran

#### **JavaScript nu funcționează:**

- Verifică că `script.js` este încărcat
- Verifică consola browser-ului pentru erori
- Asigură-te că serverul suportă JavaScript

## Mentenanță & Actualizări

### **Actualizări Periodice:**

- **Conținut:** Actualizează textul testimonialului lunar
- **Imagini:** Înlocuiește imaginile cu versiuni mai noi
- **SMS Number:** Verifică periodic că numărul 8846 este activ
- **Links:** Verifică că link-urile externe funcționează

### **Backup:**

- Fă backup la toate fișierele înainte de modificări
- Păstrează versiuni anterioare pentru rollback
- Documentează toate modificările făcute

### **Monitoring:**

- Verifică periodic funcționalitatea SMS
- Monitorizează performanța paginii
- Testează responsivitatea pe dispozitive noi

---

**Campania:** LUMINA DE LA ÎNCEPUTUL CLASEI  
**Organizația:** [Something New](https://something-new.ro/)  
**Scopul:** Strângere de fonduri prin SMS pentru educația copiilor din mediul rural  
**Ultima Actualizare:** Decembrie 2024
