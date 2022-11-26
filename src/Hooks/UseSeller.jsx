const { useEffect } = require("react");
const { useState } = require("react")

const UseSeller = (email) => {
    const [isSeller, setisSeller] = useState(false);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/seller/${email}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setisSeller(result.IsSeller);
                    setLoading(false);
                })
        }
    }, [email])
    return [isSeller, isLoading]
}
export default UseSeller;

