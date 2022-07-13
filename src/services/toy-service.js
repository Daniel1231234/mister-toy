// import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"
import axios from "axios"

const KEY = "toysDB"
// const API = "//localhost:3030/api/toy/"

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

_createToys()

function _getUrl(id = "") {
  const BASE_URL =
    process.env.NODE_ENV !== "development"
      ? "/api/toy"
      : "//localhost:3030/api/toy"

  return `${BASE_URL}/${id}`
}

function query(filterBy) {
  // return storageService.query(KEY)
  return axios.get(_getUrl(), { params: filterBy }).then((res) => {
    console.log(res)
    return res.data
  })
}

function getById(id) {
  // return storageService.get(KEY, id)
  return axios.get(_getUrl(id)).then((res) => res.data)
}

function remove(id) {
  // return storageService.remove(KEY, id)
  return axios.delete(_getUrl(id)).then((res) => res.data)
}

function save(toy) {
  if (toy._id) {
    return axios.put(_getUrl(toy._id), toy).then((res) => res.data)
  } else {
    return axios.post(_getUrl(), toy).then((res) => res.data)
  }
  // const savedToy = toy._id
  //   ? storageService.put(KEY, toy)
  //   : storageService.post(KEY, toy)
  // return savedToy
}

function getEmptyToy() {
  return {
    name: "",
    price: "",
    labels: ["Battery powered", "Outdoor"],
    createdAt: Date.now(),
    inStock: true,
    reviews: ["demo review"],
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        _id: utilService.makeId(),
        name: "Talking Doll",
        price: 123,
        labels: ["Doll", "Puzzle"],
        createdAt: Date.now(),
        inStock: true,
        reviews: ["Wow!"],
      },
      {
        _id: utilService.makeId(),
        name: "Puki doll",
        price: 1233,
        labels: ["Doll", "Battery Powered", "Baby", "Outdoor"],
        createdAt: Date.now(),
        inStock: false,
        reviews: ["OMG!"],
      },
      {
        _id: utilService.makeId(),
        name: "Putin doll",
        price: 1212,
        labels: ["Doll", "Box game", "Baby"],
        createdAt: Date.now(),
        inStock: true,
        reviews: ["Dvayomat!"],
      },
      {
        _id: utilService.makeId(),
        name: "Noa kirel",
        price: 1212,
        labels: ["Doll", "Art", "Outdoor", "Puzzle"],
        createdAt: Date.now(),
        inStock: false,
        reviews: ["Amazing!"],
      },
      {
        _id: utilService.makeId(),
        name: "shuki doll",
        price: 1,
        labels: ["Doll", "Art", "On wheels"],
        createdAt: Date.now(),
        inStock: true,
        reviews: ["Amazing!", "Aputa!"],
      },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  console.log(toys)
  return toys
}
