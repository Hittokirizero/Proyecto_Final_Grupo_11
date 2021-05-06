const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			courses: []
		},
		actions: {
			courses: async () => {
				const url = "https://3001-salmon-kingfisher-sg2585zy.ws-us03.gitpod.io/api/tutorias";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ courses: data });
			},
			otracosa: () => {
				return 1;
			}
		}
	};
};

export default getState;
