import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

//Styles
require('react-bootstrap')
import '../styles/index.scss'
import '../styles/colors.scss'

//images
import '../../favicon.ico'

//Connect to Heroku
const port = process.env.PORT || 8000
server.listen(port, function() {
    console.log("App is running on port " + port);
});
