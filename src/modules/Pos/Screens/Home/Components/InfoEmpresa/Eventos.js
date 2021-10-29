import React from 'react'
import { Link } from 'react-router-dom'

const Eventos = () => {
    let noticias = [
        {
            id : 0 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 1 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 2 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 3 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 4 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 5 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 6 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 7 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 8 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
        {
            id : 9 ,
            encabezado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.",
            img: ""
        },
    ]
    return (
        <div className="div-article">
            <h2 className="titulo_noticias titulo__ efecto__four">
            NUESTROS <strong>EVENTOS</strong>
            </h2>
            <div className="contendor__btn_eventos">
                <div className="rigth__eventos">
                    <button className="noticias_arriba btn__eventos">
                        <i className="fas fa-chevron-circle-up"></i>
                    </button>
                    <button className="noticias_abajo btn__eventos">
                        <i className="fas fa-chevron-circle-down    "></i>
                    </button>
                </div>
                <div className="left__eventos">
                    <button className="noticias_stop btn__eventos">
                        <i className="fas fa-stop"></i>
                    </button>
                    <button className="noticias_play btn__eventos">
                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="cards_noticias">
                    {
                        noticias.map( noticia => (
                                <div className="card_noticia">
                                        <i className="fas fa-calendar-alt"></i>
                                        <div className="description_noticias">
                                            <h5 className="subtitle_noticia">{noticia.encabezado}</h5>
                                            <p className="parrafo_noticia">{noticia.descripcion}</p>
                                        </div>
                                        <Link href="/Noticia" className="ver_mas">
                                            + ver más
                                        </Link>
                                </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Eventos
