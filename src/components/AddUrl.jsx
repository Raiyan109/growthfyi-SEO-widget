import { useState } from "react";
import axios from "axios";

const AddUrl = () => {
    const [url, setUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://api.dataforseo.com/v2/on_page', {
                url: url,
                /* Include other necessary parameters for the API */

            });
            console.log(response)
            return response.data; // Handle the API response data as needed
        } catch (error) {
            // Handle API request errors
            console.error('Error fetching data from DataForSEO:', error);
            throw error;
        }
    }




    return (
        <div className=" mx-auto">
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="m-4 flex">
                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Website URL" />
                    <button type="submit" className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Get a free SEO Audit Report</button>
                </form>
            </div>
        </div>
    );
};

export default AddUrl;