const StatSection = ()=>{
    const Stats = [
        {num:"2M+",label:"CVs créés"},
        {num:"94%",label:"Taux d'entretien"},
        {num:"150+",label:"Templates"},
        {num:"4.9★",label:"Note moyenne"},
    ]
    return (
        <section className="stat-section d-flex flex-column align-items-center" style={{padding: "40px 0px"}}>
          <span className={"align-items-start fs-3"}>
            Nos Dernieres Statistiques 
          </span>
          <div className="stats-strip w-75">
            {Stats.map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
    )
};

export default StatSection;