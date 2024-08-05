const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobilMenuContainer = document.querySelector(".mobilMenuContainer");
const closeMenu = document.querySelector(".mobilMenuContainer .closeMenu");

hamburgerMenu.addEventListener("click", function () {
  container.style.display = 'none';
  mobilMenuContainer.style.display = 'flex';
});

closeMenu.addEventListener("click", function () {
  container.style.display = 'flex';
  mobilMenuContainer.style.display = 'none';
});

const monthContainer = document.querySelector(".monthContainer");
const leftArrowMonth = document.querySelector(".leftArrowMonth");
const rightArrowMonth = document.querySelector(".rightArrowMonth");
const monthName = document.querySelector(".monthName");
const dateContainer = document.querySelector(".dateContainer");

// Ay isimleri ve gün isimleri
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayContainer = document.querySelector('.dayContainer');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mobileDays = ["Su", "M", "Tu", "W", "Th", "Fr", "Sa"];

function updateDayItems() {
  dayContainer.innerHTML = ''; // Mevcut günleri temizle

  const dayItems = window.innerWidth < 750 ? mobileDays : days;
  dayItems.forEach(day => {
    const dayItem = document.createElement('div');
    dayItem.className = 'dayItem';
    dayItem.textContent = day;
    dayContainer.appendChild(dayItem);
  });
}

// Pencere yeniden boyutlandırıldığında güncellemeyi tetikler
window.addEventListener('resize', updateDayItems);

// Sayfa yüklendiğinde güncellemeyi tetikler
document.addEventListener('DOMContentLoaded', updateDayItems);

// Tarihleri tutacak bir değişken
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Takvimi güncelleyen fonksiyon
function updateCalendar() {
  // Ay ismini güncelle
  monthName.textContent = months[currentMonth];

  // Takvim günlerini güncelle
  dateContainer.innerHTML = '';
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // İlk günün haftanın hangi gününe denk geldiğini bul
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Ayın kaç gün olduğunu bul

  // Boş kutuları ekle
  for (let i = 0; i < firstDay; i++) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "dateItem empityBox";
    dateContainer.appendChild(emptyBox);
  }

  // Ayın günlerini ekle
  for (let day = 1; day <= daysInMonth; day++) {
    const dateItem = document.createElement("div");
    dateItem.className = "dateItem";
    const dateOfMonth = document.createElement("span");
    dateOfMonth.className = "dateOfMonth";
    dateOfMonth.textContent = day;
    dateItem.appendChild(dateOfMonth);

    const currentDay = new Date(currentYear, currentMonth, day).getDay();

    // Cumartesi günleri için
    if (currentDay === 6) {
      const dateTime1 = document.createElement("span");
      dateTime1.className = "dateTime";
      dateTime1.textContent = "2:00 pm";
      dateItem.appendChild(dateTime1);

      const dateTime2 = document.createElement("span");
      dateTime2.className = "dateTime";
      dateTime2.textContent = "8:00 pm";
      dateItem.appendChild(dateTime2);
    }

    // Pazar günleri için
    if (currentDay === 0) {
      const dateTime = document.createElement("span");
      dateTime.className = "dateTime";
      dateTime.textContent = "3:00 pm";
      dateItem.appendChild(dateTime);
    }

    // Çarşamba ve Cuma günleri için
    if (currentDay === 3 || currentDay === 5) {
      const dateTime = document.createElement("span");
      dateTime.className = "dateTime";
      dateTime.textContent = "8:00 pm";
      dateItem.appendChild(dateTime);
    }

    dateContainer.appendChild(dateItem);
  }

  // Ayın son gününden sonra boş kutuları ekle
  const totalBoxes = firstDay + daysInMonth;
  const emptyBoxesAfter = (7 - (totalBoxes % 7)) % 7; // Haftanın kalan gün sayısını hesapla
  for (let i = 0; i < emptyBoxesAfter; i++) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "dateItem empityBox";
    dateContainer.appendChild(emptyBox);
  }
}

