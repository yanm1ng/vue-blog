import axios from 'axios'
import config from './config.js'
import 'es6-promise/auto'

const Cache = {
  get: (key) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}

function getListUrl() {
  let url = `https://api.github.com/repos/${config.repo}/contents/`
  if (config.path) url += config.path
  if (config.branch) url += `?ref=${config.branch}`
  return url
}

function getPostUrl(sha) {
  return `https://api.github.com/repos/${config.repo}/git/blobs/${sha}`
}

export default {
  getList() {
    if (Cache.has('list')) {
      return Promise.resolve(Cache.get('list'))
    } else {
      return axios.get(getListUrl())
        .then(res => res.data)
        .then(arr => {
          Cache.set('list', arr)
          return arr;
        })
    }
  },

  getDetail(sha) {
    const httpOpts = {
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }
    const cacheKey = 'detail.' + sha

    if (Cache.has(cacheKey)) {
      return Promise.resolve(Cache.get(cacheKey))
    } else {
      return axios.get(getPostUrl(sha), httpOpts)
        .then(res => res.data)
        .then(content => {
          Cache.set(cacheKey, content)
          return content
        })
    }
  },

  getIndex(sha) {
    const httpOpts = {
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }
    if (Cache.has('index')) {
      return Promise.resolve(Cache.get('index'))
    } else {
      return axios.get(getPostUrl(sha), httpOpts)
        .then(res => res.data.articles)
        .then(content => {
          Cache.set('index', content)
          return content
        })
    }
  }
}