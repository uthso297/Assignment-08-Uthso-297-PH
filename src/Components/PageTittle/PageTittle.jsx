import { Helmet , HelmetProvider} from "react-helmet-async";
import PropTypes from "prop-types";
const PageTittle = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            </HelmetProvider>
    );
};
PageTittle.propTypes = {
    title: PropTypes.string
}

export default PageTittle;