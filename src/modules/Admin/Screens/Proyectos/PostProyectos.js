import React, {useRef, useState} from 'react'
import imagenDefecto from "../../../../Assets/img.jpg"

const PostProyectos = () => {

    const [img, setImage] = useState(imagenDefecto)
    const [file, setFile] = useState(null)
    const refInput = useRef(null)
    console.log(refInput.current)

    const selectInput = () => {
        refInput.current.click()
    }

    const showImage = (e) => {
        const fileReader = new FileReader()
        console.log(fileReader);
        fileReader.readAsDataURL(e)

        fileReader.addEventListener("load", e => {
            // console.log(e.target.result);
            setImage(e.target.result)
        })
        setFile(e)
        // GUARDAMOS EL ARCHIVO PARA PASARLO A SU PADRE
        // setMedia(e)
    }

    const dropImage = (e) =>{
        e.preventDefault()
        console.log(e.dataTransfer.files)
        refInput.current.files = e.dataTransfer.files
        const file = refInput.current.files[0]
        showImage(file)
    }

    const uploadImage = (e) => {
        const files = e.target.files
        const file = files[0]

        // const valid = isImageValid(file)

        if(file){
            console.log(true);
            showImage(file)        
        }else{
            setFile(null)
        }
    }

    return (
        <div className="wrapper__post_proyectos">  
            <div className="card__form_pos_pro">
                <form action="" className='formulario__proyectos_admin'>
                    <div className="contenedor__subida_img">
                        <div className="wrapper__img" onClick={selectInput} onDrop={dropImage}>
                            <img src={img} alt="Imagen Proyecto" onChange={uploadImage} />
                        </div>
                        <input type="file" ref={refInput} className="input-file" />
                    </div>
                    <div className="wrapper__inputs">
                        <div className="mb-3">
                            <label for="name__" className='form-label'>Nombre del Proyecto</label>
                            <input type="text" className='form-control' id='name__' />
                            <label for="empresa__" className='form-label'>Empresa</label>
                            <input type="text" className='form-control' id='empresa__' />
                        </div> 
                        <div className="mb-3">
                            <label for="fecha__" className='form-label'>Fecha</label>
                            <input type="text" className='form-control' id='fecha__' />
                            <select name="select" id="">
                                <option value="0" selected disabled>--Seleccione Categoria--</option>
                                <option value="3">Educativo</option>
                                <option value="2">Oficina</option>
                                <option value="4">Privados</option>
                                <option value="5">Públicos</option>
                            </select>
                        </div> 
                    </div>

                    <button className='btn__form_post'>
                        Agregar
                    </button>
                </form>
            </div>   
        </div>
    )
}

export default PostProyectos