import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const StorageDevice = () => {
    return (
        <div>
            <h1>This is storage device</h1>
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