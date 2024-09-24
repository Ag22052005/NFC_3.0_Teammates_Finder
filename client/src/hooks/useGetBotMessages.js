import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetBotMessages = () => {
	const [loading, setLoading] = useState(false);

		const botreply = async ({senderMsg}) => {
      console.log('raj');
			setLoading(true);
      console.log('senderMsg',senderMsg);
			try {
        const res = await fetch("http://localhost:5000/api/message/bot-reply", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({senderMsg}),
				});
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				console.log(data);
				return data;
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

	return { botreply, loading };
};
export default useGetBotMessages;