import { ArrowLeft, Clock3 } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="coming-soon-section">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <Clock3 size={32} />
        </div>

        <p className="eyebrow">Coming Soon</p>

        <h1>Something Better Is Coming</h1>

        <p className="coming-soon-description">
          Stay tuned! We are working on this page and will be launching
          something more useful, detailed, and valuable for students soon.
        </p>

        <p className="coming-soon-description">
          Check back shortly for the new content.
        </p>

        <div className="coming-soon-actions">
          <Link href="/study-guides" className="btn btn-primary">
            Explore Study Guides
          </Link>

          <Link href="/" className="btn btn-secondary">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}