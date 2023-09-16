import CountryData from "../CountryData/CountryData";

const CounterDetail = (props) => {
    const {country, handleVisitedCountry,handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
            
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            >
 
            </CountryData> */}

            <CountryData {...props}></CountryData>
            
        </div>
    );
};

export default CounterDetail;