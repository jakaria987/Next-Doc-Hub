import React from 'react'
import img1 from '../LinkingandNavigating/assets/g1.PNG'
import img2 from '../LinkingandNavigating/assets/g2.PNG'
import img3 from '../LinkingandNavigating/assets/g3.PNG'
import img4 from '../LinkingandNavigating/assets/g4.PNG'
import Image from 'next/image'


const GroupRoute = () => {
    return (
        <div className='mt-14 ml-10 space-y-3  mb-10'>
            <div>
                <h2 className='text-3xl font-medium my-10 '>Route Groups</h2>
                <p>In the app directory, nested folders are normally mapped to URL paths. However, you can<br /> mark a folder as a Route Group to prevent the folder from being included in the route's URL path.
                </p>
                <p>This allows you to organize your route segments and project files into logical groups without<br /> affecting the URL path structure.
                </p>
                <p>Route groups are useful for:
                </p>
                <p>- <span className='text-blue-700'>rganizing routes</span>into groups e.g. by site section, intent, or team.
                </p>
                <p>- Enabling <span className='text-blue-700'>nested layouts</span> in the same route segment level:
                </p>
                <p className='text-blue-700'>     - Creating multiple nested layouts in the same segment, including multiple root layouts
                </p>
                <p className='text-blue-700'>      - Adding a layout to a subset of routes in a common segment
                </p>
                <div className="divider"></div>
            </div>
            <div className='space-y-3 '>
                <h2 className='text-2xl font-medium my-8 '>Convention</h2>
                <p>A route group can be created by wrapping a folder's name in parenthesis: (folderName)                </p>

                <h2 className='text-2xl font-medium my-10 mt-8 '>Example</h2>
                <p className='font-bold text-base'>Organize routes without affecting the URL path
                </p>
                <p>To organize routes without affecting the URL, create a group to keep related routes together.<br /> The folders in parenthesis will be omitted from the URL (e.g. (marketing) or (shop)).

                </p>
                <Image
                    src={img1}>
                </Image>
                <p>Even though routes inside (marketing) and (shop) share the same URL hierarchy, you can create   <br />la differentl ayout for each group by adding a layout.js file inside their folders.

                </p>
                <Image
                    src={img2}>
                </Image>
            </div>
            <div className='space-y-3 '>
                <h2 className='text-2xl font-medium my-8 '>Opting specific segments into a layout
                </h2>
                <p>To opt specific routes into a layout, create a new route group (e.g. (shop)) and move the<br /> routes that share the same layout into the group (e.g. account and cart). The routes<br /> outside of the group will not share the layout (e.g. checkout).
                </p>
                <Image
                    src={img3}>
                </Image>
                <h2 className='text-2xl font-medium my-8 '>Creating multiple root layouts
                </h2>
                <p>To create multiple root layouts, remove the top-level layout.js file, and add a <br />layout.js file inside each route groups. This is useful for partitioning an application into <br />lsections that have a completely different UI or experience. The html and body tags need to be added<br />l to each root layout.</p>
                <Image
                    src={img4}>
                </Image>
                <p>In the example above, both (marketing) and (shop) have their own root layout.

                </p>
            </div>
            <div className='border border-solid p-5 w-[650px]'>
                <h2 className='font-bold'>good to know</h2>
                <p>-The naming of route groups has no special significance other, than for organization. They <br/>do not affect the URL path.
                    -Routes that include a route group should ,not resolve to the same <br/>URL path as other routes For example, since route groups don't affect URL structure, (marketing)/about/page.js,<br/> and (shop)/about/page.js would both resolve to /about and cause an error.
                    -If you use multiple<br/>  root layouts without a top-level ,layout.js file, yourhome page.js file should be defined,in one of the route groups,<br/>  For example: app/(marketing)/page.js.
                    -Navigating across multiple root layouts will cause, a full page load (as <br/>opposed to a client-side navigation). For navigating from /cart that uses app/(shop)/layout.js to /blog that uses,<br/> app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.</p>
            </div>
        </div>
    );
};

export default GroupRoute;