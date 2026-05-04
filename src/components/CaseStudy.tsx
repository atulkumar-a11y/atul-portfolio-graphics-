import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdArrowBack } from "react-icons/md";
import "./styles/CaseStudy.css";

interface CaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  projectImage?: string;
  projectTitle?: string;
}

const CaseStudyContent = ({ isOpen, onClose }: CaseStudyProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const el = overlayRef.current;
      if (el) {
        el.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      ref={overlayRef}
      className={`case-study-overlay ${isOpen ? "cs-active" : ""}`}
      role="dialog"
      aria-modal="true"
    >
      <button className="cs-back-btn" onClick={onClose} aria-label="Go back">
        <MdArrowBack /> Back
      </button>

      <div className="marketing-page-wrapper">
        <main className="page">
          <h1 className="section-title"><span className="underline">Marketing <span className="yellow">Projects</span></span></h1>

          <section className="campaign-grid">
            <div className="campaign-image">
              <img className="project-img" src="/images/latent-social.png" alt="Latent Controversy campaign" />
            </div>
            <div className="content">
              <h2>Latent <span className="yellow">Controversy</span></h2>
              <div className="sub">Topical Billboard Campaign</div>
              <p>This campaign captured a real-time moment when public opinion was quickly changing on the controversy.</p>
              <p>The goal was to make the fashion SKU part of the conversation in a natural way.</p>
              <div className="stats">
                <span className="pill">👍 10K</span>
                <span className="pill red">👁 16M+</span>
              </div>
            </div>
          </section>

          <section className="campaign-grid reverse">
            <div className="content">
              <h2><span className="yellow">Dhurandhar</span><br/>Movie Campaign</h2>
              <div className="sub">Contextual Outdoor Creative</div>
              <p>With the rise of high-budget action films like Jawan, Pathaan, and Tiger, Bollywood audiences had started expecting a certain style of heroism — larger-than-life, solid and predictable.</p>
              <p>When Dhurandhar released, it brought a different kind of storytelling, setting a new industry benchmark. The goal was to promote PVR’s availability on the app.</p>
              <div className="stats">
                <span className="pill">👍 15K</span>
                <span className="pill red">👁 10M+</span>
              </div>
            </div>
            <div className="campaign-image reverse">
              <img className="project-img" src="/images/Dhurandhar_Movie_Campaign.png" alt="Dhurandhar campaign" />
            </div>
          </section>

          <section className="campaign-grid">
            <div className="campaign-image">
              <img className="project-img" src="/images/Cricket_topical_billboard.png" alt="Cricket topical campaign" />
            </div>
            <div className="content">
              <h2><span className="yellow">Real-Time</span><br/>Cricket Moment Marketing</h2>
              <div className="sub">Cricket in India is a cultural moment.</div>
              <p>Every big performance instantly becomes a talking point across social media, news, and conversations.</p>
              <p>When Praful delivered a standout bowling debut, it created a spike in attention. The goal was to promote OTT subscriptions with topicality.</p>
              <div className="stats">
                <span className="pill">👍 14K</span>
                <span className="pill red">👁 20M+</span>
              </div>
            </div>
          </section>

          <h2 className="section-title"><span className="underline">Food Delivery <span className="yellow">Marketing</span></span></h2>

          <section className="two-card-grid">
            <article className="food-card">
              <img src="/images/Screenshot 2026-04-15 at 3.33.10 PM 1.png" alt="Maid Gone Order On campaign" />
              <h3>Hyperlocal Insight Campaign</h3>
              <div className="brand">magicpin Food Delivery</div>
              <p>In cities like Gurgaon, daily life moves fast — but it’s also heavily dependent on small routines. Our pun “Maid Gone” lands because food doesn’t show up, everything gets disrupted. Cooking, cleaning, managing home — it all piles up instantly.</p>
            </article>

            <article className="food-card">
              <img src="/images/Screenshot 2026-04-15 at 3.34.47 PM 1.png" alt="Topical cricket food delivery campaign" />
              <h3>Topical Cricket Banter Campaign</h3>
              <div className="brand">magicpin</div>
              <p>Cricket in India runs on live moments, rivalries, and instant reactions. Every match creates narratives that people immediately discuss, meme, and share. During one such moment, the phrase around “Travis’s Head” became widely talked about — opening up a space for playful interpretation.</p>
            </article>
          </section>

          <h2 className="payment-title"><span className="yellow">Payment</span> Table cards</h2>

          <section className="payment-row">
            <img src="/images/image 22234.png" alt="Payment table card 1" />
            <img src="/images/image 22235.png" alt="Payment table card 2" />
            <img src="/images/image 22236.png" alt="Payment table card 3" />
          </section>

          <p className="payment-copy">In a dine-in environment, the biggest drop-off happens at the moment of payment — customers are already satisfied with the experience, but unaware of potential savings. This table tent was designed to bridge that exact gap.</p>

          <div className="divider"></div>

          <section className="gallery">
            <img src="/images/image 22237.png" alt="Outdoor banner" />
            <img src="/images/image 22238.png" alt="Store counter display" />
          </section>

          <section className="gallery-bottom">
            <img src="/images/image 22239.png" alt="Store standee" />
            <img src="/images/image 22240.png" alt="Indoor standee" />
            <img src="/images/image 22241.png" alt="QR standee" />
          </section>

          <footer className="footer-strip">
            <p>Good OOH doesn’t just promote,<br/>it becomes a part of everyday conversations.</p>
            <div className="tools">
              <div className="tool ps">Ps</div>
              <div className="tool ai">Ai</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

const CaseStudy = (props: CaseStudyProps) => {
  return createPortal(<CaseStudyContent {...props} />, document.body);
};

export default CaseStudy;
