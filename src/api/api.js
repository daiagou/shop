import axios from 'axios';
import $ from "jquery";

let base = 'http://10.100.70.147:8080/csbService';


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

export const saveOrUpdateAdsChannel = params => {
    return $.ajax({
        type: 'post',
        url: `${base}/csb/saveOrUpdateAdsChannel`,
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(params),
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: 'json'
    }).then(res => res);
};



