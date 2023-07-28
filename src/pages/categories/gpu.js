import RootLayout from '@/components/Layouts/RootLayout';
import ComponentCard from '@/components/Ui/componentCard';
import React from 'react';

const Gpu = ({products}) => {
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products?.map(product => <ComponentCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default Gpu;


Gpu.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/products`)
    const productsData = await res.json()
    const data = productsData.data.filter(products => products.category === 'GPU')


    return {
        props: { products: data }

    }
}