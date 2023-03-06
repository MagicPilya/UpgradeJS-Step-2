import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";

window.addEventListener('DOMContentLoaded', () => {

    "use strict";

    modals();
    sliders('.feedback-slider-item', 'horizontal', 3000, '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical', 3500);
    forms();
    mask("[name='phone']");
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

});