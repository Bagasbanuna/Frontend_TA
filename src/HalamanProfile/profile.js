import axios from "axios";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
import { Tombol } from "../lib/button";
import { Formulir, MyForm } from "../lib/form";
import { MyRouter } from "../my_router";

function TampilanProfile() {
  let hasil = {};
  MyRouter.Init(useNavigate);
  let nav = useNavigate();

  delete  
  console.log(window.localStorage.getItem("user"));

  return (
    <div className="container d-flex justify-content-end">
      <div className="col-sm-12 col-md-6 col-lg-4 card mt-4 p-2">
        <h3>Profile</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            nav("/");
            console.log("logout");
            localStorage.removeItem("user");
            console.log(localStorage.getItem("user"));
          }}
        >
          LOGOUT
        </button>
        <MyForm
          
          ketikaBerubah={(body) => {
            hasil = body;
          }}
          values ={JSON.parse(window.localStorage.getItem('user'))}
        />

        <div className="row m-auto">
          <div
            className="col"
            onClick={() => {
              MyRouter.UpdateProfile().Go();
            }}
          >
            <Tombol title={"Edit"} warna={"success"} />
          </div>
          <div className="col">
            <Tombol title={"Simpan"} warna={"primary"} />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Formulir title={"email"} placeholder={"masukkan email"} onChange={(e) => console.log(e.target.value)}/>
<Formulir title={"password"} placeholder={"masukkan password"} onChange={(e) => console.log(e.target.value)}/> */
}
{
  /* <button onClick={() => console.log(hasil)}>LIHAT</button> */
}

export { TampilanProfile };
