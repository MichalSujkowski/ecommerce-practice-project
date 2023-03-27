import {loadStripe} from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51MoTfwLRLJABV7x0OE4pjYMOcYfXawimmK51sMMbTibmnlOfeVnKhsOUyo3xQOYxGDPGPx8rt199k0MOCGjyzHAS00vUJApw1e');
    }

    return stripePromise
}

export default getStripe;