// Sol ok tuşuna tıklanınca bir önceki aya geçiş
leftArrowMonth.addEventListener("click", function () {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  updateCalendar();
});

// Sağ ok tuşuna tıklanınca bir sonraki aya geçiş
rightArrowMonth.addEventListener("click", function () {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  updateCalendar();
});

// Sayfa yüklendiğinde mevcut ayı göster
updateCalendar();

// Ekran boyutu 750px'den küçük olduğunda tarih itemına tıklama
document.querySelectorAll('.dateItem').forEach(item => {
  item.addEventListener('click', function() {
    if (window.innerWidth < 750) {
      document.querySelector('.mobileDateTime').style.display = 'flex';
    }
  });
});

// mobileDateTime divini kapatma
document.querySelector('.closeMobilDateTime').addEventListener('click', function() {
  document.querySelector('.mobileDateTime').style.display = 'none';
});

// Seçilen tarihi dinamik olarak alma
document.querySelectorAll('.dateItem').forEach(item => {
  item.addEventListener('click', function() {
    const selectedDate = this.querySelector('.dateOfMonth').textContent;
    const selectedDay = this.querySelector('.dateTime').textContent;

    const currentDate = new Date();
    currentDate.setDate(selectedDate);

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const formattedDate = `${dayNames[currentDate.getDay()]}, ${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}th`;

    document.querySelector('.selectedMobileDate').textContent = formattedDate;
  });
});

// Saat dilimi seçildiğinde selected classını ekleme
document.querySelectorAll('.hour').forEach(hour => {
  hour.addEventListener('click', function() {
    document.querySelectorAll('.hour.selected').forEach(selected => {
      selected.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dateItems = document.querySelectorAll('.dateItem');
  dateItems.forEach(item => {
      item.addEventListener('click', function() {
          // Önceden seçilmiş bir tarih varsa, seçimini kaldır
          const selected = document.querySelector('.dateItem.selected');
          if (selected) {
              selected.classList.remove('selected');
          }
          // Tıklanan tarihe seçili sınıfını ekle
          this.classList.add('selected');
      });
  });
});

// Seçim butonlarına tıklama işlevi ekleme
const choosen = document.querySelector('.choosen');
const chooseText = document.querySelector('.chooseText');
const onlineOption = document.querySelector('.online');
const inpersonOption = document.querySelector('.inperson');
const dropdownVector = document.querySelector(".dropdownVector");
const buyButton = document.querySelector(".buyBtn");
const sectionContainer = document.querySelector(".sectionContainer");
const checkoutContainer = document.querySelector(".checkoutContainer");

choosen.addEventListener('click', function() {
  // Seçim metnini kontrol et ve görünürlüklerini ayarla
  if (onlineOption.style.display === 'flex' || inpersonOption.style.display === 'flex') {
    onlineOption.style.display = 'none';
    inpersonOption.style.display = 'none';
    dropdownVector.classList.remove("rotated");
  } else {
    dropdownVector.classList.add("rotated");
    if (chooseText.textContent.includes('IN PERSON')) {
      onlineOption.style.display = 'flex';
      inpersonOption.style.display = 'none';
    } else {
      onlineOption.style.display = 'none';
      inpersonOption.style.display = 'flex';
    }
  }
});

onlineOption.addEventListener('click', function() {
  chooseText.innerHTML = 'ONLINE';
  onlineOption.style.display = 'none';
  dropdownVector.classList.remove("rotated");
  buyButton.classList.add("active");
});

inpersonOption.addEventListener('click', function() {
  chooseText.innerHTML = 'IN PERSON';
  inpersonOption.style.display = 'none';
  dropdownVector.classList.remove("rotated");
  buyButton.classList.add("active");
});

buyButton.addEventListener("click", function() {
  sectionContainer.style.display = "none";
  checkoutContainer.style.display = "flex";
});
