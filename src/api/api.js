import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "api-key": "a0a3a0e7-b75a-4b34-8e9c-87ec0082acf1" },
});

export const usersAPI = {
    getUsers: async (currentPage, pageSize) => {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        });
        return response.data;
    },
    follow: (userId) => instance.post(`follow/${userId}`),
    unfollow: (userId) => instance.delete(`follow/${userId}`),
    getProfile: (userId) => profileAPI.getProfile(userId),
};

export const profileAPI = {
    getProfile: (userId) => instance.get(`profile/${userId}`),
    getStatus: (userId) => instance.get(`profile/status/${userId}`),
    updateStatus: (status) => instance.put(`profile/status`, { status }),
    savePhoto: async (photoFile) => {
        const formData = new FormData();
        formData.append("image", photoFile);
        return await instance.put(`profile/photo`, formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
    },
};

export const authAPI = {
    auth: () => instance.get(`auth/me`),
    login: (email, password, rememberMe = false, captcha = null) =>
        instance.post(`auth/login`, { email, password, rememberMe, captcha }),
    logout: () => instance.delete(`auth/login`),
};

export const securityAPI = {
    getCaptchaUrl: () => instance.get(`security/get-captcha-url`),
};
