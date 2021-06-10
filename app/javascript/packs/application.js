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
    initSweetalert('.sweet-alert-demo', {
        title: "Alert",
        text: "Once deleted, you will not be able to recover this List!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      },(value) => {
        if (value) {
            const link = document.querySelector('.delete-list');
            link.click();
        }
      });
    initSweetalert('.sweet-alert-demo', {
        title: "Alert",
        text: "Are you sure you want to delete this movie ?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      },(value) => {
          console.log(opt)
        if (value) {
            const link = document.querySelector('.delete-movie');
            link.click();
            console.log(event.target)
        }
      });
  });

Rails.start()
Turbolinks.start()
ActiveStorage.start()
