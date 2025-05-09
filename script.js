document.getElementById("demoForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Demo scheduled successfully!");
  });
  

    document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      faqItem.classList.toggle('active');
    });
  });



  window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content'); // or your content container

    if (navbar && mainContent) {
      const navbarHeight = navbar.offsetHeight;
      mainContent.style.paddingTop = `${navbarHeight + 80}px`; // Add extra spacing if needed
    }
  });

