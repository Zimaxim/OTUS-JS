import React, { Component } from 'react';
import './w3.css';

class AddPlaceForm extends Component {

    constructor(props) {
      super(props);

      this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this);
      
    }
    handlePlaceSubmit(e) {
      e.preventDefault();
      
      if( this.refs.placeZip.value.length > 0) {
        this.props.onPlaceSubmit({ 
          name : this.refs.placeName.value,
          zip  : this.refs.placeZip.value
        });
      }

      //reset the form
     // this.refs.placeForm.reset();
     this.refs.placeName.value = "";
     this.refs.placeZip.value = "";

      //(e.target.value);
    }
    createPlace(e){
      e.preventDefault();
      //get the Place object name from the form
      
      var place = { 
        name : this.refs.placeName.value,
        zip  : this.refs.placeZip.value
      };
      //if we have a value
      //call the addPlace method of the App component
      //to change the state of the place list by adding an new item
      if(typeof place.zip === 'string' && place.zip.length > 0) {
        let places = this.props.places;
        places.push(place);
       // this.setState({ places : places });


        //this.props.addPlace(place);
        //reset the form
        //this.refs.placeForm.reset();
      }
     }

     render()  {
      return(
        //<form className="form-inline" ref="placeForm" onSubmit={this.handlePlaceSubmit}>
        <div  >
        <div className="w3-container w3-light-grey">
        <h2>Новый город</h2>
        </div>

        <form className="w3-container "  ref="placeForm">

        
         
          <p>
          <label className="w3-text-teal"> <b>Название: </b></label>
            <input  type="text" id="placeItem" placeholder="e.x. Tomsk" ref="placeName"  />
          
          </p>
          <p>
          <label className="w3-text-teal"><b> Почтовый индекс:</b></label>
            <input  type="text" id="placeZip" placeholder="e.x. 634000" ref="placeZip"  />
          
          </p>
          <button  className="w3-btn w3-teal" onClick={this.handlePlaceSubmit} >Добавить</button>
       
        
       </form>
       </div>
      )
     }
    };

    export default AddPlaceForm;
