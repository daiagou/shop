import axios from 'axios';
import $ from "jquery";

let base = 'http://10.100.70.147:8080/csbService';


export const cancelOrder = params => {
    return $.ajax({
        type: 'get',
        url: `${base}/csb/cancelOrder`,
        data: params,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json',
        crossDomain: true
    }).then(res => res);
};
export const queryOrdersByPhone = params => {
    return $.ajax({
        type: 'get',
        url: `${base}/csb/queryOrdersByPhone`,
        data: params,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json',
        crossDomain: true
    }).then(res => res);
};
export const savePhone = params => {
    return $.ajax({
        type: 'get',
        url: `${base}/csb/savePhone`,
        data: params,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json',
        crossDomain: true
    }).then(res => res);
};
export const queryGoodsInfosList = params => {
    return $.ajax({
        type: 'get',
        url: `${base}/csb/queryGoodsInfosList`,
        data: params,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json',
        crossDomain: true
    }).then(res => res);
};
export const buy = params => {
    return $.ajax({
        type: 'post',
        url: `${base}/csb/buy`,
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(params),
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: 'json'
    }).then(res => res);
};



