document.addEventListener("DOMContentLoaded", () => {
    // Mostrar ou ocultar informações
    document.querySelectorAll(".toggle-info").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const info = document.getElementById(btn.dataset.target);
        if (info) {
          info.classList.toggle("hidden");
          btn.textContent = info.classList.contains("hidden")
            ? "Mostrar mais"
            : "Mostrar menos";
        }
      });
    });
  
    // Modal para galeria de imagens
    document.querySelectorAll(".full-width").forEach((img) => {
      img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${img.src}" alt="${img.alt}">
          </div>
        `;
        document.body.appendChild(modal);
  
        modal.querySelector(".close").addEventListener("click", () => {
          modal.remove();
        });
      });
    });
  
    // Validação de formulário
    const feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
      feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = feedbackForm.querySelector("#name").value.trim();
        const email = feedbackForm.querySelector("#email").value.trim();
        const message = feedbackForm.querySelector("#message").value.trim();
        const errorDiv = feedbackForm.querySelector(".error");
  
        errorDiv.textContent = "";
  
        if (!name || !email || !message) {
          errorDiv.textContent = "Todos os campos são obrigatórios!";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errorDiv.textContent = "Por favor, insira um e-mail válido.";
        } else {
          alert("Feedback enviado com sucesso!");
          feedbackForm.reset();
        }
      });
    }
  });
  