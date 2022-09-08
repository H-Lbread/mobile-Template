import request from "@/utils/request";
var URL = '';

// post API
export function xxx(data) {
    return request({
        url: URL + "/",
        method: "post",
        data: data,
    });
}
// get API
export function xxx(params) {
    return request({
        url: URL + "/",
        method: "get",
        params: params,
    });
}