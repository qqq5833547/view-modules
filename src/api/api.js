import http from '../utils/axios'
export default{ 
  list(params){
    return http.post(`/cms/v1/magazine/list`,params)
  },
  postLogin(params){
    return http.post(`/member/v1/token/getToken`,params)
  },
  // 期刊内容列表
  contentlist(params){
    return http.post(`/cms/v1/content/list`,params)
  },
  contentdetail(params){
    return http.post(`/cms/v1/content/detail`,params)
  },
  count(params){
    return http.post(`/cms/v1/magazine/count`,params)
  },
}