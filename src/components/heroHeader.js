import HeroImage from "../assets/img/hero_bg.jpg";
export default function heroHeader() {
  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{ backgroundImage: "url(" + HeroImage + ")" }}
    >
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Morgan Freeman</h1>
            <p className="hero-subtitle">
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
