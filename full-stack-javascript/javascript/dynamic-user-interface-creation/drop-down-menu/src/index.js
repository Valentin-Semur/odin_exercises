import './styles.css';

const showDropdown = () => {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
};

const dropdownDiv = document.querySelector('.dropdown');
dropdownDiv.addEventListener('mouseover', showDropdown);
dropdownDiv.addEventListener('mouseout', showDropdown);
