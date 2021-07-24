import tabs from './modules/tabs';
import cards from './modules/cards';
import form from './modules/form';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';
import timer from './modules/timer';
import { showModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 30000);

  tabs();
  cards();
  form();
  modal('[data-modal]', '.modal', modalTimerId);
  slider();
  calc();
  timer();
});
