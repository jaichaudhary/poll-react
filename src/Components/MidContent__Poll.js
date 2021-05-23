import React from "react";
import "./MidContent__Poll.css";
// import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function MidContent__Poll() {
  return (
    <div className="midContent__Poll">
      <div className="midContent__Poll__left">
        <div className="midContent__Poll__left__head">
          <p className="midContent__Poll__left__head__para">List of Polls</p>
          <button className="midContent__Poll__left__head__btn">
            Create Poll
          </button>
        </div>
        <div className="midContent__Poll__left__bottom">
          <div className="midContent__Poll__left__bottomUp">
            <div className="midContent__Poll__left__bottom__IconTop">
              <div className="starIcon">
                <StarBorderOutlined />
              </div>
              <div className="midContent__Poll__left__bottom__text">
                <p className="midContent__Poll__left__bottom__sameClass">
                  Rating Poll
                </p>
                <button className="midContent__Poll__left__bottom__text__btn">
                  Votes:2
                </button>
              </div>
            </div>
            <p className="midContent__Poll__left__bottom__sameClass">
              Which is your favorite fruit?
            </p>
          </div>

          <div className="midContent__Poll__left__bottomDown">
            <div className="midContent__Poll__left__bottomDown__IconTop">
              <div className="NotesIcon">
                <NotesOutlinedIcon />
              </div>
              <div className="midContent__Poll__left__bottomDown__text">
                <p className="midContent__Poll__left__bottom__sameClass">
                  Multiple Choice
                </p>
                <button className="midContent__Poll__left__bottomDown__text__btn">
                  Votes:2
                </button>
              </div>
            </div>
            <p className="midContent__Poll__left__bottom__sameClass">
              Which is your favorite fruit?
            </p>
          </div>
        </div>
        <div className="midContent__Poll__left__bottomCreatePoll">
          Create Poll
        </div>
      </div>
      <div className="midContent__Poll__right">
        <div className="midContent__Poll__right__head">
          <p className="midContent__Poll__left__head__para">Live</p>
          <button className="midContent__Poll__right__head__btn">Result</button>
        </div>
        <div className="midContent__Poll__right__bottom">
          <div className="midContent__Poll__right__bottomUp">
            <p className="midContent__Poll__left__bottom__sameClass">
              Which is your favorite travel destination? Describe in brief
            </p>
            <div className="midContent__Poll__right__bottomUp__nums">
              <div className="midContent__Poll__right__bottomUp__num">0</div>
              <div className="midContent__Poll__right__bottomUp__num">0</div>
              <div className="midContent__Poll__right__bottomUp__num">5</div>
            </div>
          </div>

          <div className="midContent__Poll__right__bottomDown">
            <div className="flex">
              <div className="flex__left">
                <p className="midContent__Poll__left__bottom__sameClass">
                  <div className="teamName">Man U</div>
                </p>
                <div className="percentage">
                  <CheckCircleIcon className="circleFont" />
                </div>
              </div>
              <p className="midContent__Poll__left__bottom__sameClass">63%</p>
            </div>
            <div className="flex">
              <div className="flex__left">
                <p className="midContent__Poll__left__bottom__sameClass">
                  <div className="teamName">Barca</div>
                </p>
                <div className="percentage2"></div>
              </div>
              <p className="midContent__Poll__left__bottom__sameClass">5%</p>
            </div>
            <div className="flex">
              <div className="flex__left">
                <p className="midContent__Poll__left__bottom__sameClass">
                  <div className="teamName">Real</div>
                </p>
                <div className="percentage3"></div>
              </div>
              <p className="midContent__Poll__left__bottom__sameClass">30%</p>
            </div>
            <div className="flex">
              <div className="flex__left">
                <p className="midContent__Poll__left__bottom__sameClass">
                  <div className="teamName">Arcenal</div>
                </p>
                <div className="percentage4"></div>
              </div>
              <p className="midContent__Poll__left__bottom__sameClass">45%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidContent__Poll;
