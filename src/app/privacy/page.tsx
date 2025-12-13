import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | LinkedIn Carousel Generator</title>
        <meta
          name="description"
          content="Privacy Policy for the LinkedIn Carousel Generator Chrome Extension"
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date('2025-12-13').toLocaleDateString()}</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Overview</h2>
          <p>
            The LinkedIn Carousel Generator Chrome extension (&quot;the Extension&quot;, &quot;we&quot;, &quot;us&quot;) helps
            users create LinkedIn carousel PDFs from web pages or user-provided text. The Extension
            extracts readable content on user request, generates slide content using a remote
            language model, allows users to edit slides and visual settings, and exports the result
            as a downloadable PDF.
          </p>
          <p>
            We are committed to minimizing data collection and using information only for the core
            functionality of the Extension.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>

          <h3 className="font-semibold">2.1 User-Provided Content</h3>
          <p>
            The Extension processes text extracted from the currently active web page only when the
            user explicitly clicks &quot;Generate from the page content&quot;, as well as text manually pasted by the
            user. This content is used solely to generate slide summaries and carousel layouts.
          </p>

          <h3 className="font-semibold">2.2 Generated Content</h3>
          <p>
            The Extension generates intermediate data such as summaries, slide titles, descriptions,
            and layout metadata. This data exists only to allow editing and export of the final
            carousel.
          </p>

          <h3 className="font-semibold">2.3 Information We Do Not Collect</h3>
          <p>
            We do not collect personal identifiers, browsing history, tracking data, precise
            location data, payment information, or any data unrelated to carousel generation.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">3. Use of Remote Services</h2>
          <p>
            To generate summaries and structured slide content, the Extension sends extracted or
            user-provided text to a remote language model service. Only the minimum amount of text
            required for generation is transmitted.
          </p>
          <p>
            No executable code is downloaded or executed remotely. All slide rendering, editing,
            and PDF export occur locally within the Extension.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">4. How We Use Information</h2>
          <p>
            Information processed by the Extension is used only to extract page content on user
            request, generate summarized slide content, allow editing of text and visual styles,
            and export a PDF carousel for LinkedIn posting.
          </p>
          <p>
            We do not sell, rent, or share user content with third parties for marketing or
            advertising purposes.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">5. Data Storage and Retention</h2>
          <p>
            The Extension does not permanently store extracted or generated content on our servers.
            Content may be temporarily processed by the remote generation service and is not
            retained longer than necessary to complete the request. Any locally stored content
            exists only within the user’s browser environment.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">6. Permissions Explanation</h2>
          <p>
            The Extension uses active tab and host permissions to extract readable content and
            display an in-page editor only when the user initiates generation. Content scripts are
            used solely to render the modal editor interface.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">7. User Control</h2>
          <p>
            Users fully control when content is processed. All generation actions are manual, all
            slides can be edited before export, and users choose whether to download and use the
            generated PDF. Uninstalling the Extension removes all locally stored data.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">8. Third-Party Websites</h2>
          <p>
            The Extension may interact with third-party websites only to extract visible text from
            the active page at the user’s request. We are not responsible for the privacy practices
            of those websites.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in functionality or legal
            requirements. Updates will be reflected by revising the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">10. Contact</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or the Extension’s data
            practices, you may contact us at:
          </p>
          <p className="font-medium">Email: dinislam.abdulsalamov@gmail.com</p>
        </section>
      </main>
    </>
  );
}
