export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-graphite mb-8">Terms of Service</h1>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-graphite mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using FoldRack.com, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-graphite mb-4">Affiliate Links</h2>
            <p>
              FoldRack.com contains affiliate links to Amazon.com. When you click on these links and make a purchase, we
              may earn a commission at no additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-graphite mb-4">Product Information</h2>
            <p>
              We strive to provide accurate product information and recommendations. However, product specifications,
              availability, and prices are subject to change by the merchant (Amazon).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-graphite mb-4">Limitation of Liability</h2>
            <p>
              FoldRack.com is not responsible for any issues arising from purchases made through our affiliate links.
              All transactions are between you and Amazon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-graphite mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the site after changes
              constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
