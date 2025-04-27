window.onload = function() {
  try {
    // Button click event
    const clickBtn = document.getElementById('clickBtn');
    if (clickBtn) {
      clickBtn.addEventListener('click', function() {
        clickBtn.textContent = "Clicked!";
        clickBtn.style.backgroundColor = "green";
        clickBtn.style.transform = "scale(1.2)";
        setTimeout(() => {
          clickBtn.style.transform = "scale(1)";
        }, 300);
      });

      // Double click event
      clickBtn.addEventListener('dblclick', function() {
        alert('Secret Double Click Activated! 🎉');
      });

      // Long press event
      let pressTimer;
      clickBtn.addEventListener('mousedown', function() {
        pressTimer = setTimeout(() => {
          alert('Long Press Secret Activated! 🔥');
        }, 1500);
      });
      clickBtn.addEventListener('mouseup', function() {
        clearTimeout(pressTimer);
      });
    }

    // Key press detection
    const keyPressDisplay = document.getElementById('keyPressDisplay');
    if (keyPressDisplay) {
      document.addEventListener('keydown', function(event) {
        keyPressDisplay.textContent = `You pressed: ${event.key}`;
        keyPressDisplay.style.animation = 'pop 0.8s ease';
        setTimeout(() => {
          keyPressDisplay.style.animation = '';
        }, 300);
      });
    }

    // Image Gallery functionality
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let currentImageIndex = 0;
    const galleryImage = document.getElementById('galleryImage');

    if (galleryImage) {
      function showImage(index) {
        galleryImage.style.opacity = 0;
        setTimeout(() => {
          galleryImage.src = images[index];
          galleryImage.style.opacity = 1;
        }, 200);
      }

      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');

      if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', function() {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          showImage(currentImageIndex);
        });
        prevBtn.addEventListener('click', function() {
          currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
          showImage(currentImageIndex);
        });

        // Automatic image rotation every 3 seconds
        setInterval(() => {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          showImage(currentImageIndex);
        }, 3000);
      }
    }

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContent = document.getElementById('tabContent');

    if (tabs.length > 0 && tabContent) {
      tabs.forEach(tab => {
        tab.addEventListener('click', function() {
          const tabName = tab.getAttribute('data-tab');
          tabContent.textContent = `You clicked on ${tabName} tab.`;
          tabContent.style.animation = 'fadeIn 0.9s ease';
          setTimeout(() => {
            tabContent.style.animation = '';
          }, 500);
        });
      });
    }

    // Form validation
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordMessage = document.getElementById('passwordMessage');

    if (form && passwordInput && passwordMessage) {
      form.addEventListener('submit', function(e) {
        if (passwordInput.value.length < 8) {
          e.preventDefault();
          form.classList.add('shake');
          setTimeout(() => {
            form.classList.remove('shake');
          }, 400);
          alert('Password must be at least 8 characters long!');
        }
      });

      passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length >= 8) {
          passwordMessage.textContent = "Good password!";
          passwordMessage.style.color = "green";
          passwordMessage.style.animation = 'fadeIn 0.3s ease';
        } else {
          passwordMessage.textContent = "Password must be at least 8 characters.";
          passwordMessage.style.color = "red";
          passwordMessage.style.animation = 'fadeIn 0.3s ease';
        }
        setTimeout(() => {
          passwordMessage.style.animation = '';
        }, 300);
      });
    }
  } catch (err) {
    console.error("Error in script execution:", err);
  }
};
