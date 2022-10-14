import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: "Survey 1",
        slug: "survey1",
        status: "draft",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
        description: "This is my firstd Survey ",
        created_at: "2022-10-14 10:00:00",
        updated_at: "2022-10-14 10:00:00",
        expire_date: "2022-10-24 10:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                desription: null,
                data: {
                    options: [
                        {
                            uuid: "ff20b796-4b8e-11ed-bdc3-0242ac120002",
                            text: "Georgia",
                        },
                        {
                            uuid: "862a7a88-d09a-4467-8bc5-d2862019a3ad",
                            text: "Germany",
                        },
                        {
                            uuid: "7a9798cc-0c4f-4436-bcc6-3ef94573064f",
                            text: "India",
                        },
                        {
                            uuid: "e8ed3ae6-1dfe-42f2-bbd1-09178767a4c8",
                            text: "USA",
                        },
                        {
                            uuid: "e8ed3ae6-1dfe-42f2-bbd1-09178767a4c8",
                            text: "UK",
                        },
                    ],
                },
            },{
                id: 2,
                type: "checkbox",
                question: "Which language do you want to see ?",
                desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis neque nisl. Maecenas viverra pretium semper",
                data: {
                    options: [
                        {
                            uuid: "19f479c5-861e-49de-b695-f828fb9ded8b",
                            text: "JavaScript",
                        },
                        {
                            uuid: "266f2686-c14c-4762-bff6-b28d93a6a9a1",
                            text: "HTML",
                        },
                        {
                            uuid: "b8ec2067-8fd0-4a55-a657-42bb1997c0e3",
                            text: "PHP",
                        },
                        {
                            uuid: "9a0d4448-6461-4c57-9143-114531e29c88",
                            text: "Eveything",
                        },
                        {
                            uuid: "e8ed3ae6-1dfe-42f2-bbd1-09178767a4c8",
                            text: "Anything",
                        },
                    ],
                },
            },{
                id: 3,
                type: "checkbox",
                question: "Which php framework do you like?",
                desription: "Quisque faucibus vulputate turpis, et dictum ante ultrices dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut bibendum vulputate ipsum, vitae ",
                data: {
                    options: [
                        {
                            uuid: "8bcdc3af-b067-40cd-b350-ea61478a6f0b",
                            text: "Laravel",
                        },
                        {
                            uuid: "80af0737-8158-4f32-aebf-589aec4e83af",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "13ab78bb-f1fa-4fbd-af06-43c0922eb245",
                            text: "Symfony",
                        },
                        {
                            uuid: "b1022f5d-200a-4b53-9144-9a2a4fe77548",
                            text: "Ceva",
                        },
                        {
                            uuid: "c1f67023-beba-4555-bdf9-d506860b94ad",
                            text: "Altceva",
                        },
                    ],
                },
            },{
                id: 4,
                type: "radio",
                question: "Which laravel framework do you love?",
                desription: "Quisque faucibus vulputate turpis, et dictum ante ultrices dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut bibendum vulputate ipsum, vitae ",
                data: {
                    options: [
                        {
                            uuid: "5f8e9445-2e11-4568-83fa-5f9d41277ee8",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "c458af71-04c4-414b-8a4f-8f73ece2a241",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "35dbf30e-f34a-48e2-9123-d42c1ce76cf9",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "0afd4a73-0bac-4c9e-90ff-eb749236c3d6",
                            text: "Laravel 8",
                        },
                        {
                            uuid: "7d28f7ea-7004-424f-bd7a-f616da7c8a77",
                            text: "Laravel 9",
                        },
                    ],
                },
            },{
                id: 5,
                type: "text",
                question: "Favorite youtube channel?",
                desription: null,
                data: {
                    },
            },{
                id: 6,
                type: "textarea",
                question: "Favorite?",
                desription: null,
                data: {
                    },
            },
        ],
    },{
        id: 200,
        title: "Survey 2",
        slug: "survey2",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        description: "This is my second Survey ",
        created_at: "2022-10-14 10:00:00",
        updated_at: "2022-10-14 10:00:00",
        expire_date: "2022-10-24 10:00:00",
        questions: []
    },
    {
        id: 300,
        title: "Survey 3",
        slug: "survey3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        description: "This is my third Survey ",
        created_at: "2022-10-14 10:00:00",
        updated_at: "2022-10-14 10:00:00",
        expire_date: "2022-10-24 10:00:00",
        questions: []
    }
    ,
    {
        id: 400,
        title: "Survey 4",
        slug: "survey4",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        description: "This is my third Survey ",
        created_at: "2022-10-14 10:00:00",
        updated_at: "2022-10-14 10:00:00",
        expire_date: "2022-10-24 10:00:00",
        questions: []
    }
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text","select","radio","checkbox","textarea"],
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },

        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("logout");
                return response;
            });
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token);
        },
    },
    modules: {},
});

export default store;
