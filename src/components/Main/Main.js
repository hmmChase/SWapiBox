import React, { Component } from 'react';
import Card from '../Card/Card';
import Crawl from '../Crawl/Crawl';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderCategories = () => {
    return this.props.categoryData.map((dataObj, index) => {
      // console.log(dataObj)
      return (
        <Card
          key={index}
          // category={this.props.category}
          dataObj={dataObj}
          addToFavorites={this.props.addToFavorites}
        />
      );
    });



    //   if (this.props.category === "people") {
    //     return this.props.categoryData.map((person, index) => {
    //       return (
    //         <Card
    //           key={index}
    //           category={this.props.category}
    //           people={person}
    //         />
    //       );
    //     });
    //   } else if (this.props.category === "planets") {
    //     return this.props.categoryData.map((planet, index) => {
    //       return (
    //         <Card
    //           key={index}
    //           category={this.props.category}
    //           planets={planet}
    //         />
    //       );
    //     });
    //   } else if (this.props.category === "vehicles") {
    //     return this.props.categoryData.map((vehicle, index) => {
    //       return (
    //         <Card
    //           key={index}
    //           category={this.props.category}
    //           vehicles={vehicle}
    //         />
    //       );
    //     });
    //   }
  }

  render() {
    return (
      <main>
        {
          !this.props.category ?
            <Crawl randomFilmCrawl={this.props.randomFilmCrawl} />
            : null
        }
        {
          this.renderCategories()
        }
      </main>
    );
  }

}


export default Main;
