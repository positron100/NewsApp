import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 3,
    category: 'general',
    topic: 'Top Headlines'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    topic: PropTypes.string,
  }

  constructor(props) {
    super(props);
    console.log("constructor from News component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,

    }
    document.title = `${this.props.topic}`
  }
  // page Update function to call in the resources from API and further to be used while traversing to next page or to the previous one
  async updatePage() {
    console.log("update page function called");
    
    // initialize loading bar with 0
    this.props.setProgress(10);
    
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // loading is true while data is being fetched
    this.setState({ loading: true });
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
    // after all the json file have being fetched set the progress bar to 100
    this.props.setProgress(100);

  }
  async componentDidMount() {
    // componentDidMount() : would run after the render function
   console.log("componentDidMount");
   let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
   // loading is true while data is being fetched
   this.setState({ loading: true });
   let data = await fetch(url)
   let parsedData = await data.json()
   console.log(parsedData);
   this.setState({
     articles:parsedData.articles,
     totalResults: parsedData.totalResults,
     loading: false
   })
  
  }
  // Navigation to the previous page
  // handlePrevClick = async () => {
  //   console.log("Previous Page");
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updatePage();
  // }

  // Navigation to the Next Page
  // handleNextClick = async () => {
  //   console.log("Next Page");
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updatePage();

  // }


  fetchMoreData= async()=>{
    this.setState({page:this.state.page+1})
    await this.updatePage();
  }


  render() {
    return (
      <>

        <h2 className="display-5 text-center my-3">News Carrier - {this.props.topic}</h2>
        
          {/* display Spinner component when loading : true */}

          {/* {this.state.loading && <Spinner />} */}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length<this.state.totalResults}
            loader={<Spinner/>}
            >
            <div className="container my-3">
            <div className="row">
            {this.state.articles.map((element,index) => {
               const key = `${element.url}_${index}`;

              // eslint-disable-next-line
              {/* Bootstrap has 12 grids so here 1 card would occupy 4 grids and would completly fit into bootstrap layout*/ }
              return <div className="col-md-4" key={key}>

                {/* key={element.url} : each list item should have a unique key[identity] */}
                <NewsItem
                  // remove all the attributes having null value
                  title={element.title ? element.title : "Click below to read more"}
                  description={element.description ? element.description : "if content is not displayed just  Click below to read more details"}
                  urlToImage={element.urlToImage ? element.urlToImage : "https://img.freepik.com/free-photo/abstract-pattern-glowing-gold-circles-dark-glass-backdrop-generated-by-artificial-intelligence_24877-80913.jpg"}
                  url={element.url}
                  author={element.author ? element.author : "unknown"}
                  date={element.publishedAt}
                  source={element.source}
                />

              </div>
            })}
            </div>
            </div>
          </InfiniteScroll>


        {/* Code for Next and Prev buttons before infinite scrollbar*/}
        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

      </>
    )
  }
}

export default News