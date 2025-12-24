import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";

export default function Home() {
    return (
        <div className="home-container">
            <PageHeading title="Aura Beauty Cosmotics">
                <p className="page-heading-paragraph">
                    Luxury skincare that nourishes your skin from within, designed for
                    radiant beauty and lasting results.
                </p>
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}