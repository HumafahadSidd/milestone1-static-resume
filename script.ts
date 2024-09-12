
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const skillsSection = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
    });
}
