import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">The Hedge Knights</h3>
      <p className="footer__members">Sufi - Shoaib - Ghaffar - Haseeb</p>
      <p>Four Minds • One Vision</p>
      <span className="footer__text">© {new Date().getFullYear()} Alliance</span>
    </footer>
  );
}
