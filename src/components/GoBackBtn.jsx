import { useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";

function GoBackBtn() {
  const history =useNavigate()

  function handleGoBack () {
    history(-1);
  };

  return (
    <button onClick={handleGoBack} className="goback">
      <FaCircleArrowLeft style={{ width: '3em', height: '3em', color:'var(--primary-color)' }} />
    </button>
  );
}

export default GoBackBtn

