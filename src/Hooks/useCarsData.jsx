import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCarsData = () => {
    const axiosSecure = useAxiosSecure()   
    const {data:cars =[], isLoading, refetch, error} = useQuery({
        queryKey: ['cars'], 
        queryFn: async () => {
            const res = await axiosSecure.get('/cars')
            return res.data
        }
    })

    return {cars, isLoading, refetch, error }
};

export default useCarsData;