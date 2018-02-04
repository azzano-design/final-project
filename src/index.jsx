require('../styles/main.scss');
require("babel-core/register");
require("babel-polyfill");

import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Routes} from './routes.jsx';

ReactDom.render(<Router><Routes/></Router>, document.getElementById('react-root'));