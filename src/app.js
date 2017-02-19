import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {Router, Route, Redirect} from 'react-router';
import Layout from './layout/layout';

import BlogPage from './pages/blog';
import PicturePage from './pages/picture';
import VideoPage from './pages/video';

const app = (
  <Router>
    <Redirect from="/" to="/blog"></Redirect>
    <Route path="/" component={Layout}>
      <Route path="blog" component={BlogPage}></Route>
      <Route path="picture" component={PicturePage}></Route>
      <Route path="video" component={VideoPage}></Route>
    </Route>
  </Router>
)


jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react-app');
    }
  );
})
