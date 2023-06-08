function showSection(sectionId) {
  // Ocultar todas las secciones
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.style.display = 'block';
}

