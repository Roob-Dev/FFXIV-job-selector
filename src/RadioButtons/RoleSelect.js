import "./RoleSelect.css";

const RoleSelect = ({ handleChange, formSubmit, radioValue }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>I think I may want to play as a... </p>
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center">
          <div className="p-3 border bg-light">
            <form onSubmit={formSubmit} className="classForm">
              <label htmlFor="healer">
                <img
                  src={
                    "https://img.finalfantasyxiv.com/lds/promo/h/e/V5xx3kfnREBO-2xWbTUW2Csy_Q.png"
                  }
                  alt="pic"
                />
                Healer
                <input
                  id="healer"
                  type="radio"
                  name="role"
                  onChange={handleChange}
                  value="Healer"
                  checked={radioValue.role === "Healer"}
                  style={{ margin: 20 }}
                />
              </label>
              <label htmlFor="tank">
                <img
                  src={
                    "https://img.finalfantasyxiv.com/lds/promo/h/d/rFrCBcRe9YrmPvb4fZkuFksSLw.png"
                  }
                  alt="pic"
                />
                Tank
                <input
                  id="tank"
                  type="radio"
                  name="role"
                  onChange={handleChange}
                  value="Tank"
                  checked={radioValue.role === "Tank"}
                  style={{ margin: 20 }}
                />
              </label>

              <label htmlFor="mrdps">
                <img
                  src={
                    "https://img.finalfantasyxiv.com/lds/promo/h/R/laSrEkvlK_7NNbNZ3JErTqzaR8.png"
                  }
                  alt="pic"
                />
                Magic Ranged DPS
                <input
                  id="mrdps"
                  type="radio"
                  name="role"
                  onChange={handleChange}
                  value="Magic Ranged DPS"
                  checked={radioValue.role === "Magic Ranged DPS"}
                  style={{ margin: 20 }}
                />
              </label>
              <br />
              <label htmlFor="prdps">
                <img
                  src={
                    "https://img.finalfantasyxiv.com/lds/promo/h/R/laSrEkvlK_7NNbNZ3JErTqzaR8.png"
                  }
                  alt="pic"
                />
                Physical Ranged DPS
                <input
                  id="prdps"
                  type="radio"
                  name="role"
                  onChange={handleChange}
                  value="Physical Ranged DPS"
                  checked={radioValue.role === "Physical Ranged DPS"}
                  style={{ margin: 20 }}
                />
              </label>

              <label htmlFor="melee">
                <img
                  src={
                    "https://img.finalfantasyxiv.com/lds/promo/h/R/laSrEkvlK_7NNbNZ3JErTqzaR8.png"
                  }
                  alt="pic"
                />
                Melee DPS
                <input
                  id="melee"
                  type="radio"
                  name="role"
                  onChange={handleChange}
                  value="Melee DPS"
                  checked={radioValue.role === "Melee DPS"}
                  style={{ margin: 20 }}
                />
              </label>
            </form>
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

export default RoleSelect;
