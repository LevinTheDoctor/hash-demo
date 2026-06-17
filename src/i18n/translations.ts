export type Lang = 'de' | 'ar' | 'uk' | 'fa';

export const LANG_META: Record<Lang, { label: string; native: string; dir: 'ltr' | 'rtl' }> = {
  de: { label: 'Deutsch',    native: 'Deutsch',    dir: 'ltr' },
  ar: { label: 'Arabisch',   native: 'العربية',    dir: 'rtl' },
  uk: { label: 'Ukrainisch', native: 'Українська', dir: 'ltr' },
  fa: { label: 'Persisch',   native: 'فارسی',      dir: 'rtl' },
};

export interface Dict {
  nav: { brand: string; hash: string; policy: string; manager: string; language: string };
  hashPage: {
    title: string;
    whatIsHashing: string;
    hashingBody: string;
    intro: string;
    timingTitle: string;
    timingNote: string;
    algoTitle: string;
    algoSubtitle: string;
    kicker: string;
    h1Line1: string;
    h1Line2: string;
    lead: string;
    leadEm: string;
    propsKicker: string;
    propsTitle: string;
    props: { num: string; title: string; body: string }[];
    workshopKicker: string;
    workshopTitle: string;
    workshopHint: string;
    runIndexLabel: string;
    deltaKicker: string;
    deltaTitle: string;
    deltaCaption: (ratio: string) => string;
    deltaScaleNote: string;
    algoEntryKicker: string;
    algoLabels: { year: string; designer: string; params: string; used: string };
    stampDanger: string;
    stampWarn: string;
    stampSafe: string;
    fingerprint: string;
  };
  hashInput: {
    placeholder: string;
    show: string;
    hide: string;
    submit: string;
    loading: string;
  };
  hashCard: {
    empty: string;
    error: string;
    copy: string;
    copied: string;
    copyAria: string;
    showFull: string;
    collapse: string;
    dangerous: string;
    safe: string;
  };
  algos: {
    sha256: { tagline: string; how: string; verdict: string; year: string; designer: string; params: string; used: string };
    bcrypt: { tagline: string; how: string; verdict: string; year: string; designer: string; params: string; used: string };
    scrypt: { tagline: string; how: string; verdict: string; year: string; designer: string; params: string; used: string };
    argon:  { tagline: string; how: string; verdict: string; year: string; designer: string; params: string; used: string };
  };
  builder: {
    title: string;
    subtitle: string;
    length: string;
    lowercase: string;
    uppercase: string;
    digits: string;
    special: string;
    pickAtLeastOne: string;
    charset: string;
    entropy: string;
    crackTime: string;
    online: string;
    onlineSub: string;
    offlineBcrypt: string;
    offlineBcryptSub: string;
    offlineSha: string;
    offlineShaSub: string;
    generated: string;
    regenerate: string;
    copy: string;
    copied: string;
    strengthVeryWeak: string;
    strengthWeak: string;
    strengthMedium: string;
    strengthStrong: string;
    strengthVeryStrong: string;
    crackUnbreakable: string;
    crackLt1s: string;
  };
  policy: {
    kicker: string;
    h1Line1: string;
    h1Line2: string;
    intro: { math: string; rest: string };
    chapters: { num: string; kicker: string; title: string; blurb: string }[];
    s01: {
      body: string;
      rows: [string, string][];
    };
    s02: { items: { headline: string; body: string }[] };
    s03: {
      bodyTop: string;
      formula: string;
      bodyBottom: string;
      ledger: { title: string; len: string; classes: string; bits: string; brute: string };
      verdicts: { seconds: string; hours: string; centuries: string; unbreakable: string };
    };
    s04: { body: string; live: string };
    s05: {
      body: string;
      doHeader: string;
      dontHeader: string;
      do: string[];
      dont: string[];
      footnote: { storage: string; input: string };
      footnoteWrap: (a: string, b: string) => string;
    };
    footer: string;
  };
  manager: {
    kicker: string;
    h1Line1: string;
    h1Line2: string;
    intro: { lead: string; em: string; tail: string };
    chapters: { num: string; title: string }[];
    s01: {
      kicker: string;
      title: string;
      body: string;
      pillars: { num: string; title: string; body: string }[];
    };
    s02: {
      kicker: string;
      title: string;
      body: string;
      options: { headline: string; tagline: string; body: string; pros: string[]; cons: string[] }[];
      proHeader: string;
      conHeader: string;
    };
    s03: {
      kicker: string;
      title: string;
      body: string;
      tableTitle: string;
      cols: { feature: string; bitwarden: string; onepassword: string; nordpass: string };
      rows: { feature: string; bitwarden: string; onepassword: string; nordpass: string }[];
      verdict: string;
    };
    s04: {
      kicker: string;
      title: string;
      body: string;
      tips: { headline: string; body: string }[];
    };
    footer: string;
  };
}

