import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import JSXRules from '../concepts/JSXRules';
import PropsDemo from '../concepts/PropsDemo';
import Resources from './Resources';
import LifeCycleCodePen from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import NewYorkTimesApp from '../apps/nyt-app/NytApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import YTSearchApp from '../apps/youtube-api/Video'


export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => < FunctionalComponentDemo />
    },
    {
      path: '/jsxrules',      
      exact: true,
      main: () => < JSXRules />
    },
    {
      path: '/classcomponent',
      exact: true,
      main: () => < ClassComponentDemo />
    },
    {
      path: '/propsdemo',
      exact: true,
      main: () => <PropsDemo />        
    },
    {
      path: '/lifecyclecodepen',
      exact: true,
      main: () => <LifeCycleCodePen />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
    },
    {
      path: '/timer',
      exact: true,
      main: () => <TimePiecesApp />
    },
    {
      path: '/reactconceptlist',
      exact: true,
      main: () => <ReactConceptsApp />
    },
    {
      path: '/nytapp',
      exact: true,
      main: () => <NewYorkTimesApp />
    },
    {
      path: '/movie',
      exact: true,
      main: () => <MovieSearchApp />
    },
    {
      path: '/video',
      exact: true,
      main: () => <YTSearchApp />
    },
]