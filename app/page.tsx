import backgroundImageSectionOne from "/public/blockchain.jpg";
import backgroundImageSectionTwo from "/public/startup.jpg";
import backgroundImageSectionThree from "/public/circle.jpg";
import backgroundImageSectionFour from "/public/hands.jpg";

export default function Home() {
  return (
    <>
      <main>
        <section style={{
          backgroundImage: `url(${backgroundImageSectionOne.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "90vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <div className='grid grid-cols-3 gap-4 text-white'>
            <div></div>
            <div></div>
            <div>
              <h1 className='text-2xl font-bold mb-2 mt-2'>Pioneering solutions for agencies driven by a relentless mission</h1>
              <h2 className='text-xl font-bold mb-2 mt-2'>We deliver specialized breakthroughs bridging vision to reality for our federal partners.</h2>
              <p className='font-bold mb-2 mt-2'>Pairing boutique dedication with technical firepower scaled for the largest undertakings and matching the most soaring ambitions</p>
              <div className='flex flex-direction-rows'>
                <button className='mr-2'>View more</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className='grid grid-cols-2 gap-4 place-content-center'>
          <div
            style={{
              backgroundImage: `url(${backgroundImageSectionTwo.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vh",
              height: "100vh",
            }}
          ></div>
          <div style={{ width: "100vh", height: '100vh' }} className='flex flex-col justify-center'>
            <h1 className='text-3xl font-bold mb-2 mt-2 text-red-500'>
              Your moonshots, our calling
            </h1>
            <p className='text-xl'>
              We bring enterprise-tested methodologies sharpened with small business responsiveness and breakthrough thinking.
            </p>
            <div className='flex flex-direction-rows mb-4 mt-4 text-red-800'>
              <button className='mr-2'>We want to work with you</button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </section>
        <section style={{
          backgroundImage: `url(${backgroundImageSectionThree.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "60vh"
        }} className='flex flex-col items-center p-10'>
          <div className='text-white text-6xl'>What We Do</div>
          <div className='grid grid-cols-4 gap-4 text-white text-3xl place-content-center mt-10'>
            <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <p>Data engineer/Data science</p>
            </div>
            <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
              <p>Cloud Devops</p>
            </div>
            <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <p>Agile CI/CD</p>
            </div>
            <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <p>CyberSecurity</p>
            </div>
          </div>
        </section>
        <section style={{
          backgroundImage: `url(${backgroundImageSectionFour.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "90vh",
        }} className='text-white grid grid-cols-3 gap-4 place-content-center p-6'>
          <div>
            <h1 className='text-2xl my-3 font-bold'>Now Avalogics synthesis our forces as your modern ally</h1>
            <p className='text-xl'>Combining our depth with agility, creativity with rigor, and unique legacy with readiness to launch agencies into the future. We tune elite teams and proven methodologies to each agency’s essence. This partnership multiplies the ability to transform bold visions into operational realities core to complex missions. History stands on the shoulders of trailblazers hungry to keep rising. Join two allies ready to double progress in service of national priorities. The future belongs to the bold - let’s meet it together.</p>
            <div className='flex flex-row my-4'>
              <button>Learn More</button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  )
}
