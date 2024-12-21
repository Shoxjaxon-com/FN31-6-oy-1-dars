import React from "react";
import "./App.css";
import Logo from "./assets/ShapeVoice.svg";
import Muick from "./assets/Musik.svg";
import back from "./assets/back.png";
import oracle from "./assets/oracle.svg";
import morhepheus from "./assets/morpheus.svg";
import samsung from "./assets/samsung.svg";
import monday from "./assets/monday.svg";
import segment from "./assets/segment.svg";
import chiroq from './assets/chiroq.svg'
import one from './assets/1.svg'
import qalam from './assets/qalam.svg'
import jonatish from './assets/jonatish.svg'
function App() {
  return (
    <div>
      <div className="conteiner">
        <div className="header herader__conteiner">
          <div className="back"></div>
          <div className="logo">
            <a href="#">
              {" "}
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="nav">
            <ul className="nav-list">
              <li className="nav-iteam">
                <a href="#">Product</a>
                <a href="#">Template</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="button">
            <a href="#" className="button1">
              Sign In
            </a>
            <a href="#" className="button2">
              Start Free
            </a>
          </div>
        </div>
        <div className="hero hero__conteiner">
          <div className="title">
            <h1>
              Managing business <br /> payments has never <br /> been easier
            </h1>
            <p>
              Yet bed any for travelling assistance indulgence <br />{" "}
              unpleasing. Not thoughts all exercise blessing. <br /> Indulgence
              way everything.
            </p>
            <div className="hero-button">
              <a href="#" className="our">
                Our Process
              </a>
              <span className="mucik">
                <img src={Muick} alt="Mucik logo" />
                <a href="#" className="see">
                  Our Process
                </a>
              </span>
            </div>
          </div>
          <div className="inputs">
            <p>Get Started for Free</p>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <a href="#">Get Started</a>
          </div>
        </div>
        <div className="trusted truseted__conteiner">
          <p>Trusted By Over 100+ Startups and freelance business</p>
          <div className="imgs">
            <img src={oracle} alt="" />
            <img src={morhepheus} alt="" />
            <img src={samsung} alt="" />
            <img src={monday} alt="" />
            <img src={segment} alt="" />
          </div>
        </div>
        <div className="beliving">
          <h2>Believing neglected so so allowance</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of{" "}
            <br /> plate heard oh ought. His defective nor convinced residence
            own.
          </p>
          <a href="#">We so opinion friends me message as delight.</a>
        </div>
        <div className="cards cards__conteiner">
            <div className="card-1">
              <div className="card-img">
              </div>
              <img src={chiroq} alt="" />
              <h5 className="card-title">Led Ask Possible Mistress</h5>
              <p className="card-desck">Connection has put impossible own <br /> apartments boisterous. At jointure ladyship <br /> an insisted so humanity he. Friendly <br /> bachelor entrance to on by.</p>
            </div>
            <div className="card-2">
              <div className="card-img"></div>
                <img src={qalam} alt="" />
                <h5 className="card-title">Elegance Eat Likewise</h5>
                <p className="card-desc">From they fine john he give of rich he. They <br /> age and draw mrs like. Improving end <br /> distrusts may instantly was household <br /> applauded incommode. </p>
            </div>
            <div className="card-3">
              <div className="card-img"></div>
              <img src={jonatish} alt="" />
              <h5 className="card-title">Message Oram Nothing</h5>
              <p className="card-desc">Why kept very ever home mrs. Considered <br /> sympathize ten uncommonly occasional <br /> assistance sufficient not. Letter of on <br /> become he tended active enable to.</p>
            </div>

        </div>
        <div className="track track__conteiner">
            <h2>Track your crytpo portfolio on the <br /> best way possible</h2>
            <a href="#">Check It Out</a>
        </div>
      </div>
    </div>
  );
}

export default App;
