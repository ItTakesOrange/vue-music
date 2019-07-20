import { commonParams } from 'api/config'
import axios from 'axios'

export function getSongUrl (mid) {
  const url = '/api/getSongUrl'

  const data = Object.assign({}, commonParams, {
    '-': 'getplaysongvkey9947008924248009',
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    data: `{"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"2582863214","songmid":["${mid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}