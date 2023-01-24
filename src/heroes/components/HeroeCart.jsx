
import { Link } from 'react-router-dom';

export const HeroeCart = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const ruta = `./src/assets/heroes/${id}.jpg`;

  return (

    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ruta} className="img-fluid rounded-start" alt={superhero} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{publisher}</p>
              <p className="card-text">{alter_ego}</p>
              {
                (alter_ego !== characters) && <p>{characters}</p>
              }

              <p className="card-text"> <small className="text-muted">{first_appearance} </small> </p>

              <Link
                to={`/hero/${id}`}>
                Mas...
              </Link>

            </div>
          </div>
        </div>
      </div>
      {/* <!---->     */}
      {/* <div className="col animate__animated animate__fadeIn"  >
      <div className={`card mb-3 `} >

        <div className="row g-0">
          <div className="col-md-4">
            <img src={ruta} className='img-fluid rounded-start' alt={superhero} />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{publisher}</p>
              <p className="card-text">{alter_ego}</p>
              {
                (alter_ego !== characters) && <p>{characters}</p>
              }
              
              <p className="card-text"> <small className="text-muted">{first_appearance} </small> </p>
              
              <Link 
                to={`/hero/${id}`}>
                  Mas...
              </Link>

            </div>
          </div>
        </div>


      </div>
    </div> */}

      {/* <!---->     */}

    </>

  )
}
