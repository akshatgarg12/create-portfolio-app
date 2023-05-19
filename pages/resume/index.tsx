import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className="bg-background min-h-screen py-10">
        <h4 className="text-2xl font-bold text-text text-center mb-4">
          Resume
        </h4>
        <iframe
          title="resume.pdf"
          src="/documents/resume.pdf#zoom=100"
          className="min-w-[80%] min-h-[80vh] sm:min-h-screen m-auto"
        />
      </div>
    </>
  );
}
