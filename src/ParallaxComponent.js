import React from "react";
import { Parallax } from "react-parallax";
import logo from './img/Logo.svg'
import youtube from './img/youtube logo.svg'
import vk from './img/vk logo.svg'
import facebook from './img/facebook-rect logo.svg'
import twitter from './img/twitter-square logo.svg'
import twitch from './img/twitch logo.svg'
import instagram from './img/instagram-square logo.svg'

const ParallaxComponent = () =>{
    return (
        <Parallax 
            // blur={{min: -15, max: 15}}
            bgImage={require('./img/back.jpg')}
            bgImageAlt="Main Background"
            strength={500}
            className="main_block"
            >
            <div className="container">
                {/* comp */}
                <header>
                    <a href="#">
                        <img src={logo} alt="logo"/>
                    </a>

                     {/* comp */}

                    <aside>
                    <a href="#">
                        <img src={youtube} alt="logo"/>
                    </a>
                    <a href="#">
                        <img src={vk} alt="logo"/>
                    </a>
                    <a href="#">
                        <img src={facebook} alt="logo"/>
                    </a>
                    <a href="#">
                        <img src={twitter} alt="logo"/>
                    </a>
                    <a href="#">
                        <img src={twitch} alt="logo"/>
                    </a>
                    <a href="#">
                        <img src={instagram} alt="logo"/>
                    </a>
                    </aside>
                </header>

                <article>
                    <h1>Доступно на всех платформах</h1>
                    <button>Узнать больше</button>
                </article>
            </div>
        </Parallax>
    )
}

export default ParallaxComponent;