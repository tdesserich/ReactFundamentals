import _ from 'lodash';
import React, { Component } from 'react'; //import React components
import YTSearch from 'youtube-api-search'; //importing from the package.json file (it has been installed)
import SearchBar from './SearchBar'; //importing from the child component
import VideoDetail from './VideoDetails'; //importing from the child component

const API_KEY = 'AIzaSyBjieF7winIlZSgJx5UaUCx5adKxjNnsZ0'; //API key from Google

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('React Tutorials');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); 
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1800);
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1 className="section-title">React Video Search </h1>
                    <h3>Based on Stephen Grider's work on Udemy</h3>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />

                </div>
            </div>
        );
    }
}

export default Video;