const de: Dict = {
  nav: { brand: 'Hash-Lab', hash: 'Hash-Demo', policy: 'Password Policy', manager: 'Password Manager', language: 'Sprache' },
  hashPage: {
    title: 'Hash-Algorithmen im Vergleich',
    whatIsHashing: 'Was ist Hashing?',
    hashingBody:
      'Eine **Hash-Funktion** wandelt beliebige Eingaben (z. B. ein Passwort) in eine Zeichenkette fester Länge um – den *Hash*. Der Prozess ist **einwegig**: Aus dem Hash lässt sich die ursprüngliche Eingabe nicht zurückrechnen. Schon eine minimale Änderung an der Eingabe erzeugt einen völlig anderen Hash (Lawineneffekt). Hashes werden genutzt, um Passwörter zu speichern, Dateiintegrität zu prüfen und digitale Signaturen zu erstellen.',
    intro:
      'SHA-256 ist eine schnelle Prüfsummen-Funktion und für Passwörter ungeeignet – moderne GPUs probieren damit Milliarden Kandidaten pro Sekunde. bcrypt, scrypt und Argon2id sind absichtlich langsam und speicher-hungrig.',
    timingTitle: 'Zeitmessung',
    timingNote:
      'Hinweis: bcrypt und Argon2id laufen hier als WASM/JS im Browser. Server-seitige native Implementierungen sind schneller, aber das Verhältnis zu SHA-256 bleibt gleich.',
    algoTitle: 'Wie funktionieren die Algorithmen?',
    algoSubtitle: 'Eine kurze Übersicht über das Innenleben jedes Verfahrens.',
    kicker: 'Field Guide · Vol. 01',
    h1Line1: 'Vier Funktionen,',
    h1Line2: 'vier Geschwindigkeiten.',
    lead: 'Zwischen einem Hash, der in einer Mikrosekunde fällt, und einem, der eine halbe Sekunde braucht, liegen sechs Größenordnungen — und das ist genau der',
    leadEm: 'Geschwindigkeits-Unterschied',
    propsKicker: 'Drei Eigenschaften',
    propsTitle: 'Was eine Hash-Funktion ausmacht',
    props: [
      { num: '01', title: 'Determinismus',  body: 'Dieselbe Eingabe ergibt immer denselben Hash. Anders ließe sich nie überprüfen, ob ein Passwort stimmt.' },
      { num: '02', title: 'Einwegigkeit',   body: 'Aus dem Hash zurück zur Eingabe? Praktisch unmöglich. Eine gute Hash-Funktion ist eine Falltür: leicht hinein, ohne Schlüssel nicht hinaus.' },
      { num: '03', title: 'Lawineneffekt',  body: 'Ein einziges geändertes Bit erzeugt einen vollständig anderen Hash. Aus „passwort" und „Passwort" werden zwei Fremde.' },
    ],
    workshopKicker: 'Werkstatt',
    workshopTitle: 'Probier es aus',
    workshopHint: 'Gib ein Passwort ein. Vier Verfahren rechnen es gleichzeitig — du siehst, wie viel Zeit jedes braucht.',
    runIndexLabel: 'Run',
    deltaKicker: 'Speed-Delta',
    deltaTitle: 'Laufzeit-Vergleich',
    deltaCaption: (ratio) => `Argon2id war hier rund ${ratio}× langsamer als SHA-256 — und genau das ist erwünscht.`,
    deltaScaleNote: 'Hinweis: bcrypt und Argon2id laufen hier als WASM/JS im Browser. Server-seitige native Implementierungen sind schneller, aber das Verhältnis zu SHA-256 bleibt gleich. X-Achse logarithmisch.',
    algoEntryKicker: 'Verfahren',
    algoLabels: { year: 'Jahr', designer: 'Entwurf', params: 'Stellschrauben', used: 'Im Einsatz' },
    stampDanger: 'Gefährlich schnell',
    stampWarn: 'Vertretbar',
    stampSafe: 'Forensisch langsam',
    fingerprint: 'Fingerabdruck',
  },
  hashInput: {
    placeholder: 'Passwort eingeben…',
    show: 'Passwort anzeigen',
    hide: 'Passwort verbergen',
    submit: 'Hash berechnen',
    loading: 'Hashe…',
  },
  hashCard: {
    empty: 'Noch kein Hash – Passwort eingeben und berechnen.',
    error: 'Fehler',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyAria: 'Hash kopieren',
    showFull: 'Vollständigen Hash anzeigen',
    collapse: 'Einklappen',
    dangerous: 'Gefährlich schnell',
    safe: 'Sicher langsam',
  },
  algos: {
    sha256: {
      tagline: 'Schnelle kryptografische Prüfsumme',
      how: 'Das Passwort wird in 512-Bit-Blöcke zerlegt und in 64 Runden durch Bit-Rotationen, XOR und modulare Addition zu einem 256-Bit-Digest verdichtet. Ein einziger Durchlauf, kein Salt, kein einstellbarer Aufwand – auf einer GPU sind Milliarden Versuche pro Sekunde möglich.',
      verdict: 'Für Datei-Integrität gut, für Passwörter ungeeignet.',
      year: '2001 · NIST FIPS 180-4',
      designer: 'NSA',
      params: 'Keine — fester Algorithmus',
      used: 'Git-Commit-Hashes, TLS-Zertifikate, Bitcoin-Mining',
    },
    bcrypt: {
      tagline: 'Iterierte Blowfish-Key-Schedule',
      how: 'Basiert auf dem Blowfish-Verfahren: Aus Passwort und 128-Bit-Salt wird ein Schlüssel-Schedule berechnet und 2^rounds-mal neu aufgesetzt (rounds=10 → 1024 Runden). Jede Erhöhung von rounds verdoppelt die Rechenzeit – Angreifer und Verteidiger zahlen denselben Preis.',
      verdict: 'Solider Klassiker, aber kaum speicher-intensiv – GPU/ASIC-Angriffe bleiben effektiv.',
      year: '1999 · USENIX',
      designer: 'Niels Provos & David Mazières',
      params: 'cost (rounds, üblich 10–14)',
      used: 'OpenBSD-Logins, ältere Rails/Laravel-Stacks',
    },
    scrypt: {
      tagline: 'Speicher-hartes Key-Stretching',
      how: 'Füllt einen großen RAM-Bereich (über N und r konfigurierbar) mit pseudozufälligen Blöcken und liest danach in unvorhersehbarer Reihenfolge wieder daraus. Wer parallelisieren will, braucht pro Versuch denselben Speicher – auf GPUs/ASICs wird das schnell zum Flaschenhals.',
      verdict: 'Gut gegen GPU-Cracking, etwas älter als Argon2.',
      year: '2009 · RFC 7914',
      designer: 'Colin Percival',
      params: 'N (CPU/RAM), r (Blockgröße), p (Parallelität)',
      used: 'Litecoin, Dogecoin, Tarsnap-Backups',
    },
    argon: {
      tagline: 'Gewinner der Password Hashing Competition 2015',
      how: 'Hybride Variante aus Argon2i (datenunabhängig, resistent gegen Seitenkanäle) und Argon2d (datenabhängig, resistent gegen Time-Memory-Trade-offs). Drei Parameter steuern Rechenzeit (t), Speicher (m) und Parallelität (p) – ideal an die jeweilige Hardware anpassbar.',
      verdict: 'Aktuelle Empfehlung von OWASP und IETF (RFC 9106).',
      year: '2015 · RFC 9106',
      designer: 'Biryukov, Dinu & Khovratovich (KU Leuven)',
      params: 't (Zeit), m (Speicher in KiB), p (Threads)',
      used: 'Signal, 1Password, moderne Auth-Stacks',
    },
  },
  builder: {
    title: 'Passwort-Policy Builder',
    subtitle: 'Lege Regeln fest und sieh, wie lange ein Angreifer bräuchte.',
    length: 'Mindestlänge',
    lowercase: 'Kleinbuchstaben (a–z)',
    uppercase: 'Großbuchstaben (A–Z)',
    digits: 'Ziffern (0–9)',
    special: 'Sonderzeichen (!@#…)',
    pickAtLeastOne: 'Mindestens eine Zeichenklasse auswählen.',
    charset: 'Zeichenraum',
    entropy: 'Entropie',
    crackTime: 'Knackzeit (Durchschnitt)',
    online: 'Online-Angriff',
    onlineSub: 'Web-Login, 10/s (Rate-Limit)',
    offlineBcrypt: 'Offline-Angriff',
    offlineBcryptSub: 'bcrypt, GPU-Farm, 100K/s',
    offlineSha: 'Offline-Angriff',
    offlineShaSub: 'SHA-256, GPU-Farm, 100 Mrd./s',
    generated: 'Generiertes Passwort',
    regenerate: 'Neu generieren',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    strengthVeryWeak: 'Sehr schwach',
    strengthWeak: 'Schwach',
    strengthMedium: 'Mittel',
    strengthStrong: 'Stark',
    strengthVeryStrong: 'Sehr stark',
    crackUnbreakable: 'Praktisch unknackbar',
    crackLt1s: '< 1 Sekunde',
  },
  policy: {
    kicker: 'Field Guide · Vol. 02',
    h1Line1: 'Eine Passwort-Policy',
    h1Line2: 'ist kein Bürokratiezwang.',
    intro: {
      math: 'Mathematik',
      rest: ', die zwischen „in Sekunden geknackt" und „braucht Sonnensysteme an Rechenleistung" steht. Diese Seite führt dich in fünf Kapiteln durch die Theorie und endet mit einem Werkzeug, mit dem du deine eigene Policy baust und sofort siehst, was sie taugt.',
    },
    chapters: [
      { num: '01', kicker: 'Definition', title: 'Was ist eine Passwort-Policy?',   blurb: 'Die Regeln, die definieren, wie ein gültiges Passwort aussehen muss.' },
      { num: '02', kicker: 'Motivation', title: 'Warum überhaupt Regeln?',         blurb: 'Vier konkrete Angriffe — und was eine gute Policy daran ändert.' },
      { num: '03', kicker: 'Mathematik', title: 'Entropie verstehen',              blurb: 'Wieso jedes zusätzliche Zeichen exponentiell mehr Sicherheit bringt.' },
      { num: '04', kicker: 'Werkstatt',  title: 'Bau deine eigene Policy',         blurb: 'Schiebe Regler, beobachte die Knackzeit, generiere Passwörter.' },
      { num: '05', kicker: 'Praxis',     title: 'Best Practices nach NIST 800-63', blurb: 'Was moderne Empfehlungen sagen — und was sich überholt hat.' },
    ],
    s01: {
      body: 'Die Regeln, die definieren, wie ein gültiges Passwort aussehen muss. Eine Policy beantwortet drei Fragen: *Wie lang? Welche Zeichen? Was ist verboten?*',
      rows: [
        ['Länge', 'Untergrenze (z. B. 12 Zeichen) und ggf. Obergrenze.'],
        ['Zeichenklassen', 'Welche Zeichengruppen erforderlich oder erlaubt sind.'],
        ['Verbotsliste', 'Bekannte schwache Passwörter, Firmenname, E-Mail-Adresse.'],
        ['Lifecycle', 'Wechselrhythmus, Sperren nach Fehlversuchen, Wiederverwendung.'],
      ],
    },
    s02: {
      items: [
        { headline: 'Brute-Force wird unbezahlbar', body: 'Ein 6-stelliges Passwort mit nur Buchstaben fällt in Sekunden. Ein 14-stelliges mit allen Zeichenklassen läuft selbst auf einer GPU-Farm Jahrhunderte.' },
        { headline: 'Wörterbuch-Angriffe scheitern', body: 'Eine Mindestlänge zwingt Nutzer weg von Vornamen, Geburtsdaten und „passwort123". Genau diese Listen werden zuerst probiert.' },
        { headline: 'Credential-Stuffing trifft seltener', body: 'Wenn ein Anbieter geleakt wird, klappt das alte Passwort woanders nicht. Strikte Regeln machen Wiederverwendung mühsam genug, um Manager zu nutzen.' },
        { headline: 'Compliance & Auditierbarkeit', body: 'ISO 27001, NIST 800-63B, BSI-Grundschutz: Alle erwarten dokumentierte Policies. Ohne Regeln keine Zertifizierung.' },
      ],
    },
    s03: {
      bodyTop: 'Die *Entropie* misst die Unvorhersagbarkeit eines Passworts in Bit. Bei einem zufälligen Passwort gilt:',
      formula: 'Bits = Länge × log₂(Zeichenraum)',
      bodyBottom:
        'Jedes zusätzliche Bit **verdoppelt** den Aufwand für einen Angreifer. Ab etwa **80 Bit** ist ein Passwort selbst gegen spezialisierte Hardware praktisch sicher — vorausgesetzt, der Server hasht es mit bcrypt, scrypt oder Argon2id und nicht mit reinem SHA-256.',
      ledger: { title: 'Entropy Ledger', len: 'Länge', classes: 'Klassen', bits: 'Bit', brute: 'Brute-Force' },
      verdicts: { seconds: 'Sekunden', hours: 'Stunden', centuries: 'Jahrhunderte', unbreakable: 'Praktisch unknackbar' },
    },
    s04: {
      body: 'Spiel mit den Reglern. Jede Änderung wirkt sich live auf die Entropie und die geschätzte Knackzeit in drei Angriffs-Szenarien aus.',
      live: 'Live-Werkstatt',
    },
    s05: {
      body: 'Das US-amerikanische NIST hat 2017 viele alte Empfehlungen verworfen. Was heute zählt:',
      doHeader: 'Tu das',
      dontHeader: 'Lass das',
      do: [
        'Mindestlänge ≥ 12, idealerweise ≥ 14 Zeichen.',
        'Passphrasen erlauben — vier zufällige Wörter sind oft stärker und merkbarer.',
        'Gegen Listen geleakter Passwörter abgleichen (z. B. „Have I Been Pwned").',
        'Passwort-Manager fördern, statt verbieten.',
      ],
      dont: [
        'Erzwungene Rotation alle 90 Tage — führt zu Mustern wie „Sommer2024!".',
        'Verbot von Copy & Paste — verhindert sichere Manager.',
        'Knappe Maximallänge (< 64 Zeichen) — schließt Passphrasen aus.',
      ],
      footnote: { input: 'Eingabe', storage: 'Lagerung' },
      footnoteWrap: (input, storage) =>
        `Die beste Policy nützt nichts, wenn der Server das Passwort mit einem schnellen Hash speichert. Eine Policy regelt die ${input}, der Hash schützt die ${storage}. Erst beides zusammen ergibt Sicherheit.`,
    },
    footer: 'Hash-Lab Field Guide · Ende von Vol. 02',
  },
  manager: {
    kicker: 'Field Guide · Vol. 03',
    h1Line1: 'Ein Tresor,',
    h1Line2: 'ein Master-Passwort.',
    intro: {
      lead: 'Eine perfekte Policy hilft wenig, wenn du dir trotzdem nur drei Passwörter merken kannst. Ein Passwort-Manager dreht das Problem um: du merkst dir',
      em: 'ein einziges starkes Master-Passwort',
      tail: ' — der Rest wird zufällig generiert, verschlüsselt gespeichert und auf Knopfdruck eingefügt.',
    },
    chapters: [
      { num: '01', title: 'Was er löst' },
      { num: '02', title: 'Private Optionen' },
      { num: '03', title: 'Anbieter im Vergleich' },
      { num: '04', title: 'Tresor-Hygiene' },
    ],
    s01: {
      kicker: 'Definition',
      title: 'Warum überhaupt ein Manager?',
      body: 'Ein Passwort-Manager ist ein lokal oder cloud-basiert verschlüsselter Tresor. Inhalte werden mit einem aus dem Master-Passwort abgeleiteten Schlüssel (PBKDF2, Argon2id) ver- und entschlüsselt — der Anbieter sieht nichts. Damit verschwinden die drei häufigsten Fehler auf einmal:',
      pillars: [
        { num: '01', title: 'Wiederverwendung',  body: 'Jede Seite bekommt ihr eigenes Zufallspasswort. Ein Leak bei Anbieter A trifft Anbieter B nicht mehr.' },
        { num: '02', title: 'Schwache Passwörter', body: '24 Zeichen aus allen Klassen sind genauso bequem wie „passwort1" — ein Klick und sie sind generiert und eingefügt.' },
        { num: '03', title: 'Phishing-Schutz',     body: 'Autofill funktioniert nur auf der echten Domain. Eine gefälschte Login-Seite bekommt schlicht nichts ausgefüllt.' },
      ],
    },
    s02: {
      kicker: 'Privat & Souverän',
      title: 'Selbstverwaltete und private Optionen',
      body: 'Nicht jeder will seine Geheimnisse einem US-Anbieter anvertrauen. Drei Wege geben dir die volle Kontrolle — mit jeweils anderem Komfort-Preis.',
      options: [
        {
          headline: 'KeePassXC',
          tagline: 'Lokaler Tresor, kein Cloud-Zwang',
          body: 'Open-Source-Desktop-App, die eine einzige .kdbx-Datei mit AES-256 oder ChaCha20 verschlüsselt. Du synchronisierst sie selbst — per Nextcloud, Syncthing oder USB-Stick.',
          pros: ['Kein Server, kein Account, keine Telemetrie', 'Geprüfter Code, etablierte Krypto', 'Kostenlos auf allen Plattformen'],
          cons: ['Sync musst du selbst lösen', 'Mobile-Apps weniger komfortabel als Cloud-Anbieter', 'Kein offizielles Familien-Teilen'],
        },
        {
          headline: 'Vaultwarden (self-hosted)',
          tagline: 'Bitwarden-kompatibler Server auf deiner Hardware',
          body: 'Eine Rust-Neuimplementierung der Bitwarden-Server-API. Läuft als Docker-Container auf einem Raspberry Pi oder im Heimnetz — die offiziellen Bitwarden-Clients verbinden sich nahtlos.',
          pros: ['Volle Cloud-Bequemlichkeit ohne Drittanbieter', 'Premium-Features ohne Lizenz', 'Komplette Datenhoheit'],
          cons: ['Du bist für Backups & Updates verantwortlich', 'Erreichbarkeit von unterwegs erfordert VPN oder Reverse-Proxy', 'Setup braucht etwas Linux-Wissen'],
        },
        {
          headline: 'Passbolt',
          tagline: 'Team-orientiert, in der EU entwickelt',
          body: 'Open-Source-Manager mit Fokus auf Team-Sharing über OpenPGP. Self-hosting oder gehostet aus Luxemburg — DSGVO-konform per Default.',
          pros: ['Granulare Team-Rechte', 'EU-Hosting verfügbar', 'Browser-Add-on prüft Code lokal'],
          cons: ['Mobile-Apps reifer als früher, aber weniger poliert', 'Privatnutzer-Komfort hinter 1Password & Co.', 'Setup komplexer'],
        },
      ],
      proHeader: 'Stärken',
      conHeader: 'Schwächen',
    },
    s03: {
      kicker: 'Vergleich',
      title: 'Bitwarden · 1Password · NordPass',
      body: 'Die drei populärsten kommerziellen Anbieter im Westen. Alle nutzen Zero-Knowledge-Verschlüsselung — die Unterschiede liegen in Preismodell, Komfort und Krypto-Details.',
      tableTitle: 'Anbieter-Ledger',
      cols: { feature: 'Merkmal', bitwarden: 'Bitwarden', onepassword: '1Password', nordpass: 'NordPass' },
      rows: [
        { feature: 'Herkunft',           bitwarden: 'USA · Open Source',           onepassword: 'Kanada · proprietär',          nordpass: 'Litauen (Nord Security)' },
        { feature: 'Tresor-Krypto',      bitwarden: 'AES-256 + PBKDF2/Argon2id',    onepassword: 'AES-256 + PBKDF2 + Secret Key',  nordpass: 'XChaCha20 + Argon2id' },
        { feature: 'Self-hosting',       bitwarden: 'Ja (offiziell + Vaultwarden)',onepassword: 'Nein',                          nordpass: 'Nein' },
        { feature: 'Free-Plan',           bitwarden: 'Sehr großzügig',              onepassword: 'Keiner (14 Tage Test)',         nordpass: 'Eingeschränkt (1 Gerät)' },
        { feature: 'Familien-Tarif',      bitwarden: '≈ 40 €/Jahr · 6 Personen',    onepassword: '≈ 60 €/Jahr · 5 Personen',      nordpass: '≈ 36 €/Jahr · 6 Personen' },
        { feature: 'Externer Audit',      bitwarden: 'Cure53, Insight Risk',        onepassword: 'Cure53, Onica, KPMG',           nordpass: 'Cure53' },
        { feature: 'Passkeys',            bitwarden: 'Ja',                          onepassword: 'Ja',                            nordpass: 'Ja' },
      ],
      verdict: 'Bitwarden für maximalen Wert und Self-host-Option · 1Password für die kompromissloseste UX und das zusätzliche Secret-Key-Modell · NordPass für moderne Krypto und ein integriertes Nord-Ökosystem.',
    },
    s04: {
      kicker: 'Praxis',
      title: 'Tresor-Hygiene',
      body: 'Ein Manager nimmt dir Arbeit ab — aber nicht die Verantwortung für ein paar wenige, sehr wichtige Geheimnisse.',
      tips: [
        { headline: 'Master-Passwort als Passphrase',  body: 'Vier bis fünf zufällige Wörter (Diceware) sind merkbar und liefern > 80 Bit Entropie. Niemals wiederverwenden.' },
        { headline: 'Zweiter Faktor obligatorisch',    body: 'Hardware-Key (YubiKey, NFC-Token) schlägt TOTP-App, TOTP-App schlägt SMS. Ohne 2FA ist der Tresor nur so stark wie das Master-Passwort.' },
        { headline: 'Recovery-Kit ausdrucken',         body: 'Notfall-Code und Wiederherstellungs-Schlüssel auf Papier — getrennt vom Master-Passwort gelagert. Ohne sie ist ein vergessenes Master-Passwort endgültig.' },
        { headline: 'Regelmäßiger Health-Check',       body: 'Manager melden geleakte, schwache oder doppelte Passwörter. Einmal im Quartal durchgehen, kritische zuerst rotieren.' },
      ],
    },
    footer: 'Hash-Lab Field Guide · Ende von Vol. 03',
  },
};

