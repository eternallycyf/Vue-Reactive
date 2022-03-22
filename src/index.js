import { reactive } from './vue3/reactivity/index.js'

const state = reactive({
  name: 'zs',
  age: 12,
  info: {
    title: 'test',
    students: [
      {
        id: 1,
        name: 'zs'
      },
      {
        id: 2,
        name: 'l4'
      }
    ]
  },
  hobby: ['computed', 'movie']
})

state.age = 120
// 获取不到深层的结构 需要递归处理
state.info.title
state.info.students.push({ id: 3, name: 'aaa' })
state.aaaadsas = 10

console.log(state);