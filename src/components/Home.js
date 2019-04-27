import React from 'react';
const home = () => {
    return (
        <div className="container text-center">
            <h1 className="home__header">Home Page</h1>
            <button className="btn btn-primary">Secondary</button>
            
            <div className="row">
                <div className="col-8">
                    <h6 className="text-muted">List Group with Images</h6> 
                    <ul className="list-group">
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div className="flex-column">
                        Don Quixote 
                        <p><small>by Miguel de Cervantes</small></p>
                        <span className="badge badge-info badge-pill"> 2 Copies in Stock</span>
                        </div>
                        <div className="image-parent">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg" className="img-fluid" alt="quixote"/>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div className="flex-column">
                        As I Lay Dying 
                        <p><small>by William Faulkner</small></p>
                        <span className="badge badge-primary badge-pill"> 5 Copies in Stock</span>
                        </div>
                        <div className="image-parent">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/as_I_lay.jpg" className="img-fluid" alt="lay" />
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center disabled">  
                        <div className="flex-column">
                        Things Fall Apart
                        <p><small>by Miguel de Cervantes</small></p>
                        <span className="badge badge-danger badge-pill"> 0 Copies in Stock</span>
                        </div>
                        <div className="image-parent">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/things_fall_apart.jpg" class="img-fluid" alt="things" />
                        </div>
                    </a>
                    </ul>
                </div>
                
            </div>

        </div>
    );
};

export default home;