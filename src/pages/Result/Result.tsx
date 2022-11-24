import { useState } from "react";
import Swal from "sweetalert2";
import "./result.css";

const Result = () => {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(4000);
  const [randomNum, setRandomNum] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // Swal.fire({
    //   title: "확인 불가",
    //   text: "아직 추첨 날짜가 아닙니다.",
    //   icon: "warning",
    //   confirmButtonText: "확인",
    // }).then(() => {
    //   window.location.href = "/result";
    // });

    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    setIsShown(true);
  };

  return (
    <div className="hero">
      <div className="container">
        {!isShown && (
          <div className="randomNum">
            <p>행운의 당첨자는 누구?</p>
          </div>
        )}
        {isShown && (
          <div className="randomNum">
            <p>
              추첨 번호: <span>{randomNum}</span>
              <div>사우님 축하드립니다!</div>
            </p>
          </div>
        )}
        {/* <div className="numContainer">
          <div>
            <p>Min</p>
            <input
              type="number"
              value={minVal}
              onChange={(e) => setMinVal(+e.target.value)}
            />
          </div>
          <div>
            <p>Max</p>
            <input
              type="number"
              value={maxVal}
              onChange={(e) => setMaxVal(+e.target.value)}
            />
          </div>
        </div> */}
        <button onClick={handleClick}>추첨 결과 보기</button>
      </div>
    </div>
  );
};

export default Result;
