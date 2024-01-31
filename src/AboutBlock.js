import img1 from './img/Rectangle 61.svg'
import img2 from './img/Rectangle 62.svg'
import img3 from './img/Rectangle 63.svg'



function AboutBlock(){
    return(
        <div className="about_block">
            <div className="container">
                <h1>Найт-Сити изменит тебя навсегда!</h1>
                <p><span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>

                <section>
                    <aside>
                        <img src={img2}/>
                        <img src={img3}/>
                    </aside>
                    <aside>
                        <img src={img1}/>
                    </aside>
                </section>

                
            </div>
            <div className='bottomImg'></div>
        </div>
    )
}


export default AboutBlock