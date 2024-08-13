const cities = [
  { name: "Adana", code: 1 },
  { name: "Adıyaman", code: 2 },
  { name: "Afyonkarahisar", code: 3 },
  { name: "Ağrı", code: 4 },
  { name: "Amasya", code: 5 },
  { name: "Ankara", code: 6 },
  { name: "Antalya", code: 7 },
  { name: "Artvin", code: 8 },
  { name: "Aydın", code: 9 },
  { name: "Balıkesir", code: 10 },
  { name: "Bilecik", code: 11 },
  { name: "Bingöl", code: 12 },
  { name: "Bitlis", code: 13 },
  { name: "Bolu", code: 14 },
  { name: "Burdur", code: 15 },
  { name: "Bursa", code: 16 },
  { name: "Çanakkale", code: 17 },
  { name: "Çankırı", code: 18 },
  { name: "Çorum", code: 19 },
  { name: "Denizli", code: 20 },
  { name: "Diyarbakır", code: 21 },
  { name: "Edirne", code: 22 },
  { name: "Elazığ", code: 23 },
  { name: "Erzincan", code: 24 },
  { name: "Erzurum", code: 25 },
  { name: "Eskişehir", code: 26 },
  { name: "Gaziantep", code: 27 },
  { name: "Giresun", code: 28 },
  { name: "Gümüşhane", code: 29 },
  { name: "Hakkâri", code: 30 },
  { name: "Hatay", code: 31 },
  { name: "Isparta", code: 32 },
  { name: "Mersin", code: 33 },
  { name: "İstanbul", code: 34 },
  { name: "İzmir", code: 35 },
  { name: "Kars", code: 36 },
  { name: "Kastamonu", code: 37 },
  { name: "Kayseri", code: 38 },
  { name: "Kırklareli", code: 39 },
  { name: "Kırşehir", code: 40 },
  { name: "Kocaeli", code: 41 },
  { name: "Konya", code: 42 },
  { name: "Kütahya", code: 43 },
  { name: "Malatya", code: 44 },
  { name: "Manisa", code: 45 },
  { name: "Kahramanmaraş", code: 46 },
  { name: "Mardin", code: 47 },
  { name: "Muğla", code: 48 },
  { name: "Muş", code: 49 },
  { name: "Nevşehir", code: 50 },
  { name: "Niğde", code: 51 },
  { name: "Ordu", code: 52 },
  { name: "Rize", code: 53 },
  { name: "Sakarya", code: 54 },
  { name: "Samsun", code: 55 },
  { name: "Siirt", code: 56 },
  { name: "Sinop", code: 57 },
  { name: "Sivas", code: 58 },
  { name: "Tekirdağ", code: 59 },
  { name: "Tokat", code: 60 },
  { name: "Trabzon", code: 61 },
  { name: "Tunceli", code: 62 },
  { name: "Şanlıurfa", code: 63 },
  { name: "Uşak", code: 64 },
  { name: "Van", code: 65 },
  { name: "Yozgat", code: 66 },
  { name: "Zonguldak", code: 67 },
  { name: "Aksaray", code: 68 },
  { name: "Bayburt", code: 69 },
  { name: "Karaman", code: 70 },
  { name: "Kırıkkale", code: 71 },
  { name: "Batman", code: 72 },
  { name: "Şırnak", code: 73 },
  { name: "Bartın", code: 74 },
  { name: "Ardahan", code: 75 },
  { name: "Iğdır", code: 76 },
  { name: "Yalova", code: 77 },
  { name: "Karabük", code: 78 },
  { name: "Kilis", code: 79 },
  { name: "Osmaniye", code: 80 },
  { name: "Düzce", code: 81 },
];

let shuffledCities = shuffleArray(cities); // Şehir listesini karıştırarak 'shuffledCities' değişkenine atıyoruz.
let currentCityIndex = 0; // Şu anki şehir indeksini takip ediyoruz.

const cityNameElement = document.getElementById("city-name"); // Şehir ismini göstermek için HTML elementini seçiyoruz.
const trafficCodeInput = document.getElementById("traffic-code"); // Kullanıcının trafik kodunu girdiği input alanını seçiyoruz.
const resultElement = document.getElementById("result"); // Sonuç mesajını göstermek için HTML elementini seçiyoruz.
const submitBtn = document.getElementById("submit-btn"); // Kullanıcının cevabını göndermek için buton elementini seçiyoruz.

function shuffleArray(array) {
  // Array'i karıştırmak için Fisher-Yates algoritmasını kullanıyoruz.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Rastgele bir indeks seçiyoruz.
    [array[i], array[j]] = [array[j], array[i]]; // Seçilen iki öğenin yerini değiştiriyoruz.
  }
  return array; // Karıştırılmış array'i döndürüyoruz.
}

function loadNextCity() {
  // Eğer tüm şehirler gösterildiyse yeniden karıştırarak başa dönüyoruz.
  if (currentCityIndex >= shuffledCities.length) {
    currentCityIndex = 0;
    shuffledCities = shuffleArray(cities); // Şehirleri yeniden karıştırıyoruz.
  }
  cityNameElement.textContent = shuffledCities[currentCityIndex].name; // Şu anki şehrin ismini gösteriyoruz.
  trafficCodeInput.value = ""; // Trafik kodu inputunu temizliyoruz.
  resultElement.textContent = ""; // Sonuç mesajını temizliyoruz.
  trafficCodeInput.focus(); // Kullanıcının odaklanacağı alanı trafik kodu inputu yapıyoruz.
}

submitBtn.addEventListener("click", () => {
  const userCode = parseInt(trafficCodeInput.value); // Kullanıcının girdiği trafik kodunu sayıya çeviriyoruz.
  const correctCode = shuffledCities[currentCityIndex].code; // Doğru trafik kodunu alıyoruz.

  // Doğru olup olmadığını kontrol ediyoruz ve uygun mesajı gösteriyoruz.
  resultElement.textContent =
    userCode === correctCode
      ? "Doğru Bildin!"
      : `Yanlış Bildin. Doğrusu: ${correctCode}`;
  currentCityIndex++; // Sonraki şehre geçmek için indeksi arttırıyoruz.
  setTimeout(loadNextCity, userCode === correctCode ? 1000 : 2000); // Doğruysa 1 saniye, yanlışsa 2 saniye bekleyip yeni şehri yüklüyoruz.
});

trafficCodeInput.addEventListener("input", (e) => {
  // Kullanıcının girdiği değeri kontrol ediyoruz, sadece 2 karakter ve rakamların olmasını sağlıyoruz.
  e.target.value = e.target.value.slice(0, 2).replace(/[^\d]/g, "");
});

trafficCodeInput.addEventListener("keydown", (e) => {
  // Kullanıcı Enter tuşuna bastığında
  if (e.key === "Enter") {
    e.preventDefault(); // Sayfanın yenilenmesini önlüyoruz.
    if (trafficCodeInput.value === "") {
      // Eğer input boşsa, uyarı mesajı gösteriyoruz.
      resultElement.textContent = "Lütfen önce bir sayı giriniz.";
    } else {
      submitBtn.click(); // Eğer boş değilse, gönderme butonuna tıklama işlemini simüle ediyoruz.
    }
  }
});

loadNextCity(); // İlk şehri yüklemek için fonksiyonu çağırıyoruz.
