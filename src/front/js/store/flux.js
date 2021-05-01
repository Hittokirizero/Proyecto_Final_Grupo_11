const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			courses: []
		},
		actions: {
			courses: async () => {
				const url = "https://3001-azure-giraffe-08edla7e.ws-us04.gitpod.io/api/tutorias";
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
