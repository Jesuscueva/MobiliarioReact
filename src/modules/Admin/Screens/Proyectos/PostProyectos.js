import React, {useRef, useState, useEffect} from 'react'
import imagenDefecto from "../../../../Assets/addImage.png"

const PostProyectos = () => {
    const formVacio = {
        proyectoName : "",
        proyectoCliente: "",
        proyectoFecha: "",
        proyectoImagen: "",
        cat_id: 0
    }
    
    const [form, setForm] = useState(formVacio)
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
        const files = e.target.value.files
        const file = files[0]

        // const valid = isImageValid(file)

        if(file){
            console.log(true);
            showImage(file)        
        }else{
            setFile(null)
        }
    }
    const change = e => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
            e.preventDefault()
            console.log(form)
            setForm(formVacio)
    }



    return (
        <div className="wrapper__post_proyectos"> 
            {/* <h2 className="titulo__card">Agregar Proyectos</h2> */}
            <div className="card__form_pos_pro">
                <form onSubmit={submit} action="" className='formulario__proyectos_admin'>
                    <div className="contenedor__subida_img">
                        <div className="wrapper__img" onClick={selectInput} onDrop={dropImage}>
                            <img src={img} alt="Imagen Proyecto"  onChange={uploadImage}/>
                        </div>
                        <input type="file" ref={refInput} className="input-file" onChange={change} name="proyectoImagen" />
                    </div>
                    <div className="wrapper__inputs">
                        <div className="mb-3">
                            <label for="name__" className='form-label'>Nombre del Proyecto</label>
                            <input type="text" className='form-control' id='name__' placeholder='Ejem: Instalacion de Muebles' value={form.proyectoName} name="proyectoName" onChange={change}/>
                            <label for="empresa__" className='form-label'>Empresa</label>
                            <input type="text" className='form-control' id='empresa__'  placeholder='Ejm: Empresa1' name="proyectoCliente" value={form.proyectoCliente} onChange={change}/>
                        </div> 
                        <div className="mb-3">
                            <label for="fecha__" className='form-label'>Fecha</label>
                            <input type="text" placeholder='Ejm: 12 de Abril' className='form-control' id='fecha__' value={form.proyectoFecha} onChange={change} name="proyectoFecha" />
                            <select name="cat_id" id="" onChange={change}>
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