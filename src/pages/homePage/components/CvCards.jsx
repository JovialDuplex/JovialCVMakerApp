
const CVCards=({image, name, badge_name, color})=>{
    return (
        <div className={`cv-card h-100 bg-${color}`}>
            {/* <img src={image} alt={name} className={"cv-card-image"}/> */}
        </div>
    )
};

export default CVCards;