const ar: Dict = {
  nav: { brand: 'مختبر التجزئة', hash: 'عرض التجزئة', policy: 'سياسة كلمات المرور', manager: 'مدير كلمات المرور', language: 'اللغة' },
  hashPage: {
    title: 'مقارنة خوارزميات التجزئة',
    whatIsHashing: 'ما هي التجزئة؟',
    hashingBody:
      '**دالة التجزئة** تحوّل أي مدخل (مثل كلمة مرور) إلى سلسلة بطول ثابت — وهي *التجزئة*. العملية **أحادية الاتجاه**: لا يمكن استعادة المدخل الأصلي من التجزئة. أي تغيير بسيط في المدخل يُنتج تجزئة مختلفة تمامًا (تأثير الانهيار الجليدي). تُستخدم التجزئات لتخزين كلمات المرور والتحقق من سلامة الملفات وإنشاء التواقيع الرقمية.',
    intro:
      'SHA-256 دالة تحقق سريعة وغير مناسبة لكلمات المرور — تجرّب وحدات المعالجة الرسومية الحديثة مليارات المرشحين في الثانية. أما bcrypt و scrypt و Argon2id فهي بطيئة وكثيفة الذاكرة عمدًا.',
    timingTitle: 'قياس الزمن',
    timingNote:
      'ملاحظة: bcrypt و Argon2id يعملان هنا بصيغة WASM/JS داخل المتصفح. التنفيذات الأصلية على الخادم أسرع، لكن النسبة إلى SHA-256 تبقى نفسها.',
    algoTitle: 'كيف تعمل الخوارزميات؟',
    algoSubtitle: 'نظرة موجزة على آلية كل خوارزمية.',
    kicker: 'دليل ميداني · المجلد 01',
    h1Line1: 'أربع دوال،',
    h1Line2: 'أربع سرعات.',
    lead: 'بين تجزئة تسقط في ميكروثانية وأخرى تستغرق نصف ثانية فرق ستّة أوامر من المقدار — وهو بالضبط',
    leadEm: 'فارق السرعة',
    propsKicker: 'ثلاث خصائص',
    propsTitle: 'ما الذي يصنع دالة تجزئة',
    props: [
      { num: '01', title: 'الحتمية',          body: 'المدخل ذاته يعطي دائمًا التجزئة ذاتها. وإلا ما أمكن التحقق من صحة كلمة مرور.' },
      { num: '02', title: 'الاتجاه الواحد',    body: 'من التجزئة إلى المدخل؟ مستحيل عمليًا. دالة جيدة كالباب السحري: تدخل بسهولة وتعود مستحيلًا دون مفتاح.' },
      { num: '03', title: 'تأثير الانهيار',    body: 'تغيير بت واحد ينتج تجزئة مختلفة كليًا. «password» و«Password» تصيران غريبتين.' },
    ],
    workshopKicker: 'ورشة',
    workshopTitle: 'جرّب بنفسك',
    workshopHint: 'أدخل كلمة المرور. أربع دوال تحسبها في الوقت ذاته — وترى كم استغرقت كل واحدة.',
    runIndexLabel: 'تشغيل',
    deltaKicker: 'فارق السرعة',
    deltaTitle: 'مقارنة أزمنة التشغيل',
    deltaCaption: (ratio) => `كان Argon2id هنا أبطأ بنحو ${ratio}× من SHA-256 — وهذا هو المطلوب تمامًا.`,
    deltaScaleNote: 'ملاحظة: bcrypt و Argon2id يعملان هنا بصيغة WASM/JS في المتصفح. التنفيذات الأصلية على الخادم أسرع، لكن النسبة إلى SHA-256 تبقى نفسها. المحور السيني لوغاريتمي.',
    algoEntryKicker: 'الخوارزمية',
    algoLabels: { year: 'السنة', designer: 'التصميم', params: 'الإعدادات', used: 'في الاستخدام' },
    stampDanger: 'سريع بشكل خطير',
    stampWarn: 'مقبول',
    stampSafe: 'بطيء جنائيًا',
    fingerprint: 'بصمة',
  },
  hashInput: {
    placeholder: 'أدخل كلمة المرور…',
    show: 'إظهار كلمة المرور',
    hide: 'إخفاء كلمة المرور',
    submit: 'احسب التجزئة',
    loading: 'جارٍ التجزئة…',
  },
  hashCard: {
    empty: 'لا توجد تجزئة بعد — أدخل كلمة المرور واحسبها.',
    error: 'خطأ',
    copy: 'نسخ',
    copied: 'تم النسخ',
    copyAria: 'نسخ التجزئة',
    showFull: 'إظهار التجزئة كاملة',
    collapse: 'طي',
    dangerous: 'سريع بشكل خطير',
    safe: 'بطيء بأمان',
  },
  algos: {
    sha256: {
      tagline: 'تحقق تشفيري سريع',
      how: 'تُقسَّم كلمة المرور إلى كتل بحجم 512 بت وتُضغط في 64 جولة عبر تدويرات بتات وXOR وجمع معياري لإنتاج ملخص بطول 256 بت. تمريرة واحدة، بدون ملح، وبدون تكلفة قابلة للضبط — وحدة المعالجة الرسومية قادرة على مليارات المحاولات في الثانية.',
      verdict: 'جيدة لسلامة الملفات، غير مناسبة لكلمات المرور.',
      year: '2001 · NIST FIPS 180-4',
      designer: 'وكالة الأمن القومي الأمريكية (NSA)',
      params: 'لا توجد — خوارزمية ثابتة',
      used: 'هاشات Git، شهادات TLS، تعدين Bitcoin',
    },
    bcrypt: {
      tagline: 'جدول مفاتيح Blowfish متكرر',
      how: 'يعتمد على Blowfish: من كلمة المرور وملح 128 بت يُحسب جدول مفاتيح ثم يُعاد بناؤه 2^rounds مرة (rounds=10 → 1024 جولة). كل زيادة في rounds تضاعف زمن الحساب — المهاجم والمدافع يدفعان نفس الثمن.',
      verdict: 'كلاسيكي متين، لكن استهلاكه للذاكرة محدود — هجمات GPU/ASIC تبقى فعّالة.',
      year: '1999 · USENIX',
      designer: 'Niels Provos و David Mazières',
      params: 'cost (rounds، عادةً 10–14)',
      used: 'تسجيلات دخول OpenBSD، تطبيقات Rails/Laravel القديمة',
    },
    scrypt: {
      tagline: 'تمديد مفتاح كثيف الذاكرة',
      how: 'يملأ منطقة كبيرة من الذاكرة (قابلة للضبط عبر N و r) بكتل شبه عشوائية ثم يقرأ منها بترتيب غير متوقع. أي توازي يتطلب نفس الذاكرة لكل محاولة — وهذا يصبح عنق زجاجة على GPU/ASIC.',
      verdict: 'جيد ضد كسر GPU، لكنه أقدم قليلًا من Argon2.',
      year: '2009 · RFC 7914',
      designer: 'Colin Percival',
      params: 'N (وحدة المعالجة/الذاكرة)، r (حجم الكتلة)، p (التوازي)',
      used: 'Litecoin، Dogecoin، نسخ Tarsnap الاحتياطية',
    },
    argon: {
      tagline: 'الفائز بمسابقة تجزئة كلمات المرور 2015',
      how: 'نسخة هجينة من Argon2i (مستقل عن البيانات، مقاوم للقنوات الجانبية) و Argon2d (تابع للبيانات، مقاوم لمفاضلات الزمن/الذاكرة). ثلاث معاملات تتحكم في الزمن (t) والذاكرة (m) والتوازي (p) — مثالي للتكيّف مع كل عتاد.',
      verdict: 'التوصية الحالية من OWASP و IETF (RFC 9106).',
      year: '2015 · RFC 9106',
      designer: 'Biryukov و Dinu و Khovratovich (KU Leuven)',
      params: 't (الزمن)، m (الذاكرة بـ KiB)، p (الخيوط)',
      used: 'Signal، 1Password، أنظمة المصادقة الحديثة',
    },
  },
  builder: {
    title: 'منشئ سياسة كلمات المرور',
    subtitle: 'حدّد القواعد وشاهد كم سيستغرق المهاجم.',
    length: 'الحد الأدنى للطول',
    lowercase: 'حروف صغيرة (a–z)',
    uppercase: 'حروف كبيرة (A–Z)',
    digits: 'أرقام (0–9)',
    special: 'رموز خاصة (!@#…)',
    pickAtLeastOne: 'اختر فئة حروف واحدة على الأقل.',
    charset: 'مجال الحروف',
    entropy: 'الإنتروبيا',
    crackTime: 'زمن الكسر (متوسط)',
    online: 'هجوم متصل',
    onlineSub: 'تسجيل دخول الويب، 10/ث (حد المعدل)',
    offlineBcrypt: 'هجوم غير متصل',
    offlineBcryptSub: 'bcrypt، مزرعة GPU، 100K/ث',
    offlineSha: 'هجوم غير متصل',
    offlineShaSub: 'SHA-256، مزرعة GPU، 100 مليار/ث',
    generated: 'كلمة مرور مُولَّدة',
    regenerate: 'إعادة التوليد',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    strengthVeryWeak: 'ضعيفة جدًا',
    strengthWeak: 'ضعيفة',
    strengthMedium: 'متوسطة',
    strengthStrong: 'قوية',
    strengthVeryStrong: 'قوية جدًا',
    crackUnbreakable: 'غير قابلة للكسر عمليًا',
    crackLt1s: '< ثانية واحدة',
  },
  policy: {
    kicker: 'دليل ميداني · المجلد 02',
    h1Line1: 'سياسة كلمات المرور',
    h1Line2: 'ليست إجراءً بيروقراطيًا.',
    intro: {
      math: 'الرياضيات',
      rest: ' هي ما يفصل بين «تُكسر في ثوانٍ» و«تحتاج طاقة حسابية بحجم نظام شمسي». تقودك هذه الصفحة عبر خمسة فصول في النظرية، وتنتهي بأداة تبني فيها سياستك وترى نتيجتها فورًا.',
    },
    chapters: [
      { num: '01', kicker: 'تعريف',       title: 'ما هي سياسة كلمات المرور؟', blurb: 'القواعد التي تحدّد شكل كلمة المرور الصالحة.' },
      { num: '02', kicker: 'دوافع',       title: 'لماذا القواعد أصلًا؟',      blurb: 'أربعة هجمات ملموسة — وما تغيّره السياسة الجيدة فيها.' },
      { num: '03', kicker: 'رياضيات',     title: 'فهم الإنتروبيا',            blurb: 'لماذا كل حرف إضافي يرفع الأمان أُسّيًا.' },
      { num: '04', kicker: 'ورشة',        title: 'ابنِ سياستك الخاصة',        blurb: 'حرّك المنزلقات، راقب زمن الكسر، ولّد كلمات مرور.' },
      { num: '05', kicker: 'ممارسة',      title: 'أفضل الممارسات وفق NIST 800-63', blurb: 'ما تقوله التوصيات الحديثة — وما الذي تجاوزه الزمن.' },
    ],
    s01: {
      body: 'القواعد التي تحدّد شكل كلمة المرور الصالحة. تجيب السياسة عن ثلاثة أسئلة: *ما طولها؟ ما الحروف؟ ما الممنوع؟*',
      rows: [
        ['الطول', 'حد أدنى (مثلاً 12 حرفًا) وحد أقصى عند الحاجة.'],
        ['فئات الحروف', 'أي مجموعات حروف مطلوبة أو مسموحة.'],
        ['قائمة الحظر', 'كلمات مرور ضعيفة معروفة، اسم الشركة، البريد الإلكتروني.'],
        ['دورة الحياة', 'إيقاع التغيير، الحظر بعد المحاولات الفاشلة، إعادة الاستخدام.'],
      ],
    },
    s02: {
      items: [
        { headline: 'القوة الغاشمة تصبح باهظة',  body: 'كلمة مرور من 6 حروف فقط تسقط في ثوانٍ. وكلمة من 14 حرفًا بكل الفئات تستغرق قرونًا حتى على مزرعة GPU.' },
        { headline: 'هجمات القاموس تفشل',       body: 'الحد الأدنى للطول يبعد المستخدمين عن الأسماء والمواليد و«password123». هذه القوائم تُجرَّب أولًا.' },
        { headline: 'حشو بيانات الاعتماد يقل',  body: 'إذا تسرّبت بيانات مزوّد، فلن تنفع كلمة المرور القديمة في موقع آخر. القواعد الصارمة تجعل إعادة الاستخدام مرهقة بما يكفي لاستخدام مدير كلمات المرور.' },
        { headline: 'الامتثال وقابلية التدقيق',  body: 'ISO 27001 و NIST 800-63B و BSI: جميعها تتوقّع سياسات موثّقة. لا شهادة بدون قواعد.' },
      ],
    },
    s03: {
      bodyTop: '*الإنتروبيا* تقيس عدم قابلية التنبؤ بكلمة المرور بالبت. لكلمة مرور عشوائية:',
      formula: 'البتات = الطول × log₂(مجال الحروف)',
      bodyBottom:
        'كل بت إضافي **يضاعف** الجهد على المهاجم. ابتداءً من **80 بت** تكون كلمة المرور آمنة عمليًا حتى ضد عتاد متخصّص — بشرط أن يخزّنها الخادم بـ bcrypt أو scrypt أو Argon2id لا بـ SHA-256 مجرّد.',
      ledger: { title: 'سجلّ الإنتروبيا', len: 'الطول', classes: 'الفئات', bits: 'بت', brute: 'القوة الغاشمة' },
      verdicts: { seconds: 'ثوانٍ', hours: 'ساعات', centuries: 'قرون', unbreakable: 'غير قابلة للكسر عمليًا' },
    },
    s04: {
      body: 'العب بالمنزلقات. كل تغيير ينعكس مباشرة على الإنتروبيا وعلى زمن الكسر المقدَّر في ثلاثة سيناريوهات هجوم.',
      live: 'ورشة حية',
    },
    s05: {
      body: 'في عام 2017 تخلّى NIST الأمريكي عن كثير من التوصيات القديمة. ما يهمّ اليوم:',
      doHeader: 'افعل هذا',
      dontHeader: 'تجنّب هذا',
      do: [
        'الحد الأدنى للطول ≥ 12، والأمثل ≥ 14 حرفًا.',
        'اسمح بعبارات المرور — أربع كلمات عشوائية كثيرًا ما تكون أقوى وأسهل في التذكّر.',
        'قارن بقوائم كلمات المرور المسرّبة (مثل «Have I Been Pwned»).',
        'شجّع مديري كلمات المرور بدل حظرهم.',
      ],
      dont: [
        'تدوير إجباري كل 90 يومًا — يقود إلى أنماط مثل «Sommer2024!».',
        'حظر النسخ واللصق — يمنع المديرين الآمنين.',
        'حد أقصى صغير للطول (< 64 حرفًا) — يستبعد عبارات المرور.',
      ],
      footnote: { input: 'الإدخال', storage: 'التخزين' },
      footnoteWrap: (input, storage) =>
        `أفضل سياسة لا تنفع إذا خزّن الخادم كلمة المرور بتجزئة سريعة. السياسة تحكم ${input}، والتجزئة تحمي ${storage}. الأمان يأتي من الاثنين معًا.`,
    },
    footer: 'دليل مختبر التجزئة · نهاية المجلد 02',
  },
  manager: {
    kicker: 'دليل ميداني · المجلد 03',
    h1Line1: 'خزينة واحدة،',
    h1Line2: 'كلمة مرور رئيسية واحدة.',
    intro: {
      lead: 'لا تنفع أفضل سياسة إذا كنت تتذكر ثلاث كلمات مرور فقط. مدير كلمات المرور يقلب المعادلة: تتذكر',
      em: 'كلمة مرور رئيسية واحدة قوية',
      tail: ' — والباقي يُولَّد عشوائيًا، ويُخزَّن مشفَّرًا، ويُملأ تلقائيًا بنقرة.',
    },
    chapters: [
      { num: '01', title: 'ما الذي يحلّه' },
      { num: '02', title: 'خيارات خاصة' },
      { num: '03', title: 'مقارنة المزوّدين' },
      { num: '04', title: 'نظافة الخزينة' },
    ],
    s01: {
      kicker: 'تعريف',
      title: 'لماذا مدير كلمات المرور؟',
      body: 'مدير كلمات المرور هو خزينة مشفَّرة محليًا أو في السحابة. تُشفَّر وتُفكّ المحتويات بمفتاح مشتق من كلمة المرور الرئيسية (PBKDF2 أو Argon2id) — لا يرى المزوّد شيئًا. وهكذا تختفي ثلاث أخطاء شائعة دفعة واحدة:',
      pillars: [
        { num: '01', title: 'إعادة الاستخدام', body: 'لكل موقع كلمة مرور عشوائية خاصة. تسرّب لدى المزوّد A لا يطال المزوّد B.' },
        { num: '02', title: 'الكلمات الضعيفة', body: '24 حرفًا من كل الفئات بنفس سهولة «password1» — نقرة لتوليدها وإدراجها.' },
        { num: '03', title: 'الحماية من التصيّد', body: 'الملء التلقائي يعمل فقط على النطاق الحقيقي. صفحة دخول مزيّفة لا تحصل على شيء.' },
      ],
    },
    s02: {
      kicker: 'خاص وسيادي',
      title: 'خيارات ذاتية الاستضافة والخاصة',
      body: 'ليس كل شخص يريد تسليم أسراره لمزوّد أمريكي. ثلاثة مسارات تمنحك السيطرة الكاملة — لكل منها ثمن من حيث الراحة.',
      options: [
        {
          headline: 'KeePassXC',
          tagline: 'خزينة محلية، دون إجبار سحابي',
          body: 'تطبيق سطح مكتب مفتوح المصدر يشفّر ملفًا واحدًا .kdbx بـ AES-256 أو ChaCha20. أنت تتولّى المزامنة عبر Nextcloud أو Syncthing أو USB.',
          pros: ['لا خادم ولا حساب ولا قياس', 'كود مدقَّق وعلم تشفير راسخ', 'مجاني على كل المنصّات'],
          cons: ['عليك حلّ المزامنة بنفسك', 'تطبيقات الجوال أقل راحة من السحابة', 'لا مشاركة عائلية رسمية'],
        },
        {
          headline: 'Vaultwarden (ذاتي الاستضافة)',
          tagline: 'خادم متوافق مع Bitwarden على عتادك',
          body: 'إعادة كتابة بـ Rust لـ API خادم Bitwarden. يعمل كحاوية Docker على Raspberry Pi أو شبكة المنزل — وعملاء Bitwarden الرسميون يتصلون بسلاسة.',
          pros: ['راحة السحابة كاملة دون طرف ثالث', 'ميزات Premium بلا اشتراك', 'سيادة كاملة على البيانات'],
          cons: ['أنت مسؤول عن النسخ الاحتياطية والتحديثات', 'الوصول من الخارج يحتاج VPN أو Reverse-Proxy', 'الإعداد يتطلب معرفة Linux'],
        },
        {
          headline: 'Passbolt',
          tagline: 'موجَّه للفرق، مُطوَّر في الاتحاد الأوروبي',
          body: 'مدير مفتوح المصدر يركّز على مشاركة الفريق عبر OpenPGP. ذاتي الاستضافة أو مستضاف من لوكسمبورغ — متوافق مع GDPR افتراضيًا.',
          pros: ['صلاحيات دقيقة للفريق', 'استضافة أوروبية متاحة', 'إضافة المتصفح تتحقّق من الكود محليًا'],
          cons: ['تطبيقات الجوال أنضج لكنها أقل صقلًا', 'راحة الأفراد دون 1Password وأشباهه', 'إعداد أكثر تعقيدًا'],
        },
      ],
      proHeader: 'نقاط القوة',
      conHeader: 'نقاط الضعف',
    },
    s03: {
      kicker: 'مقارنة',
      title: 'Bitwarden · 1Password · NordPass',
      body: 'أشهر ثلاثة مزوّدين تجاريين في الغرب. كلّهم يستخدمون تشفير المعرفة الصفرية — الفروق في التسعير والراحة وتفاصيل التشفير.',
      tableTitle: 'سجلّ المزوّدين',
      cols: { feature: 'الميزة', bitwarden: 'Bitwarden', onepassword: '1Password', nordpass: 'NordPass' },
      rows: [
        { feature: 'المنشأ',         bitwarden: 'الولايات المتحدة · مفتوح المصدر', onepassword: 'كندا · مغلق',               nordpass: 'ليتوانيا (Nord Security)' },
        { feature: 'تشفير الخزينة',  bitwarden: 'AES-256 + PBKDF2/Argon2id',      onepassword: 'AES-256 + PBKDF2 + Secret Key', nordpass: 'XChaCha20 + Argon2id' },
        { feature: 'الاستضافة الذاتية', bitwarden: 'نعم (رسمي + Vaultwarden)',      onepassword: 'لا',                          nordpass: 'لا' },
        { feature: 'خطة مجانية',      bitwarden: 'سخيّة جدًا',                      onepassword: 'لا (14 يومًا تجريبًا)',        nordpass: 'محدودة (جهاز واحد)' },
        { feature: 'باقة العائلة',    bitwarden: '≈ 40 € سنويًا · 6 أشخاص',         onepassword: '≈ 60 € سنويًا · 5 أشخاص',       nordpass: '≈ 36 € سنويًا · 6 أشخاص' },
        { feature: 'تدقيق خارجي',     bitwarden: 'Cure53، Insight Risk',           onepassword: 'Cure53، Onica، KPMG',          nordpass: 'Cure53' },
        { feature: 'Passkeys',        bitwarden: 'نعم',                            onepassword: 'نعم',                         nordpass: 'نعم' },
      ],
      verdict: 'Bitwarden لأفضل قيمة وإمكانية الاستضافة الذاتية · 1Password لتجربة استخدام بلا تنازل ولنموذج Secret Key الإضافي · NordPass لتشفير حديث ومنظومة Nord المتكاملة.',
    },
    s04: {
      kicker: 'تطبيق',
      title: 'نظافة الخزينة',
      body: 'المدير يخفّف العبء عنك — لكنه لا يعفيك من مسؤولية بضعة أسرار قليلة بالغة الأهمية.',
      tips: [
        { headline: 'كلمة مرور رئيسية بصيغة عبارة', body: 'أربع إلى خمس كلمات عشوائية (Diceware) قابلة للحفظ وتعطي أكثر من 80 بت إنتروبيا. لا تعد استخدامها أبدًا.' },
        { headline: 'مصادقة ثانية إلزامية',          body: 'مفتاح عتادي (YubiKey، NFC) أقوى من تطبيق TOTP، وتطبيق TOTP أقوى من SMS. بلا 2FA تكون قوة الخزينة من قوة كلمة المرور فقط.' },
        { headline: 'اطبع طقم الاسترداد',            body: 'رمز الطوارئ ومفتاح الاسترداد على ورق — مفصول عن كلمة المرور الرئيسية. بدونهما النسيان نهائي.' },
        { headline: 'فحص دوري للصحة',                body: 'المديرون يبلّغون عن كلمات مرور مسرّبة أو ضعيفة أو مكرّرة. راجعها كل ربع سنة، ابدأ بالأكثر حساسية.' },
      ],
    },
    footer: 'دليل مختبر التجزئة · نهاية المجلد 03',
  },
};

