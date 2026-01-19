document.addEventListener("DOMContentLoaded", () => {
  // HERO
  document.getElementById("hero-title").textContent =
    companyData.company.name;

  document.getElementById("hero-tagline").textContent =
    companyData.company.tagline;

  // ABOUT
  document.getElementById("about-desc").textContent =
    companyData.company.description;

  // SERVICES
  const servicesList = document.getElementById("services-list");
  companyData.services.forEach(service => {
    servicesList.innerHTML += `
      <div class="col-md-3">
        <div class="card h-100 p-4 text-center">
          <h5 class="fw-bold">${service.title}</h5>
          <p class="text-muted">${service.desc}</p>
        </div>
      </div>
    `;
  });

  // STRENGTHS
  const strengthsList = document.getElementById("strengths-list");
  companyData.strengths.forEach(item => {
    strengthsList.innerHTML += `
      <div class="col-md-3">
        <div class="card p-4 h-100">
          <h5 class="fw-bold">${item.title}</h5>
          <p class="text-muted">${item.desc}</p>
        </div>
      </div>
    `;
  });

  
  // CLIENTS
const clientsList = document.getElementById("clients-list");
companyData.clients.forEach((client) => {
  clientsList.innerHTML += `
    <div class="col-6 col-md-3 text-center">
      <img src="${client.logo}"
           alt="${client.name}"
           class="client-logo">
    </div>
  `;
});

// EXPERIENCE
const experienceList = document.getElementById("experience-list");
companyData.experience.forEach((item) => {
  experienceList.innerHTML += `
    <li class="list-group-item border-0">
      ✔ ${item}
    </li>
  `;
});


  // PROJECTS
  const projectsList = document.getElementById("projects-list");
  companyData.projects.forEach(project => {
    projectsList.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100">
          <img src="${project.image}" class="project-img">
          <div class="card-body">
            <h5 class="fw-bold">${project.title}</h5>
            <small class="text-muted">
              ${project.location} • ${project.year}
            </small>
          </div>
        </div>
      </div>
    `;
  });

  // CONTACT
  document.getElementById("contact-address").textContent =
    companyData.company.address;

  document.getElementById("contact-phone").textContent =
    companyData.company.phone;

  document.getElementById("contact-email").textContent =
    companyData.company.email;
});

// WhatsApp Floating Button

const waButton = document.getElementById("wa-float");

if (companyData.company.whatsapp) {
  waButton.href =
    "https://wa.me/" +
    companyData.company.whatsapp +
    "?text=Halo%20PT%20Wadah%20Karya%20Persada,%20saya%20ingin%20konsultasi%20proyek.";
}
else {
  waButton.style.display = "none";
} 

// Email floating Button

const emailButton = document.getElementById("email-float");
if (companyData.company.email) {
  emailButton.href = "mailto:" + companyData.company.email;
}
