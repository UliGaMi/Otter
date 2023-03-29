import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header';
import parallaxImage from '../assets/imgs/parallax.png'
import React, { useState } from 'react'
import { useTransition, animated, useSpringRef, useSpring, a } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import parallaxfirstimage from "../assets/imgs/CardaR.png"
import parallaxsecondimage from "../assets/imgs/LibreError.png"
import parallaxthirdimage from "../assets/imgs/Facil.png"
import aguacateuno from "../assets/imgs/ImgAguacate.png"
import aguacatedos from "../assets/imgs/ImgAguacate2.png"
import "../assets/styles/LandingPage.css"
import styles from "../assets/styles/styles.module.css"

function LandingPage() {

    let responsive = window.innerWidth

    let parallaxpages = 4.65

    let thirdlayeroffset = 4.02

    let secondlayerfactor = 2.9

    let aguacateOffset = 3.95

    let aguacatedosOffset = 4.3

    if (responsive <= 1440) {
        thirdlayeroffset = 2.68
    }
    
    if (responsive <= 800) {
        thirdlayeroffset = 2.5
        parallaxpages = 3
    }

    if (responsive <= 680) {
        thirdlayeroffset = 2.1;
        secondlayerfactor = 1
        parallaxpages = 3
        aguacateOffset = 2
        aguacatedosOffset = 2.8

    }

    const navigate = useNavigate();

    const spring = useSpring({
            delay: 1000,
            from:{
                opacity: 1, transform: 'translate3d(0,0,0)'
            },
            to: {
                opacity: 0, transform: 'translate3d(100%,0,0)'
            },
            config:{
                duration: 800
            },

    })

    const card = useSpring({
        delay: 1800,
        from:{
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config:{
            duration: 400
        },

})

const [flipped, set] = useState(false)
const { transform, opacity } = useSpring({
  opacity: flipped ? 1 : 0,
  transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  config: { mass: 5, tension: 500, friction: 80 },
})

    return ( 

        
        <div style={{ width: '100%', height: '100%'}}>
            <Parallax pages={parallaxpages}>

            <ParallaxLayer offset={aguacateOffset} speed={0.4}>
                        <img src={aguacateuno} className="aguacateuno"/>
                </ParallaxLayer>
                <ParallaxLayer offset={aguacatedosOffset} speed={0.3}>
                <img src={aguacatedos} className="aguacatedos"/>
                </ParallaxLayer>

                    <ParallaxLayer
                    offset={0}
                    speed={0.06}
                    factor={1}
                    style={{
                        backgroundImage: `url(${parallaxImage})`,
                        backgroundSize:'cover',  
                    }}>
                    <Header></Header>
                    <animated.div className={'div-presentation-card-Background'}>
                    <animated.div className={'div-presentation-card'} style={card}>
                        <p className='text-welcome'>¡Bienvenido a Otter!</p>
                        <p className='text-info'>Las herramientas nutricionales más accesibles del mercado</p>
                        <button onClick={()=>{navigate('/signup')}}>Registrarse</button>
                    </animated.div>
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} factor={1} style={spring}>
                    <div className='parallaxlayer-presentation-card'>
                        <p className='text-welcome'>Otter</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.15} factor={secondlayerfactor}>
                    <div className='parallaxmaindisplay'>                    
                    <div className='parallaxsecondlayerheading'>
                        <h1>La calculadora de tablas nutriciales mas rápida y fácil de usar del mercado</h1>
                    </div>
                    <div className={styles.container} onClick={() => set(state => !state)}>
                    <a.div
                        className={`${styles.firstc} ${styles.firstback}`}
                        style={{ opacity: opacity.to(o => 1 - o), transform }}
                    />
                    <a.div
                        className={`${styles.firstc} ${styles.firstfront}`}
                        style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                        }}
                    />
                    <a.div
                        className={`${styles.secondc} ${styles.secondback}`}
                        style={{ opacity: opacity.to(o => 1 - o), transform }}
                    />
                    <a.div
                        className={`${styles.secondc} ${styles.secondfront}`}
                        style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                        }}
                    />
                    <a.div
                        className={`${styles.thirdc} ${styles.thirdback}`}
                        style={{ opacity: opacity.to(o => 1 - o), transform }}
                    />
                    <a.div
                        className={`${styles.thirdc} ${styles.thirdfront}`}
                        style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                        }}
                    />
                    </div>
                    <div className='parallaxsecondlayerfooter'>
                        <h1>Con ayuda de Otter calcular tus tablas de nutrición para tus pacientes nunca ha sido tan sencillo</h1>
                    </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={thirdlayeroffset} speed={0.15}>
                        <div className='parallaxthirdlayer'>
                            <div className='parallaxthirdlayerimages'>
                                <div className='thirdlayercard'>
                                    <img src={parallaxfirstimage}/>
                                    <h1>Rapido</h1>
                                    <h2>Tus cálculos se realizarán de forma instantanea</h2>
                                </div>
                                <div className='thirdlayercard'>
                                <img src={parallaxthirdimage}/>
                                <h1>Fácil</h1>
                                <h2>Tu única preocupación será ingresar los datos</h2>

                                </div>
                                <div className='thirdlayercard'>
                                    <img src={parallaxsecondimage}/>
                                    <h1>Libre de errores</h1>
                                    <h2>Dile adiós a los errores de cálculo en tus tablas</h2>
                                </div>
                            </div>
                            <div className='parallaxthirdlayerlogin'>
                                <button onClick={()=>{navigate('/login')}}>Iniciar Sesión</button>
                            </div>
                        </div>
                </ParallaxLayer>


            </Parallax>
        </div>
     );
}

export default LandingPage;