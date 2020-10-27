const mapButton = document.querySelector('.map-button');
const writeUs = document.querySelector('.main-feedback');
const buyAll = document.querySelectorAll('.btn-buy');
const writeUsForm = document.querySelector('.write-us-form');
const nameFamily = document.querySelector('.name-family');
const email = document.querySelector('.email')


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

if (mapButton) {
  const mapModal = document.querySelector('.modal-map');
  const closeMap = mapModal.querySelector('.close-button');
  mapButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.add('modal-show-map');
  });
  if (closeMap) {
    closeMap.addEventListener('click', function (evt) {
      evt.preventDefault();
      mapModal.classList.remove('modal-show-map');
    });
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (mapModal.classList.contains('modal-show-map')) {
          evt.preventDefault();
          mapModal.classList.remove('modal-show-map');
        }
      }
    });
  }
};

if (writeUs) {
  const modalWriteUs = document.querySelector('.modal-write-us');
  const closeWriteUs = modalWriteUs.querySelector('.close-button');
  writeUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.add('modal-shown');
    if (storage) {
      nameFamily.value = storage;
      email.focus();
    } else {
      nameFamily.focus();
    }
    writeUsForm.addEventListener('submit', function (evt) {
      if (!email.value || !nameFamily.value) {
        evt.preventDefault()
        writeUsForm.classList.remove("modal-error");
        writeUsForm.offsetWidth = writeUsForm.offsetWidth;
        writeUsForm.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem('login', nameFamily.value);
        }
      }
    })
  });
  if (closeWriteUs) {
    closeWriteUs.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalWriteUs.classList.remove('modal-shown');
      writeUsForm.classList.remove("modal-error");
    });
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (modalWriteUs.classList.contains('modal-shown')) {
          evt.preventDefault();
          modalWriteUs.classList.remove('modal-shown');
          writeUsForm.classList.remove("modal-error");
        }
      }
    });
  }
}

if (buyAll) {
  const cart = document.querySelector('.modal-cart');
  const closeCart = cart.querySelector('.close-button');

  for (let i = 0; i < buyAll.length; i++) {
    buyAll[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      cart.classList.add('modal-shown');
    });
  }

  if (closeCart) {
    closeCart.addEventListener('click', function (evt) {
      evt.preventDefault();
      cart.classList.remove('modal-shown');
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (cart.classList.contains('modal-shown')) {
          evt.preventDefault();
          cart.classList.remove('modal-shown');
        }
      }
    });
  }
}
