import swal from 'sweetalert';
let current;
const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalButton = document.querySelectorAll(selector);
  if (swalButton) { // protect other pages
    swalButton.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.target.id = "sweet-alert-demo"
        swal(options).then(callback);
      });
    })
  }
};

export { initSweetalert };