const mapButton = document.querySelector('.map-button');
const writeUs = document.querySelector('.main-feedback');
const buyAll = document.querySelectorAll('.btn-buy');
const writeUsForm = document.querySelector('.write-us-form');
const nameFamily = document.querySelector('.name-family');
const email = document.querySelector('.email');
const slideForward = document.querySelector('.slider-forward');
const slideBack = document.querySelector('.slider-back');
const slideOne = document.querySelector('.slide1');
const slideTwo = document.querySelector('.slide2');
const dotRedOne = document.querySelector('.dot-red-one');
const dotRedTwo = document.querySelector('.dot-red-two');
const buttonDelivery = document.querySelector('.btn-delivery');
const buttonGarantie = document.querySelector('.btn-garantie');
const buttonCredit = document.querySelector('.btn-credit');
const serviceDelivery = document.querySelector('.service-delivery');
const serviceGarantie = document.querySelector('.service-garantie');
const serviceCredit = document.querySelector('.service-credit');


buttonDelivery.addEventListener('click', function (evt) {
  serviceDelivery.classList.add('service-show');
  serviceGarantie.classList.remove('service-show');
  serviceCredit.classList.remove('service-show');
  buttonDelivery.classList.add('service-btn-active');
  buttonGarantie.classList.remove('service-btn-active');
  buttonCredit.classList.remove('service-btn-active');
});
buttonGarantie.addEventListener('click', function (evt) {
  serviceDelivery.classList.remove('service-show');
  serviceGarantie.classList.add('service-show');
  serviceCredit.classList.remove('service-show');
  buttonDelivery.classList.remove('service-btn-active');
  buttonGarantie.classList.add('service-btn-active');
  buttonCredit.classList.remove('service-btn-active');
});
buttonCredit.addEventListener('click', function (evt) {
  serviceDelivery.classList.remove('service-show');
  serviceGarantie.classList.remove('service-show');
  serviceCredit.classList.add('service-show');
  buttonDelivery.classList.remove('service-btn-active');
  buttonGarantie.classList.remove('service-btn-active');
  buttonCredit.classList.add('service-btn-active');
});


slideForward.addEventListener('click', function (evt) {
  slideOne.classList.remove('slide-show');
  slideTwo.classList.add('slide-show');
  dotRedOne.classList.add('not-show');
  dotRedTwo.classList.remove('not-show');
})
slideBack.addEventListener('click', function (evt) {
  slideTwo.classList.remove('slide-show');
  slideOne.classList.add('slide-show');
  dotRedOne.classList.remove('not-show');
  dotRedTwo.classList.add('not-show');
})


let isStorageSupport = true;
let storage = '';

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
        writeUsForm.classList.remove('modal-error');
        writeUsForm.offsetWidth = writeUsForm.offsetWidth;
        writeUsForm.classList.add('modal-error');
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
      writeUsForm.classList.remove('modal-error');
    });
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (modalWriteUs.classList.contains('modal-shown')) {
          evt.preventDefault();
          modalWriteUs.classList.remove('modal-shown');
          writeUsForm.classList.remove('modal-error');
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
};
