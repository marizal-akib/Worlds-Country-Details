
const CountryData = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name} = country;
    return (
        <div>
            <p><small>Country Data: {name.common}</small></p>
        </div>
    );
};

export default CountryData;