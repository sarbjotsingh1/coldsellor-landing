import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="mt-10 flex items-center justify-center text-center sm:mt-12">
      <div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        BlindSpot of a Perfect Funnel 
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
        Almost Every other Business has Overlooked this Crucial Component of their Funnels. The ones who understand this, are well known around the planet! 
Fill the form and get your Copy for free

        </p>
        <iframe
        id="iframewin"
        width="100%"
        height="100%"
        style={{height: "200px"}}
        src="https://zc1.maillist-manage.in/ua/Optin?od=1a1e3db65512a&zx=1df9e7ee11&tD=12396bfde74fa661&sD=12396bfde74fae64"
      ></iframe>

        {/* <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={"/"}
        >
          Fill the form
        </Link> */}
      </div>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
          <Image
                    src="/Ebook_Visual.png"
                    alt="product preview"
                    width={500}
                    height={600}
                    quality={100}
                    className=" "
                  />

          {/* <div>
            <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                 
                </div>
              </div>
            </div>
          </div> */}
        </div> 

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
        </MaxWidthWrapper>

      

      {/* Features */}
      <MaxWidthWrapper>
{/*         
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                BlindSpot of a Perfect Funnel 
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                Almost Every other Business has Overlooked this Crucial Component of their Funnels. The ones who understand this, are well known around the planet! 
                </p>
              </div>
            </div>

            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">
                  Increase your Lead Flow By 48.6%
                  </span>
                  <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">
                  Sell Services On 0$ Investment [NOT INBOUND]
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">
                  Make Profit from a Non Profitable Funnel
                  </span>
                  <span className="mt-2 text-zinc-700">
                
              </span>
                </div>
              </li>
            </ol>
          </div>  */}

          {/* Scenarios */}
          {/* <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Practice in Real Life Scenarios
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get help if you make a mistake and guidance on saying
                  something in your target language.
                </p>
              </div>
            </div> */}
            {/* steps */}

            <div className="flex items-center justify-center p-11">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-6 p-6 md:flex-1">
                  <CardTitle>Sell Services On 0$ Investment [NOT INBOUND]</CardTitle>
                  <Image
                    src="/Sell_Services_for_Free.png"
                    alt="lead flow"
                    width={170}
                    height={170}
                    quality={100}
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-6 p-6 md:flex-1">
                  <CardTitle>Increase your Lead Flow By 48.6%</CardTitle>
                  <Image
                    src="/Get_More_Leads.png"
                    alt="increase lead flow"
                    width={170}
                    height={170}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-6 p-6 md:flex-1">
                  <CardTitle>Make Profit from a Non Profitable Funnel</CardTitle>
                
                  <Image
                    src="/Make_Profit_With_Funnel.png"
                    alt="Make profit"
                    width={170}
                    height={170}
                    quality={100}
                  />
                </Card>
              </div>
            </div>
            {/* <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div> */}
          {/* </div> */}

          {/* Powered By */}
          {/* <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Powered by
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  These are the technologies behind the scene that make Convo
                  possible
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Whisper AI</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Speech to text
                  </CardDescription>
                  <Image
                    src="/mic.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>GPT 4</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Comprehensive prompts and responses
                  </CardDescription>
                  <Image
                    src="/openai.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>WebSpeech</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Text to speech
                  </CardDescription>
                  <Image
                    src="/speaker.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
              </div>
            </div> */}
          {/* </div> */}

          {/* Feedback */}
          {/* <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Feedback
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  What are people saying about Convo
                </p>
              </div>
            </div> */}
            {/* steps */}

            {/* <div>
              <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                <div className="flow-root">
                  <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      width={2556}
                      height={1436}
                      quality={100}
                      src="/tweet_collage.png"
                      alt="Header image"
                      className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
