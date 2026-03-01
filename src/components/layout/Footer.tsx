import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-secondary/50 py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="gradient-bg rounded-lg p-1.5">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-foreground">Campus Pilot</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered study tools for college students.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Campus Pilot. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
