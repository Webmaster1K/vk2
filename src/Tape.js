import './Tape.css';
import Post from './Post.js';
import Post2 from './Post2.js';

function tape() {
    return (
        <div className="list_post">
          <Post/>
          <Post2/>
        </div>
    );
  }
  
export default tape;