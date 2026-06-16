export type Lang = 'de' | 'ar' | 'uk';

export const LANG_META: Record<Lang, { label: string; native: string; dir: 'ltr' | 'rtl' }> = {
  de: { label: 'Deutsch',    native: 'Deutsch',    dir: 'ltr' },
  ar: { label: 'Arabisch',   native: 'العربية',    dir: 'rtl' },
  uk: { label: 'Ukrainisch', native: 'Українська', dir: 'ltr' },
};

export interface Dict {
  nav: { brand: string; hash: string; policy: string; language: string };
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
}

const de: Dict = {
  nav: { brand: 'Hash-Lab', hash: 'Hash-Demo', policy: 'Password Policy', language: 'Sprache' },
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
    kicker: 'Field Guide · Vol. 02',
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
    kicker: 'Field Guide · Vol. 01',
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
    footer: 'Hash-Lab Field Guide · Ende von Vol. 01',
  },
};

const ar: Dict = {
  nav: { brand: 'مختبر التجزئة', hash: 'عرض التجزئة', policy: 'سياسة كلمات المرور', language: 'اللغة' },
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
    kicker: 'دليل ميداني · المجلد 02',
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
    kicker: 'دليل ميداني · المجلد 01',
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
    footer: 'دليل مختبر التجزئة · نهاية المجلد 01',
  },
};

const uk: Dict = {
  nav: { brand: 'Hash-Lab', hash: 'Hash-демо', policy: 'Парольна політика', language: 'Мова' },
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
    kicker: 'Польовий путівник · Том 02',
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
    kicker: 'Польовий путівник · Том 01',
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
    footer: 'Hash-Lab Польовий путівник · Кінець Тому 01',
  },
};

export const TRANSLATIONS: Record<Lang, Dict> = { de, ar, uk };
