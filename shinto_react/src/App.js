import React from 'react';
import AuthProvider, {useAuth} from './contexts/auth.context.js';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App (){
  const {user}= useAuth();
  return user ? <AuthenticatedApp/> : <UnauthenticatedApp/>;
}

export default App;
