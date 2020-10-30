const buyAll = document.querySelectorAll('.btn-buy');

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
