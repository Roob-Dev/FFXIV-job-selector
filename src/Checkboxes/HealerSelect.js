import { healeratts } from "../Utils/HealerAtts.js";
import "./HealerSelect.css";

const HealerSelect = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>What are some features you want in a Healer?</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="p-3 border bg-light">
            <ul className="healer-attribute=list">
              {healeratts.map((attribute, index) => {
                return (
                  <li key={index}>
                    <div className="healer-attribute">
                      <div className="left-section">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            id={`custom-checkbox-${index}`}
                            attribute={attribute}
                          />
                          <label
                            className="form-check-label"
                            for="flexSwitchCheckDefault"
                            htmlFor={`custom-checkbox-${index}`}
                          >
                            {attribute}
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-outline-dark">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealerSelect;
