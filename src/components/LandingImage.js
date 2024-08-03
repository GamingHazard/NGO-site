import React from "react";
import "../styles/LandingImage.css";

const LandingImage = () => {
  const backImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0.6)), url(${"https://images.squarespace-cdn.com/content/v1/5e59534753bf613bfd6fed36/1601957618548-7GQL5TKNEA7IMZK0JKE6/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/annie-spratt-OIuCXxx08yg-unsplash.jpg"})`,
    backgroundSize: 'cover',
    height: '100vh',
     
    alignItems: 'flex-start', // Align items at the top
    justifyContent: 'center',
    color: 'white',
    fontSize: '3rem',
    padding: '20px', // Add padding to prevent text from touching edges

  };

  return (
    <div className="main__container">
      <div style={backImage}>
       <div> <p style={{marginTop:80, fontWeight:'bold',textAlign:'center'}}>Shalom Foundation   </p>
       <p style={{ fontSize:'16px',textAlign:'center'}}>Be the reason a Soul gets a brigt future</p></div>
      </div>
    </div>
  );
};

export default LandingImage;
