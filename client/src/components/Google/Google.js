import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import "./Google.css"



const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
render() {
    return (
      
    )
  }
}
