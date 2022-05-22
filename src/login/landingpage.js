import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

// axios.get('http://localhost:5000/api/v1/user').then(e => console.log(e.data))

async function masuk(body, nav) {
    
    if (Object.values(body).includes("")) {
        Swal.fire({
            title: 'Warning!',
            text: 'isi semua dengan lengkap',
            timer: 2000
        })
        return;
    }

    let res = await axios.post('http://localhost:5000/api/v1/login', body);

    if (res.status == 200) {
        Swal.fire({
            title: 'Success!',
            text: res.data.message,
            timer: 2000
        })

        setTimeout(() => {
            localStorage.setItem('user', JSON.stringify(res.data.data))
            nav("/tampilan-profile")
        }, 1000);

    } else if (res.status == 204) {

        Swal.fire({
            title: 'Warning!',
            text: "username atau password salah",
            timer: 2000
        })
    }


}

const body = {
    username: "",
    password: ""
};

function LandingPage() {
  
    return (
        <div className="container">
            <div className="row">
            <FormLogin />

            </div>
        </div>
    )
}

function FormLogin() {
    let nav = useNavigate()
    return localStorage.getItem('user') != null? (<div>
        <button className="btn btn-danger" onClick={() => {
            console.log("logout")
            localStorage.removeItem('user');
            console.log(localStorage.getItem('user'))
            nav('/')
        }}>LOGOUT</button>
    </div>): (
        <div>
            <div className="col-sm-12 col-md-6 col-lg-4 card p-4 m-2">
                <div>
                    <h4 className="">FORM LOGIN</h4>
                </div>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="username" className="form-control" id="username" onChange={(e) => { body['username'] = e.target.value }} ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => { body['password'] = e.target.value }}></input>
                </div>
                <Link to={"/halamanregis"} > Daftar akun baru </Link>


                <button className="btn btn-primary" onClick={() => { masuk(body, nav) }}>LOGIN</button>
            </div>
        </div>
    )
}

export { LandingPage }