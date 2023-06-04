import { Scroll } from "@react-three/drei"

function HtmlContent({ setShowBuy }) {
  return (
    <Scroll html style={{ width: "100%" }}>
      <h1 className="fade-in title">HYPERION</h1>

      <div className="row" style={{ top: `132vh` }}>
        <div className="col">
          <h2>Unleash Your Adrenaline: The Thrilling World of Ferrari</h2>
          <p>
            Experience the ultimate thrill of speed and luxury with the new Ferrari! This automotive
            masterpiece combines stunning design with unrivaled performance. With its powerful
            engine and sleek aerodynamics, the Ferrari takes you to new heights of adrenaline.
          </p>
        </div>
      </div>

      <div className="row" style={{ top: `285vh` }}>
        <div className="col right">
          <h2>Masterpiece in Motion: The Exquisite Design</h2>
          <p>
            Every curve you take becomes a work of art in motion, while you enjoy the captivating
            sound of the engine roaring around you. Step into its luxurious interior, where
            craftsmanship and technology come together to create an exceptional driving experience.
          </p>
          <p>
            Whether on the road or the track, the Ferrari is an undeniable symbol of status and a
            passion for excellence. Discover the pleasure of owning a Ferrari and unleash your
            sporting spirit today!
          </p>
        </div>
      </div>

      <div className="row" style={{ top: `445vh` }}>
        <div className="col">
          <h2>The Symbol of Status: Embrace the Passion for Excellence</h2>
          <p>
            Immerse yourself in the world of supercars with the unparalleled experience offered by
            Ferrari. Every meticulously designed detail of these high-performance vehicles reflects
            the brand's passion and commitment to excellence. From the roar of its engine to the
            sensation of mastering the road, driving a Ferrari is an experience that awakens all the
            senses. The perfect blend of elegance and power, these iconic vehicles are not only
            symbols of status but also engineering masterpieces.
          </p>
        </div>
      </div>

      <div className="row" style={{ top: `612vh` }}>
        <div className="col right">
          <h2>Craftsmanship and Technology</h2>
          <p>
            Whether you desire an exhilarating drive on winding roads or to stand out at prestigious
            events, a Ferrari will take you to new levels of satisfaction and admiration. Its
            unrivaled performance and cutting-edge technology make every journey an unforgettable
            experience. The precision handling and lightning-fast acceleration allow you to conquer
            any curve with confidence, while the sleek and timeless design turns heads wherever you
            go. Behind the wheel of a Ferrari, you become part of a rich legacy that spans decades
            of automotive excellence.
          </p>
        </div>
      </div>

      <h2
        className="buy-now-tittle"
        style={{
          top: "708vh",
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        Unleash Your Adrenaline
      </h2>

      <button
        onClick={() => setShowBuy(true)}
        style={{
          position: "absolute",
          top: `775vh`,
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
        className="btn-buy"
      >
        Buy now
      </button>
    </Scroll>
  )
}

export default HtmlContent
