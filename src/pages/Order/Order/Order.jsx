import { useState } from 'react';
import orderCover from '../../../assets/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useItem from '../../../hooks/useItem';
import ItemCard from '../../../components/ItemCard/ItemCard';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [item] = useItem();

  const cricket = item.filter((item) => item.category === 'cricket');
  const football = item.filter((item) => item.category === 'football');
  const tennis = item.filter((item) => item.category === 'tennis');
  const volleyball = item.filter((item) => item.category === 'volleyball');
  const offered = item.filter((item) => item.category === 'offered');

  return (
    <div>
      <Cover img={orderCover} title={'Order Item'}></Cover>

      <div className="flex justify-center mt-8">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex bg-gray-200 p-4">
  <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
    Cricket
  </Tab>
  <div className="ml-4"></div> {/* Adjust the margin as needed */}
  <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
    Football
  </Tab>
  <div className="ml-4"></div> {/* Adjust the margin as needed */}
  <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
    Tennis
  </Tab>
  <div className="ml-4"></div> {/* Adjust the margin as needed */}
  <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
    Volleyball
  </Tab>
</TabList>


          <div className="p-4">
            <TabPanel>
              {cricket.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </TabPanel>
            <TabPanel>
              {football.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </TabPanel>
            <TabPanel>
              {tennis.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </TabPanel>
            <TabPanel>
              {volleyball.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
