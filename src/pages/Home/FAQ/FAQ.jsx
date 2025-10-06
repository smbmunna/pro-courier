import { ArrowUpRight } from 'lucide-react';


const FAQ = () => {
    return (
        <div className="mx-auto max-w-3xl mb-8">
            <div className="mx-auto text-gray-600">
                <h1 className="text-3xl font-semibold mb-[20px]">Frequently Asked Questions (FAQ)</h1>
                <p className="mb-[32px]">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            {/* Accordion section */}
            <div className="collapse collapse-arrow bg-white text-[#03373D] my-4">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
            </div>
            <div className="collapse collapse-arrow bg-white text-[#03373D] my-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-arrow bg-white text-[#03373D] my-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-arrow bg-white text-[#03373D] my-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Does it have smart features like vibration alerts?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-arrow bg-white text-[#03373D] my-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How will I be notified when the product is back in stock?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <button className="btn btn-primary rounded-xl bg-[#CAEB66] text-black border-[#CAEB66] hover:bg-[#03373D] hover:text-[#CAEB66] text-lg ">See More FAQ's</button>
                <button
                    className="w-12 h-12 rounded-full bg-black shadow-lg flex items-center justify-center transition-all hover:bg-[#B8E986] hover:shadow-xl"
                >
                    <ArrowUpRight className="w-6 h-6 text-[#CAEB66] hover:text-black" strokeWidth={2} />
                </button>

            </div>
        </div>
    )
}


export default FAQ; 