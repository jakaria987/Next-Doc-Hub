
import Link from "next/link";

const MiddleSection = () => {
    return (
        <div className="mb-20 bg-base-100 ">
            <h1 className="text-black font-bold text-3xl text-center mt-10">
                Get started in seconds
                <span className="text-lg text-slate-600"> Deploy Next.js to Vercel</span>
            </h1>
            <div className="divide-y divide-dashed"></div>
            <div className="flex flex-col md:flex-row justify-center mx-3 md:gap-60 md:px-20">
                <div className="w-full">
                    {/* ... other content */}
                    <span className="text-purple-500 bg-base-200  rounded-50 px-2 py-1 ">
                        Starter
                    </span>
                    <span className="text-green-500 bg-base-200  rounded-50 px-2 py-1 mx-3">
                        Ecommerce
                    </span>
                    <span className="text-blue-500 bg-base-200  rounded-50 px-2 py-1 ">
                        Blog
                    </span>
                    <span className="text-orange-500 bg-base-200  rounded-50 px-2 py-1 ml-3 lg:mx-3">
                        AI
                    </span>
                    <span className="text-rose-500 bg-base-300  rounded-50 px-2 py-1 ml-3 invisible lg:visible">
                        Edge Config
                    </span>
                    <span className="text-pink-400 bg-base-300 rounded-50 px-2 py-1 invisible lg:visible">
                        Edge Fuctions
                    </span>

                    <p className="text-slate-500 text-lg mt-5">
                        Vercel is a frontend cloud from the creators of Next.js,
                        <br />
                        making it easy to get started with Next.js quickly.
                    </p>
                    <p className="mt-3 text-slate-500 text-lg">
                        Jumpstart your Next.js development with one of our
                        <br />
                        pre-built solutions.
                    </p>
                    <Link className="btn mt-10 mb-20 sm:btn-sm md:btn-md lg:btn-md" href="/">
                        Deploy a Template On Vercel
                    </Link>
                </div>
                <div className="relative md:mt-10 md:w-full w-56 ">
                    <div >
                        <img
                            className="w-[320px] h-50 -rotate-[3deg]"
                            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122003%2Fnextjs%2Fshowcase%2Ftemplate-next-commerce.jpg&w=1200&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
                            alt="Image 1"
                        />
                    </div>
                    <img
                        className="w-[320px] h-50 absolute left-16 md:bottom-20 bottom-2 -rotate-[3deg]"
                        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122387%2Fnextjs%2Fshowcase%2Ftemplate-next-gallery.jpg&w=1920&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
                        alt="Image 2"
                    />
                    <img
                        className="w-[320px] h-50 absolute left-28 md:bottom-12 top-20 -rotate-[2deg]"
                        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122002%2Fnextjs%2Fshowcase%2Ftemplate-next-boilerplate.jpg&w=1920&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
                        alt="Image 2"
                    />
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;
