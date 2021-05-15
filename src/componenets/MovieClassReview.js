 import React, { Component } from 'react'

export default class MovieClassReview extends Component {
    constructor(props) {
        super(props)
        this.state= { 
        movies:[],
    }
    }
    componentWillUnmount() {}

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=t4THK4ra9MyNtrx1kbKSJr21AbokU0bD')
        .then((response)=> {
            return response.json();
            console.log(response)
        })
        .then((jsonData)=>{
            console.log(jsonData)
            this.setState({movies: jsonData.results})
        });
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
               {this.state.movies.map((movie)=> {
                   return (
                       <div>
                           <p>
                               <strong>Byline:</strong> {movie.byline}
                           </p>
                           <br></br><hr></hr>
                           <p>
                               <strong>Critic Pick:</strong> {movie.criticpick}
                           </p>
                           <br></br><hr></hr>
                           <p>
                               <strong>Title:</strong> {movie.title}
                           </p>
                           <br></br><hr></hr>
                           <p>
                               <strong>Headline:</strong> {movie.headline}
                           </p>
                       </div>
                   )
               })} 
            </div>
        )
    }
}
