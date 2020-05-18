import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
 

  render() {
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBSsKUzYG_Wz7u2qL6unHqfBOmvaZ0H1Mg",
          }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lag }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lag}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
