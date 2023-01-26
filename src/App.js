import './App.css';
import { useState } from 'react';



function App() {

  const [showing, setshow] = useState(false);
  const [showingywo, setshowtwo] = useState(false);
  const [showingthree, setshowthree] = useState(false);
  const [seating, setseating] = useState(
    {
      one: false,
      eighttwo: false,
      three: false,
      sixfour: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      eleven: false,
      thirteentwelve: false,
      thirteen: false,
    }
  )
  const [perticule, setperticule] = useState('');
  const [disabling, setdisabling] = useState(false);

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
    console.log(e.target);
    console.log(e.target.dataset.value);
    const main = e.target.dataset.value;
    if (main === 'one') {
      setseating({ ...seating, one: !seating.one })
      setperticule("one")
    }else  if (main === 'two') {
      setseating({ ...seating, two: !seating.two })
      setperticule("two")
    }else  if (main === 'three') {
      setseating({ ...seating, three: !seating.three })
      setperticule("three")
    }else  if (main === 'four') {
      setseating({ ...seating, four: !seating.four })
      setperticule("four")
    }
    else  if (main === 'five') {
      setseating({ ...seating, five: !seating.five })
      setperticule("five")
    }else  if (main === 'six') {
      setseating({ ...seating, six: !seating.six })
      setperticule("six")
    }else  if (main === 'seven') {
      setseating({ ...seating, seven: !seating.seven })
      setperticule("seven")
    }else  if (main === 'eight') {
      setseating({ ...seating, eight: !seating.eight })
      setperticule("eight")
    }else  if (main === 'nine') {
      setseating({ ...seating, nine: !seating.nine })
      setperticule("nine")
    }else  if (main === 'ten') {
      setseating({ ...seating, ten: !seating.ten })
      setperticule("ten")
    }else  if (main === 'eleven') {
      setseating({ ...seating, eleven: !seating.eleven })
      setperticule("eleven")
    }else  if (main === 'twelve') {
      setseating({ ...seating, twelve: !seating.twelve })
      setperticule("twelve")
    }else  if (main === 'thirteen') {
      setseating({ ...seating, thirteen: !seating.thirteen })
      setperticule("thirteen")
    }
  }

  const booked =(e)=>{  
    const main =e.target.dataset.value;
    console.log('clicked');
    if (perticule === 'one') {
      console.log(perticule);
      setseating({ ...seating, one: true })
      setdisabling(true)
    }else if (perticule === 'two') {
      console.log(perticule);
      setseating({ ...seating, two: true })
      setdisabling(true)
    }else if (perticule === 'three') {
      console.log(perticule);
      setseating({ ...seating, three: true })
      setdisabling(true)
    }else if (perticule === 'four') {
      console.log(perticule);
      setseating({ ...seating, four: true })
      setdisabling(true)
    }else if (perticule === 'five') {
      console.log(perticule);
      setseating({ ...seating, five: true })
      setdisabling(true)
    }else if (perticule === 'six') {
      console.log(perticule);
      setseating({ ...seating, six: true })
      setdisabling(true)
    }else if (perticule === 'seven') {
      console.log(perticule);
      setseating({ ...seating, seven: true })
      setdisabling(true)
    }else if (perticule === 'eight') {
      console.log(perticule);
      setseating({ ...seating, eight: true })
      setdisabling(true)
    }else if (perticule === 'nine') {
      console.log(perticule);
      setseating({ ...seating, nine: true })
      setdisabling(true)
    }else if (perticule === 'ten') {
      console.log(perticule);
      setseating({ ...seating, ten: true })
      setdisabling(true)
    }else if (perticule === 'eleven') {
      console.log(perticule);
      setseating({ ...seating, eleven: true })
      setdisabling(true)
    }else if (perticule === 'twelve') {
      console.log(perticule);
      setseating({ ...seating, twelve: true })
      setdisabling(true)
    }else if (perticule === 'thirteen') {
      console.log(perticule);
      setseating({ ...seating, thirteen: true })
      setdisabling(true)
    }
  }

  return (
    <div className="App">
      <div className='movies'>
        <div>
          <p>speed</p>
        </div>
        <div>
          <p>21-2-2023</p>
        </div>
        <div>
          <p>5:00 PM</p>
        </div>
        <div>
          <button className='btn' onClick={showSeats} value={1}>Available Seats</button>
        </div>
      </div>
      {showing ? <div className='seats'>
        <div className='container'>
          <div className='row'>

            <div className='seat' data="My div value"></div>
            <div className={[
              'seat',
              seating.one === true ? "booked" : '',

            ].join(' ')} data-value="one" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.two === true ? "booked" : '',

            ].join(' ')} data-value="two" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.three === true ? "booked" : '',

            ].join(' ')} data-value="three" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.four === true ? "booked" : '',

            ].join(' ')} data-value="four" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.five === true ? "booked" : '',

            ].join(' ')} data-value="five" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.six === true ? "booked" : '',

            ].join(' ')} data-value="six" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.seven === true ? "booked" : '',

            ].join(' ')} data-value="seven" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.eight === true ? "booked" : '',

            ].join(' ')} data-value="eight" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.nine === true ? "booked" : '',

            ].join(' ')} data-value="nine" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.ten === true ? "booked" : '',

            ].join(' ')} data-value="ten" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.eleven === true ? "booked" : '',

            ].join(' ')} data-value="eleven" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.twelve === true ? "booked" : '',

            ].join(' ')} data-value="twelve" onClick={!disabling ? selectSeat : undefined}></div>
            <div className={[
              'seat',
              seating.thirteen === true ? "booked" : '',

            ].join(' ')} data-value="thirteen" onClick={!disabling ? selectSeat : undefined}></div>


          </div>
          <div className='row'>
            <div className='seat '></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat  '></div>
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
            <div className='seat  '></div>
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
        <button className='btt' onClick={booked}>Book Now</button>
      </div> : ''}


      <div className='movies'>
        <div>
          <p>mark</p>
        </div>
        <div>
          <p>12-2-2023</p>
        </div>
        <div>
          <p>9:00 AM</p>
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
          <p>spadikam</p>
        </div>
        <div>
          <p>10-12-2023</p>
        </div>
        <div>
          <p>10:00 PM</p>
        </div>
        <div>
          <button className='btn' onClick={showSeats} value={3}>Available Seats</button>
        </div>
      </div>

      {showingthree ? <div className='seats'>
        <div className='container'>
          <div className='row'>
            <div className='seat' onClick={selectSeat} value='main'></div>
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