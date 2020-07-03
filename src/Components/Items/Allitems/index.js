import React, { Component } from 'react';
import { Icon, Button } from 'react-materialize';
//Internals
import PRODUCTS from '../../Data';

class AllItems extends Component{
  constructor( props ) {
    super( props );
      this.state = {
        query: '',
        results: PRODUCTS,
        page: 0
      };
    }

    fetchSearchResults = (updatedPageNo, query ) => {
      var arr = [];
      var start = updatedPageNo*5;
      var end = start+5
      for(var i =start ; i<end && i<PRODUCTS.length && i>-1 ; i++){
        if(PRODUCTS[i].brand.toLowerCase().includes(query.toLowerCase())||PRODUCTS[i].model.toLowerCase().includes(query.toLowerCase())||PRODUCTS[i].memories.toLowerCase().includes(query.toLowerCase())){
          arr[i] = PRODUCTS[i];
      }
    }
    this.setState({results:arr});
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if ( ! query ) {
      this.setState({results:PRODUCTS});
    } 
    else {
      this.setState({ query, loading: true, message: '' }, () => {
        this.fetchSearchResults(this.state.page, query);
      });
    }
  }
  handleOnNext = (event) => {
    if(this.state.page < Math.ceil(PRODUCTS.length/parseFloat(5)-1)){
      this.setState({page: this.state.page+1}, () => {
        this.fetchSearchResults(this.state.page, this.state.query);
      });
    }
    else{
      this.fetchSearchResults(this.state.page, this.state.query);
    }
  }

  handleOnPrevious = () => {
    if(this.state.page>0){
      this.setState({page: this.state.page-1}, () => {
        this.fetchSearchResults(this.state.page, this.state.query);
      });
    }
    else{
      this.fetchSearchResults(this.state.page, this.state.query);
    }
  }

  
  renderResults = () => {
    var product= this.state.results;
    if (product.length) {
      return (
        <div className="results-container">
          {product.map((product) => {
            return (
              <table>
              <tr>
                <td><img alt={product.name} src={product.image} width="250" height="200"/></td>
                <td>
                <u><h4 id="product-name">{product.brand} {product.model} </h4></u>
                <h5 id="product-description">{product.memories} GB</h5>
                <h5 id="product-price">${product.price}</h5>
                <Icon small id="add-icon">Add to cart</Icon>
                </td>
              </tr>
              </table>
            );
          })}
        </div>
      );
    }
  };

  componentWillMount(){
    var arr = [];
    for(var i =0 ; i<5 ; i++){
      arr[i] = PRODUCTS[i];
    }
    this.setState({results:arr});
  }

  render(){
    return(
      <div>

        <div className="container">
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              id="search-input"
              placeholder="Search..."
              onChange={this.handleOnInputChange}
            />
            <i className="fa fa-search search-icon"/>
            </label>
          </div>

        <div className="items">
              {this.renderResults()}
        </div>
        <div>
        <Button onClick = {this.handleOnPrevious}>Previous Page</Button>
          <Button onClick = {this.handleOnNext}>Next Page</Button>
        </div>

      </div>
    )}

}

export default AllItems;