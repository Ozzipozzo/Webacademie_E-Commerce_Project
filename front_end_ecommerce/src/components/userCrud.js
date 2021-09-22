import React from 'react';

export default class userCrud extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleSubmit(event) {
      alert('Les modifications ont été effectuées !');
      event.preventDefault();
    }
  
    render() {
      return (
      <>
       <h1>Vos Coordonées</h1>
       
        <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email : </label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password : </label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">Nom : </label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Nom" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress2">Prénom : </label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Prénom" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Telephone : </label>
            <input type="text" className="form-control" id="inputCity" placeholder="Téléphone"/>
          </div>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Modifier</button>
      </form>
      </>
      );
    }
  }