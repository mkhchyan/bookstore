import axios from "axios";
import { put, take, takeEvery } from 'redux-saga/effects'
import { setUser, setLoginError } from './Auth/action'
import { setBook } from "./Book/action";

const Axios = axios.create({
	withCredentials: true
})

function* AddUser({ data, navigate }) {
	let result = yield Axios.post("http://localhost:5000/addUser", { data })
	if ("user" in result.data) {
		yield put(setUser(result.data.user))
		navigate("/profile")
	}
	else if ("error" in result.data) {
		yield put(setLoginError(result.data.error))
	}
	else {
		// throw new Error('Current user not found');
		navigate("/")
	}
	// console.log(data);
}

function* LoginUser({ data, navigate }) {
	let result = yield Axios.post("http://localhost:5000/login", data)
	if ("user" in result.data) {
		yield put(setUser(result.data.user))
		if (result.data.user.type == 0) {
			navigate("/profile")
		} else if (result.data.user.type == 1) {
			navigate("/admin")
		}
	}
	else if ("error" in result.data) {
		yield put(setLoginError(result.data.error))
	}
	else {
		// throw new Error('Current user not found');
		navigate("/")
	}
}

function* GetUser({ navigate, location }) {
	const result = yield Axios.post("http://localhost:5000/getUser")

	if ("user" in result.data) {
		yield put(setUser(result.data.user))

		// console.log("HERE WE ARE", result.data.user, location.pathname)
		navigate(location.pathname)
	} else {
		navigate("/")
	}

	console.log(result.data)
}

function* checkIsAdmin({ navigate, location }) {
	const result = yield Axios.post("http://localhost:5000/checkIsAdmin")

	if ("user" in result.data) {
		yield put(setUser(result.data.user))
		navigate(location.pathname)

	} else {
		navigate("/")
	}
}

function* uploadPicture({ file, navigate }) {
	// console.log("OKAYY!!!!!");
	let form = new FormData()
	form.append("nkar", file)

	let result = yield Axios.post("http://localhost:5000/addPhoto", form)
	//formdata-n datark forma a stexcum
	if ("success" in result.data) {
		navigate("/profile")
	}
}

function* AddBook({ data, navigate, books }) {
	let file = document.getElementById("cover").files[0]
	const payload = data
	// console.log("HASA", payload)
	let form = new FormData()
	form.append("cover", file)
	form.append("title", payload.title)
	form.append("pages", payload.pages)
	form.append("description", payload.description)
	form.append("count", payload.count)
	form.append("genre", payload.genre)
	form.append("author", payload.author)

	// console.log(payload);

	let result = yield Axios.post("http://localhost:5000/addbook", form)
	if ("book" in result.data) {
		yield put(setBook(result.data.book))
	}
	// console.log('Book added');
}

function* getBooks(file, navigate, data) {
	// const payload = data
	// let form = new FormData()
	// form.append("cover", file)
	// const result = yield Axios.post("http://localhost:5000/getbook",data)
    // yield put(setBook(result.data.book))
	let books = yield Axios.post("http://localhost:5000/getbook")
	if ('book' in books.data) {
		yield put(setBook(books.data.book))
	}
}

export function* rootSaga() {
	yield takeEvery("ADD_USER", AddUser)
	yield takeEvery("LOGIN_USER", LoginUser)
	yield takeEvery("GET_USER", GetUser)
	yield takeEvery("CHECK_IS_ADMIN", checkIsAdmin)
	yield takeEvery("UPLOAD_PICTURE", uploadPicture)
	yield takeEvery("ADD_BOOK", AddBook)
	yield takeEvery("GET_BOOK", getBooks)
}