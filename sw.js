/*
  Uygulamalar sayfasının servis çalışanı (service worker).
  Servis çalışanı, tarayıcının arka planda çalıştırdığı küçük bir yardımcı dosya.

  Ne yapar:
    - Telefonun "Uygulamayı yükle" seçeneğini sunabilmesi için gerekli.
    - Sayfanın kendi dosyalarının bir kopyasını telefonda tutar. İnternet yokken
      Uygulamalar yine açılır, liste görünür (uygulamaların kendisi internet ister).
    - Her açılışta önce internetten günceli ister; uygulamalar.js'e eklenen yeni
      uygulama böylece hemen görünür. İnternet yoksa telefondaki kopyayı kullanır.

  Sadece bu klasörün dosyalarına karışır. İçeride açılan uygulamalara dokunmaz.
*/

const ONBELLEK = "uygulamalar-v4";
const DOSYALAR = [
  "./",
  "./index.html",
  "./uygulamalar.js",
  "./manifest.webmanifest",
  "./simge-180.png",
  "./simge-192.png",
  "./simge-512.png",
  "./simge-512-maskable.png",
  "./logo.png",
];

// Kurulumda dosyaların kopyası alınır
self.addEventListener("install", (olay) => {
  olay.waitUntil(
    caches.open(ONBELLEK).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting())
  );
});

// Eski sürümün kopyaları silinir
self.addEventListener("activate", (olay) => {
  olay.waitUntil(
    caches.keys()
      .then((adlar) => Promise.all(adlar.filter((a) => a !== ONBELLEK).map((a) => caches.delete(a))))
      .then(() => self.clients.claim())
  );
});

// Önce internet, olmazsa telefondaki kopya
self.addEventListener("fetch", (olay) => {
  const istek = olay.request;
  const adres = new URL(istek.url);
  const klasor = new URL("./", self.location).pathname;

  // Başka sitelere ve bu klasörün dışına giden isteklere karışma
  if (istek.method !== "GET" || adres.origin !== self.location.origin || !adres.pathname.startsWith(klasor)) return;

  olay.respondWith(
    fetch(new Request(istek.url, { cache: "no-cache", credentials: "same-origin" }))
      .then((cevap) => {
        if (cevap.ok) {
          const kopya = cevap.clone();
          caches.open(ONBELLEK).then((c) => c.put(istek, kopya));
        }
        return cevap;
      })
      .catch(() => caches.match(istek, { ignoreSearch: true }).then((k) => k || caches.match("./index.html")))
  );
});
