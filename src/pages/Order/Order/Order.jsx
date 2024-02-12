import { useState } from 'react';
import orderCover from '../../../assets/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useItem from '../../../hooks/useItem';
import ItemCard from '../../../components/ItemCard/ItemCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [item] = useItem();

  const {category} = useParams();

  console.log(category);
  const cricket = item.filter((item) => item.category === 'cricket');
  const football = item.filter((item) => item.category === 'football');
  const tennis = item.filter((item) => item.category === 'tennis');
  const volleyball = item.filter((item) => item.category === 'volleyball');

  return (
    <div>
      <Cover img={orderCover} title={'Order Item'}></Cover>

      <div className="flex justify-center mt-8 ">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>


          <TabList className="flex bg-gray-200 p-4 gap-6 lg:ml-4 mb-8 lg:mr-4" >

            <Tab className="py-2 px-4 lg:ml-52 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
              Cricket
            </Tab>



            <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
              Football
            </Tab>



            <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
              Tennis
            </Tab>


            <Tab className="py-2 px-4 cursor-pointer text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500">
              Volleyball
            </Tab>

          </TabList>


          <div className="p-4 mb-10">
            <TabPanel>
              <OrderTab items={cricket}></OrderTab>
            </TabPanel>
            <TabPanel>

              <OrderTab items={football}></OrderTab>

            </TabPanel>
            <TabPanel>

              <OrderTab items={tennis}></OrderTab>

            </TabPanel>
            <TabPanel>

              <OrderTab items={volleyball}></OrderTab>

            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
