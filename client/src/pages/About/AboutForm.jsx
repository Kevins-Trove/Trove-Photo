// see SignupForm.js for comments


const AboutForm = () => {
  
  const mountain = "https://c.wallhere.com/photos/79/d7/1200x800_px_Hiking_landscape_mist_Morning_mountains_nature_photography-1263873.jpg!d";

  return (
    <header style={{paddingLeft: 0}}>
        <div
        id='hero'
        className="p-5 text-center"
        style={{backgroundImage: `url(${mountain})`, height: 500}}
        >
         <div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className='hero-text mask'>
                    <h1 className="mb-3">Tandem</h1>
                    <h4 className="mb-3">Travel with friends</h4>
                    
                    <p>
                    While this project is under development.
                    </p>
                    <p>
                    TandemTravel is an app designed for groups to plan events together and synchronize their travel details in real time.
                    </p>
                    <p>
                    In the near future options for TandemTravel will offer a fully integrated group calendar, chat, and travel resources and the ability to coordinate and purchase tickets for entertainment venues, theme parks, and even restaurants reservations.
                    </p>
                    <h3>
                    Tandem Travel will be a one stop spot to get your friends and family together.
                    </h3>
                </div>
            </div>
        </div>

        
        </div>
    </header>
  )
}

export default AboutForm;