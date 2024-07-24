export const runtime = "edge";

export const smartPhoneComponent = () => {
    return (
        <div className="smart">
            <div id="dettaglio">
                <div id="sensore"></div>
                <div id="microfono"></div>
            </div>
            <div id="acenzione-button"></div>
            <div id="volume-su"></div>
            <div id="volume-giu"></div>
            <div id="schermo">
                <div className="frame-posizione">
                    <div id="header">
                        <div className="wrap">
                            <div id="menu" className="menu-responsive">
                                <ul>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">ABOUT</a></li>
                                    <li><a href="#">WORK</a></li>
                                </ul>
                                <div className="three-lines-menu"> &#9776;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottone"></div>
        </div>
    )
}