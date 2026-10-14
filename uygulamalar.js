/*
  UYGULAMA LİSTESİ (MAĞAZA)
  =========================
  Mağazada görünen uygulamalar sadece bu dosyadan gelir.
  Burada yazıldığı sırayla, yukarıdan aşağı dizilirler.

  YENİ UYGULAMA EKLEMEK İÇİN
    1. Aşağıdaki bloklardan birini kopyalayın: "{" ile başlayıp "}," ile biten kısım.
    2. Listenin sonuna, son "}," satırının altına yapıştırın.
    3. Tırnak içindeki yazıları yeni uygulamaya göre değiştirin.

  ALANLAR
    ad        : Uygulamanın adı. Personelin indirdiği uygulamalar bu adla hatırlanır.
                Adı sonradan değiştirirseniz, o uygulamayı indirmiş olanların
                listesinden düşer; Mağaza'dan yeniden indirmeleri gerekir.
    aciklama  : Adın altındaki kısa açıklama (tek satır yeterli).
    link      : Uygulamanın adresi. https:// ile başlamalı.
    simge     : Uygulamanın resmi. Şunlardan birini yazın:
                saat, kutu, harita, hesap, ekran, belge, su, kalkan
                Başka bir şey yazarsanız uygulama adının ilk harfi görünür.
    disarida  : İsteğe bağlı. true yazarsanız uygulama, Uygulamalar'ın içinde değil
                Chrome'da açılır. Uygulamanın kendi güvenlik ayarı başka bir sayfanın
                içinde gösterilmesine izin vermiyorsa bunu yazın.
                Yazmazsanız uygulama Uygulamalar'ın içinde açılır.

  DİKKAT
    - Her yazı çift tırnak içinde olmalı: "böyle"
    - Her satırın sonunda virgül olmalı.
    - İki uygulamaya aynı adı vermeyin.
    - Bir hata yaparsanız sayfa boş kalmaz, hatayı yazar.
*/

const UYGULAMALAR = [
  {
    ad: "Fazla Mesai",
    aciklama: "Fazla mesai girişi ve çizelge çıktısı",
    link: "https://nigdesukanalizasyon.github.io/mesai-takip/",
    simge: "saat",
  },
  {
    ad: "Envanter",
    aciklama: "Depodaki pompa ve motorların listesi",
    link: "https://envanter.anbe01.workers.dev",
    simge: "kutu",
    // Envanter başka bir sayfanın içinde gösterilmeye izin vermiyor, Chrome'da açılır.
    disarida: true,
  },
];
