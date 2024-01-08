import './Home.css';
import Nav from '../Components/Navbar';

function Home() {
  return (
    <div className="home">
      <div className='nav'>
        <Nav></Nav>
      </div>
      
      <div className='body'>

        <div>
          <p>Game Development</p>
          <p>Amazing Game using Unity, and Unreal engine</p>

          <div>
            <button>Profile</button>
            <button>Download</button>
          </div>
        </div>

        <div>
          <p>Latest Releases</p>
        </div>
        
        <div className='gallery-wrapper'>
          <button><i class="bi bi-skip-backward-fill"></i></button>
          <div className='image-container'>
            <img className='gallery-image' src={require('../Img/b5.png')}></img>
            <img className='gallery-image' src={require('../Img/b5.png')}></img>
            <img className='gallery-image' src={require('../Img/b5.png')}></img>
            <img className='gallery-image' src={require('../Img/b5.png')}></img>
          </div>
          <button><i class="bi bi-skip-forward-fill"></i></button>
        </div>
      </div>

      <footer>
        <h3>Contact US</h3>
            <a href="mailto:admin@games-dex.com" class="footer__link">admin@games-dex.com</a>

            <ul class="social-list">
                <li class="social-ist__item">
                    <a href="" class="social-list__link">
                      <i class="bi bi-envelope-at-fill"></i>
                    </a>
                </li>
                <li class="social-ist__item">
                    <a href="" class="social-list__link">
                    <i class="bi bi-calendar-event"></i>
                    </a>
                </li>
                <li class="social-ist__item">
                    <a href="" class="social-list__link">
                    <i class="bi bi-chat-quote-fill"></i>
                    </a>
                </li>
            </ul>
      </footer>

    </div>
  );
}

export default Home;
