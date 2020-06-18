import axios from "axios"

export const request = (name, k, ...v) => {
    switch (name) {
        case 'goods':
            // 传入商品id
            let res2 = axios({
                url: `/goods/relative`,
                method: "post",
                params: {
                    goodsId: k,
                    ...v
                }
            }).then(function (res) {
                if (res.status == 200) {

                    return res

                } else {
                    alert("获取失败！");
                }
            })
            return res2
    
        }
}

export default {

    request
}