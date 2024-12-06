import React from 'react';

const blog = () => {
    return (
        <div>
           <h2>blog page</h2> 
           <div>
             {/* Blog posts */}
             <div>
                 <h3>Blog post 1</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
             <div>
                 <h3>Blog post 2</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
             <div>
                 <h3>Blog post 3</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
             {/* Pagination */}
             <div>
                 <a href="#" className="prev">Previous</a>
                 <a href="#" className="next">Next</a>
             </div>
           </div>
        </div>
    );
};

export default blog;