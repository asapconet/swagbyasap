import React from 'react'
import CounterCard from '../Components/counterCard'

const CounterSec = () => {
    return (
      <section>
        <div className="counter-bg">
          <div className="card-body">
            <CounterCard />
          </div>
        </div>
        <div className="text-end">
          This website is for educational purposes only. No personalized
          financial advice is given here.
        </div>
      </section>
    );
}

export default CounterSec
