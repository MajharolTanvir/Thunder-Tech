import RootLayout from '@/components/Layouts/RootLayout';
import ComponentCard from '@/components/Ui/componentCard';
import React from 'react';

const StorageDevice = ({products}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products?.map(product => <ComponentCard key={product?._id} product={product} />)
            }
        </div>
    );
};

export default StorageDevice;


StorageDevice.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}


export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:5000/products`)
    const productsData = await res.json()
    const data = productsData.data.filter(products => products.category === 'Storage')


    return {
        props: { products: data }

    }
}