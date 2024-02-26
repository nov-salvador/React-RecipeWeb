import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { cuisineFetch } from "../links/fetch"
import GoBackBtn from "../components/GoBackBtn"

function RecipeDetail() {
  const [detail, setDetail] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  let params = useParams()
  async function getDetail(){
    const fetchDetail = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=51d0e725a5f9407891c4892e29d1c70a`)
    const detailData = await fetchDetail.json()
    setDetail(detailData)
  }
  useEffect(() => {
    getDetail();
  },[params.name])
    
  
  return (
    <>
      <div className="detail-main">
          <img src={detail.image} alt="" />
          <div className="info">
        <h2 className="serif-caption">{detail.title}</h2>
        <button className={activeTab == 'instructions' ? "button active mono" : "button mono"} onClick={() => setActiveTab('instructions')}>Instructions</button>
        <button className={activeTab == 'ingredients' ? "button active mono" : "button mono"} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
        {activeTab == 'instructions' && (<div className="details">
          <h3 dangerouslySetInnerHTML={{__html: detail.instructions}} className="serif"></h3>
          <h3 dangerouslySetInnerHTML={{__html: detail.summary}} className="serif"></h3>
        </div>) }
        {activeTab == 'ingredients' && (<ul>
          {detail.extendedIngredients.map((el, index) => (<li key={index}>{el.original}</li>))}
        </ul>) }
        </div>
      </div>
    </>
  )
  
}

export default RecipeDetail