import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>Developed by Anderson M.</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
}
