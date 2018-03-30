import React from 'react'; //importing React and its properties from package.json which points to node
import styled from 'styled-components';

const ArticleCard = styled.div`
  width: 48%;
  border: 2px solid gray;
  background-color: lightgray;
  padding: 15px;
  margin: 5px;
  height: 500px
  float: left;
  overflow: scroll;
`

const NytResults = (props) => { //passing props in the parentheses of our component because we'll need to get results information from our parent component
  return (
    <div>
      {props.results.map(result => { //map loops through info without us having to write a for loop, then formats it to JSX below - getting results from parent component
          // must have a unique key for each item. NYT API gives us an ID
          // use another ternary to check if there is a more than 1 thing in the multimedia property. If there is at least 2, we want to display the image in the 2nd place [1] because that is a "large" size and not the "xl" size of [0].
          // use another ternary to see if there are keywords, if yes display string 'Keywords: '
          // we put the snippet in a p tag
          // we make a link to the url of the article
          return (
            <ArticleCard key={result._id}>
              <h2>{result.headline.main}</h2>
              {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
              <p>
                {result.snippet}
                <br />
                {result.keywords.length > 0 ? ' Keywords: ' : ''}
              </p>
              <ul>
                {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
              </ul>
              <a href={result.web_url}><button>Read It</button></a>
            </ArticleCard>
          )
        })}
        <div>
        <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
        <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
      </div>
      </div>
    )
  }
  
  export default NytResults;