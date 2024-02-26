import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GoBackBtn from '../components/GoBackBtn';


function EdaRecipeDetail() {
  const [edamanDetail, setEdamanDetail] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const params = useParams();

  async function getDetail() {
    const searchedLocal = localStorage.getItem("searched");
    setEdamanDetail(JSON.parse(searchedLocal));
  }

  useEffect(() => {
    getDetail();
  }, [params.name]);

  return (
    <>
      <div className="detail-main">
        
        {edamanDetail[params.name] && (
          <>
            <img src={edamanDetail[params.name].recipe.image} alt="" />
            <div className="info">
              <h2 className="serif-caption">{edamanDetail[params.name].recipe.label}</h2>
              <button className={activeTab === 'instructions' ? "button active mono" : "button mono"} onClick={() => setActiveTab('instructions')}>Instructions</button>
              <button className={activeTab === 'ingredients' ? "button active mono" : "button mono"} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
              {activeTab === 'instructions' && (
                <div className="details">
                  <h3 className="serif">{edamanDetail[params.name].recipe.instructionLines}</h3>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <ul>
                  {edamanDetail[params.name].recipe.ingredientLines.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default EdaRecipeDetail;
