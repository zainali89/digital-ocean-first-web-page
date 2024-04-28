document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('accordion-toggle')) {
      const accordionSections = document.querySelectorAll('.accordion-section');
      const accordionToggles = document.querySelectorAll('.accordion-toggle');

      // Identify the index of the clicked toggle
      const index = Array.from(accordionToggles).indexOf(event.target);

      if (index === -1) {
          console.error("Accordion toggle not found");
          return;
      }

      const section = accordionSections[index]; // Get the corresponding section

      if (section.classList.contains('open')) {
          // Collapse if currently open
          section.classList.remove('open');
          event.target.textContent = '+';
      } else {
          // Collapse all other sections before opening the selected one
          accordionSections.forEach(sec => sec.classList.remove('open'));
          accordionToggles.forEach(toggle => toggle.textContent = '+');

          section.classList.add('open');
          event.target.textContent = '-';
      }
  }
});
