import React from 'react'
import vg from "../assets/2.webp"
import{AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
  
   <>
    <div className='home' id='home'>
        <main>
    <h1>TechStar</h1>
    <p>Solution to all your problems</p>
    </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems you face everyday.
                We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
            
        </div>
       
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who We are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, esse quasi? Neque praesentium excepturi cumque tenetur. Esse id consectetur officiis neque incidunt et, voluptatibus non tenetur, excepturi quae, fugit dolor.
            Nemo soluta itaque a quia accusamus laudantium, quod illum incidunt sit officiis excepturi fugiat iste porro, quisquam blanditiis non! Voluptatem exercitationem tempora suscipit culpa voluptates possimus quidem deserunt commodi excepturi.
            Quisquam reprehenderit praesentium saepe iste quas, doloremque provident dolore laborum unde ex tenetur asperiores, aut libero officiis vero inventore impedit mollitia excepturi deserunt voluptatibus maxime. Doloribus nemo voluptate laboriosam facilis?
            Inventore laboriosam atque repellendus omnis nam illum, deleniti commodi minus ducimus dicta tempora, magni est illo temporibus dolorum autem dolorem nihil, vero eligendi. Necessitatibus maxime quia eveniet expedita similique est.
            Deserunt veritatis quibusdam, dolores, magnam debitis ad, fugit placeat quisquam alias perferendis impedit eligendi tempora commodi? Est rerum non temporibus corporis hic? Dignissimos tempora est a, provident quibusdam voluptatum odio?</p>
        </div>
    </div>
    
    <div className="home4" id='brands'>

        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:'0.3s'}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>

                </div>
                <div style={{animationDelay:'0.5s'}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>

                </div>
                <div style={{animationDelay:'0.7s'}}>
                    <AiFillYoutube/>
                    <p>YouTube</p>

                </div>
                <div style={{animationDelay:'0.9s'}}>
                    <AiFillInstagram />
                    <p>Instagram</p>

                </div>
            </article>

        </div>
    </div>
 
 
   </>
  )
}

export default Home