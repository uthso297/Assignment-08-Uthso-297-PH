
const Footer = () => {
    return (
        <div className="py-16 px-32 rounded-t-lg mx-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold pb-4">Gadget Heaven</h2>
                <p className="pb-4 opacity-70">Leading the way in cutting-edge technology and innovation</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <div className="text-center">
                    <h2 className="font-bold">Services</h2>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
                <div className="text-center">
                    <h2 className="font-bold">Company</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="text-center">
                    <h2 className="font-bold">Legal</h2>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;