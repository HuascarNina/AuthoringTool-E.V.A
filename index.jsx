import React from 'react';
import ReactDOM from 'react-dom';

import sortable from 'jquery-ui/ui/widgets/sortable';
import ReduxProvider from './_editor/containers/ReduxProvider';


require('es6-promise').polyfill();
require('expose-loader?Ediphy!./core/editor/temp_hack');
require('./plugins/plugin_dependencies_loader').requireAll();

// Requerir archivos CSS
import './sass/style.scss';

// Nos aseguramos de que JQuery UI Sortable Widget esté inicializado
// eslint-disable-next-line
new sortable();

ReactDOM.render((<ReduxProvider />), document.getElementById('root'));