import './App.css';
import { useState } from 'react';

const movieDta = [
  {
    name:"Sholay",
    date:"23-21-2022",
    time: "5:00 PM"
  },
  {
    name: "The Shawshank Redemption",
    date: "2022-05-01",
    time: "10:00 AM"
  },
  {
    name: "The Godfather",
    date: "2022-05-02",
    time: "2:00 PM"
  },
  {
    name: "The Dark Knight",
    date: "2022-05-03",
    time: "9:00 PM"
  }
]


function App() {

  const [showing, setshow] = useState(false);

  const showSeats =(e)=>{
    console.log('clicked');
    console.log(showing);
    setshow(!showing);
  }

  const selectSeat =(e)=>{
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
            <button className='btn' onClick={showSeats}>Available Seats</button>
          </div>
        </div>
        {showing ? <div className='seats'>
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
            
          </div>: ''}


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
            <button>Available Seats</button>
          </div>
        </div>

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
            <button>Book Now</button>
          </div>
        </div>
        
    </div>
  );
}

export default App;
