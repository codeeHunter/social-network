const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
    messages: [
        { id: 1, message: "New message" },
        { id: 2, message: "New message" },
        { id: 3, message: "New message" },
        { id: 4, message: "New message" },
        { id: 5, message: "New message" },
    ],
    dialogs: [
        {
            id: 1,
            name: "Andrew",
            message: "Andrew",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album",
        },
        {
            id: 2,
            name: "Andrew",
            message: "Andrew",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album",
        },
        {
            id: 3,
            name: "Andrew",
            message: "Andrew",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album",
        },
        {
            id: 4,
            name: "Andrew",
            message: "Andrew",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album",
        },
        {
            id: 5,
            name: "Andrew",
            message: "Andrew",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album",
        },
        {
            id: 6,
            name: "Andrew",
            message: "Andrew",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album",
        },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const body = action.newMessageElement;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 2,
                        message: body,
                    },
                ],
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageElement) => ({
    type: ADD_MESSAGE,
    newMessageElement,
});

export default dialogsReducer;
