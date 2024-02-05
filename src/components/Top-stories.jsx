import '../assets/css/style.css'
import image1  from '../assets/images/image1.jpg'

const TopStoriesCard=()=>{
    return(
        <div className="topStory col-4 card">
            <div className="container">

                <div className="card-1">
                     <div className="top">
                        <div className="view">
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <div className="analytics">
                            <i class="fa-sharp fa-solid fa-file-chart-pie"></i>
                        </div>
                    </div>

                    <div className="content">
                        <p>How 7 lines code turned into <span>$36 Billion Empire</span></p>
                    </div>

                    <div className="business">
                        <h1>BUSINESS.</h1>
                        <p>20 sep</p>
                        <button class="btn-1">Published</button>
                    </div>

                    <div className="buttom">
                        <button class="btn-2">view</button>
                        <button class="btn-3"><i class="fa-regular fa-ellipsis"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopStoriesCard;
