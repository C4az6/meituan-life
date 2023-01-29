/* 
  基于axios封装HTTP模块
*/
import axios from 'axios';
import qs from 'qs';

class HTTP {
  axiosPost(opts) {
    axios({
      url: opts.url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(opts.data)
    }).then(res => {
      opts.success(res);
    }).catch(err => {
      opts.error(err)
    })
  }
}
export { HTTP };