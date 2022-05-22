import axios from "axios"
import Swal from "sweetalert2"

// axios.get('http://localhost:5000/api/v1/user').then(e=>console.log(e.data))
// axios.post('http://localhost:5000/api/v1/registrasi').then(e=>console.log(e.data))


async function kirim (body){
    if(Object.values(body).includes("")){
        Swal.fire('Isi semua dulu ya')
        return;
    }

    // untuk atur lokasi button
    window.location.href="/"

    // let data= await axios.post('http://localhost:5000/api/v1/registrasi', body)
    // console.log(data.data)
}



function HalamanRegis (){
    console.log("halaman regis")

    let body={
        "email": "",
        "username": "",
        "password": ""
    }

    return (
        <div className="container">
            <div className="row">

                <div className="col-4 card p-4 m-2">
                    <div>
                        <h4 className="">Halaman Regis</h4>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={(e)=>body.email= e.target.value}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="username" className="form-control" id="username"  onChange={(e)=>body.username= e.target.value} ></input>
                    </div> 
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e)=>body.password= e.target.value}></input>
                    </div>

                <button type="submit" className="btn btn-primary" onClick={()=> {kirim(body)}}>Daftar</button>
                </div>
            </div>
        </div>
    )
}

export { HalamanRegis}
