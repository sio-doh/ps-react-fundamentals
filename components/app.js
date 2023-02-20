import Banner from "./banner";
import HouseList from "./houseList";

const App = () => { 
    const jsx = <div>Hi</div>;

    return (
        <>
            {jsx}
            <Banner>
                <div>Providing houses all over the world</div>
            </Banner>
            <HouseList />
        </>
    );
};

export default App;