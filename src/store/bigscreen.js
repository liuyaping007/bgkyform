export const bgconfig = {
  state: {
    left3: 276,
    left1: 200,
    left2: 48,
    x: 60,
    y: 60,
    width: 1920,
    height: 1080,
    layoutrigth: 332,
    layouttop: 42,
    isleft1: false,
    isleft2: true,
    isleft3: true,
    isrigth: false,
    left: 384,
    rigth: 0,
    top: 100,
    activeid: '',
    setleft (state) {
      state.left = state.x
      if (state.isleft1) {
        state.left = state.left + state.left1
      }
      if (state.isleft2) {
        state.left = state.left + state.left2
      }
      if (state.isleft3) {
        state.left = state.left + state.left3
      }
    },
  },
  mutations: {
    //设置层是否显示
    setIsleft1: (state) => {
      state.isleft1 = !state.isleft1
      state.setleft(state)
    },
    ///设置左侧导航是否显示
    setIsleft2: (state) => {
      state.isleft2 = !state.isleft2
      state.setleft(state)
    },
    ////设置控件栏是否显示
    setIsleft3: (state, isbool) => {
      state.isleft3 = !state.isleft3
      if (isbool !== undefined) {
        state.isleft3 = isbool
      }
      state.setleft(state)
    },
    setActiveId (state, activeid) {
      state.activeid = activeid
    },
    setIsRigth (state, isbool) {
      state.isrigth = !state.isrigth
      if (isbool !== undefined) {
        state.isleft3 = isbool
      }
    },
  },
  actions: {
    setIsleft1: ({ commit }) => {
      commit('setIsleft1')
    },
    // 中英文
    setIsleft2 ({ commit }) {
      commit('setIsleft2')
    },
    setIsleft3 ({ commit }, isbool) {
      commit('setIsleft3', isbool)
    },
    setActiveId ({ commit }, activeid) {
      commit('setActiveId', activeid)
    },
    setIsRigth ({ commit }, isbool) {
      commit('setIsRigth', isbool)
    },
  },
}