const uk: Dict = {
  nav: { brand: 'Hash-Lab', hash: 'Hash-демо', policy: 'Парольна політика', manager: 'Менеджер паролів', language: 'Мова' },
  hashPage: {
    title: 'Порівняння хеш-алгоритмів',
    whatIsHashing: 'Що таке хешування?',
    hashingBody:
      '**Хеш-функція** перетворює довільний вхід (наприклад, пароль) на рядок фіксованої довжини — *хеш*. Процес **односторонній**: з хешу неможливо відновити вихідні дані. Навіть мінімальна зміна на вході дає цілком інший хеш (ефект лавини). Хеші використовують для зберігання паролів, перевірки цілісності файлів і створення цифрових підписів.',
    intro:
      'SHA-256 — швидка контрольна функція, непридатна для паролів: сучасні GPU перебирають мільярди кандидатів на секунду. bcrypt, scrypt і Argon2id навмисно повільні та вимагають багато пам’яті.',
    timingTitle: 'Вимірювання часу',
    timingNote:
      'Примітка: bcrypt і Argon2id тут виконуються як WASM/JS у браузері. Серверні нативні реалізації швидші, але співвідношення до SHA-256 залишається тим самим.',
    algoTitle: 'Як працюють алгоритми?',
    algoSubtitle: 'Короткий огляд внутрішньої роботи кожного методу.',
    kicker: 'Польовий путівник · Том 01',
    h1Line1: 'Чотири функції,',
    h1Line2: 'чотири швидкості.',
    lead: 'Між хешем, що падає за мікросекунду, і тим, що потребує півсекунди, — шість порядків величини. Саме це і є',
    leadEm: 'різниця швидкостей',
    propsKicker: 'Три властивості',
    propsTitle: 'Що робить хеш-функцію хеш-функцією',
    props: [
      { num: '01', title: 'Детермінізм',     body: 'Той самий вхід завжди дає той самий хеш. Інакше неможливо було б перевірити пароль.' },
      { num: '02', title: 'Односторонність', body: 'З хешу назад до входу? Практично неможливо. Гарна функція — це пастка-вхід: легко зайти, без ключа не вийти.' },
      { num: '03', title: 'Ефект лавини',    body: 'Один змінений біт — і хеш стає геть іншим. «password» і «Password» — два незнайомці.' },
    ],
    workshopKicker: 'Майстерня',
    workshopTitle: 'Спробуйте',
    workshopHint: 'Введіть пароль. Чотири функції рахують його паралельно — ви побачите, скільки часу кожна витратила.',
    runIndexLabel: 'Запуск',
    deltaKicker: 'Різниця швидкостей',
    deltaTitle: 'Порівняння часу виконання',
    deltaCaption: (ratio) => `Argon2id був тут приблизно у ${ratio}× повільнішим за SHA-256 — і саме цього ми й хочемо.`,
    deltaScaleNote: 'Примітка: bcrypt і Argon2id виконуються тут як WASM/JS у браузері. Серверні нативні реалізації швидші, але співвідношення до SHA-256 залишається тим самим. Вісь X логарифмічна.',
    algoEntryKicker: 'Алгоритм',
    algoLabels: { year: 'Рік', designer: 'Автор', params: 'Параметри', used: 'У використанні' },
    stampDanger: 'Небезпечно швидко',
    stampWarn: 'Прийнятно',
    stampSafe: 'Криміналістично повільно',
    fingerprint: 'Відбиток',
  },
  hashInput: {
    placeholder: 'Введіть пароль…',
    show: 'Показати пароль',
    hide: 'Сховати пароль',
    submit: 'Обчислити хеш',
    loading: 'Хешую…',
  },
  hashCard: {
    empty: 'Поки немає хешу — введіть пароль і обчисліть.',
    error: 'Помилка',
    copy: 'Копіювати',
    copied: 'Скопійовано',
    copyAria: 'Копіювати хеш',
    showFull: 'Показати повний хеш',
    collapse: 'Згорнути',
    dangerous: 'Небезпечно швидко',
    safe: 'Безпечно повільно',
  },
  algos: {
    sha256: {
      tagline: 'Швидка криптографічна контрольна сума',
      how: 'Пароль розбивається на 512-бітні блоки й за 64 раунди ущільнюється через бітові обертання, XOR і модульне додавання до 256-бітного дайджесту. Один прохід, без солі, без налаштовуваної вартості — на GPU можливі мільярди спроб за секунду.',
      verdict: 'Добре для цілісності файлів, непридатно для паролів.',
      year: '2001 · NIST FIPS 180-4',
      designer: 'NSA',
      params: 'Немає — фіксований алгоритм',
      used: 'Git-хеші, TLS-сертифікати, майнінг Bitcoin',
    },
    bcrypt: {
      tagline: 'Ітерований ключ-розклад Blowfish',
      how: 'На основі Blowfish: з пароля і 128-бітної солі обчислюється ключ-розклад і перебудовується 2^rounds разів (rounds=10 → 1024 раунди). Кожне збільшення rounds подвоює час обчислення — атакувальник і захисник платять однаково.',
      verdict: 'Надійна класика, але мало вимоглива до пам’яті — атаки GPU/ASIC лишаються ефективними.',
      year: '1999 · USENIX',
      designer: 'Niels Provos і David Mazières',
      params: 'cost (rounds, типово 10–14)',
      used: 'OpenBSD-логіни, давні стеки Rails/Laravel',
    },
    scrypt: {
      tagline: 'Пам’яте-важке розтягування ключа',
      how: 'Заповнює велику ділянку RAM (налаштовується через N і r) псевдовипадковими блоками і потім читає їх у непередбачуваному порядку. Будь-яка паралелізація потребує тієї ж пам’яті на спробу — на GPU/ASIC це швидко стає вузьким місцем.',
      verdict: 'Добре проти GPU-злому, дещо старіший за Argon2.',
      year: '2009 · RFC 7914',
      designer: 'Colin Percival',
      params: 'N (CPU/RAM), r (розмір блоку), p (паралелізм)',
      used: 'Litecoin, Dogecoin, бекапи Tarsnap',
    },
    argon: {
      tagline: 'Переможець Password Hashing Competition 2015',
      how: 'Гібрид Argon2i (незалежний від даних, стійкий до бічних каналів) і Argon2d (залежний від даних, стійкий до трейдоффів час/пам’ять). Три параметри керують часом (t), пам’яттю (m) і паралелізмом (p) — ідеально адаптується до конкретного заліза.',
      verdict: 'Поточна рекомендація OWASP та IETF (RFC 9106).',
      year: '2015 · RFC 9106',
      designer: 'Biryukov, Dinu і Khovratovich (KU Leuven)',
      params: 't (час), m (пам’ять у KiB), p (потоки)',
      used: 'Signal, 1Password, сучасні auth-стеки',
    },
  },
  builder: {
    title: 'Конструктор парольної політики',
    subtitle: 'Задайте правила і подивіться, скільки часу знадобиться зловмиснику.',
    length: 'Мінімальна довжина',
    lowercase: 'Малі літери (a–z)',
    uppercase: 'Великі літери (A–Z)',
    digits: 'Цифри (0–9)',
    special: 'Спецсимволи (!@#…)',
    pickAtLeastOne: 'Оберіть щонайменше один клас символів.',
    charset: 'Алфавіт',
    entropy: 'Ентропія',
    crackTime: 'Час злому (середній)',
    online: 'Онлайн-атака',
    onlineSub: 'Веб-логін, 10/с (rate-limit)',
    offlineBcrypt: 'Офлайн-атака',
    offlineBcryptSub: 'bcrypt, GPU-ферма, 100K/с',
    offlineSha: 'Офлайн-атака',
    offlineShaSub: 'SHA-256, GPU-ферма, 100 млрд./с',
    generated: 'Згенерований пароль',
    regenerate: 'Згенерувати знову',
    copy: 'Копіювати',
    copied: 'Скопійовано!',
    strengthVeryWeak: 'Дуже слабкий',
    strengthWeak: 'Слабкий',
    strengthMedium: 'Середній',
    strengthStrong: 'Сильний',
    strengthVeryStrong: 'Дуже сильний',
    crackUnbreakable: 'Практично нездоланний',
    crackLt1s: '< 1 секунди',
  },
  policy: {
    kicker: 'Польовий путівник · Том 02',
    h1Line1: 'Парольна політика',
    h1Line2: 'не є бюрократичним примусом.',
    intro: {
      math: 'математика',
      rest: ', що розділяє «зламано за секунди» і «потрібні зоряні системи обчислень». Ця сторінка проводить вас через п’ять розділів теорії і завершується інструментом, де ви будуєте власну політику і одразу бачите, на що вона здатна.',
    },
    chapters: [
      { num: '01', kicker: 'Визначення',  title: 'Що таке парольна політика?',          blurb: 'Правила, які визначають, як має виглядати дійсний пароль.' },
      { num: '02', kicker: 'Мотивація',   title: 'Навіщо взагалі правила?',             blurb: 'Чотири конкретні атаки — і що в них змінює гарна політика.' },
      { num: '03', kicker: 'Математика',  title: 'Розуміння ентропії',                  blurb: 'Чому кожен додатковий символ дає експоненційно більше безпеки.' },
      { num: '04', kicker: 'Майстерня',   title: 'Створіть власну політику',            blurb: 'Рухайте повзунки, дивіться на час злому, генеруйте паролі.' },
      { num: '05', kicker: 'Практика',    title: 'Найкращі практики за NIST 800-63',    blurb: 'Що кажуть сучасні рекомендації — і що вже застаріло.' },
    ],
    s01: {
      body: 'Правила, які визначають, як має виглядати дійсний пароль. Політика відповідає на три питання: *Яка довжина? Які символи? Що заборонено?*',
      rows: [
        ['Довжина', 'Нижня межа (наприклад, 12 символів) і за потреби верхня.'],
        ['Класи символів', 'Які групи символів обов’язкові або дозволені.'],
        ['Список заборон', 'Відомі слабкі паролі, назва компанії, e-mail.'],
        ['Життєвий цикл', 'Періодичність зміни, блокування після помилок, повторне використання.'],
      ],
    },
    s02: {
      items: [
        { headline: 'Brute-force стає захмарно дорогим', body: '6-символьний пароль лише з літер падає за секунди. 14-символьний з усіма класами тримається століттями навіть на GPU-фермі.' },
        { headline: 'Словникові атаки провалюються',     body: 'Мінімальна довжина відштовхує користувачів від імен, дат народження і «password123». Саме ці списки пробують першими.' },
        { headline: 'Credential-stuffing влучає рідше',  body: 'Якщо стався витік у одного провайдера, старий пароль не спрацює деінде. Суворі правила роблять повторне використання достатньо обтяжливим, щоб користуватися менеджером паролів.' },
        { headline: 'Відповідність і аудит',            body: 'ISO 27001, NIST 800-63B, BSI-Grundschutz: усі очікують задокументованих політик. Без правил немає сертифікації.' },
      ],
    },
    s03: {
      bodyTop: '*Ентропія* вимірює непередбачуваність пароля в бітах. Для випадкового пароля:',
      formula: 'Біти = Довжина × log₂(Алфавіт)',
      bodyBottom:
        'Кожен додатковий біт **подвоює** зусилля атакувальника. Приблизно з **80 біт** пароль практично безпечний навіть проти спеціалізованого заліза — за умови, що сервер хешує його через bcrypt, scrypt або Argon2id, а не чистим SHA-256.',
      ledger: { title: 'Реєстр ентропії', len: 'Довжина', classes: 'Класи', bits: 'Біти', brute: 'Brute-force' },
      verdicts: { seconds: 'Секунди', hours: 'Години', centuries: 'Століття', unbreakable: 'Практично нездоланний' },
    },
    s04: {
      body: 'Грайтеся з повзунками. Кожна зміна одразу впливає на ентропію та оцінений час злому в трьох сценаріях атаки.',
      live: 'Жива майстерня',
    },
    s05: {
      body: 'Американський NIST у 2017 році відмовився від багатьох старих рекомендацій. Що важить сьогодні:',
      doHeader: 'Робіть так',
      dontHeader: 'Не робіть так',
      do: [
        'Мінімальна довжина ≥ 12, ідеально ≥ 14 символів.',
        'Дозволяйте парольні фрази — чотири випадкові слова часто сильніші й легше запам’ятовуються.',
        'Звіряйте зі списками злитих паролів (наприклад, «Have I Been Pwned»).',
        'Заохочуйте менеджери паролів, а не забороняйте.',
      ],
      dont: [
        'Примусова ротація кожні 90 днів — веде до шаблонів на кшталт «Літо2024!».',
        'Заборона copy & paste — блокує безпечні менеджери.',
        'Замала максимальна довжина (< 64 символів) — виключає парольні фрази.',
      ],
      footnote: { input: 'введення', storage: 'зберігання' },
      footnoteWrap: (input, storage) =>
        `Найкраща політика марна, якщо сервер зберігає пароль швидким хешем. Політика регулює ${input}, а хеш захищає ${storage}. Безпека виникає лише разом.`,
    },
    footer: 'Hash-Lab Польовий путівник · Кінець Тому 02',
  },
  manager: {
    kicker: 'Польовий путівник · Том 03',
    h1Line1: 'Один сейф,',
    h1Line2: 'один майстер-пароль.',
    intro: {
      lead: 'Найкраща політика марна, якщо ви все одно пам’ятаєте лише три паролі. Менеджер паролів змінює задачу: ви запам’ятовуєте',
      em: 'один сильний майстер-пароль',
      tail: ', а решту згенеровано випадково, збережено зашифрованим і вставляється одним кліком.',
    },
    chapters: [
      { num: '01', title: 'Що він розв’язує' },
      { num: '02', title: 'Приватні варіанти' },
      { num: '03', title: 'Порівняння сервісів' },
      { num: '04', title: 'Гігієна сейфа' },
    ],
    s01: {
      kicker: 'Визначення',
      title: 'Навіщо взагалі менеджер?',
      body: 'Менеджер паролів — це локальний або хмарний зашифрований сейф. Вміст шифрується/розшифровується ключем, похідним від майстер-пароля (PBKDF2, Argon2id), — провайдер нічого не бачить. Так одразу зникають три найчастіші помилки:',
      pillars: [
        { num: '01', title: 'Повторне використання', body: 'Для кожного сайту — окремий випадковий пароль. Витік у провайдера A більше не зачіпає провайдера B.' },
        { num: '02', title: 'Слабкі паролі',         body: '24 символи з усіх класів так само зручні, як «password1» — клік, і вони згенеровані та вставлені.' },
        { num: '03', title: 'Захист від фішингу',    body: 'Автозаповнення спрацьовує лише на справжньому домені. Підроблена сторінка не отримує нічого.' },
      ],
    },
    s02: {
      kicker: 'Приватне і суверенне',
      title: 'Самокеровані та приватні варіанти',
      body: 'Не кожен хоче довіряти свої секрети американському провайдеру. Три шляхи дають повний контроль — кожен має свою ціну за зручність.',
      options: [
        {
          headline: 'KeePassXC',
          tagline: 'Локальний сейф, без хмари',
          body: 'Open-source десктоп-застосунок, що шифрує єдиний .kdbx-файл AES-256 або ChaCha20. Синхронізацію робите самі — Nextcloud, Syncthing, USB.',
          pros: ['Жодного сервера, акаунта чи телеметрії', 'Перевірений код, перевірена криптографія', 'Безкоштовно на всіх платформах'],
          cons: ['Синхронізацію треба налаштувати самому', 'Мобільні застосунки менш зручні, ніж у хмари', 'Немає офіційного сімейного спільного доступу'],
        },
        {
          headline: 'Vaultwarden (self-hosted)',
          tagline: 'Сумісний з Bitwarden сервер на вашому обладнанні',
          body: 'Rust-переписане API сервера Bitwarden. Працює як Docker-контейнер на Raspberry Pi або в домашній мережі — офіційні клієнти Bitwarden підключаються без зусиль.',
          pros: ['Уся зручність хмари без третьої сторони', 'Premium-функції без ліцензії', 'Повна суверенність даних'],
          cons: ['Бекапи та оновлення — ваша відповідальність', 'Доступ ззовні потребує VPN або reverse-proxy', 'Налаштування вимагає знань Linux'],
        },
        {
          headline: 'Passbolt',
          tagline: 'Командний, розроблений у ЄС',
          body: 'Open-source менеджер з фокусом на командному обміні через OpenPGP. Self-hosting або хостинг із Люксембургу — GDPR-сумісний за замовчуванням.',
          pros: ['Гранулярні командні права', 'Доступний EU-хостинг', 'Розширення браузера перевіряє код локально'],
          cons: ['Мобільні застосунки зріліші, але менш виглянсовані', 'Зручність для приватних користувачів нижча, ніж у 1Password', 'Складніше налаштування'],
        },
      ],
      proHeader: 'Сильні сторони',
      conHeader: 'Слабкі сторони',
    },
    s03: {
      kicker: 'Порівняння',
      title: 'Bitwarden · 1Password · NordPass',
      body: 'Три найпопулярніші комерційні провайдери на Заході. Усі застосовують zero-knowledge — різниця в ціні, зручності та деталях криптографії.',
      tableTitle: 'Реєстр провайдерів',
      cols: { feature: 'Ознака', bitwarden: 'Bitwarden', onepassword: '1Password', nordpass: 'NordPass' },
      rows: [
        { feature: 'Походження',     bitwarden: 'США · Open Source',             onepassword: 'Канада · пропрієтарний',      nordpass: 'Литва (Nord Security)' },
        { feature: 'Криптографія',   bitwarden: 'AES-256 + PBKDF2/Argon2id',      onepassword: 'AES-256 + PBKDF2 + Secret Key', nordpass: 'XChaCha20 + Argon2id' },
        { feature: 'Self-hosting',   bitwarden: 'Так (офіційно + Vaultwarden)',  onepassword: 'Ні',                          nordpass: 'Ні' },
        { feature: 'Безкоштовний план', bitwarden: 'Дуже щедрий',                onepassword: 'Немає (14 днів тестово)',      nordpass: 'Обмежений (1 пристрій)' },
        { feature: 'Сімейний тариф', bitwarden: '≈ 40 €/рік · 6 осіб',           onepassword: '≈ 60 €/рік · 5 осіб',          nordpass: '≈ 36 €/рік · 6 осіб' },
        { feature: 'Зовнішній аудит', bitwarden: 'Cure53, Insight Risk',          onepassword: 'Cure53, Onica, KPMG',           nordpass: 'Cure53' },
        { feature: 'Passkeys',        bitwarden: 'Так',                          onepassword: 'Так',                          nordpass: 'Так' },
      ],
      verdict: 'Bitwarden — максимум цінності й опція self-host · 1Password — безкомпромісний UX і додатковий Secret Key · NordPass — сучасна криптографія й інтегрована екосистема Nord.',
    },
    s04: {
      kicker: 'Практика',
      title: 'Гігієна сейфа',
      body: 'Менеджер знімає роботу, але не знімає відповідальності за кілька найважливіших секретів.',
      tips: [
        { headline: 'Майстер-пароль як парольна фраза', body: 'Чотири-п’ять випадкових слів (Diceware) запам’ятовуються і дають > 80 біт ентропії. Ніколи не повторюйте.' },
        { headline: 'Другий фактор обов’язковий',       body: 'Апаратний ключ (YubiKey, NFC) сильніший за TOTP-додаток, TOTP сильніший за SMS. Без 2FA сейф такий міцний, як майстер-пароль.' },
        { headline: 'Роздрукуйте recovery-kit',         body: 'Аварійний код і ключ відновлення — на папері, окремо від майстер-пароля. Без них забутий майстер — назавжди.' },
        { headline: 'Регулярний health-check',          body: 'Менеджери звітують про витоки, слабкі чи дублікати. Раз на квартал переглядайте, починаючи з найкритичніших.' },
      ],
    },
    footer: 'Hash-Lab Польовий путівник · Кінець Тому 03',
  },
};

