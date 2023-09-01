import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="md:flex justify-evenly items-center  my-24 bg-amber-300 py-8 ">
        <div className="bg-amber-500 p-12 rounded-lg">
          <h1 className="font-bold text-3xl">ProgNexus</h1>
          <h2 className="font-semibold text-2xl my-6">Admin Dashboard</h2>
          <Link href="/">
            <button className="text-lg btn btn-outline btn-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Go To Home
            </button>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold text-3xl text-center">
            Total Users : 5 people
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="font-bold text-xl">
                  <th></th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Language Topic</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Al Mamun</td>
                  <td>Tangail</td>
                  <td>MongoDB</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Jakaria</td>
                  <td>Mirpur</td>
                  <td>React</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Sumaiya</td>
                  <td>Farmgate</td>
                  <td>Node</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Roksana</td>
                  <td>Green Road</td>
                  <td>Python</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Samanta</td>
                  <td>Narayanganj</td>
                  <td>C++</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
