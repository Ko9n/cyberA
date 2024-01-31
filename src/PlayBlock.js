function PlayBlock(){
    return (
        <div className="play_block">
            <div className="container">
                <article>
                    {/* SVG */}
                    <h1>Играй и выигрывай!</h1>
                    <p>Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль <span>Xbox Series X</span> или <span>Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                </article>
                <section>
                    <form>
                        <input type="text" placeholder="Как тебя зовут?"/>
                        <input type="text" placeholder="Твой е-mail"/>
                        <input type="file" accept=".jpg, .png, .pdf"/>
                        <button type="submit">Отправить</button>
                        <div>
                            <input type="checkbox" id="hello"/>

                            <label for="hello"><p>Согласен на обработку персональных данных</p></label>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default PlayBlock