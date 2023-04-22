import { useRouter } from "next/router";

const Podcast = () => {
    const router = useRouter();
    const {pid} = router.query;

    return(
        <div>
            Podcast: {pid}
        </div>
    );
}

export default Podcast;