import React, { Component } from 'react';
import "./CenterImagePage.css"
import VerticalTabs from './EffectsOptionsMenu'
import EditingCanvas from "./EditingCanvas.js"

class CenterImagePage extends Component {

  // Methods for interacting with canvas. All interactions should be happend through these calls
  handleSetCanvas = (property, value) => {
    this.canvas.setCanvasState(property, value);
  }

  handleGetCanvas = (property, value) => {
    return this.canvas.getCanvasState(property, value);
  }

  applyFilter = (effect, parameters) => {
    this.canvas.updateImage(effect, parameters);
  }

  insertImage = (imageUrl) => {
    this.canvas.insertImage(imageUrl);
  }

  imageResolution = () => {
    return this.canvas.getImageResolution();
  }

  downloadImage = (saveName, saveExtension) => {
    this.canvas.downloadImage(saveName, saveExtension);
  }

  resizeCanvas = () => {
    if (this.canvas)
      this.canvas.resizeCanvas()
  }

  resizeCanvas = () => {
    if (this.canvas)
      this.canvas.resizeCanvas()
  }

  render(){
    window.addEventListener('resize', this.resizeCanvas);
    return (
      //three horizontal boxes taking up the entire vertical space 
      //List of different effects
      //UI for view of current effect options
      //View Image
      <div id="mainImageUIandEffectsBar">
        <VerticalTabs
          getCanvas={this.handleGetCanvas}
          setCanvas={this.handleSetCanvas}
          applyFilter={this.applyFilter}
          insertImage={this.insertImage}
          imageResolution={this.imageResolution}
          downloadImage={this.downloadImage}
        />
        <div id="imageDisplay">
          <EditingCanvas ref={ref => (this.canvas = ref)} selectedImage={this.props.selectedImage}/>
        </div>
      </div>
    );
  }
}

export default CenterImagePage;