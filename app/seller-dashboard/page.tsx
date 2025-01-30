import { FaFileUpload,FaArrowUp,FaArrowDown,FaTag,FaBell,FaFacebook,FaWhatsapp,FaInstagram,FaDollarSign, FaFilter, FaAngleDown} from 'react-icons/fa';
import { FaCow, FaTwitter, FaWallet } from 'react-icons/fa6';

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
          <div className="flex space-x-4 ml-8"> 
  <div className="mx-4">
    <button className="px-2 py-2 border border-red-700 rounded-lg flex items-center space-x-2">
      <span>Upload Product</span>
      <FaFileUpload className="w-3 h-3 text-red-700" />
    </button>
  </div>
  <div>
    <button className="px-2 py-2 bg-red-700 text-white rounded-lg flex items-center space-x-2">
      <span>Withdraw</span>
      <FaDollarSign className="w-3 h-3 text-white" />
      
    </button>
  </div>
</div>
</div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 mt-6">
  {[
    { label: 'Total Sales', value: '₦150,000', change: '8.4', color: 'green', icon: <FaTag className="text-red-300 w-5 h-5" /> },
    { label: 'Total Withdrawn', value: '₦50,000', change: '1.5', color: 'green', icon: <FaWallet className="text-green-300 w-5 h-5" /> },
    { label: 'Total Product', value: '13', change: '4.1', color: 'green', icon: <FaCow className="text-bue-300 w-5 h-5" /> },
    { label: 'Available Product', value: '7', change: '-2.5', color: 'red', icon: <FaCow className="text-orange-300 w-5 h-5" /> },
  ].map((item, index) => (
    <div
      key={index}
      className={`p-6 rounded-lg shadow-md border-t-4 border-${item.color}-500 bg-white flex flex-col items-center text-center`}
    >
      <div className="mb-4">
        {item.icon}
      </div>
      <div>
        <p className="text-lg font-semibold flex items-center justify-center">
          {item.label} 
          {parseFloat(item.change) > 0 ? (
            <FaArrowUp className="ml-2 w-4 h-4 transition-colors duration-300 text-green-500 hover:text-green-700" />
          ) : (
            <FaArrowDown className="ml-2 w-4 h-4 transition-colors duration-300 text-red-500 hover:text-red-700" />
          )}
        </p>
        <p className="text-2xl font-bold">{item.value}</p>
        <p className={`text-sm ${item.color === 'red' ? 'text-red-500' : 'text-green-500'}`}>
          {item.change}%
        </p>
      </div>
    </div>
  ))}
</div>

<div className="flex justify-between items-center mt-6 mb-0">
  <h3 className="text-lg font-bold">Product List</h3>
  
  <div className="flex items-center">
    <p className="flex items-center mr-4">
      <FaFilter className="w-4 h-4 mr-2" />
      Filter
    </p>
    <button className="px-4 py-2 border border-gray-300 text-gray-500 rounded-lg flex items-center">
      Name
      <FaAngleDown className="w-4 h-4 text-gray-500 ml-2" />
    </button>
  </div>
</div>


  <table className="min-w-full border-collapse border border-gray-300 bg-white">
    <thead className="bg-white">
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
            className="border border-gray-300 px-4 py-2 text-left bg-white"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="bg-white">
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
        <tr key={index} className="bg-white">
          <td className="border border-gray-300 px-4 py-2 text-sm">{product.id}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">{product.name}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">{product.gross}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">{product.net}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">{product.total}</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">{product.available}</td>
          <td
            className={`border border-gray-300 px-4 py-2 text-sm ${
              product.status === 'Completed'
                ? 'text-green-500 bg-green-100 rounded-lg p-1'
                : product.status === 'Pending'
                ? 'text-yellow-500 bg-yellow-100 rounded-lg p-1'
                : 'text-red-500 bg-red-100 rounded-lg p-1'
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
      
    
  );
}
