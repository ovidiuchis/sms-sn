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

## Funcționalități

- **Design Responsive** - Optimizat pentru mobile, tabletă și desktop
- **SMS Deep Linking** - Butonul preîncarcă SMS-ul cu textul și numărul pe telefonul clientului
- **Animații Smooth** - Efecte vizuale subtile și tranziții elegante
- **Mod Kiosk** - Mod automat pentru afișare în cafenele (adăugați `?kiosk=1` la URL)
  - Auto-scroll prin toate secțiunile
  - Fullscreen automat
  - Loop infinit cu pauze între secțiuni
  - Dezactivare interacțiuni (butoanele devin inactive)

## Structura Paginii & Modificări

### **Secțiuni și Conținut**

- **Header:** `assets/header-image.jpg` (doi băieți cu rucsac)
- **Conținut:** `assets/content-image.jpg` (educația rurală)
- **Testimonial:** `assets/testimonial-image.jpg` (copil trist)
- **QR Code:** `assets/qr-code.png` (pentru scanare)
- **Logo:** `assets/logo_sn.png` (Something New)

### **Modificări Rapide:**

- **Imagini:** Înlocuiește fișierele din `assets/`
- **Text:** Caută clasele CSS (`main-title`, `content-text`, etc.)
- **SMS:** Caută toate aparițiile `8846` în HTML și JavaScript
- **Culori:** Modifică variabilele din `:root` în `styles.css`

## Optimizări Mobile

- **Touch-Friendly** (44px minimum)
- **Responsive Design** mobile-first
- **Performanță** optimizată
- **Accesibilitate** completă

## Deployment

### **Checklist:**

- ✅ Toate imaginile în `assets/`
- ✅ Fișierele core complete
- ✅ SMS number 8846 consistent
- ✅ HTTPS obligatoriu pentru SMS

### **Upload:**

1. Încarcă toate fișierele pe server
2. Verifică că `assets/` este public
3. Testează SMS și responsivitatea

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

- **SMS nu funcționează:** Verifică HTTPS și numărul 8846
- **Imagini nu se încarcă:** Verifică folderul `assets/` și numele fișierelor
- **Layout stricat:** Verifică CSS și consola browser-ului
- **JavaScript nu funcționează:** Verifică `script.js` și consola

## Mentenanță

### **Actualizări:**

- Conținut testimonial lunar
- Imagini și logo
- Verifică SMS number 8846
- Testează link-urile externe

### **Backup & Monitoring:**

- Backup înainte de modificări
- Testează SMS și responsivitatea

---

**Campania:** LUMINA DE LA ÎNCEPUTUL CLASEI  
**Organizația:** [Something New](https://something-new.ro/)  
**Scopul:** Strângere de fonduri prin SMS pentru educația copiilor din mediul rural
