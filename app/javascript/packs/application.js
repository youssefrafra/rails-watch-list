// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';
import { initSweetalert } from '../plugins/init_sweetalert';

document.addEventListener('turbolinks:load', () => {
    initSweetalert('.btn-outline-danger', {
        title: "Alert",
        text: "Are you sure you want to delete this ?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      },(value) => {
        if (value) {
            const button = document.querySelector('#sweet-alert-demo');
            const link = button.nextElementSibling
            button.id = "";
            link.click();
        }
      });
  });

Rails.start()
Turbolinks.start()
ActiveStorage.start()
