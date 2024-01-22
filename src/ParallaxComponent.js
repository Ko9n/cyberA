import React from "react";
import { Parallax, Background } from "react-parallax";


const ParallaxComponent = () =>{
    return (
        <Parallax 
            // blur={{min: -15, max: 15}}
            bgImage={require('./img/back.jpg')}
            bgImageAlt="Main Background"
            strength={500}
            className="parallax_component"
            >
            <div>
                <h1>Welcome guys</h1>
            </div>
        </Parallax>
    )
}

export default ParallaxComponent;