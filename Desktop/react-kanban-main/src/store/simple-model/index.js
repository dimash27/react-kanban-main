import { thunk, action } from 'easy-peasy';
//import { fetchJson } from 'Utils/data-utils';
import mockData from '../../../static/mockData/mockData.js';

const simpleModel = {
    data: null,
    isLoading: false,
    isError: false,
    setInitialState: action((state, payload) => {
        state.data = payload;
    }),
    fetchInitialState: thunk(async (actions, payload, {getState}) => {
        if (getState().data === null) {
            actions.dataIsLoadingStart();
            //const data = await fetchJson('static/mockData/mockData.json', { params: {}});
            const data = mockData
            if (data) {
                actions.setInitialState(data)
                actions.dataIsLoadingSuccess();
            } else {
                actions.dataIsLoadingFail();
            }
        }
    }),
    updateData: action((state, payload) => {
        let array = []
        const data = state.data
        console.log(payload);

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const editedAt = today.toISOString()

        if (payload.hasOwnProperty('name') && payload.hasOwnProperty('id')) {
            array = [
                ...data.map((dataItem) =>
                  dataItem.title === "Backlog"
                    ? {
                        ...dataItem,
                        issues: [
                          ...dataItem.issues,
                          {
                            id: payload.id,
                            name: payload.name,
                            desc: 'Enter your desc here',
                            createdAt: editedAt,
                            editedAt: editedAt
                          },
                        ],
                      }
                    : dataItem
                ),
            ]
        } else if (payload.hasOwnProperty('id') && payload.hasOwnProperty('index')) {
            array = [
                ...data.map((dataItem, currentIndex) => {
                    if (currentIndex === payload.index) {
                    return {
                        ...dataItem,
                        issues: [
                        ...dataItem.issues,
                        data[payload.index - 1].issues.find((issue) => issue.id === payload.id),
                        ],
                    };
                    }
                    if (currentIndex === payload.index - 1) {
                    return {
                        ...dataItem,
                        issues: dataItem.issues.filter((issue) => issue.id !== payload.id),
                    };
                    }
                    return dataItem;
                }),
            ]
        } else if (payload.hasOwnProperty('uid') && payload.hasOwnProperty('name')) {
            array = [
                ...data.map((dataItem, currentIndex) => {
                    if (dataItem.issues) {
                        return {
                            ...dataItem,
                            issues: dataItem.issues.map(issue => issue.id === payload.uid? {...issue, name : payload.name, editedAt}: issue),
                        };
                    }
                    return dataItem;
                }),
            ]
        } else if (payload.hasOwnProperty('uid') && payload.hasOwnProperty('desc')) {
            array = [
                ...data.map((dataItem, currentIndex) => {
                    if (dataItem.issues) {
                        return {
                            ...dataItem,
                            issues: dataItem.issues.map(issue => issue.id === payload.uid? {...issue, desc : payload.desc, editedAt}: issue),
                        };
                    }
                    return dataItem;
                }),
            ]
        }
        else {
            array = [...data]
        }

        state.data = [...array]
    }),
    dataIsLoadingStart: action((state, payload) => {
        state.isLoading = true
        state.isError = false
    }),
    dataIsLoadingSuccess: action((state, payload) => {
        state.isLoading = false
        state.isError = false
    }),
    dataIsLoadingFail: action((state, payload) => {
        state.isLoading = false
        state.isError = true
    }),
}

export default simpleModel