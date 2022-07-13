import { toyService } from "../../services/toy-service"

export default {
  state: {
    toys: null,
    filterBy: null,
  },
  getters: {
    toysToDispaly({ toys, filterBy }) {
      // if (!filterBy) return toys
      return toys
      const { txt, status, byLabel, bySort } = filterBy

      // txt
      const regex = new RegExp(txt, "i")
      let filteredToys = toys.filter((toy) => regex.test(toy.name))

      if (status)
        filteredToys = filteredToys.filter((toy) =>
          status === "In stock" ? toy.inStock : !toy.inStock
        )

      // byLabel
      if (byLabel && byLabel.length) {
        console.log(byLabel)
        filteredToys = filteredToys.filter((toy) =>
          byLabel.some((label) => toy.labels.includes(label))
        )
      }

      // bySort
      if (bySort) {
        const sort = bySort.split(" - ")
        // name
        const dir = sort[1] === "Increasing" ? 1 : -1
        switch (sort[0]) {
          case "Name":
            filteredToys = filteredToys.sort(
              (t1, t2) => t1.name.localeCompare(t2.name) * dir
            )
            break
          case "Price":
            filteredToys = filteredToys.sort(
              (t1, t2) => (t1.price - t2.price) * dir
            )
            break
          case "Created":
            filteredToys = filteredToys.sort(
              (t1, t2) => (t1.createdAt - t2.createdAt) * dir
            )
            break
        }
      }
      return filteredToys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
    removeToy(state, { _id }) {
      const idx = state.toys.findIndex((toy) => toy._id === _id)
      state.toys.splice(idx, 1)
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex((t) => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService.query().then((toys) => {
        commit({ type: "setToys", toys })
      })
    },
    removeToy({ commit }, { _id }) {
      toyService.remove(_id).then(() => {
        commit({ type: "removeToy", _id })
      })
    },
    setFilterBy({ commit }, { filterBy }) {
      toyService.query(filterBy).then((toys) => {
        commit({ type: "setToys", toys })
        // commit({ type: "setFilterBy", filterBy })
      })
    },
    saveToy({ commit }, { toy }) {
      let actionType = toy._id ? "updateToy" : "addToy"
      return toyService
        .save(toy)
        .then((savedToy) => {
          commit({ type: actionType, toy: savedToy })
          return savedToy
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
