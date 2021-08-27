import React from 'react';
import { NativeRouter as Router, Route } from 'react-router-native';
// Views
import Home from './src/view/Home';
import Login from './src/view/Login';
import Comment from './src/view/Comment';
import MyComments from './src/view/MyComments';
import Profil from './src/view/Profil';
// Context
import UserContext from './src/context/UserContext';
import PostContext from './src/context/PostContext';
import CommentContext from './src/context/CommentContext';

export default function App() {
  return (
    <CommentContext>
      <PostContext>
        <UserContext>
          <Router>
              <Route path='/' exact component={Login} />
              <Route path='/home' exact component={Home} />
              <Route path='/comment' exact component={Comment} />
              <Route path='/my-comments' exact component={MyComments} />
              <Route path='/profil' exact component={Profil} />
          </Router>
        </UserContext>
      </PostContext>
    </CommentContext>
  );
};