import { useCallback, useEffect, useState } from "react"
import supaClient from "../tools/supa-client";

export const useSession = () => {
	const [userInfo, setUserInfo] = useState({
		profile: null,
		session: null
	});

	const [channel, setChannel] = useState(null);

	useEffect(() => {
		supaClient.auth.getSession().then(({ data: { session } }) => {
			setUserInfo(info => ({ ...info, session }));
			supaClient.auth.onAuthStateChange((event, session) => {
				setUserInfo({ profile: null, session });
			});
		});
	}, []);

	useEffect(() => {
		if (userInfo.session?.user && !userInfo.profile) {
			const res = listenToUserProfileChanges(userInfo.session.user.id);
			console.log(res);
			res.then(newChannel => {
				if (channel) {
					channel.unsubscribe();
				}
				setChannel(newChannel);
			});
		} else if (!userInfo.session?.user) {
			channel?.unsubscribe();
			setChannel(null);
		}

	}, [userInfo.session]);

	const listenToUserProfileChanges = userId => {
		const { data } = supaClient.from('user_profiles').select('*').eq('id', userId);

		if (data?.[0]) {
			setUserInfo(info => ({ ...info, profile: data[0] }));
		}

		return supaClient
			.channel(`public:user_profiles`)
			.on('postgrest_changes', {
				event: '*',
				schema: 'public',
				table: 'user_profiles',
				filter: `user_id=eq.${userId}`,
			}, payload => {
				setUserInfo(info => ({ ...info, profile: payload.new }));
			})
			.subscribe();
	};

	return userInfo;
}