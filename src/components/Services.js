import React from 'react'
import arrowservice from "../assets/arrowservice.svg"
import build from "../assets/build.svg"
import development from "../assets/development.svg"
import marketing from "../assets/marketing.svg"
import unlocking from "../assets/unlocking.svg"
import liner from "../assets/liner.svg"
import tempor from "../assets/tempor.svg"
import fundraising from "../assets/fundraising.svg"

function Services() {
    return (
        <div className='flex flex-col items-center justify-center text-white p-4 lg:p-0 mb-20'>
            <div className="bg-black/40 backdrop-blur-lg box border-[0.5px] border-[#02D5FF] lg:w-10/12 rounded-3xl p-8 flex flex-col lg:flex-row justify-between">
                <div className="TAB 1 p-2 lg:w-1/3 flex flex-col items-start">
                    <h2 className='text-6xl lg:text-[60px] text-white font-light mb-4 mt-1'>SERVICES</h2>
                    <p className='text-lg text-white font-light w-72 lg:mb-32 mb-14'>
                        Revolutionalize your crypto Trading with our Defi Swap Platform High Value Locked
                    </p>
                    <img src={arrowservice} alt="" className='mb-10 lg:mb-0 animate-pulse' />
                </div>

                <img src={liner} alt="" className='px-5 lg:flex hidden animate-pulse' />

                <div className="TAB 2 p-2 mb-20 lg:mb-0 lg:w-1/3">
                    <img src={marketing} alt="" className=' mb-4' />
                    <img src={unlocking} alt="" className='mb-4 lg:mb-10 ' />
                    <p className='text-lg font-light'>
                        <li>Engage with prominent projects and key influencers in the web3 industry.</li>
                        <li>Boost your audience and community by partnering with other projects.</li>
                        <li>Create powerful branding and position your product to attract maximum interest.</li>
                        <li>Discover how to cultivate a robust community that supports you.</li>
                        <li>Develop a comprehensive go-to-market strategy that includes pricing, packaging, and timing.</li>
                        <li>Showcasing projects on prominent media outlets to build authority and attract attention</li>
                    </p>
                </div>

                <img src={liner} alt="" className='px-5 lg:flex hidden animate-pulse' />

                <div className="TAB 3 p-2 mb-20 lg:mb-0 lg:w-1/3">
                    <img src={development} alt="" className=' mb-4' />
                    <img src={build} alt="" className='mb-4 lg:mb-10' />
                    <p className='text-lg font-light'>
                        <li>Crafting secure and efficient smart contracts tailored for any blockchain.</li>
                        <li>Building  decentralized applications (DApps) with seamless user experiences for  different sectors, including finance, gaming, and social media.</li>
                        <li>Integrating blockchain technology into existing business systems for enhanced security and transparency.</li>
                        <li>Creating and launching NFT projects, including art, music, and digital collectibles, complete with marketplace development.</li>
                        <li>Designing token economic models that align with project goals and encourage user engagement and growth.</li>
                        <li>Smart Contract Audit to guarantee thee contracts are secure, efficient, and aligned with best practices, safeguarding assets and trust.</li>
                        </p>
                </div>

                <img src={liner} alt="" className='px-5 lg:flex hidden animate-pulse' />

                <div className="TAB 4 p-2 mb-20 lg:mb-0 lg:w-1/3">
                    <img src={fundraising} alt="" className=' mb-4' />
                    <img src={tempor} alt="" className='mb-4 lg:mb-10' />
                    <p className='text-lg font-light'>
                        <li>Crafting the economic and incentive structures of a token to support project sustainability and growth.</li>
                        <li>Assistance with the planning, execution, and marketing of initial coin offerings, launchpads, or exchange offerings to raise capital.</li>
                        <li>Developing and maintaining strong relationships with investors through regular updates, reports, and strategic communications.</li>
                        <li>Providing strategic guidance on market positioning, competitor analysis, and growth strategies tailored to the blockchain and crypto space.</li>
                        <li>Whitepaper and pitch deck tailored to attract investors and partners by showcasing the project’s innovation and market fit.</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services