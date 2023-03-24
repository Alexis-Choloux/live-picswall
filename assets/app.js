/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

// loads the jquery package from node_modules
import $ from 'jquery';

// MODULE USAGE
//
// import the function from greet.js (the .js extension is optional)
import picswall from './modules/picswall';
// picswall('Alexis');
// $(document).ready(function() {
//     $('body').prepend('<h1>'+ picswall('Alexis') +'</h1>');
// });
