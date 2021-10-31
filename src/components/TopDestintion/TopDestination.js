import React from 'react';
import './TopDestination.css'

const TopDestination = () => {
    return (
        <div className="mt-5">
            <h2 className="heading">Top Destination</h2>
            <div className="destination-container">
               
               <div className="first-col">
                    <div>
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1594471204420-0efa37bc6dc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80" alt="" />

                    </div>
                    <h5 className="highlight">Indonesia</h5>
                    <div>
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1634562337002-b55cf747bfa3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" alt="" />
                    <h5 className="highlight">Thaiwan </h5>

                    </div>
                </div>
                <div className="second-col">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1614102537441-5bd21b46a5a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                    <h5 className="highlight">Thailand</h5>

                </div>
                <div className=" third-col">
                    <div>
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1574355421260-d119f341e94f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1029&q=80" alt="" />
                    <h5 className="highlight">Austria.</h5>

                    </div>
                    <div>
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1561131184-4e978613ed1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80" alt="" />
                    <h5 className="highlight">Italy</h5>

                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default TopDestination;