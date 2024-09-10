document.addEventListener("DOMContentLoaded", function() {
    var username = "orkhan";
    var password = 123;
    const headerLoginBtn = document.querySelector(".btn-login");
    const headerLogoutBtn = document.querySelector(".btn-logout");
    const headerProfileBtn = document.querySelector(".btn-profile");
    const profileContent = document.querySelector(".profile-content");

    

    // 1. LOGIN button tıklandığında
    headerLoginBtn.addEventListener("click", function() {
      document.querySelector(".login-container").classList.add("active");
    });
  
    // 2. XButton tıklandığında
    document.querySelectorAll(".closeLogin").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector(".login-container").classList.remove("active");
            document.querySelector(".password-reset-content").classList.remove("active");
            document.querySelector(".register-content").classList.remove("active");
        });
    });
    
  
    // 3. "Did you forget your password?" tıklandığında
    document.querySelector(".login-content .forgetPassword").addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(".login-content").classList.remove("active");
      document.querySelector(".password-reset-content").classList.add("active");
      document.querySelector(".send-mail-content").classList.add("active");
    });

    //  "Register here." tıklandığında
    document.querySelector(".login-content .registerLink").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(".login-content").classList.remove("active");
        document.querySelector(".register-content").classList.add("active");
        document.querySelector(".register-form-content").classList.add("active");
      });
  
    // 4. Email doğru yazıldığında submit button "active" olsun
    document.querySelector(".send-mail-content input[type='email']").addEventListener("input", function() {
      const email = this.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basit email doğrulama
      if (emailPattern.test(email)) {
        document.querySelector(".send-mail-content .submit-login").classList.add("active");
      } else {
        document.querySelector(".send-mail-content .submit-login").classList.remove("active");
      }
    });
  
    // 5. submit button "active" ise tıklandığında
    document.querySelector("#sendMail").addEventListener("click", function(e) {
      if (this.classList.contains("active")) {
        e.preventDefault();
        document.querySelector(".send-mail-content").classList.remove("active");
        document.querySelector(".confirm-wait-content").classList.add("active");
  
        // 5 saniye bekletme
        setTimeout(function() {
          document.querySelector(".confirm-wait-content").classList.remove("active");
          document.querySelector(".new-password-content").classList.add("active");
        }, 5000);
      } else {
        e.preventDefault();

        alert("Ooopss!! mail was wrong!");
      }
    });
  
    // 6. Yeni şifre ve onay aynı ise submit button "active" olsun
    const newPasswordInput = document.querySelector(".new-password-content input[placeholder='your new password']");
    const confirmPasswordInput = document.querySelector(".new-password-content input[placeholder='confirm new password']");
    
    function checkPasswordsMatch() {
      if (newPasswordInput.value === confirmPasswordInput.value && newPasswordInput.value.length > 0) {
        
        document.querySelector(".new-password-content .submit-login").classList.add("active");
      } else {
        document.querySelector(".new-password-content .submit-login").classList.remove("active");
      }
    }
  
    newPasswordInput.addEventListener("input", checkPasswordsMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordsMatch);
  
    // 7. Yeni şifre "active" button tıklanırsa
    document.querySelector("#changePassword").addEventListener("click", function(e) {
      if (this.classList.contains("active")) {
        password =newPasswordInput.value;
        e.preventDefault();
        document.querySelector(".new-password-content").classList.remove("active");
        document.querySelector(".password-reset-content").classList.remove("active");
        document.querySelector(".login-content").classList.add("active");
      } else{
        e.preventDefault();
        alert("Oooops!!! Password didn't changed!");
      }
    });

    // register işlemleri
    const firstNameInput = document.querySelector(".register-form-content .firstNameInput");
    const lastNameInput = document.querySelector(".register-form-content .lastNameInput");
    const emailInput = document.querySelector('.register-form-content input[type="email"]');
    const usernameRegisterInput = document.querySelector('.register-form-content input[type="text"][placeholder="maximum X characters"]');
    const passwordRegisterInput = document.querySelector(".register-form-content .registerPassword");
    const confirmPasswordRegisterInput = document.querySelector(".register-form-content .registerConfirm");
    const submitButton = document.querySelector(".register-form-content .submit-login");

    function checkFormCompletion() {
        // Tüm inputların dolu olup olmadığını ve şifrelerin eşleşip eşleşmediğini kontrol et
        if (
            firstNameInput.value.trim() !== "" &&
            lastNameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            usernameRegisterInput.value.trim() !== "" &&
            passwordRegisterInput.value.trim() !== "" &&
            confirmPasswordRegisterInput.value.trim() !== "" &&
            passwordRegisterInput.value === confirmPasswordRegisterInput.value
        ) {
            submitButton.classList.add("active"); // active classını ekler
        } else {
            submitButton.classList.remove("active"); // active classını kaldırır
        }
    }

    // Inputlara her yazıldığında formu kontrol et
    [firstNameInput, lastNameInput, emailInput, usernameRegisterInput, passwordRegisterInput, confirmPasswordRegisterInput].forEach(input => {
        input.addEventListener("input", checkFormCompletion);
    });

    document.querySelector("#newRegister").addEventListener("click", function(e) {
        if (this.classList.contains("active")) {
            
            password =passwordRegisterInput.value;
            username = usernameRegisterInput.value.toString();
            e.preventDefault();
            document.querySelector(".register-form-content").classList.remove("active");
            document.querySelector("#newRegister").classList.remove("active");
            document.querySelector(".passed-content").classList.add("passed");
            document.querySelector(".register-content").classList.add("passed");

            // 5 saniye bekletme
            setTimeout(function() {
                document.querySelector(".passed-content").classList.remove("passed");
                document.querySelector(".register-content").classList.remove("active");
                document.querySelector(".register-content").classList.remove("passed");
                document.querySelector(".login-content").classList.add("active");
            }, 5000);
        } else{
          e.preventDefault();
          alert("Oooops!!! Somethings is false try again");
        }
    });

    // login işlemleri
    const loginUsername = document.querySelector("#loginUsername");
    const loginPassword = document.querySelector("#loginPassword");
    const loginBtn = document.querySelector('#loginBtn');

    function checkLoginFormCompletion() {
        // Tüm inputların dolu olup olmadığını ve şifrelerin eşleşip eşleşmediğini kontrol et
        if (
            loginUsername.value.trim() !== "" &&
            loginPassword.value.trim() !== ""
        ) {
            loginBtn.classList.add("active"); // active classını ekler
        } else {
            loginBtn.classList.remove("active"); // active classını kaldırır
        }
    }

    // Inputlara her yazıldığında formu kontrol et
    [loginUsername, loginPassword].forEach(event => {
        event.addEventListener("input", checkLoginFormCompletion);
    });

    loginBtn.addEventListener("click", function (e) {
        if (
            username === loginUsername.value.toString() &&
            password.toString() === loginPassword.value
        ) {
            e.preventDefault();
            headerLoginBtn.classList.add("logged");
            profileContent.classList.add("active");
            headerProfileBtn.innerHTML = username;
            document.querySelector(".login-container").classList.remove("active");
        } else {
            e.preventDefault();
            alert("wrong somethings")
        }

    });

    headerLogoutBtn.addEventListener("click", function(){
        headerLoginBtn.classList.remove("logged");
        profileContent.classList.remove("active");
        headerProfileBtn.innerHTML = "";
    });
});
  