/**
 * @author {{author}}
 * @date {{date}}
 * @descriptions: {{descriptions}}的models
 */
export default {

    namespace: '{{namespace}}',

    state: {
        // 表格数据
        tableData: {},
        // 表格配置
        tableConfig: {
            pagenum: 0
        }
    },

    effects: {
        // 获取表格列表数据
        * getTableData({payload}, {call, put, select}) {
            // 获取列表配置
            let tableConfig = yield select(state => state.{{namespace}}.tableConfig);
            // 判断是否跳转翻页
            if (payload.pagenum) {
                // 修改配置
                tableConfig.pagenum = payload.pagenum;
            }
            if (Object.keys(payload).length > 0) {
                tableConfig = {...tableConfig, ...payload};
            }
            // 获取数据
            const tableData = yield call(getCrossSysList, tableConfig);
            yield put({
                type: 'save',
                payload: {
                    tableData
                }
            });
            // 获取完成后，保存数据
            yield put({
                type: 'save',
                payload: {tableConfig},
            });
        },
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
};
