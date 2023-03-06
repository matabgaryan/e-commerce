import {useNavigationHook} from "../../../hooks/useNavigation";
import {ROUTES} from "../../../configs/routes";
import {Container} from "../../../components/container/Container";
import {AppButton} from "../../../components/buttons/BaseButton";
import {BUTTON_VARIANTS} from "../../../constants/appConstants";
import Product from '../../../assets/images/product.png'
import Product1 from '../../../assets/images/products/product1.svg'
import Product2 from '../../../assets/images/products/product2.svg'
import Product3 from '../../../assets/images/products/product3.svg'
import {ProductsList} from "../Products/components/ProductsList";
import {Products} from "../Products";

const HomePage = () => {
    const {handleNavigate} = useNavigationHook();

    return (
        <Container>
            <div className="flex flex-col  pt-12">
                <div className="flex flex-row justify-between items-center mb-7">
                    <h1 className="text-2xl text-black">Samurai King Resting</h1>
                    <AppButton
                        variant={BUTTON_VARIANTS.dark}
                        onClick={() => handleNavigate(ROUTES.shop)}
                        text="Add To Cart"
                        className="w-64 h-12 text-xl	"
                    />
                </div>
                <div className="relative">
                    <img alt="Photo of the day" src={Product}/>
                    <div className="absolute bottom-0 flex justify-center w-72 h-16 bg-white">
                        <p className="text-lg font-bold">Photo of the day</p>
                    </div>
                </div>
                <div className="mt-12 border-b-gray-400 border-b-4">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 pb-16">
                        <div
                            className="">
                            <h1 className="text-xl mb-2">About the Samurai King Resting</h1>
                            <h2 className="text-darkGrey mb-3">Pets</h2>
                            <p className="text-xs text-darkGrey mb-4">
                                So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder

                            </p>
                            <p className="text-xs text-darkGrey">
                                text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.

                            </p>
                        </div>
                        <div
                            className="flex flex-col text-right	">
                            <h1 className="text-xl mb-7 ">People also buy</h1>
                            <div className="flex gap-3 flex-row flex-row-reverse">
                                <img alt="Product 1" src={Product1}/>
                                <img alt="Product 1" src={Product2}/>
                                <img alt="Product 1" src={Product3}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Products />
            </div>
        </Container>

    );
};

export default HomePage;
