const Footer = () => (
  <footer className="bg-primary py-8 border-t border-primary-foreground/5">
    <div className="container text-center">
      <p className="font-heading font-bold text-primary-foreground text-lg mb-2">
        Hemdy <span className="text-gradient">Digitalz</span>
      </p>
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Hemdy Digitalz. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
