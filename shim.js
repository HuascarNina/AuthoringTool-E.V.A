// corrige advertencia polyfill R16
global.requestAnimationFrame = callback => setTimeout(callback, 0);

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Configura el adaptador de reacción de la enzima
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Agrega jQuery para probar
import $ from 'jquery';

window.jQuery = global.$ = global.jQuery = $;

require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/mouse');