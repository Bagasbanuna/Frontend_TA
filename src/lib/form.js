function Formulir({ title, placeholder, onChange }) {
    return (

        <div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <label>{title}</label>
                <input onChange={onChange} className="form-control" placeholder={placeholder} />
            </div>
        </div>
    )
}

function MyForm({ items, ketikaBerubah }) {
    let body = {};
    return (
        <div className="container">
            {items.map( itm => {
                return <div key={itm}>
                    <div className=" ">
                        <label>{itm}</label>
                        {/* elm = html input */}
                        <input className="form-control" placeholder={"Masukkan "+itm}
                        onChange={(elm) => {body[itm] = elm.target.value
                            ketikaBerubah(body)
                        }}/>
                    </div>
                </div>
            })}
            <br/>
        </div>
    )
}

export { Formulir, MyForm }