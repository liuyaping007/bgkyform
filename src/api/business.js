import request from "../utils/businessservice";
///获取对象
export function testApi() {
  return request({
    url: "test", ///测试Api地址
    method: "post",
    data: {},
  });
}
