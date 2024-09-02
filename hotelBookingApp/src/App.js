import { Switch, Route, Redirect } from 'react-router-dom';
import { content } from './content';
import { HotelDetails } from './hoteldetails';
import { NavBar } from './navbar';
import { Footer } from './footer';
import { message } from './message';
import { about } from './about';
import { resturants } from './resturants';
import { taxiBooking } from './taxiBooking';


/*This is the root component and starting point to render other components.*/
function App() { 

  
  return (
    <div className="App" style={{ marginTop: "75px", marginBottom: "200px", fontFamily: 'Times' }}>
      {/*here Navbar renders and no need to place it inside Swith because we want always to render it*/}
     
      <NavBar />
   
      {/*here we use a switch to render the component that we need. Switch means that one of the Route renders and others are ignored*/}
      <Switch>
        {/* "/:hotelID" is a method to send the data inside the address bar*/}
        <Route path="/hoteldetails/:hotelID" component={HotelDetails}></Route>

        

        {/* "/:category/:searchPhrase?" is a method to send two input data inside the address bar. the symbol "?" here means that the value of the searchPhrase can be also null*/}
        <Route path="/content/:category/:searchPhrase?" component={content}></Route>

        <Route path="/message" component={message} />
        <Route path="/resturants" component={resturants} />
        <Route path="/about" component={about} />
        <Route path="/taxiBooking" component={taxiBooking} />

        {/*we redirect the user to the all hotel component if the user enters an invalid address and none of the Routes match.*/}
        <Redirect to="/content/all"></Redirect>
      </Switch>
   
      <Footer />
  
      

    </div>
  );
}

export default App;
