
import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { obtenerHeroePorId } from '../helpers';
import { rurtas } from './../helpers/rutas';



export const Heroe = () => {

  const { id } = useParams();
  //console.log(id);

  const heroe = useMemo(() => obtenerHeroePorId(id), [id]); //el useMemo es para que solo se ejecute una vez ); 
  //console.log(heroe);

  const navigate = useNavigate();

  const atras = () => {
    navigate(-1);
  }

  if (!heroe) {
    return <Navigate to='/' />
  }

  const ruta = rurtas(id);

 //console.log(id);

  return (

    <div className='row m-5'>
      <div className='col-4'>
        <img src={ruta} alt={heroe.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>

      <div className="col-8">
        <h1> {heroe.superhero}</h1>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b> {heroe.alter_ego} </b> </li>
          <li className='list-group-item'> <b >{heroe.publisher} </b> </li>
          <li className='list-group-item'> <b> {heroe.first_appearance} </b> </li>
        </ul>

        <h5 className='mt-3'> Characters </h5>
        <p> {heroe.characters} </p>

          <button
            className='btn btn-outline-primary'
            onClick={atras}>
            Back
          </button>
      </div>
    </div>
  )
}
