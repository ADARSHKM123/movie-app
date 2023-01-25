import './App.css';
import { useState } from 'react';



function App() {

  const [showing, setshow] = useState(false);
  const [showingywo, setshowtwo] = useState(false);
  const [showingthree, setshowthree] = useState(false);

  const showSeats = (e) => {
    console.log('clicked');
    console.log(e.target.value);
    const mainVal = e.target.value
    if (mainVal === '1') {
      setshow(!showing);
    } else if (mainVal === '2') {
      setshowtwo(!showingywo);
    } else if (mainVal === '3') {
      setshowthree(!showingthree)
    }
    console.log(showing);
  }

  const selectSeat = (e) => {
    e.preventDefault();
    console.log(e.target.data);
    console.log('selected');
  }

  return (
    <div className="App">
      <div className='movies'>
        <div>
          <p>manikkam</p>
        </div>
        <div>
          <p>23-20-2022</p>
        </div>
        <div>
          <p>3:00 PM</p>
        </div>
        <div>
          <button className='btn' onClick={showSeats} value={1}>Available Seats</button>
        </div>
      </div>
      {showing ? <div className='seats'>
        <div className='container'>
          <div className='row'>
            <div className='seat' data="My div value"></div>
            <div className='seat booked' onClick={selectSeat} value="one"></div>
            <div className='seat booked'  ></div>
            <div className='seat '></div>

            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>

          </div>
          <div className='row'>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
          </div>
          <div className='row frontseat'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>


            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
          </div>
        </div>
        <button className='btt'>Book Now</button>
      </div> : ''}


      <div className='movies'>
        <div>
          <p>manikkam</p>
        </div>
        <div>
          <p>23-20-2022</p>
        </div>
        <div>
          <p>3:00 PM</p>
        </div>
        <div>
          <button className='btn' onClick={showSeats} value={2}>Available Seats</button>
        </div>
      </div>

      {showingywo ? <div className='seats'>
        <div className='container'>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat booked' onClick={selectSeat}></div>
            <div className='seat booked'></div>
            <div className='seat '></div>

            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>

          </div>
          <div className='row'>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
          </div>
          <div className='row frontseat'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>


            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
          </div>
        </div>
        <button className='btt'>Book Now</button>
      </div> : ''}

      <div className='movies'>
        <div>
          <p>manikkam</p>
        </div>
        <div>
          <p>23-20-2022</p>
        </div>
        <div>
          <p>3:00 PM</p>
        </div>
        <div>
          <button className='btn' onClick={showSeats} value={3}>Available Seats</button>
        </div>
      </div>

      {showingthree ? <div className='seats'>
        <div className='container'>
          <div className='row'>
            <div className='seat' onClick={selectSeat}></div>
            <div className='seat booked' onClick={selectSeat}></div>
            <div className='seat booked'></div>
            <div className='seat '></div>

            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>

          </div>
          <div className='row'>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked '></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
          </div>
          <div className='row frontseat'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>

            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>


            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat booked'></div>
            <div className='seat'></div>
          </div>
        </div>
        <button className='btt'>Book Now</button>
      </div> : ''}
    </div>
  );
}

export default App;