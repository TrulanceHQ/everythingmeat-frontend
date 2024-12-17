import { FaUpload, FaBell,FaFacebook,FaWhatsapp,FaInstagram,FaTag,FaDollarSign} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <div className="bg-red-700 text-white p-4 flex justify-between items-center">
        <div className="flex space-x-10 ml-8">
          <span>Call Us: +234 9012345578</span>
          <span>Welcome back our dear customer</span>
          <span>Follow Us |</span>
          <FaFacebook className="w-6 h-6 text-white" />
          <FaWhatsapp className="w-6 h-6 text-white" />
          <FaInstagram className="w-6 h-6 text-white" />
          <FaTwitter className="w-6 h-6 text-white"/>   
        </div>
        </div>
      <div  className="bg-white text-black p-4 flex justify-between items-center">
      <img
              src="/everything_meat_logo.png"
              alt="everythingmeat logo"
            />
        <div className="flex items-center space-x-6">
          <div>
          <p className='text-s'>Balance: </p>
          <p className="font-bold text-xl text-red-700">₦150,000</p>
          </div>
          <div className="flex items-center space-x-2">
          <img
              src="/Group 26.png"
              alt="menu icon"
              className="w-8 h-8 "
            />
          <FaBell className="w-6 h-6 text-red-700" />
          
            <img
              src="/Ellipse 62.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
      

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Profile Section */}
        <div className="flex items-center space-x-6 p-6 ">
          <img
            src="/Ellipse 62.png"
            alt="User Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">Hello Tolu</h2>
            <p>How can we help you today?</p>
          </div>
          <div className="ml-auto flex space-x-4 " >
            <div className=' mx-4'>
            <button className="px-2 py-2  border border-red-700 rounded-lg">
              Upload Product
              <FaUpload className="w-3 h-3 text-red-700" />
            </button>
            </div>
            <div  className='bg-red'>
            <button className="px-2 py-2 bg-red-700 text-white rounded-lg">
              Withdraw
              <FaDollarSign className="w-3 h-3 border border-white rounded-lg text-white" />
           </button>
           </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Total Sales', value: '₦150,000', change: '8.4', color: 'green', icon: <FaTag className="text-green-500 w-8 h-8" />, },
            { label: 'Total Withdrawn', value: '₦50,000', change: '1.5', color: 'green' },
            { label: 'Total Product', value: '13', change: '4.1', color: 'green' },
            { label: 'Available Product', value: '7', change: '-2.5', color: 'red' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md flex items-center"
            >
              <div>
                <h3 className="text-sm">{stat.label}</h3>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
              <span
                className={`ml-auto text-sm ${
                  stat.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change > 0 ? `+${stat.change}` : stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* Product List Table */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Product List</h3>

          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                {[
                  'Product ID',
                  'Product Name',
                  'Gross Price',
                  'Net Price',
                  'Total Slot',
                  'Available Slot',
                  'Status',
                ].map((header, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-4 py-2 bg-gray-200 text-left"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: '12357DA',
                  name: 'Live Goat',
                  gross: '₦100,000',
                  net: '₦150,000',
                  total: 4,
                  available: 0,
                  status: 'Completed',
                },
                {
                  id: '12345AZ',
                  name: 'Live Cow',
                  gross: '₦300,000',
                  net: '₦370,000',
                  total: 4,
                  available: 4,
                  status: 'Pending',
                },
                {
                  id: '23768EQ',
                  name: 'Frozen Chicken Wings',
                  gross: '₦70,000',
                  net: '₦85,000',
                  total: 5,
                  available: 3,
                  status: 'Pending',
                },
                {
                  id: '67914XW',
                  name: 'Live Goat',
                  gross: '₦100,000',
                  net: '₦150,000',
                  total: 4,
                  available: 1,
                  status: 'Completed',
                },
                {
                  id: '34791ZB',
                  name: 'Frozen Chicken Laps',
                  gross: '₦100,000',
                  net: '-----------------',
                  total: 0,
                  available: 0,
                  status: 'Cancel',
                },
                {
                  id: '41235FG',
                  name: 'Live Goat',
                  gross: '₦150,000',
                  net: '₦170,000',
                  total: 4,
                  available: 1,
                  status: 'Pending',
                },
                {
                  id: '81235HY',
                  name: 'Frozen Full Chicken',
                  gross: '₦120,000',
                  net: '₦150,000',
                  total: 4,
                  available: 0,
                  status: 'Completed',
                },
              ].map((product, index) => (
                <tr key={index}>
                  {Object.values(product).map((value, idx) => (
                    <td
                      key={idx}
                      className="border border-gray-300 px-4 py-2 text-sm"
                    >
                      {value}
                    </td>
                  ))}
                  <td
                    className={`border border-gray-300 px-4 py-2 text-sm ${
                      product.status === 'Completed'
                        ? 'text-green-500'
                        : product.status === 'Pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {product.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
