
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker,Circle } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class GoogleMap extends Component {
state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const coords = { lat: -21.805149, lng: -49.0921657 };
    return (
      
     <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 22.7195687,
            lng: 75.8577258
          }
        }
      >
        
        <Circle
        radius={1200}
        center={coords}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC2H6_29LJEXzfSbcAvHCkpb61qu3hvTlc'
})(GoogleMap);