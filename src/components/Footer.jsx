import React from "react";

const Footer = ({onPaginaArea, onPaginaGaleria, paginaActual}) => {
    return(
        <nav className="col-12 text-center bg-success fixed-bottom">
            <div className="row">
                <div className="col-6 p-3">
                    <button className={`btn btn ${paginaActual === 'uno' ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={onPaginaArea}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-door-fill text-light" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </button>
                </div>
                <div className="col-6 p-3">
                    <button className={`btn btn ${paginaActual === 'dos' ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={onPaginaGaleria}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-image text-light" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Footer;