import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import ReactDom from 'react-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/views/home.jsx';
// import MapContainer from './components/GoogleApiWrapper.jsx';
import Search from '.components/views/search.jsx';
import Listing from './components/views/listing.jsx';
import Inbox from './components/views/inbox.jsx';
import UserSettings from './components/views/user-settings.jsx';
import UserApplications from './components/views/user-applications.jsx';
import UserListings from './components/views/user-listings.jsx';

function UserProfile({match}) {
  return (
    <div>
      <h2>UserProfile</h2>
    </div>
  )
}

function City({match:{params:{city}}}){
  return (
    <div>
      <h2>City: {city}</h2>
      <Switch>
        <Route path="/:city/" exact render={() => {
          return <p><Link to={`/${city}/apartments`}>Apartments</Link> | <Link to={`${city}/houseboats`}>Houseboats</Link></p>
        }}/>
        <Route path="/:city/apartments" render={() => {
          return <h3>Find apartments in {city}</h3>
        }}/>
        <Route path="/:city/:dwelling" render={({match:{params:{city, dwelling}}}) => {
          return <h3>Find every single {dwelling} in {city}</h3>
        }}/>
      </Switch>
    </div>
  )
}


class Routes extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/search" exact component={MapContainer}/>
            <Route path="/listing" component={Listing}/>
            <Route path="/inbox" exact component={Inbox}/>
            <Route path="/user" exact component={UserProfile}/>
            <Route path="/user/settings" exact component={UserSettings}/>
            <Route path="/user/applications" exact component={UserApplications}/>
            <Route path="/user/listings" exact component={UserListings}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export { Routes };
