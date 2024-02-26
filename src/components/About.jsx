

function About() {
  const aboutList =[
    {
      id: 1,
      sub: "Diverse Recipe Collection",
      word: "Explore a vast collection of recipes ranging from quick and easy weekday dinners to gourmet delights for special occasions. Our curated selection covers a variety of cuisines, dietary preferences, and cooking skill levels."    
    },
    {
      id: 2,
      sub: "Interactive Cooking Experience",
      word: "Immerse yourself in an interactive cooking experience with step-by-step instructions, vibrant images, and helpful tips. Whether you're a seasoned chef or a kitchen novice, our user-friendly interface ensures a seamless and enjoyable cooking journey."
    },
    {
      id: 3,
      sub: "Community and Collaboration",
      word: "Join our passionate community of food enthusiasts! Share your favorite recipes, exchange culinary tips, and connect with fellow home chefs. At iLUTO Mo, we celebrate the joy of cooking together."
    },
    {
      id: 4,
      sub: "Personalized Features",
      word: "Tailor your experience with personalized features such as recipe collections, meal planners, and shopping lists. Make cooking a breeze with tools designed to fit your unique preferences and lifestyle."
    }
  ]
  return (
    <>
      <p className="set-up-apart serif-caption">What Sets Us Apart</p>
      <div className="about-list">
          {aboutList.map(el =>(<div className="about-list-container" key={el.id}><h4 className="about-list-sub serif-caption">{el.sub}</h4><p className="about-list-word serif" >{el.word}</p></div>))}
      </div>
    </>
  );
}

export default About;