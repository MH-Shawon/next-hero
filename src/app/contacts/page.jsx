import Link from 'next/link';
import React from 'react';

const contactsPage = () => {
    return (
        <div className='p-6 '>
           <h5>this is my contacts page</h5> 
            <button className='mt-3 '>
                <Link className="px-4 py-2 text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600" href='contacts/specialContact'>Special Contact</Link>
           </button>
        </div>
    );
};

export default contactsPage;