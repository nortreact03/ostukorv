function Ostukorv({ostud, toggleKasKorvis}) {
    return (
        <div className="ostud">
            {
                ostud.map((ost, index)=>{
                    return (
                        <div className="row" key={index}>
                            <input 
                                className="col-1"
                                type="checkbox"
                                defaultChecked={ost.korvis}
                                onChange={()=>toggleKasKorvis(index)}
                            />
                            <div className="col-5">{ost.nimetus}</div>
                            <div className="col-3">{ost.kogus}</div>
                            <div className="col-2">{ost.yhik}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Ostukorv;