const fa: Dict = {
  nav: { brand: 'آزمایشگاه هش', hash: 'دموی هش', policy: 'سیاست گذرواژه', manager: 'مدیر گذرواژه', language: 'زبان' },
  hashPage: {
    title: 'مقایسه الگوریتم‌های هش',
    whatIsHashing: 'هش چیست؟',
    hashingBody:
      '**تابع هش** هر ورودی دلخواه (مثل یک گذرواژه) را به رشته‌ای با طول ثابت تبدیل می‌کند — همان *هش*. این فرایند **یک‌طرفه** است: از روی هش نمی‌توان ورودی اصلی را بازیابی کرد. کوچک‌ترین تغییر در ورودی هش کاملاً متفاوتی تولید می‌کند (اثر بهمنی). از هش برای ذخیرهٔ گذرواژه، بررسی یکپارچگی فایل‌ها و امضای دیجیتال استفاده می‌شود.',
    intro:
      'SHA-256 یک تابع چک‌سام سریع است و برای گذرواژه مناسب نیست — GPUهای مدرن میلیاردها نامزد در ثانیه را با آن امتحان می‌کنند. bcrypt، scrypt و Argon2id عمداً کند و حافظه‌بَر هستند.',
    timingTitle: 'اندازه‌گیری زمان',
    timingNote:
      'نکته: bcrypt و Argon2id در اینجا به‌صورت WASM/JS داخل مرورگر اجرا می‌شوند. پیاده‌سازی‌های بومی سمت سرور سریع‌ترند، اما نسبت آن‌ها به SHA-256 یکسان می‌ماند.',
    algoTitle: 'الگوریتم‌ها چگونه کار می‌کنند؟',
    algoSubtitle: 'مروری کوتاه بر سازوکار درونی هر روش.',
    kicker: 'راهنمای میدانی · جلد ۰۱',
    h1Line1: 'چهار تابع،',
    h1Line2: 'چهار سرعت.',
    lead: 'میان هشی که در یک میکروثانیه می‌افتد و هشی که نیم‌ثانیه می‌خواهد، شش مرتبهٔ بزرگی فاصله است — و دقیقاً همین',
    leadEm: 'تفاوت سرعت',
    propsKicker: 'سه ویژگی',
    propsTitle: 'چه چیزی یک تابع هش را می‌سازد',
    props: [
      { num: '۰۱', title: 'جبرگرایی',        body: 'ورودی یکسان همیشه هش یکسانی می‌دهد. در غیر این صورت اصلاً نمی‌شد گذرواژه را راستی‌آزمایی کرد.' },
      { num: '۰۲', title: 'یک‌طرفه‌بودن',     body: 'از هش به ورودی؟ عملاً ناممکن. تابع هش خوب مثل یک درِ تله است: ورود آسان، خروج بدون کلید غیرممکن.' },
      { num: '۰۳', title: 'اثر بهمنی',        body: 'تغییر یک بیت، هشی کاملاً متفاوت می‌سازد. «password» و «Password» دو غریبه‌اند.' },
    ],
    workshopKicker: 'کارگاه',
    workshopTitle: 'امتحانش کن',
    workshopHint: 'یک گذرواژه وارد کن. چهار روش هم‌زمان آن را محاسبه می‌کنند — می‌بینی هرکدام چقدر طول می‌کشد.',
    runIndexLabel: 'اجرا',
    deltaKicker: 'اختلاف سرعت',
    deltaTitle: 'مقایسهٔ زمان اجرا',
    deltaCaption: (ratio) => `در اینجا Argon2id حدود ${ratio}× کندتر از SHA-256 بود — و دقیقاً همین مطلوب است.`,
    deltaScaleNote: 'نکته: bcrypt و Argon2id در اینجا به‌صورت WASM/JS در مرورگر اجرا می‌شوند. پیاده‌سازی‌های بومی سمت سرور سریع‌ترند، اما نسبت به SHA-256 ثابت می‌ماند. محور X لگاریتمی است.',
    algoEntryKicker: 'الگوریتم',
    algoLabels: { year: 'سال', designer: 'طراحی', params: 'پارامترها', used: 'در کاربرد' },
    stampDanger: 'به‌طور خطرناکی سریع',
    stampWarn: 'قابل قبول',
    stampSafe: 'به‌اندازهٔ جرم‌شناسی کند',
    fingerprint: 'اثرانگشت',
  },
  hashInput: {
    placeholder: 'گذرواژه را وارد کنید…',
    show: 'نمایش گذرواژه',
    hide: 'پنهان‌کردن گذرواژه',
    submit: 'محاسبهٔ هش',
    loading: 'در حال هش‌کردن…',
  },
  hashCard: {
    empty: 'هنوز هشی نیست — گذرواژه را وارد و محاسبه کنید.',
    error: 'خطا',
    copy: 'کپی',
    copied: 'کپی شد',
    copyAria: 'کپی هش',
    showFull: 'نمایش هش کامل',
    collapse: 'جمع‌کردن',
    dangerous: 'به‌طور خطرناکی سریع',
    safe: 'به‌طور امن کند',
  },
  algos: {
    sha256: {
      tagline: 'چک‌سام رمزنگاری سریع',
      how: 'گذرواژه به بلوک‌های ۵۱۲ بیتی شکسته می‌شود و در ۶۴ دور با چرخش بیت، XOR و جمع پیمانه‌ای به یک دایجست ۲۵۶ بیتی فشرده می‌شود. یک گذر، بدون نمک و بدون هزینهٔ تنظیم‌پذیر — روی GPU میلیاردها تلاش در ثانیه ممکن است.',
      verdict: 'برای یکپارچگی فایل مناسب، برای گذرواژه نامناسب.',
      year: '۲۰۰۱ · NIST FIPS 180-4',
      designer: 'NSA',
      params: 'ندارد — الگوریتم ثابت',
      used: 'هش‌های گیت، گواهی‌های TLS، استخراج بیت‌کوین',
    },
    bcrypt: {
      tagline: 'زمان‌بندی کلید Blowfish تکراری',
      how: 'بر پایهٔ Blowfish: از گذرواژه و نمک ۱۲۸ بیتی یک زمان‌بندی کلید محاسبه و ۲^rounds بار بازسازی می‌شود (rounds=10 → ۱۰۲۴ دور). هر افزایش rounds زمان محاسبه را دو برابر می‌کند — مهاجم و مدافع هزینهٔ یکسانی می‌پردازند.',
      verdict: 'کلاسیک قابل اتکا، اما کم‌مصرف از نظر حافظه — حملهٔ GPU/ASIC هنوز مؤثر است.',
      year: '۱۹۹۹ · USENIX',
      designer: 'Niels Provos و David Mazières',
      params: 'cost (rounds، معمولاً ۱۰–۱۴)',
      used: 'ورود OpenBSD، استک‌های قدیمی Rails/Laravel',
    },
    scrypt: {
      tagline: 'کشش کلید با حافظهٔ سنگین',
      how: 'یک ناحیهٔ بزرگ از RAM (با N و r قابل تنظیم) را با بلوک‌های شبه‌تصادفی پر می‌کند و سپس به‌ترتیب پیش‌بینی‌ناپذیر از آن می‌خواند. هر موازی‌سازی به همان حافظه نیاز دارد — روی GPU/ASIC به‌سرعت گلوگاه می‌شود.',
      verdict: 'در برابر شکستن با GPU خوب است، اما کمی قدیمی‌تر از Argon2.',
      year: '۲۰۰۹ · RFC 7914',
      designer: 'Colin Percival',
      params: 'N (CPU/RAM)، r (اندازهٔ بلوک)، p (موازی‌سازی)',
      used: 'Litecoin، Dogecoin، پشتیبان‌های Tarsnap',
    },
    argon: {
      tagline: 'برندهٔ مسابقهٔ هش گذرواژهٔ ۲۰۱۵',
      how: 'نسخهٔ ترکیبی از Argon2i (مستقل از داده، مقاوم در برابر کانال جانبی) و Argon2d (وابسته به داده، مقاوم در برابر مصالحهٔ زمان-حافظه). سه پارامتر زمان (t)، حافظه (m) و موازی‌سازی (p) را کنترل می‌کنند — کاملاً قابل تطبیق با سخت‌افزار.',
      verdict: 'توصیهٔ کنونی OWASP و IETF (RFC 9106).',
      year: '۲۰۱۵ · RFC 9106',
      designer: 'Biryukov، Dinu و Khovratovich (KU Leuven)',
      params: 't (زمان)، m (حافظه به KiB)، p (نخ‌ها)',
      used: 'Signal، 1Password، سامانه‌های احراز هویت مدرن',
    },
  },
  builder: {
    title: 'سازندهٔ سیاست گذرواژه',
    subtitle: 'قواعد را تعیین کنید و ببینید مهاجم چقدر زمان نیاز دارد.',
    length: 'حداقل طول',
    lowercase: 'حروف کوچک (a–z)',
    uppercase: 'حروف بزرگ (A–Z)',
    digits: 'ارقام (0–9)',
    special: 'نویسه‌های ویژه (!@#…)',
    pickAtLeastOne: 'دست‌کم یک دستهٔ نویسه انتخاب کنید.',
    charset: 'مجموعهٔ نویسه',
    entropy: 'آنتروپی',
    crackTime: 'زمان شکستن (میانگین)',
    online: 'حملهٔ برخط',
    onlineSub: 'ورود وب، ۱۰/ث (محدودیت نرخ)',
    offlineBcrypt: 'حملهٔ برون‌خط',
    offlineBcryptSub: 'bcrypt، مزرعهٔ GPU، ۱۰۰K/ث',
    offlineSha: 'حملهٔ برون‌خط',
    offlineShaSub: 'SHA-256، مزرعهٔ GPU، ۱۰۰ میلیارد/ث',
    generated: 'گذرواژهٔ تولیدشده',
    regenerate: 'تولید دوباره',
    copy: 'کپی',
    copied: 'کپی شد!',
    strengthVeryWeak: 'بسیار ضعیف',
    strengthWeak: 'ضعیف',
    strengthMedium: 'متوسط',
    strengthStrong: 'قوی',
    strengthVeryStrong: 'بسیار قوی',
    crackUnbreakable: 'عملاً نشکستنی',
    crackLt1s: '< ۱ ثانیه',
  },
  policy: {
    kicker: 'راهنمای میدانی · جلد ۰۲',
    h1Line1: 'سیاست گذرواژه',
    h1Line2: 'یک اجبار اداری نیست.',
    intro: {
      math: 'ریاضیات',
      rest: ' است که بین «در ثانیه شکسته می‌شود» و «به منظومهٔ شمسی توان محاسباتی نیاز دارد» می‌ایستد. این صفحه در پنج فصل تو را با نظریه آشنا می‌کند و با ابزاری پایان می‌یابد که خودت با آن سیاستت را می‌سازی و فوراً ارزشش را می‌بینی.',
    },
    chapters: [
      { num: '۰۱', kicker: 'تعریف',   title: 'سیاست گذرواژه چیست؟',          blurb: 'قواعدی که می‌گویند یک گذرواژهٔ معتبر چگونه باید باشد.' },
      { num: '۰۲', kicker: 'انگیزه',  title: 'چرا اصلاً قاعده؟',              blurb: 'چهار حملهٔ ملموس — و آنچه یک سیاست خوب تغییر می‌دهد.' },
      { num: '۰۳', kicker: 'ریاضیات', title: 'درک آنتروپی',                  blurb: 'چرا هر نویسهٔ اضافه امنیت را به‌صورت نمایی بالا می‌برد.' },
      { num: '۰۴', kicker: 'کارگاه',  title: 'سیاست خودت را بساز',           blurb: 'لغزنده‌ها را حرکت بده، زمان شکستن را تماشا کن، گذرواژه تولید کن.' },
      { num: '۰۵', kicker: 'عمل',     title: 'بهترین شیوه‌ها طبق NIST 800-63', blurb: 'توصیه‌های امروز چه می‌گویند — و چه چیزی منسوخ شده است.' },
    ],
    s01: {
      body: 'قواعدی که می‌گویند یک گذرواژهٔ معتبر چگونه باید باشد. سیاست به سه پرسش پاسخ می‌دهد: *چقدر طولانی؟ چه نویسه‌هایی؟ چه چیزی ممنوع است؟*',
      rows: [
        ['طول', 'حد پایین (مثلاً ۱۲ نویسه) و در صورت نیاز حد بالا.'],
        ['دسته‌های نویسه', 'کدام گروه‌های نویسه لازم یا مجازند.'],
        ['فهرست ممنوعه', 'گذرواژه‌های ضعیف شناخته‌شده، نام شرکت، ایمیل.'],
        ['چرخهٔ حیات', 'ضرباهنگ تغییر، قفل پس از خطا، استفادهٔ مجدد.'],
      ],
    },
    s02: {
      items: [
        { headline: 'جستجوی فراگیر گران می‌شود',     body: 'یک گذرواژهٔ ۶ نویسه‌ای فقط با حروف در چند ثانیه می‌افتد. یک گذرواژهٔ ۱۴ نویسه‌ای با همهٔ دسته‌ها حتی روی مزرعهٔ GPU قرن‌ها مقاومت می‌کند.' },
        { headline: 'حمله‌های دیکشنری شکست می‌خورند', body: 'حداقل طول کاربر را از نام، تاریخ تولد و «password123» دور می‌کند. دقیقاً همین فهرست‌ها اول امتحان می‌شوند.' },
        { headline: 'پُرکردن اعتبار کمتر مؤثر است',   body: 'اگر یک سرویس‌دهنده افشا شود، گذرواژهٔ قدیمی در سرویس دیگر کار نمی‌کند. قواعد سخت‌گیرانه استفادهٔ دوباره را آن‌قدر دشوار می‌کنند که سراغ مدیر گذرواژه بروید.' },
        { headline: 'انطباق و قابلیت ممیزی',         body: 'ISO 27001، NIST 800-63B، BSI: همگی سیاست‌های مستند را انتظار دارند. بدون قواعد، صدور گواهی نیست.' },
      ],
    },
    s03: {
      bodyTop: '*آنتروپی* پیش‌بینی‌ناپذیری گذرواژه را به بیت اندازه می‌گیرد. برای گذرواژهٔ تصادفی:',
      formula: 'بیت‌ها = طول × log₂(مجموعهٔ نویسه)',
      bodyBottom:
        'هر بیت اضافه تلاش مهاجم را **دو برابر** می‌کند. از حدود **۸۰ بیت** به بعد گذرواژه حتی در برابر سخت‌افزار تخصصی عملاً امن است — به شرط آنکه سرور آن را با bcrypt، scrypt یا Argon2id ذخیره کند، نه با SHA-256 خام.',
      ledger: { title: 'دفتر آنتروپی', len: 'طول', classes: 'دسته‌ها', bits: 'بیت', brute: 'جستجوی فراگیر' },
      verdicts: { seconds: 'ثانیه‌ها', hours: 'ساعت‌ها', centuries: 'قرن‌ها', unbreakable: 'عملاً نشکستنی' },
    },
    s04: {
      body: 'با لغزنده‌ها بازی کنید. هر تغییر بلافاصله بر آنتروپی و زمان تخمینی شکستن در سه سناریوی حمله اثر می‌گذارد.',
      live: 'کارگاه زنده',
    },
    s05: {
      body: 'NIST آمریکا در ۲۰۱۷ بسیاری از توصیه‌های قدیمی را کنار گذاشت. آنچه امروز اهمیت دارد:',
      doHeader: 'این کارها را بکن',
      dontHeader: 'این کارها را نکن',
      do: [
        'حداقل طول ≥ ۱۲، در حالت ایده‌آل ≥ ۱۴ نویسه.',
        'عبارت‌های عبور را مجاز کن — چهار واژهٔ تصادفی غالباً قوی‌تر و راحت‌تر برای حفظ‌اند.',
        'با فهرست‌های گذرواژه‌های افشا‌شده مطابقت بده (مثلاً «Have I Been Pwned»).',
        'مدیر گذرواژه را تشویق کن، نه ممنوع.',
      ],
      dont: [
        'چرخش اجباری هر ۹۰ روز — به الگوهایی مثل «Tabestan2024!» می‌انجامد.',
        'ممنوع‌کردن copy & paste — مانع مدیر امن می‌شود.',
        'حداکثر طول کوتاه (< ۶۴ نویسه) — عبارت‌های عبور را حذف می‌کند.',
      ],
      footnote: { input: 'ورودی', storage: 'ذخیره‌سازی' },
      footnoteWrap: (input, storage) =>
        `بهترین سیاست بی‌فایده است اگر سرور گذرواژه را با هش سریع ذخیره کند. سیاست ${input} را تنظیم می‌کند، هش ${storage} را محافظت می‌کند. امنیت تنها در ترکیب این دو پدید می‌آید.`,
    },
    footer: 'راهنمای میدانی آزمایشگاه هش · پایان جلد ۰۲',
  },
  manager: {
    kicker: 'راهنمای میدانی · جلد ۰۳',
    h1Line1: 'یک گاوصندوق،',
    h1Line2: 'یک گذرواژهٔ اصلی.',
    intro: {
      lead: 'بهترین سیاست هم وقتی فایده‌ای ندارد که فقط بتوانی سه گذرواژه را حفظ کنی. مدیر گذرواژه مسئله را برعکس می‌کند: تو فقط',
      em: 'یک گذرواژهٔ اصلیِ قوی',
      tail: ' را به خاطر می‌سپاری — بقیه به‌صورت تصادفی تولید، رمزنگاری و با یک کلیک درج می‌شوند.',
    },
    chapters: [
      { num: '۰۱', title: 'چه مشکلی را حل می‌کند' },
      { num: '۰۲', title: 'گزینه‌های خصوصی' },
      { num: '۰۳', title: 'مقایسهٔ ارائه‌دهندگان' },
      { num: '۰۴', title: 'بهداشت گاوصندوق' },
    ],
    s01: {
      kicker: 'تعریف',
      title: 'چرا اصلاً مدیر گذرواژه؟',
      body: 'مدیر گذرواژه یک گاوصندوق رمزنگاری‌شدهٔ محلی یا ابری است. محتوا با کلیدی که از گذرواژهٔ اصلی مشتق می‌شود (PBKDF2، Argon2id) رمز و رمزگشایی می‌شود — ارائه‌دهنده چیزی نمی‌بیند. این‌گونه سه خطای رایج یکجا برطرف می‌شوند:',
      pillars: [
        { num: '۰۱', title: 'استفادهٔ مجدد',  body: 'هر سایت گذرواژهٔ تصادفی خودش را می‌گیرد. افشا در ارائه‌دهندهٔ A دیگر به B سرایت نمی‌کند.' },
        { num: '۰۲', title: 'گذرواژه‌های ضعیف', body: '۲۴ نویسه از همهٔ دسته‌ها به همان راحتی «password1» است — یک کلیک و تولید و درج می‌شود.' },
        { num: '۰۳', title: 'محافظت در برابر فیشینگ', body: 'پُرکردن خودکار فقط روی دامنهٔ واقعی کار می‌کند. یک صفحهٔ ورود جعلی چیزی پُر شده دریافت نمی‌کند.' },
      ],
    },
    s02: {
      kicker: 'خصوصی و خودگردان',
      title: 'گزینه‌های خودمیزبان و خصوصی',
      body: 'همه نمی‌خواهند اسرارشان را به یک ارائه‌دهندهٔ آمریکایی بسپارند. سه مسیر کنترل کامل می‌دهند — هرکدام با بهای راحتی متفاوت.',
      options: [
        {
          headline: 'KeePassXC',
          tagline: 'گاوصندوق محلی، بدون اجبار ابر',
          body: 'برنامهٔ متن‌باز دسکتاپ که یک فایل تنها .kdbx را با AES-256 یا ChaCha20 رمزنگاری می‌کند. هم‌گام‌سازی را خودت انجام می‌دهی — با Nextcloud، Syncthing یا USB.',
          pros: ['بدون سرور، بدون حساب، بدون داده‌سنجی', 'کد بررسی‌شده، رمزنگاری جا افتاده', 'رایگان روی همهٔ سکوها'],
          cons: ['هم‌گام‌سازی را خودت باید حل کنی', 'اپ‌های موبایل کم‌راحت‌تر از ارائه‌دهندگان ابری', 'به‌اشتراک‌گذاری خانوادگی رسمی ندارد'],
        },
        {
          headline: 'Vaultwarden (خودمیزبان)',
          tagline: 'سرور سازگار با Bitwarden روی سخت‌افزار تو',
          body: 'پیاده‌سازی دوبارهٔ Rust از API سرور Bitwarden. به‌صورت کانتینر داکر روی Raspberry Pi یا شبکهٔ خانگی اجرا می‌شود — کلاینت‌های رسمی Bitwarden بی‌دردسر متصل می‌شوند.',
          pros: ['تمام راحتی ابر بدون شخص ثالث', 'امکانات Premium بدون مجوز', 'حاکمیت کامل داده'],
          cons: ['پشتیبان‌گیری و به‌روزرسانی بر عهدهٔ توست', 'دسترسی از بیرون نیاز به VPN یا Reverse-Proxy دارد', 'راه‌اندازی به اندکی دانش لینوکس نیاز دارد'],
        },
        {
          headline: 'Passbolt',
          tagline: 'تیم‌محور، توسعه‌یافته در اتحادیهٔ اروپا',
          body: 'مدیر متن‌باز با تمرکز بر اشتراک‌گذاری تیمی از طریق OpenPGP. خودمیزبان یا میزبانی‌شده از لوکزامبورگ — به‌صورت پیش‌فرض سازگار با GDPR.',
          pros: ['حقوق دقیق تیمی', 'میزبانی اروپایی در دسترس', 'افزونهٔ مرورگر کد را محلی بررسی می‌کند'],
          cons: ['اپ‌های موبایل پخته‌تر شده‌اند ولی صیقل کمتری دارند', 'راحتی برای کاربران شخصی کمتر از 1Password است', 'راه‌اندازی پیچیده‌تر'],
        },
      ],
      proHeader: 'نقاط قوت',
      conHeader: 'نقاط ضعف',
    },
    s03: {
      kicker: 'مقایسه',
      title: 'Bitwarden · 1Password · NordPass',
      body: 'سه ارائه‌دهندهٔ تجاری پرطرفدار در غرب. همگی از رمزنگاری Zero-Knowledge بهره می‌برند — تفاوت‌ها در قیمت، راحتی و جزئیات رمزنگاری است.',
      tableTitle: 'دفتر ارائه‌دهندگان',
      cols: { feature: 'ویژگی', bitwarden: 'Bitwarden', onepassword: '1Password', nordpass: 'NordPass' },
      rows: [
        { feature: 'منشأ',            bitwarden: 'آمریکا · متن‌باز',                onepassword: 'کانادا · انحصاری',             nordpass: 'لیتوانی (Nord Security)' },
        { feature: 'رمزنگاری گاوصندوق', bitwarden: 'AES-256 + PBKDF2/Argon2id',     onepassword: 'AES-256 + PBKDF2 + Secret Key', nordpass: 'XChaCha20 + Argon2id' },
        { feature: 'خودمیزبانی',       bitwarden: 'بله (رسمی + Vaultwarden)',       onepassword: 'خیر',                          nordpass: 'خیر' },
        { feature: 'طرح رایگان',       bitwarden: 'بسیار سخاوتمندانه',              onepassword: 'ندارد (۱۴ روز آزمایش)',         nordpass: 'محدود (۱ دستگاه)' },
        { feature: 'تعرفهٔ خانوادگی',  bitwarden: '≈ ۴۰ €/سال · ۶ نفر',              onepassword: '≈ ۶۰ €/سال · ۵ نفر',            nordpass: '≈ ۳۶ €/سال · ۶ نفر' },
        { feature: 'ممیزی بیرونی',     bitwarden: 'Cure53، Insight Risk',           onepassword: 'Cure53، Onica، KPMG',           nordpass: 'Cure53' },
        { feature: 'Passkeys',         bitwarden: 'بله',                            onepassword: 'بله',                           nordpass: 'بله' },
      ],
      verdict: 'Bitwarden برای بیشترین ارزش و گزینهٔ خودمیزبانی · 1Password برای تجربهٔ کاربری بی‌مصالحه و مدل Secret Key اضافه · NordPass برای رمزنگاری مدرن و اکوسیستم یکپارچهٔ Nord.',
    },
    s04: {
      kicker: 'عمل',
      title: 'بهداشت گاوصندوق',
      body: 'مدیر گذرواژه کار را از دوش تو برمی‌دارد — اما مسئولیت چند راز اندک ولی بسیار مهم را نه.',
      tips: [
        { headline: 'گذرواژهٔ اصلی به‌صورت عبارت عبور', body: 'چهار تا پنج واژهٔ تصادفی (Diceware) قابل حفظ‌اند و بیش از ۸۰ بیت آنتروپی می‌دهند. هرگز استفادهٔ مجدد نکن.' },
        { headline: 'عامل دوم اجباری',                  body: 'کلید سخت‌افزاری (YubiKey، NFC) از اپ TOTP قوی‌تر است و TOTP از SMS. بدون 2FA گاوصندوق فقط به اندازهٔ گذرواژهٔ اصلی قوی است.' },
        { headline: 'بستهٔ بازیابی را چاپ کن',          body: 'کد اضطراری و کلید بازیابی روی کاغذ — جدا از گذرواژهٔ اصلی نگهداری شود. بدون آن‌ها فراموشی گذرواژهٔ اصلی نهایی است.' },
        { headline: 'بازبینی منظم سلامت',               body: 'مدیرها گذرواژه‌های افشا، ضعیف یا تکراری را گزارش می‌دهند. سه‌ماه یک‌بار مرور کن و بحرانی‌ها را اول بچرخان.' },
      ],
    },
    footer: 'راهنمای میدانی آزمایشگاه هش · پایان جلد ۰۳',
  },
};

export const TRANSLATIONS: Record<Lang, Dict> = { de, ar, uk, fa };
