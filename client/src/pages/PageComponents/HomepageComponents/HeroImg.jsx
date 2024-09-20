import background from '../../../../public/Photo Album.jpg';



function HeroImg() {
     const backgroundStyle = {
    height: '100vh', // Full viewport height
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
   
    return (
        <div
            className="hero-background"
            style={{backgroundImage: `url(${background})`}}
        >
       
        </div>
  )
}

export default HeroImg