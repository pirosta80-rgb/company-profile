document.addEventListener("DOMContentLoaded", () => {
  // HERO INJECTION
  document.getElementById("hero-title").textContent = companyData.company.name;
  document.getElementById("hero-tagline").textContent = companyData.company.tagline;

  // ABOUT INJECTION
  document.getElementById("about-desc").textContent = companyData.company.description;

  // SERVICES INJECTION (Fully Responsive Grid Layout)
  const servicesList = document.getElementById("services-list");
  servicesList.innerHTML = ""; // Clear fallback content
  companyData.services.forEach(service => {
    servicesList.innerHTML += `
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm p-4 text-center" style="border-top: 4px solid var(--amber-heavy) !important;">
          <div class="mb-3" style="color: var(--amber-heavy);"><i class="fa-solid ${service.icon} fs-3"></i></div>
          <h5 class="fw-bold text-dark fs-6 mb-2">${service.title}</h5>
          <p class="text-muted small mb-0" style="line-height: 1.6;">${service.desc}</p>
        </div>
      </div>
    `;
  });

  // STRENGTHS INJECTION
  const strengthsList = document.getElementById("strengths-list");
  strengthsList.innerHTML = "";
  companyData.strengths.forEach(item => {
    strengthsList.innerHTML += `
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm p-4 text-center">
          <div class="mb-3" style="color: var(--amber-heavy);"><i class="fa-solid ${item.icon} fs-3"></i></div>
          <h5 class="fw-bold text-dark fs-6 mb-2">${item.title}</h5>
          <p class="text-muted small mb-0" style="line-height: 1.6;">${item.desc}</p>
        </div>
      </div>
    `;
  });

  // CLIENTS LOGO INJECTION
  const clientsList = document.getElementById("clients-list");
  clientsList.innerHTML = "";
  companyData.clients.forEach(client => {
    clientsList.innerHTML += `
      <div class="col-6 col-sm-4 col-md-3 text-center d-flex align-items-center justify-content-center p-3 client-logo-container">
        <img src="${client.logo}" alt="${client.name}" title="${client.name}">
      </div>
    `;
  });

  // EXPERIENCES LIST INJECTION
  const experienceList = document.getElementById("experience-list");
  experienceList.innerHTML = "";
  companyData.experience.forEach(item => {
    experienceList.innerHTML += `
      <li class="list-group-item border-0 py-3 d-flex align-items-center justify-content-center text-start">
        <span class="me-3 fs-5" style="color: var(--amber-heavy);">✓</span>
        <span class="text-secondary small fw-medium" style="letter-spacing: 0.3px;">${item}</span>
      </li>
    `;
  });

  // PROJECTS INJECTION
  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";
  companyData.projects.forEach(project => {
    projectsList.innerHTML += `
      <div class="col-sm-6 col-lg-4">
        <div class="card h-100 border-0 shadow-sm overflow-hidden">
          <div style="height: 220px; overflow: hidden; background-color: #eaeaea;">
            <img src="${project.image}" class="w-100 h-100" style="object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" alt="${project.title}">
          </div>
          <div class="card-body p-4">
            <h5 class="fw-bold text-dark h6 mb-2" style="min-height: 40px; line-height: 1.4;">${project.title}</h5>
            <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-light">
              <span class="badge bg-light text-secondary fw-normal px-2 py-1.5"><i class="fa-solid fa-map-marker-alt me-1 text-warning"></i>${project.location}</span>
              <small class="text-muted fw-semibold">${project.year ? project.year : 'Proyek'}</small>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // CONTACT INFORMATION INJECTION
  document.getElementById("contact-address").innerHTML = `<i class="fa-solid fa-map-marker-alt text-warning me-2"></i>Alamat: ${companyData.company.address}`;
  document.getElementById("contact-phone").innerHTML = `<i class="fa-solid fa-phone text-warning me-2"></i>HP / WA: ${companyData.company.phone}`;
  document.getElementById("contact-email").innerHTML = `<i class="fa-solid fa-envelope text-warning me-2"></i>Email: ${companyData.company.email}`;

  // FLOATING TELECOMMUNICATION LOGIC
  const waButton = document.getElementById("wa-float");
  if (waButton && companyData.company.whatsapp) {
    waButton.href = `https://wa.me/${companyData.company.whatsapp}?text=Halo%20PT%20Wadah%20Karya%20Persada%2C%20saya%20ingin%20konsultasi%20proyek.`;
  } else if (waButton) {
    waButton.style.display = "none";
  }

  const emailButton = document.getElementById("email-float");
  if (emailButton && companyData.company.email) {
    emailButton.href = `mailto:${companyData.company.email}?subject=Permintaan%20Penawaran%20Proyek`;
  } else if (emailButton) {
    emailButton.style.display = "none";
  }
});