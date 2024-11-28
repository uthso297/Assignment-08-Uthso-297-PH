import PageTittle from "../PageTittle/PageTittle";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Statistics = () => {

    const data = [
        {
            product_title: 'Galaxy S21',
            price: 799.99,
        },
        {
            product_title: 'Dell XPS 13',
            price: 1199.99,
        },
        {
            product_title: 'iPhone 13',
            price: 999.99,
        },
        {
            product_title: 'Google Pixel 6',
            price: 599.99,
        },
        {
            product_title: 'Samsung Galaxy Watch 4',
            price: 249.99,
        },
        {
            product_title: 'OnePlus 9',
            price: 729.99,
        },
        {
            product_title: 'Sony Xperia 1 III',
            price: 1299.99,
        },
        {
            product_title: 'Motorola Edge 20',
            price: 499.99,
        },
        {
            product_title: 'MacBook Air M1',
            price: 999.99,
        },
        {
            product_title: 'Apple Watch Series 7',
            price: 399.99,
        }
    ];

    return (
        <div>
            <PageTittle title="Statistics | Gadget Heaven"></PageTittle>
            <div className="bg-[#9538E2] py-8 px-32 space-y-4">
                <p className="text-5xl text-white text-center">Statistics</p>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
               
            </div>

        
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" tick={{ fontSize: 12 }}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" barSize={20} fill="#413ea0" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
