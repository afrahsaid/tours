import React from "react";
import Tour from './Tour';
const Tours= ({tours,removeTour})=>{
    return(
        <section>
            <div className="title">
                 <h2>Popular Tours In The World</h2>
                 <div className="underline"></div>
            </div>
            <div>
                {/* <Tour tourr={tours}></Tour> */}

                 {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour}
                    removeTour={removeTour}></Tour>
                })} 
            </div>

        </section>

    )
};
export default Tours;