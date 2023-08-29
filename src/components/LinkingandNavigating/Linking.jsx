import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import capture from '../LinkingandNavigating/assets/Capturecode.PNG'
import pic1 from '../LinkingandNavigating/assets/2.PNG'
import pic2 from '../LinkingandNavigating/assets/3.PNG'
import pic3 from '../LinkingandNavigating/assets/4.PNG'
import pic4 from '../LinkingandNavigating/assets/5.PNG'
import pic5 from '../LinkingandNavigating/assets/6.PNG'
import pic6 from '../LinkingandNavigating/assets/8.PNG'
import pic7 from '../LinkingandNavigating/assets/9.PNG'


const Linking = () => {
    return (
        <div className='mt-14 ml-10 space-y-3  mb-10'>
            <h2 className='text-3xl font-medium my-10 '>Linking and Navigating</h2>
            <p>There are two ways to navigate between routes in Next.js:</p>

            <h3>- Using the <span className='text-blue-600'> Link </span>Component</h3>
            <h3>- Using the <span className='text-blue-600'>useRouter() Hook</span></h3>


            <p>This page will go through how to use  Link , useRouter(), and dive deeper into how navigation works.</p>
            <div className='space-y-2'>
                <h2 className='text-2xl font-medium my-10 '>Link Component</h2>
                <p>Link is a built-in component that extends the HTML a tag to provide <span className='text-blue-700'>prefetching</span> and <br />client-side navigation between routes. It is the primary way to navigate between routes in Next.js.</p>

                <p>You can use it by importing it from next/link, and passing a href prop to the component:</p>
                <Image
                    src={capture}>
                </Image>
                <p>There are other optional props you can pass to Link. See the API reference for more.


                </p>
            </div>
            <div className='space-y-3'>
                <h2 className='text-xl font-medium my-6 '>Example</h2>
                <p className='font-bold'>Linking to Dynamic Segments</p>
                <p>When linking to<span className='text-blue-700'>Dynamic segment</span>  you can use <span className='text-blue-700'> template literals and interpolation </span> template<br /> literals and interpolation to generate a list of links. For example, to generate a list of blog posts:</p>
                <Image
                    src={pic1}>
                </Image>

                <p>You can use <span className='text-blue-700'>usePathname()</span> to determine if a link is active.<br /> For example, to add a class to the active link, <br />you can check if the current pathname matches the href of the link:</p>
                <Image
                    src={pic2}>

                </Image>
                <div className='space-y-3'>
                    <p className='font-bold'>Scrolling to an id
                    </p>
                    <p>The default behavior of the Next.js App Router is to scroll to the top of<br /> a new route or to maintain the scroll position for backwards and forwards navigation.
                    </p>
                    <p>If you'd like to scroll to a specific id on navigation, <br />you can append your URL with a # hash link or just passa hash link to the href prop.<br />  This is possible since Link renders to an a element.

                    </p></div>
                <Image
                    src={pic3}>

                </Image>

            </div>
            <div className='space-y-3'>
                <p className='font-bold'>Disabling scroll restoration</p>
                <p>The default behavior of the Next.js App Router is to scroll to the top of a new route or to<br /> maintain the scroll position for backwards and forwards navigation. If you'd like to disable<br /> this behavior, you can pass scroll={false} to the Link component, or<br /> scroll: false to router.push() or router.replace().</p>
                <Image
                    src={pic4}>

                </Image>
            </div>
            <div>
                <h2 className='text-2xl font-medium my-10 '>useRouter() Hook</h2>
                <p>The useRouter hook allows you to programmatically change routes.

                </p>
                <p>This hook can only be used inside Client Components and is imported from next/navigation.

                </p>
                <Image
                    src={pic5}>

                </Image>
                <p>For a full list of useRouter methods, see the API reference.

                </p>
                <p className='font-normal mt-6'>Recommendation: Use the Link component to navigate between routes unless you have a specific <br />requirement for using useRouter.

                </p>
            </div>
            <div className='space-y-3' >
                <h2 className='text-2xl font-medium my-10 '>How Routing and Navigation Works
                </h2>
                <p>The App Router uses a hybrid approach for routing and navigation. On the server, your<br /> application code is automatically code-split by route segments. And on the client, Next.js<br /> prefetches and caches the route segments. This means, when a user navigates to<br /> a new route, the browser doesn't reload the page, and only the route segments that change re-render<br /> - improving the navigation experience and performance.

                </p>

                <p className='font-bold my-2 mt-6'>1.prefetching</p>
                <p>Prefetching is a way to preload a route in the background before the user visits it.

                </p>
                <p>There are two ways routes are prefetched in Next.js:

                </p>
                <p>Link component: Routes are automatically prefetched as they become visible <br />in the user's viewport. Prefetching happens when the page first loads or when it comes into<br /> view through scrolling.
                </p>
                <p>router.prefetch(): The useRouter hook can be used to prefetch routes programmatically.
                </p>

                <p>TheLink's prefetching behavior is different for static and dynamic routes:

                </p>
                <p>Static Routes: prefetch defaults to true. The entire route is prefetched and cached.
                </p>
                <p>Dynamic Routes: prefetch default to automatic. Only the shared layout down until the first loading.js<br /> file is prefetched and cached for 30s. This reduces the cost of fetching an entire dynamic route,<br /> and it means you can show an instant loading state for better visual feedback to users.
                </p>
                <p>You can disable prefetching by setting the prefetch prop to false.

                </p>
                <p>See the Link API reference for more information.

                </p>
                <p className='font-bold my-2'>Good to know</p>
                <p>Prefetching is not enabled in development, only in production.
                </p>


            </div>
            <div className='space-y-4 mt-6'>
                <p className='font-bold my-2'>2.Caching</p>
                <p>Next.js has an in-memory client-side cache called the Router Cache. As users navigate around the app, the <br /> React Server Component Payload of prefetched route segments and visited routes are stored in the cache.

                </p>
                <p>This means on navigation, the cache is reused as much as possible, instead of making a new request to the <br /> server - improving performance by reducing the number of requests and data transferred.

                </p>
                <p>Learn more about how the Router Cache works and how to configure it.

                </p>



            </div>
            <div className='space-y-4'>
                <p className='font-bold my-2 mt-6'>3.Partial Rendering</p>
                <p>Partial rendering means only the route segments that change on navigation re-render on the client, and any <br /> shared segments are preserved.

                </p>
                <p>For example, when navigating between two sibling routes, /dashboard/settings and /dashboard/analytics, <br /> the settings and analytics pages will be rendered, and the shared dashboard layout will be preserved.

                </p>
                <Image
                    src={pic6}>

                </Image>
                <p>Without partial rendering, each navigation would cause the full page to re-render on the server. Rendering <br /> only the segment that changes reduces the amount of data transferred and execution time, leading to improved performance.

                </p>


            </div>
            <div className='space-y-4'>
                <p className='font-bold my-2 mt-6'>4.Soft Navigation</p>

                <p>By default, the browser performs a hard navigation between pages. This means the browser reloads the page and <br /> resets React state such as useState hooks in your app and browser state such as the user's <br /> scroll position or focused element. However, in Next.js, the App Router uses soft<br />  navigation. This means React only renders the segments that have changed while preserving React and browser<br />  state, and there is no full page reload.</p>


            </div>
            <div className='space-y-4'>
                <p className='font-bold my-2 mt-6'>5.Back and Forward Navigation</p>

                <p>By default, Next.js will maintain the scroll position for backwards and forwards navigation,<br /> and re-use route segments in the Router Cache.</p>

            </div>
            <div>
                <h2 className='text-2xl font-medium my-10 '>Next Step</h2>

                <Image
                    src={pic7}>

                </Image>
            </div>
        </div>
    );
};

export default Linking;