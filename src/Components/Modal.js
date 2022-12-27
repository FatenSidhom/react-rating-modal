import React from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Modal.css";
import Confetti from "react-confetti"; 
function Modal({ setOpenModal }) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  
  const handleText = () => {
    switch (number) {

      case 5:
        return <div> 
          <p>amazing!🥳</p>
          <p>can you help us add a review here 👇 </p>
          <a href="https://fr.trustpilot.com/review/noota.io">
             <button type="button" class="btn"> <Confetti/>
                 Review us on trustpilot

              </button>
          </a>
      </div>;
    
      default: return <div className="footer">
      <button className={` ${!number && "disabled"} `}

        onClick={() => {
          setOpenModal(false);
        }}
        id="cancelBtn"
      >
        OK
      </button>
    </div>
        

    }
  };
  return (
    
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Evaluate your experience with noota</h1>
        </div>
        <div className="body">
          <div>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
            <h1>{handleText()}</h1>
          </div>
        
        </div>
        
      </div>
    </div>
  );
}

export default Modal;
