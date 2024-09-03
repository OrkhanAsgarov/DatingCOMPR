const inputField = document.querySelector(".fieldMessage");
const submitButton = document.querySelector(".submit-btn");
const messageBox = document.querySelector(".messageBox-content");
const backWelcomePage = document.querySelector(".backWelcomePage");

// 1. Yazı yazarken `submit-btn` butonuna `active` sınıfını ekle
inputField.addEventListener("input", function () {
  if (inputField.value.trim() !== "") {
    submitButton.classList.add("active");
  } else {
    submitButton.classList.remove("active");
  }
});

function scrollToBottom() {
  messageBox.scrollTop = messageBox.scrollHeight;
}

// Mesaj gönderme fonksiyonu
function sendMessage() {
  const messageText = inputField.value.trim();
  if (messageText) {
    const autorName = "ExampleUser"; // Örnek isim değişkeni
    const newMessage = document.createElement("p");
    newMessage.innerHTML = `<span class="autor">${autorName}: </span><span class="message">${messageText}</span>`;
    messageBox.appendChild(newMessage);
    backWelcomePage.classList.add("active");
    inputField.value = ""; // Giriş alanını temizle
    submitButton.classList.remove("active"); // `active` sınıfını kaldır
    scrollToBottom(); // Scroll'u en alta kaydır
  }
}

// Butona tıklandığında mesaj gönder
submitButton.addEventListener("click", function () {
  if (submitButton.classList.contains("active")) {
    sendMessage();
  }
});

// Enter tuşuna basıldığında mesaj gönder
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Enter tuşunun default davranışını engelle
    if (submitButton.classList.contains("active")) {
      sendMessage();
    }
  }
});
